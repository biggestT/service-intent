import { serializeComponent, serializeIntent } from './serialize.js';

describe('service-intent-string', function () {

  it('should serialize an intent', function () {

    const intent = {
      actor: 'user',
      action: 'view',
      object: 'company_829839'
    };

    expect(serializeIntent(intent)).toEqual('user.view.company_829839');
  });

  it('should serialize a object-less intent', function () {

    const intent = {
      actor: 'user',
      action: 'view'
    };

    expect(serializeIntent(intent)).toEqual('user.view.user');
  });

  it('should serialize a component', function () {

    const component = ['user', 'premium', '123'];

    expect(serializeComponent(component)).toEqual('user_premium_123');
  });
});
