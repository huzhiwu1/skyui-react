import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Icon } from '../index';

describe('测试Icon', () => {
  it('测试icon能成功渲染', () => {
    const json = TestRenderer.create(<Icon name="sync" />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
