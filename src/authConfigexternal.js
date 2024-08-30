// src/authConfigexternal.js
export const msalConfig = {
  auth: {
    clientId: '8ceab750-8733-4aee-89fb-f42417707aa0', // Your Application (client) ID
    authority: 'https://login.microsoftonline.com/cddc1229-ac2a-4b97-b78a-0e5cacb5865c', // Your Directory (tenant) ID
    redirectUri: 'http://localhost:3000', // Your Redirect URI
  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

export const loginRequest = {
  scopes: ["User.Read"]
};
