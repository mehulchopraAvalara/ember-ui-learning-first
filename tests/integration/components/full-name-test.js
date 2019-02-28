import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, findAll, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | full-name', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders names appropriately', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('fullNames', [
      {
        fullName: 'Mehul C'
      },
      {
        fullName: 'Steve J'
      }
    ]);
    await render(hbs`{{full-name
      fullNames=fullNames
    }}`);

    assert.equal(
      findAll('.full-name-info-container').length,
      2,
      'expected number of info components render');
    
    const spans = findAll('.full-name-info-container span');
    assert.equal(
      spans[0].innerHTML,
      'Mehul C',
      'first element full names matches'
    );
    assert.equal(
      spans[1].innerHTML,
      'Steve J',
      'second element full name matches'
    );
  });

  test('delete click functioning', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('fullNames', [
      {
        fullName: 'Mehul C'
      },
      {
        fullName: 'Steve J'
      }
    ]);
    await render(hbs`{{full-name
      fullNames=fullNames
    }}`);
    
    const buttons = findAll('.full-name-info-container button');
    await click(buttons[1]);

    assert.equal(
      findAll('.full-name-info-container').length,
      1,
      'expected number of info components after delete');

    const spans = findAll('.full-name-info-container span');
    assert.equal(
      spans[0].innerHTML,
      'Mehul C',
      'first element left after delete'
    );
  });
});
