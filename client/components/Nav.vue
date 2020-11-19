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
          <a>{{ item.title }}</a>
        </li>
      </ul>
      <div class="quote">
        <span>Everywhere in the world has a similar life.</span>
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
          url: "/index",
        },
        {
          title: "Article",
          url: "/article",
        },
        {
          title: "Archives",
          url: "/archives",
        },
        {
          title: "TimeLine",
          url: "/timeLine",
        },
        {
          title: "Links",
          url: "/links",
        },
        {
          title: "About",
          url: "/about",
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.showMenu = !this.showMenu;
      const nav = document.getElementsByClassName('nav')[0];
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
    text-align: center;
    color: #999;
    span {
      font-size: 16px;
    }
  }
  .nav-list {
    display: block;
    margin-top: -120px;
    width: 80%;
    text-align: center;
    li {
      display: inline-block;
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
