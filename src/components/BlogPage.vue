<template>
  <el-container class="navigation">
    <el-aside>
      <el-avatar
        src="https://github.com/RiverUp/RiverUp.GitHub.io/blob/main/src/assets/avatar.JPG"
      />
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
          >
            <el-menu-item index="1">庸碌</el-menu-item>
            <el-menu-item index="2">badmin</el-menu-item>
            <el-menu-item index="3">瘦金</el-menu-item>
            <el-menu-item index="4">绮丽</el-menu-item>
            <el-menu-item index="5">喏</el-menu-item>
            <el-menu-item index="6">留言</el-menu-item>
            <el-menu-item index="7">关于我</el-menu-item>
          </el-menu>
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
export default {
  name: "BlogPage",
  data() {
    return {
      titles: [],
      currentTitle: "",
      comments: [],
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
  background-image: url("@/assets/image/backgroundimage.gif");
  background-size: 100% 100%;
  position: absolute;
  opacity: 0.45;
  width: 80%;
  height: 100%;
  overflow: hidden;
}
.el-header {
  text-align: center;
}
.el-menu {
  background-color: rgba(255, 255, 255, 0);
  padding-left: 10%;
}
.el-menu-item {
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
</style>
