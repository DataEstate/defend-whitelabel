import React from 'react';
import { expect } from 'chai';
// import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { Home } from '../Home';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
describe('src/screens/ListView', () => {
  it('jump to other pages with Link', () => {
    const fakeComponent = shallow(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(fakeComponent.find(Link).props().to).toBe('/listview');
  });
});
