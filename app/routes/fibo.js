import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  utility: service(), // DI

  model() {
    // actually would be calling from server
    return this.get('utility').getFiboSeries(8);
  },
});
