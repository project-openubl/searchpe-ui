import { AxiosPromise } from "axios";
import { APIClient } from "axios-config";

import { Version } from "./models";

export const VERSIONS = "/versions";

export const getVersions = (): AxiosPromise<Version[]> => {
  return APIClient.get(VERSIONS);
};

export const deleteVersion = (versionId: number): AxiosPromise => {
  return APIClient.delete(`${VERSIONS}/${versionId}`);
};

export const createVersion = (): AxiosPromise<Version> => {
  return APIClient.post(VERSIONS, undefined);
};
