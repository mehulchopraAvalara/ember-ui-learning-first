import Service from '@ember/service';

export default Service.extend({
  getFiboSeries(n) {
    let result = '';
    let a = 0;
    let b = 1;

    result += a + ' ' + b + ' ';

    let i = 1;
    while (i <= n - 2) {
      let c = a + b;
      result += c + ' ';

      a = b;
      b = c;

      i++;
    }

    return result;
  },
});
