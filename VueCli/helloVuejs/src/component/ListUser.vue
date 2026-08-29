<template>
  <div>
    <div class="list-user">
      <User
        v-for="user in listUser"
        v-bind:key="user.id"
        v-bind:user="user"
        v-on:delete-user="deleteUser"
      />
    </div>
  </div>
</template>

<script>
//  App -> truyen data arrayuser in list -> list run for -> render user
//  user -> truyền event thông báo cho listuser
// listUser cũng không được quyền thay đổi araylistuser -> tiếp theo đó truyền event ra ngoài app cha
//
import User from "./User.vue";
export default {
  name: "list-user",
  props: {
    listUser: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  components: {
    User,
  },
  methods: {
    deleteUser(userId) {
      this.$emit("delete-user", userId);
    },
  },
};
</script>

<style></style>
