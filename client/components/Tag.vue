<template>
  <div class="tag">
    <span>{{this.tagName}}</span>
  </div>
</template>

<script>
export default {
  props:["color","tagName"],
  mounted() {
    this.$nextTick(()=>{
      const tag = document.querySelector(".tag");
      tag.style.background = this.color;
      console.log(tag.style.background)
    })
  }
}
</script>

<style lang="scss">
.tag {
  margin: 0 10px;
  padding: 3px 10px;
  border-radius: 20px;
  width: fit-content;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  background-color: #ddd;
  color: #fff;
}
</style>