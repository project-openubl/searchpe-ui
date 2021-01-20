import { AxiosPromise } from "axios";
import { APIClient } from "axios-config";

import {
  Contribuyente,
  PageQuery,
  PageRepresentation,
  SortByQuery,
  Version,
} from "./models";

export const VERSIONS = "/versions";
export const CONTRIBUYENTES = "/contribuyentes";

export const getVersions = (): AxiosPromise<Version[]> => {
  return APIClient.get(VERSIONS);
};

export const deleteVersion = (versionId: number): AxiosPromise => {
  return APIClient.delete(`${VERSIONS}/${versionId}`);
};

export const createVersion = (): AxiosPromise<Version> => {
  return APIClient.post(VERSIONS, undefined);
};

export const getContribuyentes = (
  pagination: PageQuery,
  sortBy?: SortByQuery,
  filterText?: string
): AxiosPromise<PageRepresentation<Contribuyente>> => {
  let sortByQuery: string | undefined = undefined;
  if (sortBy) {
    sortByQuery = `${sortBy.orderBy}:${sortBy.orderDirection}`;
  }

  const params = {
    filterText,
    offset: (pagination.page - 1) * pagination.perPage,
    limit: pagination.perPage,
    sort_by: sortByQuery,
  };

  const query: string[] = [];
  Object.keys(params).forEach((key) => {
    const value = (params as any)[key];
    if (value !== undefined) {
      query.push(`${key}=${value}`);
    }
  });

  return APIClient.get(`${CONTRIBUYENTES}?${query.join("&")}`);
};

export const getContribuyente = (ruc: string): AxiosPromise<Contribuyente> => {
  return APIClient.get(`${CONTRIBUYENTES}/${ruc}`);
};
