import {
    Stack,
    IconButton,
    getTheme,
    useTheme,
    Callout,
    DirectionalHint,
    Link,
    IStyleFunctionOrObject,
    ICalloutContentStyleProps,
    ICalloutContentStyles,
    Notification,
    HeadingText,
    HeadingType,
} from "@gui/fluent-ui-allure";
import * as React from "react";

export const Sample = () => {
    const theme = useTheme();
    const badgeStyle: React.CSSProperties = {
        display: "inline-block",
        backgroundColor: theme.palette.themePrimary,
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        position: "absolute",
        right: "-3px",
        top: "-3px",
    };
    const calloutStyles: IStyleFunctionOrObject<ICalloutContentStyleProps, ICalloutContentStyles> = {
        root: {},
        beakCurtain: {
            borderRadius: "6px",
        },
        calloutMain: {
            height: "400px",
            overflow: 'hidden',
            boxSizing: "border-box",
            padding: "32px 16px",
            selectors: {
                ".ms-Notification": {
                    borderBottom: "1px solid #E8E9EA",
                },
            },
        },
    };

    const [notificationVisible, setNotificationVisible] = React.useState(false);
    /*
        关于使用Tab导航的问题。
        1. 如果Popover里存在可以focus的元素，那么当失去焦点的时候，下一个焦点会回到页面的第一个焦点，而不是Popover按钮的下一个焦点，因为Popover相当于新出现了一层
        2. 如果Popover里不存在可以focus的元素，即，将Callout的tabindex设置为-1，则失去焦点后，会聚焦到下一个元素
        可以参考https://developer.microsoft.com/en-us/fluentui#/controls/web/callout Fluent UI里的示例
    */
    return (
        <Stack style={{ padding: "10px 25px" }}>
            <IconButton id="notification" bordered iconProps={{ iconName: "fas-bell" }} onClick={() => setNotificationVisible(true)}>
                <span style={badgeStyle}></span>
            </IconButton>

            {notificationVisible ? (
                <Callout
                    styles={calloutStyles}
                    target={`#notification`}
                    isBeakVisible={true}
                    gapSpace={5}
                    onDismiss={() => setNotificationVisible(false)}
                    directionalHint={DirectionalHint.bottomLeftEdge}
                    setInitialFocus
                >
                    <Stack horizontal horizontalAlign="space-between" style={{ height: "47px", borderBottom: '1px solid #E8E9EA' }}>
                        <Stack.Item>
                            <HeadingText type={HeadingType.MediumBold}>Notification</HeadingText>
                        </Stack.Item>
                        <Stack.Item>
                            <Link tabIndex={1} underline>Mark all read</Link>
                            <Link tabIndex={2} underline style={{ marginLeft: "16px" }}>See all</Link>
                        </Stack.Item>
                    </Stack>
                    <Stack style={{height: '100%', overflowY: 'auto'}}>
                        <Notification mode="light" coinType="refresh" mark headerText="Migration finished" headerComment="2d ago">
                            Great news! Klaman SLACK Test Project finished with no errors.
                        </Notification>
                        <Notification mode="light" coinType="refresh" mark headerText="Migration finished" headerComment="2d ago">
                            Great news! Klaman SLACK Test Project finished with no errors.
                        </Notification>
                        <Notification mode="light" coinType="refresh" mark headerText="Migration finished" headerComment="2d ago">
                            Great news! Klaman SLACK Test Project finished with no errors.
                        </Notification>
                    </Stack>
                </Callout>
            ) : null}
        </Stack>
    );
};