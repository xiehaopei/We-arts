<template>
  <div class="container">
    <Nav></Nav>
    <div class="header">
      <h1 class="title">We-Arts</h1>
      <h3 class="subtitle">智者向内寻求力量</h3>
      <Icon class="links" />
    </div>
    <div class="article-list">
      <div class="article">
        <div class="article-img">
          <img src="/img/adventure.png" />
        </div>
        <div class="article-detail">
          <div class="title">Test</div>
          <div class="discribe">test-list1</div>
          <div class="tags"></div>
          <div class="footer">
            <div class="time">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-clock" />
              </svg>
              <span>2020-11-22</span>
            </div>
            <div class="visit">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-visit" />
              </svg>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <backTop></backTop>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.container {
	margin: 0 auto;
	width: 100%;
	min-height: 100vh;
	background-color: #f5f5fa;
	text-align: center;

	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 70vh;
		background: url(/img/index-bg.png);

		.title {
			display: block;
			font-family: "Quicksand", "Source Sans Pro", -apple-system,
			BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
			sans-serif;
			font-weight: 300;
			font-size: 1rem;
			color: #fff;
			letter-spacing: 1px;
		}

		.subtitle {
			padding-bottom: .15rem;
			font-weight: 300;
			font-size: .3rem;
			color: #fff;
			word-spacing: 5px;
		}

		.links {
			margin: 0 auto;
			padding-top: .15rem;
		}
	}

	.article-list {
		display: flex;
		flex-direction: column;
		flex: 1;
		margin: .1rem auto;
		width: 100%;
		max-width: 800px;

		.article {
			display: flex;
			overflow: hidden;
			flex-direction: column;
			margin-bottom: .3rem;
			border: 1px solid #f1f1f1;
			border-radius: .1rem;
			background-color: #fff;
			box-shadow: 0 0 10px #ddd;
			transition: box-shadow .3s ease;

			&-img {
				img {
					border-style: none;
					width: 100%;
					height: 1.5rem;
					object-fit: cover;
				}
			}

			&-detail {
				padding: .1rem;

				.title {
					font-size: .4rem;
          font-weight: bold;
				}

				.discribe {
					font-size: .2rem;
				}

				.tags {
					padding: .1rem;
				}

				.footer {
					display: flex;
					justify-content: flex-end;
					height: .3rem;
					line-height: .3rem;

					.icon {
							margin-right: 5px;
							width: 20px;
							height: 20px;
							vertical-align: middle;
							stroke-width: 1.33;
					}

					span {
						font-size: 15px;
            margin-right: 25px;
            vertical-align: middle;
					}
				}
			}

			&:hover {
				box-shadow: 0 0 20px #ddd;
			}
		}
	}
}
</style>
