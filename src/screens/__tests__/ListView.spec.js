import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { ListView } from '../ListView';
import { Typography } from '@material-ui/core';

describe('src/screens/ListView', () => {
  it('jump to other pages with Link', () => {
    const fakeComponent = shallow(<ListView />);

    console.log(fakeComponent.debug());
    expect(fakeComponent.find('.makeStyles-button-1').text()).to.equal(
      'Back to Home Page'
    );

    expect(fakeComponent.find(Typography).text()).to.equal(
      'This is ListView page'
    );
  });
});
