/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-restricted-syntax */
import * as fs from 'fs';
import { ISwaggerJson } from '../json/index.d';
import { PluginInstance } from '../types/plugin';

class Plugin {
  private plugin: PluginInstance[] = [];

  public runPlugin(
    pluginName: 'swaggerJson',
    swaggerJson: string
  ): ISwaggerJson;
  public runPlugin(pluginName: string, ...params: any[]): any {
    let res;
    for (const p of this.plugin) {
      if (p[pluginName]) {
        res = p[pluginName](...params, res);
      }
    }
    return res;
  }

  public registerPlugin(pluginPath: string) {
    if (!fs.existsSync(pluginPath)) {
      console.warn(`not find plugin file by ${pluginPath}`);
      return;
    }
    let plugin = require(pluginPath);
    if (!Array.isArray(plugin)) {
      plugin = [plugin];
    }
    this.plugin = this.plugin.concat(plugin);
  }
}

export default new Plugin();
