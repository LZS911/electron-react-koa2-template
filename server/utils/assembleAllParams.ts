import { Context } from 'koa';

export default function assembleAllParams<
  T1 extends { [key in string]: any },
  T2 extends { [key in string]: any }
>(
  ctx: Context
): {
  body: T1;
  query: T2;
  path: string;
  header: any;
} {
  return {
    body: ctx.request.body,
    query: ctx.request.query as T2,
    path: ctx.params,
    header: ctx.request.header,
  };
}
