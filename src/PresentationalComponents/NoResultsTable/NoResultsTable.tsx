import React from 'react';
import {
    Title,
    EmptyState,
    EmptyStateVariant,
    EmptyStateIcon,
    EmptyStateBody,
    TitleLevel
} from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';

class NoResultsTable extends React.Component {

    render() {
        return (
            <EmptyState variant={EmptyStateVariant.small}>
                <EmptyStateIcon icon={CubesIcon} />
                <Title headingLevel={TitleLevel.h5} size="lg">
                    No search data
                </Title>
                <EmptyStateBody>
                    Could not find data as a result of you search.
                </EmptyStateBody>
            </EmptyState>
        );
    }

}

export default NoResultsTable;