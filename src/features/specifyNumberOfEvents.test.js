import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let NumberOfEventsWrapper;

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('the user hasn’t specified a number', () => {

    });

    when('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    then('the number of events displayed to the user should be 32', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event').hostNodes()).toHaveLength(mockData.length)
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the standard number of events is being shown', () => {
      expect(AppWrapper.find('.event').hostNodes()).toHaveLength(mockData.length)
    });

    when('the user changes the number of events to display', () => {
      AppWrapper.update();
      AppWrapper.find('.NumberInput').hostNodes().simulate('change', { target: { value: 15 } });

    });

    then('the app should display the number of events set by the user', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event').hostNodes()).toHaveLength(15)
    });
  });

});