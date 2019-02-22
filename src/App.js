import React from "react";
import { Root, Button, Text } from "native-base";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import Home from "./screens/home";
import Run from "./screens/run";
import RunSuccess from "./screens/success";
import RunFail from "./screens/success/fail";
import Garden from "./screens/garden";

const Drawer = createDrawerNavigator(
    {
        Garden: { screen: Garden },
        RunFail: { screen: RunFail },
        RunSuccess: { screen: RunSuccess },
        Home: { screen: Home },
        Run: { screen: Run },
    }
);

const AppNavigator = createAppContainer( Drawer );

export default () =>
    <Root>
        <AppNavigator />
    </Root>;