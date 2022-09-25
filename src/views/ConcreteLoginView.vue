<template>
  <div class="main">
    <el-main class="content">
      <div class="input">
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
        </form>
      </div>
      <div class="choices">
        <special-btn class="login" content="login" />
        <div class="space"></div>
        <special-btn class="sign up" content="sign up" />
      </div>
    </el-main>
  </div>
</template>
<script>
import SpecialBtn from "@/components/SpecialBtn.vue";
export default {
  name: "ConcreteLoginView",
  components: {
    SpecialBtn,
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
  font-size: 19px;
}
.space {
  width: 10px;
}
</style>
