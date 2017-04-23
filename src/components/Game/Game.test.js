import React from 'react';
import { shallow } from 'enzyme';
import Game from './index';

const wrapper = shallow(<Game />);

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

describe('Check Winner', () => {
  const horizontalWin = 
    ['O', 'X', 'X',
     'X', null, 'X',
     'O', 'O', 'O'
    ]

  const verticalWin = 
    ['O', 'X', 'X',
     'X', null, 'X',
     'O', 'O', 'X'
    ]

  const diagonalWin = 
    ['O', null, 'X',
     null, 'X', 'X',
     'X', 'O', 'O'
    ]

  it('checks for horizontal win', () => {
    expect(wrapper.instance().calculateWinner(horizontalWin)).toEqual('O');
  })

  it('checks for vertical win', () => {
    expect(wrapper.instance().calculateWinner(verticalWin)).toEqual('X');
  })

  it('checks for diagonal win', () => {
    expect(wrapper.instance().calculateWinner(diagonalWin)).toEqual('X');
  })
})