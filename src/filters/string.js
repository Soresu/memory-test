import Vue from 'vue';
Vue.filter('shorten', function(value) {
  if (!value) return '';
  return value.slice(0, 40) + '...';
});
