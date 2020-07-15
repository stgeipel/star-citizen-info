import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Shipstatus from './Shipstatus';

describe('Shipstatus', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Shipstatus status={{ value: 'Flight Ready' }}></Shipstatus>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
