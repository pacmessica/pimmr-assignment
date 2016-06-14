import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Listing from './Listing'
import styles from './styles.module.css'

describe('<Listing />', () => {
  let wrapper;
  const restaurants = [{
    name: 'Pasta Pasta'
  }, {
    name: "Pizza Pizza"
  }];

  beforeEach(() => {
    wrapper = shallow(<Listing restaurants={restaurants} />)
  });

  it('has an item for each restaurant in the restaurants prop', () => {
    expect(wrapper.find('Item').length)
      .to.equal(restaurants.length);
  })
})
