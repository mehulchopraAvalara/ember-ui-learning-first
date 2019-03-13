import Component from '@ember/component';
import { copy } from '@ember/object/internals';

export default Component.extend({

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('fullNames', []);
  },

  actions: {
    onAddName(firstName, lastName) {
      const fullNames = this.get('fullNames');
      fullNames.pushObject({
        fullName: `${firstName} ${lastName}`,
      });

      // to make the fullnames component feel that it is a new attribute
      this.set('fullNames', copy(fullNames, true));
    },
  },
});
