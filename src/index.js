function VueBus(Vue) {
  var bus = new Vue()

  Object.defineProperties(bus, {
    on: {
      get() {
        return this.$on
      }
    },
    once: {
      get() {
        return this.$once
      }
    },
    off: {
      get() {
        return this.$off
      }
    },
    emit: {
      get() {
        return this.$emit
      }
    }
  })

  Vue.bus = bus

  Object.defineProperty(Vue.prototype, '$bus', {
    get() {
      return bus
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBus)
}

export default VueBus
