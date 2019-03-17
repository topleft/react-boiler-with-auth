import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('should render', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Button>Click Me</Button>);
    expect(wrapper.text()).toBe('Click Me');
  });

  it('should set testAttr prop', () => {
    const wrapper = shallow(<Button testAttr='test'/>);
    expect(wrapper.find('[data-test="test"]')).toHaveLength(1);
  });

  it('should have default look of no-decor', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper.find('.button--no-decor')).toHaveLength(1);
  });

  it('should set look', () => {
    const wrapper = shallow(<Button look='outline'/>);
    expect(wrapper.find('.button--outline')).toHaveLength(1);
  });

  it('should call handleClick when clicked', () => {
    const clickFunc = jest.fn();
    const wrapper = shallow(<Button handleClick={clickFunc}/>);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });
});


