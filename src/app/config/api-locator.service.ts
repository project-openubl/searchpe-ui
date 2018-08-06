import { Injectable } from '@angular/core';
import { SearchpeUIConfig } from './searchpe-ui-config';

const DEFAULT_API_ENV_VAR_NAMES = new Map<string, string>(
  [
    ['searchpe', 'SEARCHPE_API_URL']
  ]
);

const DEFAULT_API_PREFIXES = new Map<string, string>([
  ['SEARCHPE', 'api']
]);

const DEFAULT_API_PATHS = new Map<string, string>([
  ['searchpe', 'api/'],
]);

export class BaseApiLocatorService {

  private envVars = new Map<string, string>();

  constructor(private config: SearchpeUIConfig, private apiPrefixes: Map<String, String>, private apiPaths: Map<String, String>) {
  }

  get searchpeApiUrl(): string {
    return this.config.searchpeApiUrl || this.buildApiUrl('searchpe');
  }

  protected loadEnvVar(key: string): void {
    // this.envVars.set(key, process.env[DEFAULT_API_ENV_VAR_NAMES.get(key)]);
  }

  protected buildApiUrl(key: string): string {
    // Return any environment specified URLs for this API
    if (this.envVars.get(key)) {
      return this.envVars.get(key);
    }
    // Simple check to trim www
    let domainname = window.location.hostname;
    if (domainname.startsWith('www')) {
      domainname = window.location.hostname.slice(4);
    }
    let url = domainname;
    if (window.location.port) {
      url += ':' + window.location.port;
    }
    url += '/';
    if (this.apiPrefixes.has(key)) {
      url = this.apiPrefixes.get(key) + '.' + url;
    }
    if (this.apiPaths.has(key)) {
      url += this.apiPaths.get(key);
    }
    url = window.location.protocol + '//' + url;
    return url;
  }

}

@Injectable()
export class ApiLocatorService extends BaseApiLocatorService {

  constructor(config: SearchpeUIConfig) {
    super(config, DEFAULT_API_PREFIXES, DEFAULT_API_PATHS);
    DEFAULT_API_ENV_VAR_NAMES.forEach((value, key) => {
      this.loadEnvVar(key);
    });
  }

}
