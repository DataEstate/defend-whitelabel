// @flow

import React, { useContext, useEffect, Fragment } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { EstatesProvider } from "src/context/Estates";
import { EstateCards } from "src/components/Estates";
import { makeStyles } from '@material-ui/core/styles';
import { EstatesContext } from "src/context/Estates";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export const EstateContainer = () => {
  const styles = useStyles();
  const { list, listData, fetchEstates, isFetching } = useContext(EstatesContext);

  // load data for the first time only (no paging for now)
  useEffect(() => {
    fetchEstates({
      size: 12,
      fields: "id,name,category_code,description,locality,state_code"
    });
  }, []);

  const renderList = () => {
    return (
      list ? (
        <EstateCards id="EstateListing" estateDataIds={list} estateData={listData} />
      ) : (
        <Fragment />
      )
    );
  };

  return (
    <Fragment>
      <Backdrop className={styles.backdrop} open={isFetching}>
        <CircularProgress />
      </Backdrop>
      {renderList()}
    </Fragment>
  );
};

export default EstateContainer;
