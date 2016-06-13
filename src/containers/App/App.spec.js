import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from './App'

describe('<App />', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('contains a title component with pimmr', () => {
    expect(wrapper.find('h1').first().text())
      .to.equal('Pimmr')
  });
});
