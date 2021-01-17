import React, { useCallback, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";

import {
  Bullseye,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateVariant,
  PageSection,
  Title,
} from "@patternfly/react-core";
import { AddCircleOIcon } from "@patternfly/react-icons";

import {
  AppPlaceholder,
  AppTableWithControls,
  ConditionalRender,
  SimplePageSection,
} from "shared/components";
import {
  IActions,
  ICell,
  IExtraColumnData,
  IExtraData,
  IRowData,
  sortable,
  SortByDirection,
} from "@patternfly/react-table";

import { useDispatch } from "react-redux";
import { alertActions } from "store/alert";

import { Contribuyente, PageQuery, SortByQuery } from "api/models";
import { useFetchContribuyentes, useTableControls } from "shared/hooks";

import { createVersion } from "api/rest";

import { Paths } from "Paths";
import { getAxiosErrorMessage } from "utils/modelUtils";

import { Welcome } from "./components/welcome";

const columns: ICell[] = [
  { title: "RUC", transforms: [sortable] },
  { title: "Razón social" },
  { title: "Estado contribuyente" },
];

const columnIndexToField = (
  _: React.MouseEvent,
  index: number,
  direction: SortByDirection,
  extraData: IExtraColumnData
) => {
  switch (index) {
    case 0:
      return "ruc";
    case 1:
      return "razonSocial";
    default:
      throw new Error("Invalid column index=" + index);
  }
};

const CONTRIBUYENTE_FIELD = "contribuyente";

const getRow = (rowData: IRowData): Contribuyente => {
  return rowData[CONTRIBUYENTE_FIELD];
};

const itemsToRow = (items: Contribuyente[]) => {
  return items.map((item) => ({
    [CONTRIBUYENTE_FIELD]: item,
    cells: [
      {
        title: item.ruc,
      },
      {
        title: item.razonSocial,
      },
      {
        title: item.estadoContribuyente,
      },
    ],
  }));
};

export interface ContribuyenteListProps extends RouteComponentProps {}

export const ContribuyenteList: React.FC<ContribuyenteListProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    contribuyentes,
    isFetching,
    fetchError,
    fetchCount,
    fetchContribuyentes,
  } = useFetchContribuyentes(true);

  const {
    filterText,
    paginationQuery,
    sortByQuery,
    sortBy,
    handleFilterTextChange,
    handlePaginationChange,
    handleSortChange,
  } = useTableControls({ columnToField: columnIndexToField });

  const reloadTable = useCallback(
    (filterText: string, pagination: PageQuery, sortBy?: SortByQuery) => {
      fetchContribuyentes(pagination, sortBy, filterText);
    },
    [fetchContribuyentes]
  );

  useEffect(() => {
    reloadTable(filterText, paginationQuery, sortByQuery);
  }, [filterText, paginationQuery, sortByQuery, reloadTable]);

  const actions: IActions = [
    {
      title: "View details",
      onClick: (
        event: React.MouseEvent,
        rowIndex: number,
        rowData: IRowData,
        extraData: IExtraData
      ) => {
        const row: Contribuyente = getRow(rowData);
        console.log(row);
      },
    },
  ];

  const handleOnNewVersion = () => {
    createVersion()
      .then(() => {
        history.push(Paths.versionList);
      })
      .catch((error) => {
        dispatch(
          alertActions.addAlert("danger", "Error", getAxiosErrorMessage(error))
        );
      });
  };

  if (
    fetchCount === 1 &&
    (contribuyentes?.data === undefined || contribuyentes?.data.length === 0)
  ) {
    return (
      <Bullseye>
        <Welcome onPrimaryAction={handleOnNewVersion} />
      </Bullseye>
    );
  }

  return (
    <>
      <ConditionalRender
        when={isFetching && !(contribuyentes || fetchError)}
        then={<AppPlaceholder />}
      >
        <SimplePageSection
          title="Contribuyentes"
          description="Contribuyentes are the entities extracted from SUNAT."
        />
        <PageSection>
          <AppTableWithControls
            count={contribuyentes ? contribuyentes.meta.count : 0}
            items={contribuyentes ? contribuyentes.data : []}
            itemsToRow={itemsToRow}
            pagination={paginationQuery}
            sortBy={sortBy}
            handleFilterTextChange={handleFilterTextChange}
            handlePaginationChange={handlePaginationChange}
            handleSortChange={handleSortChange}
            columns={columns}
            actions={actions}
            isLoading={isFetching}
            loadingVariant="skeleton"
            fetchError={fetchError}
            filtersApplied={filterText.trim().length > 0}
            noDataState={
              <EmptyState variant={EmptyStateVariant.small}>
                <EmptyStateIcon icon={AddCircleOIcon} />
                <Title headingLevel="h2" size="lg">
                  No entities available
                </Title>
                <EmptyStateBody>
                  Start importing entities going to the{" "}
                  <strong>Versions</strong> menu.
                </EmptyStateBody>
              </EmptyState>
            }
          />
        </PageSection>
      </ConditionalRender>
    </>
  );
};
