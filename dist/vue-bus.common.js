/**
 * vue-bus v1.1.0
 * https://github.com/yangmingshan/vue-bus
 * @license MIT
 */
'use strict';

function VueBus(Vue) {
  var bus = new Vue();

  Object.defineProperties(bus, {
    on: {
      get: function get() {
        return this.$on
      }
    },
    once: {
      get: function get() {
        return this.$once
      }
    },
    off: {
      get: function get() {
        return this.$off
      }
    },
    emit: {
      get: function get() {
        return this.$emit
      }
    }
  });

  Vue.bus = bus;

  Object.defineProperty(Vue.prototype, '$bus', {
    get: function get() {
      return bus
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBus);
}

module.exports = VueBus;
