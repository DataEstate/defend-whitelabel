// @flow
import React from 'react';
import {
  Container,
  Grid
} from '@material-ui/core';
import type { EstateCardType } from '../../context/Estates/Types/EstateCardType';
import type { EstatesType } from "src/context/Estates/Types/Data/EstatesType";

import EstateCard from './EstateCard';

type Props = {
  id: string,
  list: Array<EstateCardType>,
}

export const EstateCards = ({ id, list }: Props) => {
  return (
    <div id={id}>
      <Container>
        <Grid container spacing={3}>
          {list && list.map((estateItem, index) => {
            return (
              <Grid data-test-id={`estate-item-${index}`} item xs={12} sm={4} md={4} lg={3} xl={3} key={estateItem.id}>
                <EstateCard 
                  id={estateItem.id}
                  name={estateItem.name}
                  state_code={estateItem.state_code}
                  category={estateItem.category}
                  locality={estateItem.locality}
                  description={estateItem.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default EstateCards;