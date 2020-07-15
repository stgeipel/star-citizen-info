import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ThemeSwitch from './ThemeSwitcher';

describe('ThemeSwitch', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ThemeSwitch></ThemeSwitch>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
