import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('TextInput', () => {

  it('should render', () => {
    const wrapper = shallow(
      <TextInput
        id='pasta'
        label='label'
        name='pasta'
        handleChange={() => console.log()}
        testAttr='pasta'
        isValid={true}/>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should render label if provided', () => {
    const wrapper = shallow(
      <TextInput
        id='pasta'
        label='Pasta'
        name='pasta'
        handleChange={() => console.log()}
        testAttr='pasta'
        isValid={true}
      />
    );
    expect(wrapper.find('label').text()).toBe('Pasta');
  });

  it('should add htmlFor=id attribute to the label', () => {
    const wrapper = shallow(
      <TextInput
        id='pasta'
        label='label'
        name='pasta'
        handleChange={() => console.log()}
        testAttr='pasta'
        isValid={true}/>
    );
    expect(wrapper.find('label[htmlFor="pasta"]')).toHaveLength(1);
  });

  it('should call handleChange prop when input changes', () => {
    const changeFunc = jest.fn();
    const event = { target: { value: 'Text' } };
    const wrapper = shallow(
      <TextInput
        handleChange={changeFunc}
        id='pasta'
        label='label'
        name='pasta'
        testAttr='pasta'
        isValid={true}/>
    );

    expect(changeFunc).toHaveBeenCalledTimes(0);
    wrapper.find('input').simulate('change', event);
    expect(changeFunc).toHaveBeenLastCalledWith(event);
  });

  it('should call handleBlur prop when focus leaves', () => {
    const blurFunc = jest.fn();
    const event = { target: { value: 'Text' } };
    const wrapper = shallow(
      <TextInput
        handleBlur={blurFunc}
        id='pasta'
        label='label'
        name='pasta'
        handleChange={() => console.log()}
        testAttr='pasta'
        isValid={true}/>
    );

    expect(blurFunc).toHaveBeenCalledTimes(0);
    wrapper.find('input').simulate('blur', event);
    expect(blurFunc).toHaveBeenLastCalledWith(event);
  });

  it('should add error class if input is invalid', () => {
    const wrapper = shallow(
      <TextInput
        id='pasta'
        label='label'
        name='pasta'
        handleChange={() => console.log()}
        testAttr='pasta'
        isValid={true}/>
    );
    expect(wrapper.find('.error')).toHaveLength(0);
    wrapper.setProps({isValid: false});
    expect(wrapper.find('.error')).toHaveLength(1);
  });

  it('should show validation message if input is invalid', () => {
    const wrapper = shallow(
      <TextInput
        id='pasta'
        label='label'
        name='pasta'
        handleChange={() => console.log()}
        testAttr='pasta'
        message='Required'
        isValid={true}/>
    );

    expect(wrapper.find('[data-test="input-message"]')).toHaveLength(0);
    wrapper.setProps({isValid: false});
    expect(wrapper.find('[data-test="input-message"]')).toHaveLength(1);
  });

});


