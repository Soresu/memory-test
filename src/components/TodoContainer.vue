<template>
  <div><todo-preprocess :todos-to-preprocess="todos"></todo-preprocess></div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getTodosAjax } from '../utils/common';

export default {
  name: 'todo-container',
  props: [],
  data: function() {
    return {
      todos: [],
    };
  },
  async mounted() {
    let todos = await getTodosAjax();
    this.todos = Object.freeze(todos);
  },
  beforeDestroy() {
    console.log('todo-container', this.todos.length);
  },
};
</script>
