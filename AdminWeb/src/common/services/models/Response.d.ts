declare namespace Response {
  type ResponseState = 0 | 1;

  export interface IDefaultResponse {
    state?: ResponseState;
    statusCode?: number;
    message?: string;
    data?: A;
    prameter?: A;
  }
}
