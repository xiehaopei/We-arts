<template>
  <div class="tags">
    <div class="tag" v-for="(tag,index) in tags" :key="index">
      <a>{{tag.tagName}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props:["tags"],
  mounted() {
      const tags = document.querySelectorAll(".tag");
      tags.forEach((tag,index)=>{
        console.log(tag,index)
        tag.style.background = this.tags[index].bgcolor;
      })
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  justify-content: flex-start;
  padding: 0.1rem;
  font-size: 0.4rem;

  .tag {
    margin: 0 10px;
    padding: 3px 10px;
    border-radius: 20px;
    width: fit-content;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    background-color: #ddd;
    cursor: pointer;
    color: #fff;
  }
}
</style>