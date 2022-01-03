/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
import { IMethodTemplateParams, IClassTemplateParams } from './index.d';
import CommonData from '../common/Data';

class Template {
  public interfaceTemplate(name: string, body: string, extendsName?: string) {
    return `
      export interface ${name} ${extendsName ? `extends ${extendsName} ` : ''}${
      body.trim().startsWith('{')
        ? body
        : `{
        ${body}
      }`
    }
    `;
  }

  public typeTemplate(name: string, body: string) {
    return `
      export type ${name} = ${body}
    `;
  }

  public methodTemplate({
    methodName,
    paramsInterface,
    url,
    requestMethod,
    paramsMap,
    returnInterface,
    consumes,
  }: IMethodTemplateParams) {
    const paramsHandle = '';
    let currentUrl = url;
    let formDataParams = '';
    let headerParams = '';
    let pathParamsDeleteCode = '';
    if (currentUrl.includes('{')) {
      const urlArray = currentUrl.split('/');
      for (let i = 0; i < urlArray.length; i++) {
        if (urlArray[i].startsWith('{')) {
          const paramsName = urlArray[i].slice(1, -1);
          urlArray[i] = `$${urlArray[i]}`;
          pathParamsDeleteCode += `
            const ${paramsName} = paramsData.${paramsName};
            delete paramsData.${paramsName};
          `;
        }
      }
      currentUrl = urlArray.join('/');
    }
    for (const [key, value] of paramsMap) {
      switch (value) {
        case 'header':
          headerParams += `
        ${key}: params.${key},
          `;
          break;
        case 'formData':
          const paramsKeyStr = `params${
            key.includes('-') ? `['${key}']` : `.${key}`
          }`;
          formDataParams += `
            if (${paramsKeyStr} != undefined) {
              paramsData.append('${key}', ${paramsKeyStr} as any);
            }
          `;
          break;
      }
    }

    if (formDataParams && consumes.includes('multipart/form-data')) {
      formDataParams = `
        const paramsData = new FormData();
        ${formDataParams}
      `;
      headerParams += `
        'Content-Type': 'multipart/form-data'
      `;
    } else {
      formDataParams = '';
    }

    if (headerParams) {
      headerParams = `
        const config = options || {};
        const headers = config.headers ? config.headers : {};
        config.headers = {
          ...headers,
          ${headerParams}
        }; 
      `;
    }

    return `
      public ${methodName}(${
      paramsInterface ? `params: ${paramsInterface}, ` : ''
    }options?: AxiosRequestConfig) {
        ${headerParams || ''}
        ${
          formDataParams ||
          (paramsInterface ? 'const paramsData = this.cloneDeep(params);' : '')
        }${!formDataParams && paramsInterface ? pathParamsDeleteCode : ''}
        return this.${requestMethod}${
      returnInterface ? `<${returnInterface}>` : ''
    }(${currentUrl.includes('$') ? '`' : "'"}${currentUrl}${
      currentUrl.includes('$') ? '`' : "'"
    }, ${paramsInterface ? 'paramsData' : 'undefined'}, ${
      headerParams ? 'config' : 'options'
    });
      }
    `;
  }

  public classTemplate({ className, body, importList }: IClassTemplateParams) {
    let importListStr = '';
    for (const [key, value] of importList) {
      importListStr += `
        import {
          ${value.map((value, i) => `${i > 0 ? ' ' : ''}${value},`).join('\n')}
        } from '${CommonData.transformImportKey(key)}'
      `;
    }

    return `
      /* tslint:disable no-identical-functions */
      /* tslint:disable no-useless-cast */
      /* tslint:disable no-unnecessary-type-assertion */
      /* tslint:disable no-big-function  */
      /* tslint:disable no-duplicate-string  */
      import ServiceBase from '../Service.base';
      import { AxiosRequestConfig } from 'axios';
      ${importListStr}

      class ${className}Service extends ServiceBase {
      ${body}
      }

      export default new ${className}Service();
    `;
  }

  public enumTemplate({ enumName, body }) {
    return `
      export enum ${enumName} {
        ${body}
      }
    `;
  }

  public serviceBaseTemplate() {
    return `
      import { $get, $post } from '../axios';
      import { AxiosRequestConfig } from 'axios';
      import _ from 'lodash';


      class ServiceBase {

        protected get<T>(url: string, data: any = {}, options?: AxiosRequestConfig) {
          return $get<T>(url, data, options);
        }

        protected post<T>(
          url: string,
          data: any = {},
          options?: AxiosRequestConfig
        ) {
          return $post<T>(url, data, options);
        }

        protected cloneDeep(data: any = {}) {
          return _.cloneDeep(data);
        }
      }

      export default ServiceBase;
    `;
  }
}

export default new Template();
