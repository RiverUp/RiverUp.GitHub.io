<template>
  <div class="main">
    <el-main class="content">
      <div class="input">
        <form>
          <div class="user-box">
            <input type="text" name="" required="true" v-model="guestName" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              name=""
              required="true"
              v-model="passwords"
            />
            <label>Password</label>
          </div>
        </form>
      </div>
      <div class="choices">
        <special-btn class="login" content="login" @click="logIn" />
        <div class="space"></div>
        <special-btn class="sign up" content="sign up" @click="signUp" />
      </div>
    </el-main>
  </div>
</template>
<script>
import store from "@/store";
import router from "@/router";

import SpecialBtn from "@/components/SpecialBtn.vue";

import logIn from "../api/logIn";

export default {
  name: "ConcreteLoginView",
  components: {
    SpecialBtn,
  },
  data() {
    return {
      guestName: "",
      passwords: "",
    };
  },
  methods: {
    logIn: function () {
      var identity = this.$route.params.identity;
      logIn(this.guestName, this.passwords, identity).then((res) => {
        if (res.status === 200) {
          const token = res.data.token;
          localStorage.setItem("token", token);
          store.commit("setToken", token);
        }
      });
      router.push({ name: "home" });
    },
    signUp: function () {
      router.push({
        name: "concreteSignup",
        params: { identity: this.$route.params.identity },
      });
    },
  },
};
</script>
<style scoped>
@import url("@/assets/css/input.css");
@import url("@/assets/css/loginBg.css");
.choices {
  margin-top: 13%;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 15px;
}
.space {
  width: 10px;
}
</style>
