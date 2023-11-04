<template>
  <BlogPage />
  <body></body>
</template>

<script>
// @ is an alias to /src
import BlogPage from "@/components/BlogPage.vue";

export default {
  name: "HomeView",
  components: {
    BlogPage,
  },
};
</script>
