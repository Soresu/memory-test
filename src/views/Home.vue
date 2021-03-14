<template>
  <div class="home">
    <my-header></my-header>
    <button @click="containerKey++">Recreate {{ containerKey }}</button>
    <!-- <button @click="RecreateX">Recreate 20x</button> -->
    <button @click="ToggleShow">Show/Hide</button>
    <hr />
    <div :key="containerKey" v-if="show">
      <todo-container v-for="n in todoContainerCt" :key="n"></todo-container>
    </div>

    <div v-else>
      Todos are hidden
    </div>
  </div>
</template>

<script>
import { MAX_TODO_CONTAINER, timeout } from '../utils/common';

export default {
  name: 'Home',
  data: function() {
    return {
      show: false,
      containerKey: 0,
      todoContainerCt: MAX_TODO_CONTAINER,
    };
  },
  methods: {
    async ToggleShow() {
      this.show = !this.show;
    },
    async RecreateX() {
      for (let i = 0; i < 20; i++) {
        this.containerKey++;
        await timeout(100);
      }
    },
  },
  computed: {
    updateKey() {
      return [this.show, this.containerKey].join('_');
    },
  },
  watch: {
    updateKey: function() {},
  },
};
</script>
