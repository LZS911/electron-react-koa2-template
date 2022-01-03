export default {
  ReturnMessage: {
    type: 'object',
    required: ['code', 'message'],
    properties: {
      code: {
        describe: '是否成功',
        type: 'integer',
      },
      message: {
        describe: '消息提示',
        type: 'string',
      },
    },
  },
};
