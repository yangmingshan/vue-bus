/**
 * vue-bus v1.1.0
 * https://github.com/yangmingshan/vue-bus
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VueBus=t()}(this,function(){"use strict";function e(e){var t=new e;Object.defineProperties(t,{on:{get:function(){return this.$on}},once:{get:function(){return this.$once}},off:{get:function(){return this.$off}},emit:{get:function(){return this.$emit}}}),e.bus=t,Object.defineProperty(e.prototype,"$bus",{get:function(){return t}})}return"undefined"!=typeof window&&window.Vue&&window.Vue.use(e),e});