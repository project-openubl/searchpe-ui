import React from "react";
import {
  AppPlaceholder,
  ConditionalRender,
  SimplePageSection,
} from "shared/components";
import {
  Card,
  CardBody,
  PageSection,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from "@patternfly/react-core";

import { SearchInput } from "shared/components";
import { useFetchContribuyente } from "shared/hooks";
import { ContribuyenteDetails } from "./components/contribuyente-details";

export const ConsultaRuc: React.FC = () => {
  const {
    contribuyente,
    isFetching,
    fetchError,
    fetchContribuyente,
  } = useFetchContribuyente();

  const handleOnSearch = (ruc: string) => {
    fetchContribuyente(ruc);
  };

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
              <ConditionalRender when={isFetching} then={<AppPlaceholder />}>
                <ConditionalRender when={!!fetchError} then={<p>Not found</p>}>
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
