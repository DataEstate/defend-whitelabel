// @flow

import React, { useContext, useEffect, Fragment, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDebouncedCallback } from 'use-debounce';
import { Backdrop, CircularProgress } from "@material-ui/core";
import { SearchBar } from "src/components/Common";
import { EstateCards } from "src/components/Estates";
import { makeStyles } from "@material-ui/core/styles";
import { EstatesContext } from "src/context/Estates";
import {
  getEstatesArrayFromEstatesData,
  getQueryParams,
} from "src/helpers/Estates";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export const EstatesContainer = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [setFilterValue] = useDebouncedCallback(
    // function
    (value) => {
      // change url params & re-fetch
      history.push({
        pathname: '/list',
        search: (value !== "") ? `?categories=${value}` : ""
      });
    },
    // delay in ms
    3000
  );
  const { list, listData, fetchEstates, fetch } = useContext(EstatesContext);
  const [filterString, setFilterString] = useState();
  const estatesData = getEstatesArrayFromEstatesData(listData);

  // fetch if location changed
  useEffect(() => {
    if (fetch) {
      // check if params is empty then load default parameters
      if (location.search === "") {
        fetchEstates();
        setFilterString("");
      } else {
        const queryString = getQueryParams(location.search.substring(1));
        fetchEstates(queryString);
        setFilterString(queryString);
      }
    }
  }, [location]);

  const renderList = () => {
    return list ? (
      <EstateCards id="EstateListing" list={estatesData} />
    ) : (
        <Fragment />
      );
  };

  return (
    <Fragment>
      <Backdrop className={classes.backdrop} open={Boolean(fetch.isFetching)}>
        <CircularProgress />
      </Backdrop>
      <SearchBar
        categories={filterString && filterString.categories}
        onChange={(values) => setFilterValue(values)}
      />
      {renderList()}
    </Fragment>
  );
};

export default EstatesContainer;
