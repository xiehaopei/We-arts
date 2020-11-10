<template>
  <div class="links">
    <a>
      <svg class="icon" aria-hidden="true">
        <use class="icon-static" xlink:href="#icon-qq" />
        <use class="icon-hover" xlink:href="#icon-qq-hover" />
      </svg>
    </a>
    <a>
      <svg class="icon" aria-hidden="true">
        <use class="icon-static" xlink:href="#icon-email" />
        <use class="icon-hover" xlink:href="#icon-email-hover" />
      </svg>
    </a>
    <a>
      <svg class="icon" aria-hidden="true">
        <use class="icon-static" xlink:href="#icon-github" />
        <use class="icon-hover" xlink:href="#icon-github-hover" />
      </svg>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.links{
  display: flex;
  justify-content: space-around;
  width: 50%;
}
.icon {
  cursor: pointer;

  &-hover {
    display: none;
  }

  &:hover{
    .icon-static{
      display: none;
    }
    .icon-hover{
      display: block;
    }
  }
}
</style>
