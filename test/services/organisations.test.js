const app = require('../../src/app');

describe('\'organisations\' service', () => {
  it('registered the service', () => {
    const service = app.service('organisations');
    expect(service).toBeTruthy();
  });
});
