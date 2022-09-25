<template>
  <a class="specialBtn"
    ><span>{{ content }}</span></a
  >
</template>
<script>
export default {
  name: "SpecialBtn",
  props: {
    content: String,
  },
};
</script>
<style scoped>
@import url("@/assets/css/button.css");
div {
  margin: 30%, 40%, 20%;
}
</style>
