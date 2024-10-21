import React, { useRef, useState, FC, useLayoutEffect } from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom"; // Use 'react-router-dom' instead of 'react-router'
import type { BrowserHistory } from "history";

export interface BrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
}

const browserHistory = createBrowserHistory();

const BrowserRouter: FC<BrowserRouterProps> = ({ basename, children }) => {
  const historyRef = useRef<BrowserHistory>(browserHistory);

  const history = historyRef.current;
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};

export { browserHistory as history, BrowserRouter };
