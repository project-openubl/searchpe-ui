import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { PageSection } from "@patternfly/react-core";

export interface VersionListProps extends RouteComponentProps {}

export const VersionList: React.FC<VersionListProps> = () => {
  return (
    <>
      <PageSection>version list</PageSection>
    </>
  );
};
