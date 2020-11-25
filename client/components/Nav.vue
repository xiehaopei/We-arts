<template>
  <div>
    <div class="navIcon">
      <svg class="icon" aria-hidden="true" @click="toggle">
        <use :class="{ showMenu: !showMenu }" xlink:href="#icon-menu" />
        <use :class="{ showMenu: showMenu }" xlink:href="#icon-close" />
      </svg>
    </div>
    <div class="nav">
      <ul class="nav-list">
        <li v-for="item in navList" :key="item.url">
          <nuxt-link :to="item.url">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.icon" />
            </svg>
          {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
      <div class="quote">
        <p>&copy;2020 We-Arts.AllRightsReserved.</p>
        <p>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备2020108324号</a>
        </p>
        <p>Designed by Haopei Xie</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      navList: [
        {
          title: "Home",
          url: "/",
          icon:"#icon-home"
        },
        {
          title: "Articles",
          url: "/article",
          icon:"#icon-articles"
        },
        {
          title: "Archives",
          url: "/archives",
          icon:"#icon-archives"
        },
        {
          title: "TimeLine",
          url: "/timeLine",
          icon:"#icon-time"
        },
        {
          title: "Links",
          url: "/links",
          icon:"#icon-links"
        },
        {
          title: "About",
          url: "/about",
          icon:"#icon-about"
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.showMenu = !this.showMenu;
      const nav = document.querySelector('.nav');
      if(this.showMenu){
        nav.style.top = '0'
      }else{
        nav.style.top = '-100%'
      }
    },
  },
};
</script>

<style lang="scss">
.navIcon {
  position: fixed;
  right: 0.1rem;
  top: 0.1rem;
  z-index: 10000;
  .icon {
    width: 0.4rem;
    min-width: 24px;
    height: 0.4rem;
    min-height: 24px;
    background-color: #fff;
    cursor: pointer;

    > use {
      display: none;
      transform-origin: 50%;
      animation: menuRotate 0.25s;
    }

    .showMenu {
      display: block;
    }
  }
}

.nav {
  display: flex;
  position: fixed;
  left: 0;
  top: -100%;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.96);
  transition: top 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  .quote {
    display: block;
    position: absolute;
    bottom: 30px;
    width: 100%;
    padding-top: 10px;
    text-align: center;
    color: #999;
    p {
      font-size: 16px;
      a {
        color: #999;
      }
    }

    &::before {
      position: absolute;
      left: 50%;
      top: 0;
      border-bottom: 4px solid #666;
      width: 15%;
      content: '';
      transform: translateX(-50%);
    }
  }
  .nav-list {
    display: block;
    margin-top: -120px;
    width: 80%;
    text-align: center;
    li {
      display: inline-block;
      position: relative;
      list-style: none;
      margin: 0 20px 20px;
      a {
        cursor: pointer;
        font-size: 24px;
        color: #666;
        letter-spacing: 1px;
        &:hover {
          color: #222;
        }
        svg{
          width: 20px;
          height:20px;
        }
      }

      &::before {
        position: absolute;
        left: 100%;
        top: 0;
        border-bottom: 4px solid #f00;
        width: 0;
        height: 100%;
        content: '';
        transition: 0.2s all linear;
      }

      &:hover::before {
        left: 0;
        top: 0;
        z-index: -1;
        border-bottom-color: #1e88da;
        width: 100%;
        transition-delay: 0.1s;
      }
    }
  }
}

@keyframes menuRotate {
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(90deg);
  }
}
</style>
