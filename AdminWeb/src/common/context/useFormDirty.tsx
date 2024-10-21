import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { Blocker, Transition } from 'history';
import { history } from '@/common/router/BrowserRouter';
import { useModal } from '../utils/modal/useModal';

export interface IContext {
  listenData: (scope?: string, noCheck?: boolean) => void;
  bind: (scope?: string) => void;
  clearBind: (scope?: string, isAll?: boolean) => void;
  reset: (scope?: string) => Promise<boolean>;
  checkCanLeave: (scope?: string, message?: string, shouldOpenModal?: boolean) => Promise<boolean>;
}

export interface IProps {
  children?: React.ReactNode;
}
export interface IScope {
  scopeKey: string;
  isChange: boolean;
}
const DEFAULT_KEY = 'FORMDIRTY_DEFAULT';
export const FromDirtyContext = createContext<IContext>({
  bind: () => undefined,
  listenData: () => undefined,
  clearBind: () => undefined,
  reset: () => Promise.resolve(true),
  checkCanLeave: () => Promise.resolve(true)
});

export const FromDirtyProvider = (props: IProps) => {
  const { openLeave } = useModal();
  const unlock = useRef<VoidFunction | null>(null);
  const [scopeList, setScopeList] = useState<IScope[]>([]);
  const realList = useRef<IScope[]>([]);

  useEffect(() => {
    const changeList = scopeList.filter((item) => item.isChange);
    if (changeList.length) {
      window.addEventListener('beforeunload', beforeunload);
      unlock.current = history.block(handlePageChange);
    } else {
      window.removeEventListener('beforeunload', beforeunload);
      unlock.current?.();
      unlock.current = null;
    }
    return () => {
      window.removeEventListener('beforeunload', beforeunload);
      unlock.current?.();
      unlock.current = null;
    };
  }, [scopeList]);

  const beforeunload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    if (scopeList.filter((item) => item.isChange).length) {
      e.returnValue = '';
    }
  };

  const handlePageChange: Blocker = async (tx: Transition) => {
    const modelResult = await createModel();
    if (modelResult) {
      unlock.current?.();
      unlock.current = null;
      tx.retry();
    }
  };

  const updateScopeList = (list: IScope[]) => {
    setScopeList(list);
    realList.current = list.map((item) => ({ ...item }));
  };

  const createModel = async (messageConent?: string): Promise<boolean> => {
    return new Promise((res) => {
      const confirmConfig: A = {
        onOk: () => {
          clearBind();
          res(true);
        },
        onCancel: () => {
          res(false);
        }
      };
      if (messageConent) {
        confirmConfig.content = messageConent;
      }
      openLeave(confirmConfig);
    });
  };

  const setIsChange = (scope: string, isChange: boolean, noCheck = false) => {
    const listenItem = scopeList.find((item) => item.scopeKey === scope);
    if ((listenItem && listenItem.isChange !== isChange) || noCheck) {
      setScopeList((prev) => {
        const newList = prev.map((item) => {
          if (item.scopeKey === scope) return { ...item, isChange };
          return item;
        });
        realList.current = newList;
        return newList;
      });
    }
  };

  const listenData = (scope = DEFAULT_KEY, noCheck = false) => {
    setIsChange(scope, true, noCheck);
  };

  const bind = (scope = DEFAULT_KEY) => {
    setTimeout(() => {
      const listenItem = scopeList.find((item) => item.scopeKey === scope);
      if (!listenItem) {
        updateScopeList([...scopeList, { scopeKey: scope, isChange: false }]);
      }
    }, 0);
  };

  const reset = (scope = DEFAULT_KEY): Promise<boolean> => {
    return new Promise((res) => {
      setTimeout(() => {
        setIsChange(scope, false);
        window.removeEventListener('beforeunload', beforeunload);
        unlock.current?.();
        unlock.current = null;
        res(true);
      }, 0);
    });
  };

  const clearBind = (scope = DEFAULT_KEY, isAll?: boolean) => {
    // updateScopeList(scopeList.filter((item) => item.scopeKey !== scope));
    if (isAll) {
      setScopeList([]);
      realList.current = [];
    } else {
      setScopeList((prev) => {
        const newList = [...prev].filter((item) => item.scopeKey !== scope);
        realList.current = newList.map((item) => ({ ...item }));
        return newList;
      });
    }
  };

  const checkCanLeave = async (scope = DEFAULT_KEY, message?: string, shouldOpenModal = true) => {
    const currentScope = scope || DEFAULT_KEY;
    let result = true;
    const listenItem = realList.current.find((item) => item.scopeKey === currentScope);
    if (listenItem?.isChange && shouldOpenModal) {
      result = await createModel(message);
    }
    if (!shouldOpenModal) {
      result = !listenItem?.isChange;
    }
    return result;
  };

  return (
    <FromDirtyContext.Provider value={{ bind, clearBind, listenData, reset, checkCanLeave }}>
      {props.children}
    </FromDirtyContext.Provider>
  );
};

export const FromDirtyConsumer = FromDirtyContext.Consumer;

export const useFromDirty = () => useContext(FromDirtyContext);
