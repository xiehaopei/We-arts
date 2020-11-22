<template>
  <div>
    <button class="backtop" :class="{isBack}" @click="backTop">
      <svg class="icon" aria-hidden="true">
        <use class="icon-static" xlink:href="#icon-top" />
        <use class="icon-hover" xlink:href="#icon-top-hover" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isBack: '',
            timerTop: null,
            scrollTop: 0,
            fnScroll: () => {}
        }
    },
    mounted(){
        this.handleScroll()
        this.fnScroll = this.$throttle(this.handleScroll, 100)
        window.addEventListener('scroll', this.fnScroll)
    },
    destroyed(){
        window.removeEventListener('scroll', this.fnScroll)
    },
    methods: {
		handleScroll(){
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;            
      this.isBack = this.scrollTop >= 2000 ? 'isBack' : '';
		},
    backTop(){
      let osTopCache = 0;
      this.timerTop = setInterval(() => {
      const osTop = document.documentElement.scrollTop || document.body.scrollTop;
      const ispeed = Math.floor(-osTop / 6);
      if(osTopCache && osTopCache < osTop){
        clearInterval(this.timerTop)
        return
      } else {
        osTopCache = document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        if (osTop === 0) {
           clearInterval(this.timerTop)
           }
          }  
      }, 30)
    },
  }
}
</script>

<style lang="scss">
.backtop {
  position: fixed;
  right: 30px;
  bottom: 20px;
  z-index: 1;
  border: 1px solid #f1f1f1;
  border-radius: 50%;
  width: 0.4rem;
  min-width: 40px;
  height: 0.4rem;
  min-height: 40px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  cursor: pointer;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;

  .isBack {
    opacity: 1;
    visibility: visible;
  }

  .icon {
    &-hover {
      display: none;
    }

    &:hover {
      .icon-static {
        display: none;
      }
      .icon-hover {
        display: block;
      }
    }
  }
}
</style>