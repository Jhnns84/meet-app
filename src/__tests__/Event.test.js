import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;

  beforeAll(() => {
    let eventData= mockData[0];
    EventWrapper = shallow(<Event event= { eventData } />);
  });
  
  test('render Event title(summary)', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render Event date', () => {
    expect(EventWrapper.find('.date')).toHaveLength(1);
  });

  test('render Event timezone', () => {
    expect(EventWrapper.find('.timezone')).toHaveLength(1);
  });

  test('render Event location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render showDetails-button', () => {
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  });

  test('expand event details', () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find('.details-btn').simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });
  
  test('collapse event details', () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find('.details-btn').simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(false);
  })


})