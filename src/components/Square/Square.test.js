import React from 'react';
import { shallow } from 'enzyme';
import Square from './index';

const value = 0;
const onClickHandler = jest.fn();
const wrapper = shallow(
    <Square key={value} value={null} onClick={onClickHandler} />);

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('simulates click event', () => {
  wrapper.find('button').simulate('click');
  expect(onClickHandler).toHaveBeenCalled();
})
