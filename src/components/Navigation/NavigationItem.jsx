// @flow

import React, { useState } from "react";
import classnames from "classnames";
import {
  makeStyles,
  Typography,
  ClickAwayListener,
  MenuItem,
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import type { NavigationItemType } from "./Types/NavigationItemType";

const useStyles = makeStyles((theme, prop) => ({
  navItem: ({ height }) => ({
    color: "#030303",
    minHeight: height,
    display: "flex",
  }),
  navItemLink: {
    color: "white",
    fontWeight: "600",
    textDecoration: "none",
    textTransform: "uppercase",
    background: "transparent",
    border: "none",
    fontSize: "1em",
    padding: `0px ${theme.spacing(2)}px`,
    display: "flex",
    alignItems: "center",
    "&:focus": {
      outline: "none",
      cursor: "pointer",
    },
    "&:hover": {
      cursor: "pointer",
      opacity: 0.8,
    },
  },
  navItemLinkWithSubmenu: {
    padding: `0px 0px 0px ${theme.spacing(2)}px`,
  },
  navItemArrow: {
    color: "white",
  },
  subItems: ({ height }) => ({
    padding: `${theme.spacing(1)}px 0px`,
    position: "absolute",
    background: "white",
    top: height,
    boxShadow: theme.shadows[2],
  }),
  subItemsList: {
    listStyle: "none",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    minWidth: "100px",
  },
}));

export const NavigationItem: NavigationItemType = ({
  name,
  to,
  height = 64,
  submenu = [],
}) => {
  const classes = useStyles({ height });
  const history = useHistory();
  const hasSubmenu = submenu.length > 0;
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMenuLinkClick = (to) => {
    if (to) {
      history.push(to);
    }
    setShowSubmenu(false);
  };

  const handleMenuOpen = (e) => {
    if (hasSubmenu) {
      setShowSubmenu(true);
    }
  };

  const handleMenuClose = (e) => {
    if (hasSubmenu) {
      setShowSubmenu(false);
    }
  };

  const renderSubmenus = () =>
    submenu.map((subMenuItem, idx) => (
      <MenuItem
        key={idx}
        onClick={() => handleMenuLinkClick(subMenuItem.to)}
        className={classnames("SubmenuItem__list", classes.subItemsList)}
        data-link-name={subMenuItem.name}
      >
        {subMenuItem.name}
      </MenuItem>
    ));
  return (
    <ClickAwayListener onClickAway={handleMenuClose}>
      <div
        className={classnames(
          "Navigation__menuItem",
          "MenuItem",
          classes.navItem
        )}
      >
        <button
          className={classnames("MenuItem__button", classes.navItemLink, {
            [classes.navItemLinkWithSubmenu]: hasSubmenu,
          })}
          onClick={() => handleMenuLinkClick(to)}
          onMouseOver={handleMenuOpen}
          data-link-name={name}
        >
          <Typography variant="inherit">{name}</Typography>
          {hasSubmenu && <ArrowDropDown className={classes.navItemArrow} />}
        </button>
        {hasSubmenu && showSubmenu && (
          <div
            className={classnames(
              "MenuItem__submenuItem",
              "SubmenuItem",
              classes.subItems
            )}
          >
            {renderSubmenus()}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default NavigationItem;
