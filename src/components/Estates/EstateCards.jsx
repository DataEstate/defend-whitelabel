// @flow
import React from "react";
import { Container, Grid } from "@material-ui/core";
import type { EstateType } from "src/context/Estates/Types/Data/EstateType";

import EstateCard from "./EstateCard";

type Props = {
  id: string,
  list: Array<EstateType>
};

export const EstateCards = ({ id, list }: Props) => {
  return (
    <div id={id}>
      <Container>
        <Grid container spacing={3}>
          {list &&
            list.map((estateItem, index) => {
              return (
                <Grid
                  data-test-id={`estate-item-${index}`}
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  lg={3}
                  xl={3}
                  key={estateItem.id}
                >
                  <EstateCard estateData={estateItem} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
};

export default EstateCards;
