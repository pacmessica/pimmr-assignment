import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'

import Listing from './Listing'
import Item from './Item'
import styles from './styles.module.css'

describe('<Listing />', () => {
  let wrapper;
  const restaurants = [{
    name: 'Pasta Pasta',
    photos: [{s3URL: "pizza.jpeg"}],
    cuisines: ["italian"]
  }, {
    name: "Pizza Pizza",
    photos: [{s3URL: "pizza.jpeg"}],
    cuisines: ["italian"]
  }];

  it('has an item for each restaurant in the restaurants prop', () => {
    wrapper = shallow(<Listing restaurants={restaurants} />)
    expect(wrapper.find('Item').length)
      .to.equal(restaurants.length);
  })

  it('passes restaurant prop to <Item />', () => {
    wrapper = mount(<Listing restaurants={restaurants} />)
    expect(wrapper.find(Item).first())
      .to.not.have.prop('invalid')
    expect(wrapper.find(Item).first())
      .to.have.prop('restaurant').deep.equal(
      {name: 'Pasta Pasta', photos: [{s3URL: "pizza.jpeg"}], cuisines: ["italian"]})
  })
})
