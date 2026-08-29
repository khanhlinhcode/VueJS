<template>
  <div id="app">
    <CompHeader v-bind:text="title" />
    <ListUser :list-user="ListUser" @delete-user="handleDeleteUser" />
    <CompFooter v-bind:title="title" />
    <DemoRef />
  </div>
</template>
<!--
App
  component
    CompHeader
    ListUser
      User
      User
      User
      User
    CompFooter
- muốn truyền cái title bên retủn bên app này qua header thì ta sẽ dùng cái gì -> props
  + props được hiểu là một cơ chế truyền dữ liệu từ component cha sang component con
  + cú pháp
    <CompHeader :text="title" /> gần giống với thuộc tính -> những chuings ta phải ràng buộc thuộc tính đó
   + sử dụng v-bind để ràng buộc thuộc tính với dữ liệu trong component cha
 -->
<script>
import CompHeader from "./component/CompHeader.vue";
import CompFooter from "./component/CompFooter.vue";
import ListUser from "./component/ListUser.vue";
import DemoRef from "./DemoRef.vue";
export default {
  name: "app",
  data() {
    return {
      title: "Hello Vue.js--header",
      ListUser: [
        {
          id: 1,
          name: "Nguyen Van A",
          age: 20,
        },
        {
          id: 2,
          name: "Nguyen Van B",
          age: 21,
        },
        {
          id: 3,
          name: "Nguyen Van C",
          age: 22,
        },
        {
          id: 4,
          name: "Nguyen Van C",
          age: 22,
        },
        {
          id: 5,
          name: "Nguyen Van C",
          age: 22,
        },
        {
          id: 6,
          name: "Nguyen Van C",
          age: 22,
        },
        {
          id: 7,
          name: "Nguyen Van C",
          age: 22,
        },
        {
          id: 8,
          name: "Nguyen Van C",
          age: 22,
        },
      ],
    };
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser,
    DemoRef,
  },
  methods: {
    handleDeleteUser(userId) {
      this.ListUser = this.ListUser.filter((user) => user.id !== userId);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
