import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, find, fillIn, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | person-name', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders without any data', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{person-name}}`);
    assert.equal(find('.first-name').value, '', 'first name is blank');
    assert.equal(find('.last-name').value, '', 'last name is blank');
    assert.equal(find('.full-name').innerText, '', 'full name is blank');
  });

  test('it renders with data', async function(assert) {
    await render(hbs`{{person-name
      first='mehul'
      last='chopra'
    }}`);

    assert.equal(find('.first-name').value, 'mehul', 'first name is not blank');
    assert.equal(find('.last-name').value, 'chopra', 'last name is not blank');
    assert.equal(find('.full-name').innerText, 'mehul chopra', 'full name is built');
  });

  test('it builds full name appropriately', async function (assert) {
    await render(hbs`{{person-name}}`);
    await fillIn('.first-name', 'tony');
    await fillIn('.last-name', 'stark');
    
    assert.equal(find('.full-name').innerText, 'tony stark', 'full name is built');
  });

  test('clear button functionality', async function (assert) {
    await render(hbs`{{person-name}}`);
    await fillIn('.first-name', 'tony');
    await fillIn('.last-name', 'stark');

    await click('.clear-btn');

    assert.equal(find('.first-name').value, '', 'first name is blank');
    assert.equal(find('.last-name').value, '', 'last name is blank');
    assert.equal(find('.full-name').innerText, '', 'full name is blank');
  });

  test('add button functionality', async function (assert) {
    this.set('addName', (firstName, lastName) => {
      assert.ok('outward going function is called');
      assert.equal(firstName, 'tony', 'first name is sent out from person-name');
      assert.equal(lastName, 'stark', 'last name is sent out from person-name');
    });

    await render(hbs`{{person-name
      addName=addName
    }}`);
    await fillIn('.first-name', 'tony');
    await fillIn('.last-name', 'stark');

    await click('.add-btn');

    assert.equal(find('.first-name').value, '', 'first name is blank');
    assert.equal(find('.last-name').value, '', 'last name is blank');
  });
});
