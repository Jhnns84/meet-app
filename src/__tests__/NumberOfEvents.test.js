import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('NumberOfEvents /> component', () => {
  let NumberWrapper;
  beforeAll(() => {
    NumberWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => {}} />);
  });

  test('render number input', () => {
    expect(NumberWrapper.find('.NumberInput')).toHaveLength(1);
  });

  test('render default number of events', () => {
    expect(NumberWrapper.find('.NumberInput').prop('value')).toBe(32);
  });

  test('render number input correctly', () => {
    const numberOfEvents = NumberWrapper.state('numberOfEvents');
    expect(NumberWrapper.find('.NumberInput').prop('value')).toBe(numberOfEvents);
  });

  test('change state when number input changes', () => {
    NumberWrapper.setState({
      numberOfEvents: 32
    });
    const eventObject = { target: { value: 15}};
    NumberWrapper.find('.NumberInput').simulate('change', eventObject);
    expect(NumberWrapper.state('numberOfEvents')).toBe(15);
  });
});