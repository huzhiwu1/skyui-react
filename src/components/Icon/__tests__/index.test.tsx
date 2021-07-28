import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Icon } from '../index';

// Enzyme.configure({ adapter: new Adapter() });
describe('测试Icon', () => {
  it('测试icon能成功渲染', () => {
    const json = TestRenderer.create(<Icon name="sync" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('测试 onClick', () => {
    const fn = jest.fn();
    const wrapper = mount(<Icon name="sync" onClick={fn} />);
    wrapper.find('.sky-icon').simulate('click');
    expect(fn.mock.calls.length).toEqual(1);
  });
});
