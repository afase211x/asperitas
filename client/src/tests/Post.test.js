import React from 'react';
import { shallow } from 'enzyme';
import Post from '../components/Post';

it('renders without crashing', () => {
  shallow(<Post />);
});