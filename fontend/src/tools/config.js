
let apiEndpoint = process.env.REACT_APP_API_ENDPOINT || '';

if (/\/$/.test(apiEndpoint)) {
  // Make sure the string doesn't end with slash
  apiEndpoint = apiEndpoint.substring(0, apiEndpoint.length - 1);
}

const config = {
  appName: "Shotover Assessment",
  env: {
    apiEndpoint,
  }
}

export default config;
