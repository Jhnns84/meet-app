import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import EventList from '../EventList';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  let AppWrapper;
  let EventListWrapper;
  let EventWrapper;
  
  test('An event element is collapsed by default', ({ given, when, then }) => {

    given('the app is open', () => {

      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user hasn’t expanded an event', () => {
    });

    then('the event elements should all be collapsed', () => {
      expect(EventWrapper.find(".event__Details")).toHaveLength(0);
    });
  });



  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the list of events has been loaded', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
    });

    when('the user taps on “show details”', () => {
      EventWrapper.find('.details-btn').hostNodes().simulate('click');
    });

    then('the respective event element should expand', () => {
      expect(EventWrapper.find('.event__Details')).toHaveLength(1);
    });
  });



  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('an events details are expanded', () => {
      expect(EventWrapper.find('.event__Details')).toHaveLength(1);
    });
 
    when('the user taps on show/hide details', () => {
      EventWrapper.find('.details-btn').hostNodes().simulate('click');
    });

    then('the respective event element should collapse', () => {
      expect(EventWrapper.find(".event__Details")).toHaveLength(0);
    });
  });

});