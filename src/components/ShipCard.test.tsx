import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ShipCard from './ShipCard';

describe('ShipCard', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <ShipCard
        data={{
          name: 'Constellation Aquila',
          price: 10,
          cargo_capacity: 10,
          ship_develop_status: { value: 'Flight Ready' },
          classification: { shiptype: 'transport' },
          company: { name: 'Robert Space Industries', short_name: 'RSI' },
        }}
      ></ShipCard>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
