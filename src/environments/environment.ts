// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  poxedexBaseUrl: 'https://pokeapi.co/api/v2',
  pokeStaticsUrl: 'wss://pokemon-statistics-be19c4542f3c.herokuapp.com/',
  firebase:{
    apiKey: "AIzaSyCWfGm9DctL8O7mENnUTzDbeNOMrs2WPC8",
    authDomain: "pokemon-pokedex-2c475.firebaseapp.com",
    projectId: "pokemon-pokedex-2c475",
    storageBucket: "pokemon-pokedex-2c475.appspot.com",
    messagingSenderId: "505420962464",
    appId: "1:505420962464:web:75de5ac7d12fd5558dc7c5",
    measurementId: "G-TLYZPY7JM2"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
