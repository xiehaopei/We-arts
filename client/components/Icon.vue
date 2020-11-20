<template>
  <div class="links">
    <a>
      <div class="tooltip">
        i15907678645
        <br />
        <img src="/img/we-chat-card.jpg" />
      </div>
      <svg class="icon" aria-hidden="true">
        <use class="icon-static" xlink:href="#icon-we-chat" />
        <use class="icon-hover" xlink:href="#icon-we-chat-hover" />
      </svg>
    </a>
    <a href="mailto:15907678645@163.com">
      <div class="tooltip">15907678645@163.com</div>
      <svg class="icon" aria-hidden="true">
        <use class="icon-static" xlink:href="#icon-email" />
        <use class="icon-hover" xlink:href="#icon-email-hover" />
      </svg>
    </a>
    <a href="https://github.com/xiehaopei/We-arts" target="_blank">
      <div class="tooltip">
        本项目的开源地址
        <br />有缘人来个star吧~
      </div>
      <svg class="icon" aria-hidden="true">
        <use class="icon-static" xlink:href="#icon-github" />
        <use class="icon-hover" xlink:href="#icon-github-hover" />
      </svg>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.links {
	display: flex;
	justify-content: space-around;
	width: 3rem;

	a {
		position: relative;

		&:hover {
			.tooltip {
				visibility: visible;
				opacity: 1;
			}
		}
	}
}
.icon {
	width: .4rem;
	height: .4rem;
	
	cursor: pointer;
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
.tooltip {
	visibility: hidden;
	position: absolute;
	left: 50%;
	bottom: 100%;
	margin-bottom: 20px;
	padding: 8px;
	border: 1px solid #54abff;
	border-radius: 5px;
	width: 180px;
	background: #74afe6;
	box-shadow: 0 0 10px #cbe6ff;
	opacity: 0;
	font-size: 14px;
	color: #fff;
	transform: translateX(-50%);
	transition: all .6s;

	&::before {
		position: absolute;
		left: 50%;
		bottom: 0;
		border: 10px solid transparent;
		border-top-color: #74afe6;
		content: "";
		transform: translate(-50%, 20px);
	}

	img {
		margin-top: 4px;
		border-radius: 4px;
		width: 100%;
		height: 100%;
	}
}
</style>
