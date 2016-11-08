# vue-bus
A event bus for Vue.js

## Installation
```
$ npm install vue-bus
```
When used with a module system, you must explicitly install the bus via Vue.use():
```
import Vue from 'vue';
import VueBus from 'vue-bus';

Vue.use(VueBus);
```
You don't need to do this when using global script tags.

## Usage
#### Listen to an event
```
new Vue({
  created() {
    this.$bus.on('event', data => console.log(data));
  }
});
```
#### Trigger an event
```
new Vue({
  methods: {
    test() {
      this.$bus.emit('event', 'test');
    }
  }
});
```

## License
[MIT](http://opensource.org/licenses/MIT)
