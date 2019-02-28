import Component from '@ember/component';
import { copy } from '@ember/object/internals';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    this.set('fullNamesProp', copy(this.get('fullNames'), true));
  },

  actions: {
    onChildDelete(fullNameObj) {
      const fullNamesProp = this.get('fullNamesProp');
      fullNamesProp.removeObject(fullNameObj);
    },
  },
});
