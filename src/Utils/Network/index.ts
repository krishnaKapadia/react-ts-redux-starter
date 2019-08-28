import { isNil } from 'lodash';

type ErrorResponse = {
  httpCode: number;
  name: string;
  message: string;
};

export const isError = (payload: any): boolean => {
  return !isNil(payload.data.httpCode) && payload.data.httpCode !== 500;
};