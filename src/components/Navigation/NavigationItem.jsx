// @flow

import React, { useState, useRef } from "react";
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

const useStyles = makeStyles((theme, props) => ({
  navItem: {
    color: "#030303",
    display: "flex",
    position: "relative",
  },
  navItemLink: ({ classes }) => ({
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
    ...(classes?.navItemLink || {}),
  }),
  navItemLinkWithSubmenu: {
    padding: `0px 0px 0px ${theme.spacing(2)}px`,
  },
  navItemArrow: ({ classes }) => ({
    color: theme.palette.common.white,
    ...(classes?.navItemArrow || {}),
  }),
  submenuItems: ({ anchorEl, classes }) => ({
    padding: `${theme.spacing(1)}px 0px`,
    position: "absolute",
    background: "white",
    top: anchorEl?.current?.offsetHeight || "0px",
    boxShadow: theme.shadows[2],
    ...(classes?.submenuItems || {}),
  }),
  submenuItemsList: {
    listStyle: "none",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    minWidth: "100px",
  },
}));

export const NavigationItem: NavigationItemType = ({
  name,
  to,
  submenu = [],
  height = "0px",
  onClick = (e, to, navItem) => {},
  classes,
}) => {
  const anchorEl = useRef(null);
  const internalClasses = useStyles({ anchorEl, classes });
  const history = useHistory();
  const hasSubmenu = submenu.length > 0;
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMenuLinkClick = (
    event,
    to,
    elementHasSubmenu = false,
    parent = null
  ) => {
    if (elementHasSubmenu) {
      setShowSubmenu(!showSubmenu);
    } else if (to) {
      history.push(to);
      setShowSubmenu(false);
    }
    onClick(event, to, parent);
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
        onClick={(e) =>
          handleMenuLinkClick(
            e,
            subMenuItem.to,
            subMenuItem.submenu && subMenuItem.submenu.length > 0,
            {
              to,
              name,
              submenu,
              height,
            }
          )
        }
        className={classnames(
          "SubmenuItem__list",
          internalClasses.submenuItemsList
        )}
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
          internalClasses.navItem
        )}
      >
        <button
          ref={anchorEl}
          className={classnames(
            "MenuItem__button",
            internalClasses.navItemLink,
            {
              [internalClasses.navItemLinkWithSubmenu]: hasSubmenu,
            }
          )}
          onClick={(e) => handleMenuLinkClick(e, to, hasSubmenu)}
          data-link-name={name}
        >
          <Typography variant="inherit">{name}</Typography>
          {hasSubmenu && (
            <ArrowDropDown className={internalClasses.navItemArrow} />
          )}
        </button>
        {hasSubmenu && showSubmenu && (
          <div
            className={classnames(
              "MenuItem__submenuItem",
              "SubmenuItem",
              internalClasses.submenuItems
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
