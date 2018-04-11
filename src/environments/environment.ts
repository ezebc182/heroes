// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyDnRqWO-cauvnPPmodQP7SB5tT4skAXY7A',
    authDomain: 'heroesapp-6f59a.firebaseapp.com',
    databaseURL: 'https://heroesapp-6f59a.firebaseio.com',
    projectId: 'heroesapp-6f59a',
    storageBucket: 'heroesapp-6f59a.appspot.com',
    messagingSenderId: '219737433501'
  }
};
