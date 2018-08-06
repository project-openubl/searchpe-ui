import { SEARCHPE_API_URL } from './../ngx/ngx-searchpe/api/searchpe-api';
import { ApiLocatorService } from './api-locator.service';

export function searchpeApiUrlFactory(api: ApiLocatorService) {
  return api.searchpeApiUrl;
}

export let searchpeApiUrlProvider = {
  provide: SEARCHPE_API_URL,
  useFactory: searchpeApiUrlFactory,
  deps: [ApiLocatorService]
};
