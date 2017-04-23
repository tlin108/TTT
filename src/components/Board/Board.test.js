import React from 'react';
import { shallow } from 'enzyme';
import Board from './index';

const wrapper = shallow(
    <Board squares={[]}/>);

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('passes array for prop as squares', () => {
  expect(Array.isArray(wrapper.instance().props.squares)).toBe(true);
});
