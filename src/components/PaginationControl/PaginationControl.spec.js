import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon';

import PaginationControl from './PaginationControl'

describe('<PaginationControl />', () => {
  let wrapper;
  let index;

  it('renders as a <div>', () => {
    wrapper = shallow(<PaginationControl />);
    expect(wrapper.type()).to.eql('div');
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    wrapper = shallow(<PaginationControl updateRestaurants={onButtonClick}/>)
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  })

  describe('When index is greater than 5', () => {
    beforeEach(() =>  {
      wrapper = shallow(<PaginationControl index={0} />)
    });

    it('renders one button', () => {
      expect(wrapper.find('button'))
        .to.have.length(1);
    })

    it('renders the Next button', () => {
      assert.equal( (wrapper.find('button')).text(), "Next");
    });
  });

  describe('When index is less than 5', () => {
    it('renders two buttons', () => {
      wrapper = shallow(<PaginationControl index={10} />)
      expect(wrapper.find('button'))
        .to.have.length(2);
    })
  });
})
