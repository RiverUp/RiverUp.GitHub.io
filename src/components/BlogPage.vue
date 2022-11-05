<template>
  <el-container class="navigation">
    <el-aside>
      <el-avatar :src="imgUrl" />
      <div class="catalog"></div>
    </el-aside>
    <el-container class="blog">
      <div class="blogMain"></div>
      <el-header>
        <div class="menu">
          <el-menu
            mode="horizontal"
            @select="RouteToSortedBlog"
            text-color="black"
            active-text-color="purple"
          >
            <el-sub-menu index="1">
              <template #title><div class="sub-title">碎念</div></template>
              <el-menu-item index="1-1">庸碌</el-menu-item>
              <el-menu-item index="1-2">badmin</el-menu-item>
              <el-menu-item index="1-3">瘦金</el-menu-item>
              <el-menu-item index="1-4">绮丽</el-menu-item>
              <el-menu-item index="1-5">喏</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="2">留言</el-menu-item>
            <el-menu-item index="3">关于我</el-menu-item>
          </el-menu>
          <div class="icons">
            <el-icon><EditPen /></el-icon>
            <el-icon><Message /></el-icon>
            <el-icon><House /></el-icon>
          </div>
        </div>
      </el-header>
      <el-main>
        <p class="title">date or title</p>
        <div class="content"></div>
        <div class="comment"></div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { Message, EditPen, House } from "@element-plus/icons-vue";

export default {
  name: "BlogPage",
  components: {
    Message,
    EditPen,
    House,
  },
  data() {
    return {
      titles: [],
      currentTitle: "",
      comments: [],
      imgUrl: "../assets/image/avatar.JPG",
    };
  },
  methods: {
    RouteToSortedBlog() {},
  },
};
</script>
<style scoped>
.el-container {
  height: 100%;
}
.el-avatar {
  margin-top: 1rem;
  height: 4rem;
  width: 4rem;
}
.el-aside {
  text-align: center;
  background-color: rgba(224, 224, 217, 0.5);
  width: 20%;
}
.blog {
  background-color: rgba(255, 255, 255, 0.65);
  background-repeat: no-repeat;
  background-size: 100%, 100%;
  font-family: "blogMain";
  color: black;
}
.blogMain {
  background-image: url("@/assets/image/backgroundimage1.gif");
  background-size: 50% 100%;
  position: absolute;
  opacity: 0.45;
  width: 80%;
  height: 100%;
  overflow: hidden;
}
.el-header {
  text-align: center;
  font-family: "navigator";
}
.el-menu {
  background-color: rgba(255, 255, 255, 0);
  padding-left: 20%;
}
.sub-title {
  font-size: 18px;
}
/* .el-sub-menu {
  font-size: 25px;
  font-family: "navigator";
}*/
.el-menu-item,
.el-sub-menu {
  font-size: 18px;
  font-family: "navigator";
}
.el-main {
  padding-top: 8px;
}
.title {
  text-align: center;
  margin-top: 0%;
  font-size: 28px;
  font-weight: bold;
}
.icons {
  position: fixed;
  z-index: 2;
  left: 85%;
  top: 2%;
}
.el-icon {
  padding: 10px;
}
</style>
