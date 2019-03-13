import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    const { first, last } = this.getProperties('first', 'last');
    this.setProperties({
      firstProp: first ? first : '',
      lastProp: last ? last : '',
    });
  },

  fullProp: computed('firstProp','lastProp', function() {
    const { firstProp, lastProp } = this.getProperties('firstProp', 'lastProp');
    return `${firstProp} ${lastProp}`;
  }),

  /*click() {
    this.setProperties({
      firstProp: '',
      lastProp: '',
    });
  },*/

  actions: {
    onClear() {
      this.setProperties({
        firstProp: '',
        lastProp: '',
      });
    },

    onAdd() {
      const addName = this.get('addName');
      addName(this.get('firstProp'), this.get('lastProp'));

      this.send('onClear');
    },
  }
});
