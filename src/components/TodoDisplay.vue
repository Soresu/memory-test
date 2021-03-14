<template>
  <div>
    <h2>Todos:</h2>
    <input v-model="filter" />
    <ol>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <label>
          {{ todo.text | shorten }}
        </label>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'todo-display',
  props: ['todosToDisplay'],
  data: function() {
    return {
      destroying: false,
      filter: '',
    };
  },
  mounted() {},
  computed: {
    filteredTodos() {
      let re = new RegExp(this.filter, 'ig');
      let t = this.todosToDisplay;
      return t.filter(f => re.test(f.text)).slice(0, 10);
    },
  },
  beforeDestroy() {
    console.log('todo-display', this.filteredTodos.length);
  },
};
</script>
