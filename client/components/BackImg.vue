<template>
  <div id="scene" :style="{height:boxH}">
      <div class="layer" data-depth="0.4" :style="layerStyle">
        <img id="image" :style="imgStyle" :src="image" width="1920" height="1080" />
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layerStyle: {},
      imgStyle: {},
      boxH: "100%"
    };
  },
  methods: {
    // Cover image init
    init() {
      this.boxH = document.documentElement.clientHeight + "px";
      this.boxW = document.documentElement.clientWidth + "px";
      this.coverLayer();
    },
    // Cover image box calculation
    coverLayer() {
      const id = document.getElementById("scene");
      const _w = parseInt(this.boxW);
      const _h = parseInt(this.boxH);
      let x;
      let y;
      let i;
      const e = _w >= 1000 || _h >= 1000 ? 1000 : 500;

      if (_w >= _h) {
        i = (_w / e) * 50;
        y = i;
        x = (i * _w) / _h;
      } else {
        i = (_h / e) * 50;
        x = i;
        y = (i * _h) / _w;
      }
      const style = {
        width: _w + x + "px",
        height: _h + y + "px",
        marginLeft: -0.5 * x + "px",
        marginTop: -0.5 * y + "px"
      };
      this.layerStyle = Object.assign({}, this.layerStyle, style);
      this.coverImg();
    },
    // Cover image size calculation
    coverImg() {
      const width = parseInt(this.layerStyle.width);
      const height = parseInt(this.layerStyle.height);
      const ratio = 1080 / 1920;
      const style = {};

      const compute = height / width > ratio;

      style['width'] = compute ? height / ratio + "px" : `${width}px`;
      style['height'] = compute ? `${height}px` : width * ratio + "px";

      style['left'] = (width - parseInt(style.width)) / 2 + "px";
      style['top'] = (height - parseInt(style.height)) / 2 + "px";

      this.imgStyle = Object.assign({}, this.imgStyle, style);
    }
  }
}
</script>