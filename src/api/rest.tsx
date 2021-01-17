import { AxiosPromise } from "axios";
import { APIClient } from "axios-config";

import { Version } from "./models";

export const VERSIONS = "/versions";

export const getVersions = (): AxiosPromise<Version[]> => {
  return APIClient.get(VERSIONS);
};
