import React from 'react';
import {shallow} from 'enzyme';
import HeaderAccountInfo from './HeaderAccountInfo';

describe('HeaderAccountInfo', () => {
  it('should render', () => {
    const wrapper = shallow(<HeaderAccountInfo/>);
    expect(wrapper.exists()).toBe(true);
  });
});


