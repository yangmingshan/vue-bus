# vue-bus
A event bus for Vue.js, support both Vue 1.0 and 2.0. See Vue [documentation](http://vuejs.org/v2/guide/migration.html#Events) for more detail.

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
#### Listen and clean
```
// ...
created() {
  this.$bus.on('add-todo', this.addTodo);
  this.$bus.once('once', () => console.log('This listener will only fire once'));
},
beforeDestroy() {
  this.$bus.off('add-todo', this.addTodo);
},
methods: {
  addTodo(newTodo) {
    this.todos.push(newTodo);
  }
}
```
#### Trigger
```
// ...
methods: {
  addTodo() {
    this.$bus.emit('add-todo', { text: this.newTodoText });
    this.$bus.emit('once');
    this.newTodoText = '';
  }
}
```
*Note: `$bus.on` `$bus.once` `$bus.off` `$bus.emit` are aliases for `$bus.$on` `$bus.$once` `$bus.$off` `$bus.$emit`. See the [API](http://vuejs.org/v2/api/#Instance-Methods-Events) for more detail.*

## License
[MIT](http://opensource.org/licenses/MIT)
