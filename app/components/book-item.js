import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
  ajax: service(),

  fetchBookDetails: task(function * () {
    const book = this.get('book');
    const result = yield this.get('ajax').request(`http://localhost:3000/books/${book.id}`);
    this.set('price', result.price);
    this.set('pages', result.pages);
  }),

  didReceiveAttrs() {
    this._super(...arguments);
    
    this.get('fetchBookDetails').perform();

    /* const book = this.get('book');
    this.set('stillFetching', true);
    this.get('ajax').request(`http://localhost:3000/books/${book.id}`)
      .then((result) => {
        this.set('stillFetching', false);
        this.set('price', result.price);
        this.set('pages', result.pages);
      }); */
  },
});
