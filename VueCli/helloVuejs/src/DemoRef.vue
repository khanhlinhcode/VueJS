<template>
  <div class="demo-ref">
    <h1>Demo Ref</h1>
    <button v-on:click="handleClickInputFile" class="avatar">
      thay doi avatar
    </button>
    <input ref="fileInputAvatar" type="file" style="display: none" />
  </div>
</template>

<script>
export default {
  name: "demo-ref",
  data() {
    return {};
  },
  components: {},
  methods: {
    handleClickInputFile(e) {
      this.$refs.fileInputAvatar.click();
    },
  },
};
</script>

<style>
.demo-ref {
  margin-top: 100px;
  padding: 100px 30px;
  border: 1px solid #0000;
}
.avatar {
  color: #fff;
  border: 2px solid #333;
  padding: 12px 15px;
  background-color: #333;
  transition: all 0.3s ease-in-out;
}
.avatar:hover {
  background-color: #fff;
  color: #333;
}
</style>
