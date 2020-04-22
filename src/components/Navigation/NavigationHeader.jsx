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
  menuItemArrow: ({ isMobile }) =>
    isMobile
      ? {
          color: theme.palette.common.black,
        }
      : {
          color: theme.palette.common.white,
        },
  menuSubmenu: ({ isMobile }) =>
    isMobile
      ? {
          boxShadow: "none",
          background: "rgba(0,0,0,0.08)",
          width: "100%",
        }
      : {},
  menuSubmenuList: {
    paddingLeft: theme.spacing(3),
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

export const NavigationHeader = ({ title = "", menuItems }: Props) => {
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
      return (
        <NavigationItem
          key={idx}
          to={item.to}
          name={item.name}
          submenu={item.submenu}
          classes={{
            navItemLink: classes.menuItem,
            navItemArrow: classes.menuItemArrow,
            submenuItems: classes.menuSubmenu,
            submenuItemsList: classes.menuSubmenuList,
          }}
          onClick={(e, to, parent) => {
            if (to) {
              toggleMenuButtonClick(false);
            }
          }}
        />
      );
    });

  return (
    <AppBar className="Navigation" color="primary" position="static">
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
        <Typography
          variant="h2"
          className={classnames("Navigation__title", classes.title)}
        >
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
