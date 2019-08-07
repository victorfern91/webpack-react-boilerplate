import React from 'react';
import { shallow } from 'enzyme';
import App from 'src/App';

describe('App', () => {
  it('should render something', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
