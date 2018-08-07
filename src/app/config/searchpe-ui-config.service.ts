import { SearchpeUIConfig } from './searchpe-ui-config';

export function searchpeUIConfigFactory(): SearchpeUIConfig {
  const answer = window['SearchpeUIEnv'] || {};
  // lets filter out any values of 'undefined' in case an env var is missing in the template expression
  for (const key in answer) {
    if (answer[key]) {
      const value = answer[key];
      if (value === 'undefined') {
        answer[key] = '';
      }
    }
  }
  return answer as SearchpeUIConfig;
}

export let searchpeUIConfigProvider = {
  provide: SearchpeUIConfig,
  useFactory: searchpeUIConfigFactory,
  deps: []
};
