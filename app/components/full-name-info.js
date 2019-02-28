import Component from '@ember/component';
import { copy } from '@ember/object/internals';

export default Component.extend({
  classNames: ['full-name-info-container'],

  didReceiveAttrs() {
    this._super(...arguments);

    this.set('fullNameProp', copy(this.get('fullName'), true));
  },

  actions: {
    onDelete() {
      const deleteFn = this.get('delete');
      deleteFn(this.get('fullName'));
    },
  },
});
