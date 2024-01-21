import Cookies from 'js-cookie';

import { GetStorage, SetStorage } from '../../data/protocols/cache';

interface IValue {
  expires?: number | undefined;
  path?: string | undefined;
  secure?: boolean | undefined;
  domain?: string | undefined;
  sameSite?: 'strict' | 'Lax' | 'none';
  data?: string | undefined;
}

export class CookieJsStorageAdapter implements SetStorage, GetStorage {
  /**
   * For create a default config use this const and use in calls to get`s and set`s
   * const api = Cookies.withAttributes({ path: '/', domain: '.Authentication.com' })
   * */

  set(key: string, value: IValue): void {
    if (value) {
      Cookies.set(key, JSON.stringify(value.data), {
        expires: value.expires,
        secure: value.secure,
        domain: value.domain,
        sameSite: value.sameSite,
      });
    } else {
      Cookies.remove(key);
    }
  }

  get(key: string): any {
    return JSON.parse(Cookies.get(key) || '');
  }
}
