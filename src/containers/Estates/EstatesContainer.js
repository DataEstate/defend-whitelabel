// @flow

import React, { useContext, useEffect, Fragment } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import { Backdrop, CircularProgress } from "@material-ui/core";
import { EstateCards } from "src/components/Estates";
import { makeStyles } from "@material-ui/core/styles";
import { EstatesContext } from "src/context/Estates";
import { getEstatesArrayFromEstatesData, getQueryParams } from "src/helpers/Estates";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export const EstatesContainer = () => {
  const classes = useStyles();
  const location = useLocation();

  const { list, listData, fetchEstates, fetch } = useContext(EstatesContext);
  const estatesData = getEstatesArrayFromEstatesData(listData);

  // load data for the first time only (no paging for now)
  useEffect(() => {
    if (fetch) {
      // check if params is empty then load default parameters
      if (location.search === "") {
        fetchEstates({
          size: 12,
          fields: "id,name,category,category_code,description,locality,state_code,star_rating,latest_date,rate_from,hero_image"
        });
      } else {
        fetchEstates(getQueryParams(location.search.substring(1)));
      }
    }
  }, []);

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
      {renderList()}
    </Fragment>
  );
};

export default EstatesContainer;
