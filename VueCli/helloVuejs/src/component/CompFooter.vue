<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "comp-footer",
  props: {
    title: {
      type: String,
      default: "gia tri mac dinh",
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
