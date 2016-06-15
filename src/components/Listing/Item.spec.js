import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Item from './Item'
import styles from './styles.module.css'

describe('<Item />', () => {
  let wrapper;
  const restaurant = {
    name: 'Pizza Pizza',
    photos: [{s3URL: "pizza.jpeg"}],
    cuisines: ["italian"]
  }
  beforeEach(() => {
    wrapper = shallow(<Item restaurant={restaurant} />)
  });

  it('wraps the component with an .item css class', () => {
    expect(wrapper.find(`.${styles.item}`))
      .to.have.length(1);
  });

  it('renders the restaurant name', () => {
   expect(wrapper.find(`.${styles.name}`).text()).
    to.contain(restaurant.name);
  });

  it('renders the restaurant photo', () => {
    assert.equal( (wrapper.find('img')).prop('src'), "pizza.jpeg");
  });

  it('renders the restaurant cuisines', () => {
   expect(wrapper.find(`.${styles.cuisines}`).text()).
    to.contain(restaurant.cuisines);
  });
})
