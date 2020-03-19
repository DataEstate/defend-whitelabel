import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { ListView } from '../ListView';
import { Typography, Button } from '@material-ui/core';

describe('src/screens/ListView', () => {
  it('jump to other pages with Link', () => {
    const fakeComponent = shallow(<ListView />);

    expect(fakeComponent.find(Button).prop('variant')).to.equal('contained');

    expect(fakeComponent.find(Typography).text()).to.equal('This is ListView page');
  });
});
