declare module 'egg' {
  interface EggAppConfig {
    passportSteam?: {
      /**
       * Secret
       */
      key: string;
      realm: string;
      returnURL: string;
    };
  }
}
