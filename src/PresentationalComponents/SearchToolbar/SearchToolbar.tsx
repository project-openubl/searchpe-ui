import React from 'react';
import {
    Button,
    Dropdown,
    DropdownPosition,
    DropdownToggle,
    DropdownItem,
    KebabToggle,
    TextInput,
    Toolbar,
    ToolbarGroup,
    ToolbarItem,
    ToolbarSection,
    InputGroup,
    ButtonVariant
} from '@patternfly/react-core';
import { ListUlIcon, SortAlphaDownIcon, TableIcon, SearchIcon } from '@patternfly/react-icons';
import './SearchToolbar.css';

interface Feria {
    handleTextInputChange: Function
}

interface Carlos {
    searchValue: string
    isKebabOpen: boolean;
    isDropDownOpen: boolean;
}

class ToolbarSearch extends React.Component<{}, Carlos> {
    constructor(props) {
        super(props);
        this.state = {
            isDropDownOpen: false,
            isKebabOpen: false,
            searchValue: ''
        };

    }

    handleTextInputChange = value => {
        this.setState({ searchValue: value });
    };

    onDropDownToggle = isOpen => {
        this.setState({
            isDropDownOpen: isOpen
        });
    };

    onDropDownSelect = event => {
        this.setState({
            isDropDownOpen: !this.state.isDropDownOpen
        });
    };

    onKebabToggle = isOpen => {
        this.setState({
            isKebabOpen: isOpen
        });
    };

    onKebabSelect = event => {
        this.setState({
            isKebabOpen: !this.state.isKebabOpen
        });
    };

    buildSearchBox = () => {
        let value = this.state.searchValue;
        return (
            <InputGroup>
                <TextInput name="textInput11" id="textInput11" type="search" aria-label="search input example" />
                <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
                    <SearchIcon />
                </Button>
            </InputGroup>
        );
    };

    buildKebab = () => {
        const { isKebabOpen } = this.state;

        return (
            <Dropdown
                onSelect={this.onKebabSelect}
                position={DropdownPosition.right}
                toggle={<KebabToggle onToggle={this.onKebabToggle} />}
                isOpen={isKebabOpen}
                isPlain
                dropdownItems={[
                    <DropdownItem key="link">Link</DropdownItem>,
                    <DropdownItem component="a" key="action_button">
                        Action
                    </DropdownItem>,
                    <DropdownItem isDisabled key="disabled_link">
                        Disabled Link
                    </DropdownItem>,
                    <DropdownItem isDisabled component="a" key="disabled_button">
                        Disabled Action
                    </DropdownItem>
                ]}
            />
        );
    };

    render() {
        return (
            <Toolbar className="pf-l-toolbar pf-u-justify-content-space-between pf-u-mx-xl pf-u-my-md">
                <ToolbarGroup>
                    <ToolbarItem className="pf-u-mr-xl">{this.buildSearchBox()}</ToolbarItem>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarItem>
                        <Button variant="plain" aria-label="Insert Table">
                            <TableIcon />
                        </Button>
                    </ToolbarItem>
                    <ToolbarItem className="pf-u-mx-md">
                        <Button variant="plain" aria-label="Insert Bulleted List">
                            <ListUlIcon />
                        </Button>
                    </ToolbarItem>
                    <ToolbarItem>{this.buildKebab()}</ToolbarItem>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default ToolbarSearch;
