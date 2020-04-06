// @flow

import React, { useContext, useEffect, Fragment } from "react";
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

export const EstatesContainer = () => {
  const classes = useStyles();
  const { list, listData, fetchEstates, fetch } = useContext(EstatesContext);
  const estatesData = getEstatesArrayFromEstatesData(listData);

  // load data for the first time only (no paging for now)
  useEffect(() => {
    if (fetch) {
      // check if fetch.params is empty object then load default parameters
      if (Object.keys(fetch.params).length === 0) {
        fetchEstates({
          size: 12,
          fields: "id,name,category_code,description,locality,state_code"
        });
      } else {
        fetchEstates(fetch.params);
      }
    }
  }, []);

  // when user click search, it will contain the query parameters as well
  const handleClickSearch = () => {
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
