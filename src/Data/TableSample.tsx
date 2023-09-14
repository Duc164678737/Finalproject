import {
    Stack,
    IColumn,
    TooltipHost,
    HeadingText,
    HeadingType,
    Text,
    Link,
    IStackStyles,
    ShimmeredDetailsList,
    CheckboxVisibility,
    Toggle,
    SelectionMode,
    DetailsListLayoutMode,
} from "@gui/fluent-ui-allure";
import * as React from "react";

interface itemProps {
    name: string;
    description: string;
    status: string;
    link: string;
}

export const TableSample: React.FunctionComponent = () => {
    const [enableSelectText, setEnableSelectText] = React.useState(false);
    // const [enableTableWider, setEnableTableWider] = React.useState(true);

    const pageStyles: IStackStyles = {
        root: {
            ".ms-DetailsRow": {
                borderBottom: "1px solid #f3f2f1",
            },

            ".ms-detailsList-item-wrap": {
                padding: "10px 0",

                ".ms-detailsList-status-wrap": {
                    display: "flex",
                    alignItems: "center",

                    ".ms-detailsList-status-tip": {
                        width: "6px",
                        height: "6px",
                        marginRight: "4px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                    },
                },

                ".ms-detailsList-name-tooltip": {
                    display: "inline-block",
                },

                ".ms-detailsList-link-data": {
                    fontSize: "14px",
                },
            },
        },
    };

    //#region detailsList
    const columns: IColumn[] = [
        {
            key: "name",
            name: "Name",
        },
        {
            key: "description",
            name: "Description",
        },
        {
            key: "status",
            name: "Status",
        },
        {
            key: "link",
            name: "Link",
        },
    ].map((column) => {
        return {
            ...column,
            minWidth: 80,
            isResizable: true,
            maxWidth: 160,
        };
    });

    const items: itemProps[] = new Array(5).fill(0).map((_item, index) => {
        const _index: string = `${index + 1}`.padStart(3, "0");
        return {
            key: `${_index}`,
            name: `name${_index}`,
            description: `description${_index}`,
            status: `status${_index}`,
            link: `link${_index}`,
        };
    });

    const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (item, _index, column) => {
        switch (column.key) {
            case "name":
                return (
                    <div className="ms-detailsList-item-wrap">
                        <TooltipHost calloutProps={{ gapSpace: 0 }} closeDelay={10} content={item.name} hostClassName="ms-detailsList-name-tooltip">
                            <HeadingText type={HeadingType.DefaultBold} block>
                                {item.name}
                            </HeadingText>
                        </TooltipHost>
                    </div>
                );
            case "description":
                return (
                    <div className="ms-detailsList-item-wrap">
                        <Text block>{item.description}</Text>
                    </div>
                );
            case "status":
                return (
                    <div className="ms-detailsList-item-wrap">
                        <div className="ms-detailsList-status-wrap">
                            <div className="ms-detailsList-status-tip"></div>
                            <Text block>{item.status}</Text>
                        </div>
                    </div>
                );
            case "link":
                return (
                    <div className="ms-detailsList-item-wrap">
                        <Link
                            className="ms-detailsList-link-data"
                            underline
                            onMouseDown={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            Link to data
                        </Link>
                    </div>
                );
            default:
                return <div></div>;
        }
    };

    //#endregion
    return (
        <Stack styles={pageStyles}>
            <Toggle
                checked={enableSelectText}
                onChange={(_, checked) => {
                    // setEnableSelectText(checked);
                }}
                label="Enable text selection"
                inlineLabel
            />
            {/* <Toggle
                checked={enableTableWider}
                onChange={(_, checked) => {
                    setEnableTableWider(checked);
                }}
                label="Make table wider when resizing columns"
                inlineLabel
            /> */}
            <ShimmeredDetailsList
                compact
                checkboxVisibility={CheckboxVisibility.hidden}
                key={"detailsList"}
                setKey={"detailsList"}
                columns={columns}
                // layoutMode={enableTableWider ? DetailsListLayoutMode.fixedColumns : DetailsListLayoutMode.justified}
                items={items}
                selectionMode={enableSelectText ? SelectionMode.none : SelectionMode.multiple} // 如果需要能够选择表格中的文字，将selectionMode设置为none或single均可
                // onRenderItemColumn={onRenderItemColumn}
            ></ShimmeredDetailsList>
        </Stack>
    );
};