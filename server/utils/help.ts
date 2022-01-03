export default {
  fail(msg = '操作失败', code = 0) {
    return {
      msg,
      code,
    };
  },
  success(msg = 'success', code = 1) {
    return {
      msg,
      code,
    };
  },
  json(data: unknown, msg = 'success', code = 1) {
    return {
      code,
      msg,
      data,
    };
  },
};
