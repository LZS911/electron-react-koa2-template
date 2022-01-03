import axios from 'axios';
import fs = require('fs');
import path = require('path');
import Core = require('../src/core');

const CoreConstructor = Core.default;
const core = new CoreConstructor(
  path.resolve(__dirname, '../swagger.json'),
  path.resolve(__dirname, '../../app/renderer/api')
);

axios
  .get('http://127.0.0.1:3434/swagger.json', {})
  .then((res: any) => {
    fs.writeFile(
      path.resolve(__dirname, '../swagger.json'),
      JSON.stringify(res.data),
      (err) => {
        if (err) {
          console.error(err);
        } else {
          core.generateApi();
        }
      }
    );
  })
  .catch((err: any) => {
    console.error(err, '获取文件失败！');
  });
