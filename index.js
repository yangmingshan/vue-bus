/**
 * vue-bus v0.1.0
 * https://github.com/yangmingshan/vue-bus
 * @license MIT
 */
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueBus = factory());
}(this, (function() { 'use strict';

  function VueBus(Vue) {

    var bus = new Vue();

    Object.defineProperties(bus, {
      on: {
        get: function() {
          return this.$on;
        }
      },
      once: {
        get: function() {
          return this.$once;
        }
      },
      off: {
        get: function() {
          return this.$off;
        }
      },
      emit: {
        get: function() {
          return this.$emit;
        }
      }
    });

    Object.defineProperty(Vue.prototype, '$bus', {
      get: function() {
        return bus;
      }
    });
  }

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueBus);
  }

  return VueBus;

})));
