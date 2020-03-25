// @flow
import React from 'react';
import {
  Container,
  Grid
} from '@material-ui/core';
import type { EstateCardType } from '../../context/Estates/Types/Data/EstateCardType';
import EstateCard from './EstateCard';

type Props = {
  estateData: Array<EstateCardType>,
}

export const EstateCards = ({ estateData }: Props) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {estateData && estateData.map(estateItem => (
          <Grid item xs={12} sm={4} md={4} lg={3} xl={3} key={estateItem.id}>
            <EstateCard 
              id={estateItem.id}
              name={estateItem.name}
              state_code={estateItem.state_code}
              category={estateItem.category}
              locality={estateItem.locality}
              description={estateItem.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default EstateCards;