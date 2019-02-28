import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, pauseTest, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | full-name-info', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders full name info component appr', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('fullName', {
      fullName: 'Mehul C'
    });

    await render(hbs`{{full-name-info
      fullName=fullName
    }}`);

    assert.equal(
      find('.full-name-info-container span').innerHTML,
      'Mehul C',
      'full name matches'
    );
  });

  test('delete click functioning', async function (assert) {
    this.set('fullName', {
      fullName: 'Mehul C'
    });

    this.set('delete', (fullNameToDelete) => {
      assert.ok(fullNameToDelete);
      assert.deepEqual(fullNameToDelete, this.get('fullName'));
    });

    await render(hbs`{{full-name-info
      fullName=fullName
      delete=delete
    }}`);
    await click('.deleteBtn');
  });
});
