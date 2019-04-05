import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fibo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fibo');
    assert.ok(route);
  });
});
