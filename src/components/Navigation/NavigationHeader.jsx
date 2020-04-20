// @flow

import * as React from "react";
import classnames from "classnames";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavigationItem from "./NavigationItem";

import type { NavigationItemDataType } from "./Types/NavigationItemDataType";

type Props = {
  title?: string,
  children?: React.Node,
  menuItems?: NavigationItemDataType[],
};

export const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: theme.typography.fontFamily,
  },
  title: {
    fontSize: "1.4em",
  },
  menuItems: {
    display: "flex",
    padding: `0px ${theme.spacing(2)}px`,
  },
  menuItem: ({ isMobile }) =>
    isMobile
      ? {
          color: theme.palette.common.black,
          minHeight: theme.spacing(5),
          width: "100%",
        }
      : {
          color: theme.palette.common.white,
          minHeight: theme.spacing(8),
        },
  menuButton: {
    margin: 0,
    padding: `0 ${theme.spacing(1)}px 0 0`,
    minWidth: 0,
    color: theme.palette.common.white,
  },
  menuDrawer: {
    color: theme.palette.common.black,
    minWidth: "200px",
  },
}));

export const NavigationHeader = ({
  title = "",
  children,
  menuItems,
}: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ isMobile });
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const toggleMenuButtonClick = (shouldOpen: boolean) => {
    setShowMobileMenu(shouldOpen);
  };
  const navigationItems =
    menuItems &&
    menuItems.map((item, idx) => {
      console.log(item);
      return (
        <NavigationItem
          key={idx}
          to={item.to}
          name={item.name}
          submenu={item.submenu}
          className={classes.menuItem}
        />
      );
    });

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        {isMobile && (
          <div className={classnames("Navigation__mobileMenu")}>
            <IconButton
              className={classes.menuButton}
              onClick={() => toggleMenuButtonClick(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              className={classnames("MenuItems", "MenuItems--mobile")}
              classes={{
                paper: classes.menuDrawer,
              }}
              open={showMobileMenu}
              onClose={() => toggleMenuButtonClick(false)}
            >
              {navigationItems}
            </Drawer>
          </div>
        )}
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        {!isMobile && (
          <div
            className={classnames("Navigation__menuItems", classes.menuItems)}
          >
            {navigationItems}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationHeader;
