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
            <input type="text" name="" required="true" v-model="passwords" />
            <label>Password</label>
          </div>
          <div class="user-box">
            <input type="text" name="" required="true" v-model="phoneNum" />
            <label>Telephone Number</label>
          </div>
        </form>
      </div>
      <special-btn class="signup" content="sign up" @click="signUp" />
    </el-main>
  </div>
</template>
<script>
import { ElMessage } from "element-plus";

import SpecialBtn from "@/components/SpecialBtn.vue";

import { signUp } from "../api/signUp";

export default {
  name: "ConcreteSignupView",
  components: {
    SpecialBtn,
  },
  data() {
    return {
      guestName: "",
      passwords: "",
      phoneNum: "",
    };
  },
  methods: {
    signUp: function () {
      if (
        this.guestName === "" ||
        this.passwords === "" ||
        this.phoneNum === ""
      ) {
        ElMessage.error(
          "None of username, password and telephone number can be null"
        );
        return;
      }
      signUp(
        this.guestName,
        this.passwords,
        this.$route.params.identity,
        this.phoneNum
      );
      ElMessage({
        message: "审核通过后会向您留下的手机号码发送短信通知，请近期留意",
        type: "success",
      });
    },
  },
};
</script>
<style scoped>
@import url("@/assets/css/input.css");
@import url("@/assets/css/loginBg.css");
.signup {
  margin-top: 15%;
  margin-left: 40%;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 15px;
}
.input {
  margin-top: 5%;
}
.space {
  width: 10px;
}
</style>
