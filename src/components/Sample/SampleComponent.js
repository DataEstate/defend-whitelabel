// @flow

import React, { useContext, Fragment } from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { EstatesContext } from "src/context/Estates";

/**
 * Sample of using the Estates Provider
 * Look into src/context/Estates/Types/EstatesContextType to see what methoeds it offers.
 * Look into src/context/Estates/Types/Data/EstateType to see what attributes are available to each Estate.
 */

export const SampleComponent = () => {
  const { list, listData, fetchEstates } = useContext(EstatesContext);

  const renderList = () => {
    const listComponents = list ? (
      list.map((listId, idx) => {
        const estate = listData[listId];
        return (
          <ListItem key={idx}>
            <ListItemText primary={estate.name} secondary={estate.category} />
          </ListItem>
        );
      })
    ) : (
      <Fragment />
    );
    return listComponents;
  };

  return (
    <div>
      <Button
        className="test-button"
        color="primary"
        variant="contained"
        onClick={() => {
          fetchEstates({
            size: 5,
            category_code: "ACCOMM"
          });
        }}
      >
        Get Estates
      </Button>
      {list && <List>{renderList()}</List>}
    </div>
  );
};

export default SampleComponent;
