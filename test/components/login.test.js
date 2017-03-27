import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import LoginForm from '../../src/components/login/LoginForm';

describe('<LoginForm />', () => {
  it('renders Login page', () => {
    const propData = {
      user: {
        email: 'test@test.com',
        password: 'test'
      },
      onSave: () => {
        console.log('on save called');
      },
      onChange: () => {
        console.log('on change called');
      },
      saving: true
    };
    const wrapper = shallow(<LoginForm {...propData} />);
    expect(wrapper.find('.login')).to.have.length(1);
  });

  it('check login button action', () => {
    const propData = {
      user: {
        email: 'test@test.com',
        password: 'test'
      },
      onSave: sinon.spy(),
      onChange: () => {
        console.log('on change called');
      },
      saving: true
    };
    const wrapper = shallow(<LoginForm {...propData} />);
    wrapper.find('button').simulate('click');
    expect(propData.onSave).to.have.property('callCount', 1);

  });
});
