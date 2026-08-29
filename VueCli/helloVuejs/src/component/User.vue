<template>
  <div class="user">
    <h1>{{ user.name }}:{{ user.age }}</h1>
    <button v-on:click="handleDelete" class="delete">Delete</button>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  methods: {
    handleDelete() {
      this.$emit("delete-user", this.user.id);
    },
  },
};
</script>

<style>
.user {
  position: relative;
}
.user .delete {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
