<template>
  <div>First Component: {{counter}}</div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
      timer: undefined
    };
  },
  methods: {},
  mounted() {
    this.counter = this.$root.counter || 0;
    this.timer = setInterval(_ => {
      this.counter++;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.$root.counter = this.counter;
  }
};
</script>
