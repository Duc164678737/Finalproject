import * as React from "react";
import { Stack, ChoiceGroup, IChoiceGroupOption } from "@gui/fluent-ui-allure";

const option: IChoiceGroupOption[] = [
    { key: "A", text: "Option A" },
    { key: "B", text: "Option B" },
];

export const PeopleSample = () => {
    return (
        <Stack horizontal tokens={{ childrenGap: 16 }}>
            <ChoiceGroup options={option} required={true} defaultSelectedKey={"A"} horizontal />
        </Stack>
    );
};