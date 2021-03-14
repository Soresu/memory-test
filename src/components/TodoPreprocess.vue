<template>
  <div><todo-display :todos-to-display="processedTodos"></todo-display></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'todo-preprocess',
  props: ['todosToPreprocess'],
  data: function() {
    return {
      localTodo: [],
    };
  },
  computed: {
    processedTodos() {
      let t = this.localTodo;
      return t.map(m => {
        return {
          ...m,
          text: m.text.toUpperCase(),
        };
      });
    },
  },
  watch: {
    todosToPreprocess: function(v) {
      this.localTodo = v;
    },
  },
  beforeDestroy() {
    console.log('todo-preprocess', this.processedTodos.length);
  },
};
</script>
