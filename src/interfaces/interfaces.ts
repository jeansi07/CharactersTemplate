export interface ResponseBody<T> {
  message: string;
  status: 200;
  response: T;
}

export interface ResponsePaginatedData<T> {
  page: number;
  pageSize: number;
  totalPage: number;
  data: T[];
}
