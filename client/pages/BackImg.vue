<template>
  <div id="scene">
    <div class="layer" data-depth="0.4" >
      <img src="/img/sky-bird.jpg" width="1920" height="1080" />
    </div>
  </div>
</template>

<script>
import Parallax from 'parallax-js';
export default {
  mounted() {
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';
    // Cover image init
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      clipRelativeInput: true,
    });
  }
}
</script>

<style lang="scss" scoped>
#scene {
  height: 100%;
  position: relative;
  overflow: hidden;
  #image {
    position: absolute;
    max-width: none;
    display: block;
  }
}
</style>