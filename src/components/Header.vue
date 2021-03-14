<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/other">Other</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'my-header',
  data() {
    return {};
  },
  mounted() {},
  created() {},
  methods: {},
  computed: {
    ...mapGetters({}),
  },
  watch: {},
  components: {},
};
</script>
