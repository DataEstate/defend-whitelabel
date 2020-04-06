// @flow

import React, { useContext, useEffect, Fragment } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import { Backdrop, Button, CircularProgress } from "@material-ui/core";
import { EstateCards } from "src/components/Estates";
import { makeStyles } from "@material-ui/core/styles";
import { EstatesContext } from "src/context/Estates";
import { getEstatesArrayFromEstatesData } from "src/helpers/Estates";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

const convertUrlParams = (urlParams) => {
  return JSON.parse('{"' + decodeURI(urlParams).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}

export const EstatesContainer = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const { list, listData, fetchEstates, fetch } = useContext(EstatesContext);
  const estatesData = getEstatesArrayFromEstatesData(listData);

  // load data for the first time only (no paging for now)
  useEffect(() => {
    if (fetch) {
      // check if params is empty then load default parameters
      if (location.search === "") {
        fetchEstates({
          size: 12,
          fields: "id,name,category_code,description,locality,state_code"
        });
      } else {
        fetchEstates(convertUrlParams(location.search.substring(1)));
      }
    }
  }, []);

  // when user click search, it will contain the query parameters as well
  const handleClickSearch = () => {
    // change url params
    history.push({
      pathname: '/listview',
      search: '?size=5&category_code=ACCOMM'
    });

    // fetch also!
    fetchEstates({
      size: 5,
      category_code: "ACCOMM"
    });
  }

  const renderList = () => {
    return list ? (
      <EstateCards id="EstateListing" list={estatesData} />
    ) : (
      <Fragment />
    );
  };

  return (
    <Fragment>
      <Button variant="contained" color="primary" onClick={handleClickSearch}>
        Imitate Search with Parameter
      </Button>
      <Backdrop className={classes.backdrop} open={Boolean(fetch.isFetching)}>
        <CircularProgress />
      </Backdrop>
      {renderList()}
    </Fragment>
  );
};

export default EstatesContainer;
