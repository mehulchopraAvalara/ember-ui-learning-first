import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, fillIn, click, findAll, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | names-editor', function(hooks) {
  setupRenderingTest(hooks);

  test('it adds the full name to the list', async function(assert) {

    await render(hbs`{{names-editor}}`);
    await fillIn('.first-name', 'tony');
    await fillIn('.last-name', 'stark');
    await click('.add-btn');

    assert.equal(find('.first-name').value, '', 'first name gets blank');
    assert.equal(find('.last-name').value, '', 'last name gets blank');

    assert.equal(
      findAll('.full-name-info-container').length,
      1,
      'expected number of info components render');

    let spans = findAll('.full-name-info-container span');
    assert.equal(
      spans[0].innerHTML,
      'tony stark',
      'first element full names matches'
    );

    // second cycle
    await fillIn('.first-name', 'steve');
    await fillIn('.last-name', 'jobs');
    await click('.add-btn');

    assert.equal(find('.first-name').value, '', 'first name gets blank');
    assert.equal(find('.last-name').value, '', 'last name gets blank');

    assert.equal(
      findAll('.full-name-info-container').length,
      2,
      'expected number of info components render');

    spans = findAll('.full-name-info-container span');
    assert.equal(
      spans[0].innerHTML,
      'tony stark',
      'first element full names matches'
    );
    assert.equal(
      spans[1].innerHTML,
      'steve jobs',
      'second element full names matches'
    );
  });
});
