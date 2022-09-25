<template>
  <div class="main">
    <div class="identity">
      <ul>
        <li>
          <a href="#/login/myself" class="round myself"
            >孤<span class="round"
              ><p>天上天下</p>
              <p>唯我独尊</p></span
            ></a
          >
        </li>

        <li>
          <a href="#/login/relate" class="round relate"
            >至亲<span class="round"
              ><p>竹报平安</p>
              <p>点花番次</p></span
            ></a
          >
        </li>
        <li>
          <a href="#/login/friend" class="round friend"
            >挚友<span class="round">
              <p>谁知江上酒</p>
              <p>还与故人倾</p></span
            ></a
          >
        </li>
        <li>
          <a href="#" class="round guest"
            >过客<span class="round"
              ><p>人生如逆旅</p>
              <p>我亦是行人</p></span
            ></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "LogIn",
};
</script>
<style scoped>
@import url("@/assets/css/loginMenu.css");
@import url("@/assets/css/loginBg.css");
.identity {
  margin-top: 20%;
}
</style>
