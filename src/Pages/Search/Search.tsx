import React from 'react';
import NoResultsTable from '../../PresentationalComponents/NoResultsTable/NoResultsTable';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Bullseye,
    InputGroup,
    TextInput,
    Button,
    ButtonVariant
} from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import ToolbarSearch from '../../PresentationalComponents/SearchToolbar/SearchToolbar';

const SearchPage: React.FC = () => {
    return (
        <React.Fragment>
            <section className="pf-c-page__main-section pf-m-light">
                <ToolbarSearch></ToolbarSearch>
            </section>
            <section className="pf-c-page__main-section">
                <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <Bullseye>
                            <NoResultsTable></NoResultsTable>
                        </Bullseye>
                    </CardBody>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </section>
        </React.Fragment>
    );
};

export default SearchPage;