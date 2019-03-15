import React from 'react';
import {shallow} from 'enzyme';
import HeaderAccountInfo from './HeaderAccountInfo';

describe('HeaderAccountInfo', () => {
  it('should render', () => {
    const wrapper = shallow(<HeaderAccountInfo/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render logout button if username prop is supplied', () => {
    const wrapper = shallow(<HeaderAccountInfo username='Mingus'/>);
    expect(wrapper.find({'testAttr':'logout-button'})).toHaveLength(1);
  });

  it('should render username when username prop is supplied', () => {
    const wrapper = shallow(<HeaderAccountInfo username='Mingus'/>);
    expect(wrapper.text()).toContain('Mingus');
  });

  it('should render login button if username prop is NOT supplied', () => {
    const wrapper = shallow(<HeaderAccountInfo/>);
    expect(wrapper.find({'testAttr':'login-button'})).toHaveLength(1);
  });

  it('should render signup button if username prop is NOT supplied', () => {
    const wrapper = shallow(<HeaderAccountInfo/>);
    expect(wrapper.find({'testAttr':'signup-button'})).toHaveLength(1);
  });

});
