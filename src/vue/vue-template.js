exports default {
  componets: {
    A,
    B
  },
  mixins: [mixA, mixB]
  props: {
    type: String,
    other: null
  },
  data() {
    return {

    }
  },
  watch: { // 不应该使用箭头函数来定义 watcher 函数。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例
    a: function(val, oldVal) {

    },
    'b.c': function(val oldVal) {

    }
  },
  computed: {
    aDouble: function () {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  },
  methods {
    fetch() {

    }
  },
  created() {

  },
  mounted() {

  },
  beforeDestroy() {

  }
}