import React, { useEffect } from "react";
import {
  AppPlaceholder,
  ConditionalRender,
  SimplePageSection,
} from "shared/components";
import {
  Bullseye,
  Card,
  CardBody,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateVariant,
  PageSection,
  Title,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from "@patternfly/react-core";
import { SearchIcon } from "@patternfly/react-icons";

import { SearchInput, Welcome } from "shared/components";
import { useFetchContribuyente, useFetchVersions } from "shared/hooks";

import { ContribuyenteDetails } from "./components/contribuyente-details";
import { useHistory } from "react-router-dom";
import { Paths } from "Paths";

export const ConsultaRuc: React.FC = () => {
  const history = useHistory();

  const {
    versions,
    isFetching: isFetchingVersions,
    fetchVersions,
  } = useFetchVersions();

  const {
    contribuyente,
    isFetching: isFetchingContribuyente,
    fetchError: contribuyenteFetchError,
    fetchContribuyente,
  } = useFetchContribuyente();

  useEffect(() => {
    fetchVersions({ watch: false, active: true });
  }, [fetchVersions]);

  const handleOnSearch = (ruc: string) => {
    fetchContribuyente(ruc);
  };

  const handleOnViewVersion = () => {
    history.push(Paths.versionList);
  };

  if (isFetchingVersions || (versions && versions.length === 0)) {
    return (
      <Bullseye>
        <ConditionalRender when={isFetchingVersions} then={<AppPlaceholder />}>
          <Welcome onPrimaryAction={handleOnViewVersion} />
        </ConditionalRender>
      </Bullseye>
    );
  }

  return (
    <>
      <SimplePageSection
        title="Search by RUC"
        description="Write the RUC you are searching for and then press enter."
      />
      <PageSection>
        <div
          style={{ backgroundColor: "var(--pf-global--BackgroundColor--100)" }}
        >
          <Toolbar>
            <ToolbarContent>
              <ToolbarGroup>
                <ToolbarItem>
                  <SearchInput onSearch={handleOnSearch} />
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarContent>
          </Toolbar>
          <Card>
            <CardBody>
              <ConditionalRender
                when={isFetchingContribuyente}
                then={<AppPlaceholder />}
              >
                <ConditionalRender
                  when={!!contribuyenteFetchError}
                  then={
                    <EmptyState variant={EmptyStateVariant.small}>
                      <EmptyStateIcon icon={SearchIcon} />
                      <Title headingLevel="h2" size="lg">
                        No results found
                      </Title>
                      <EmptyStateBody>
                        No results match the filter criteria.
                      </EmptyStateBody>
                    </EmptyState>
                  }
                >
                  {contribuyente && (
                    <ContribuyenteDetails value={contribuyente} />
                  )}
                </ConditionalRender>
              </ConditionalRender>
            </CardBody>
          </Card>
        </div>
      </PageSection>
    </>
  );
};
