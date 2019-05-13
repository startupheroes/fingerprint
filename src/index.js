import Fingerprint2 from "fingerprintjs2";
import Cookies from "./cookies";

export default class Fingerprint {
  options = {};
  uniqueId = undefined;

  constructor(options) {
    this.options = {
      COOKIE_NAME: "__fingerprint",
      COOKIE_EXPIRE_TIME: 12,
      // Fingerprint options check https://github.com/Valve/fingerprintjs2
      fpParams: {
        fonts: { extendedJsFonts: false }
      },
      ...options
    };
  }

  checkIfExist() {
    const idFromCookie = Cookies.get(this.options.COOKIE_NAME);
    return idFromCookie || false;
  }

  fingerprintInit(params, callback) {
    Fingerprint2.get(params, components => {
      const values = components.map(function(component) {
        return component.value;
      });

      const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);

      Cookies.set(
        this.options.COOKIE_NAME,
        fingerprint,
        this.options.COOKIE_EXPIRE_TIME
      );
      callback && callback(fingerprint);
    });
  }

  generate(callback) {
    const id = this.checkIfExist();
    if (id) {
      this.uniqueId = id;
      callback && callback(fingerprint);
      return false;
    }

    if (window.requestIdleCallback) {
      requestIdleCallback(() => {
        this.fingerprintInit(this.options.fpParams, callback);
      });
    } else {
      setTimeout(() => {
        this.fingerprintInit(this.options.fpParams, callback);
      }, 10);
    }
  }
}
