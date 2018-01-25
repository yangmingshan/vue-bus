const Vue = require('vue')
const VueBus = require('../dist/vue-bus.common')

Vue.use(VueBus)

test('Vue.bus', () => {
  const vm = new Vue({
    data() {
      return { count: 0 }
    },
    created() {
      this.$bus.on('add', num => { this.count += num })
      this.$bus.once('addOnce', num => { this.count += num })
    },
    methods: {
      clean() {
        this.$bus.off('add')
      }
    }
  })

  const obj = {
    fire() {
      Vue.bus.emit('add', 1)
    },
    fireOnce() {
      Vue.bus.emit('addOnce', 1)
    }
  }

  obj.fire()
  expect(vm.count).toBe(1)

  obj.fire()
  expect(vm.count).toBe(2)

  vm.clean()
  obj.fire()
  expect(vm.count).toBe(2)

  obj.fireOnce()
  expect(vm.count).toBe(3)

  obj.fireOnce()
  expect(vm.count).toBe(3)
})

test('this.$bus', () => {
  const vm1 = new Vue({
    data() {
      return { count: 0 }
    },
    created() {
      this.$bus.on('add', num => { this.count += num })
      this.$bus.once('addOnce', num => { this.count += num })
    },
    methods: {
      clean() {
        this.$bus.off('add')
      }
    }
  })

  const vm2 = new Vue({
    methods: {
      fire() {
        this.$bus.emit('add', 1)
      },
      fireOnce() {
        this.$bus.emit('addOnce', 1)
      }
    }
  })

  vm2.fire()
  expect(vm1.count).toBe(1)

  vm2.fire()
  expect(vm1.count).toBe(2)

  vm1.clean()
  vm2.fire()
  expect(vm1.count).toBe(2)

  vm2.fireOnce()
  expect(vm1.count).toBe(3)

  vm2.fireOnce()
  expect(vm1.count).toBe(3)
})
