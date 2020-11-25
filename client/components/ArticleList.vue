<template>
  <div class="article-list">
    <div class="article">
      <div class="article-img">
        <img src="/img/adventure.png" />
      </div>
      <div class="article-detail">
        <div class="title">Test</div>
        <div
          class="discribe"
        >贾宝玉病加重，直至奄奄一息，癞头僧持通灵宝玉引他入太虚幻境变形的真如福地梦中。梦醒后发奋读书。次年参加乡试，中第七名举人。宝钗已有身孕，而贾宝玉应试后走失。贾政扶贾母灵柩至金陵安葬，将归京城，雪中泊舟常州毗陵驿。见一人来到船头，光头赤足，披大红猩猩毡斗篷，向贾政倒身拜了四拜，站起来打了个问讯，细视之，正是贾宝玉。贾政忙问，贾宝玉却不言语，似喜似悲。贾政再问，贾宝玉未及回答，忽被一僧一道左右夹住飘然登岸而去，闻其作歌云“归大荒”。贾政追之不及，“只见白茫茫一片旷野”而已。后人见了这本小说，亦题诗一绝云：“说到辛酸处，荒唐愈可悲。由来同一梦，休笑世人痴！”</div>
        <Tags :tags="articleList.tags"></Tags>
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
</template>

<script>
export default {
  props:["articleList"]
}
</script>

<style lang="scss" scoped>
.article-list {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0.1rem auto;
  width: 98%;
  max-width: 800px;

  .article {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    margin-bottom: 0.3rem;
    border: 1px solid #f1f1f1;
    border-radius: 0.1rem;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    transition: box-shadow 0.3s ease;

    &-img {
      img {
        border-style: none;
        width: 100%;
        height: 1.5rem;
        object-fit: cover;
      }
    }

    &-detail {
      padding: 0.1rem;
      text-align: left;

      .title {
        padding: 0 0.1rem;
        font-weight: bold;
        font-size: 0.4rem;
      }

      .discribe {
        display: -webkit-box;
        overflow: hidden;
        padding: 0 0.1rem;
        max-height: 0.5rem;
        line-height: 0.25rem;
        font-size: 0.15rem;
        text-overflow: ellipsis;
        word-wrap: break-word;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .footer {
        display: flex;
        justify-content: flex-end;
        height: 0.3rem;
        line-height: 0.3rem;

        .icon {
          margin-right: 5px;
          width: 20px;
          height: 20px;
          vertical-align: middle;

          stroke-width: 1.33;
        }

        span {
          margin-right: 25px;
          vertical-align: middle;
          font-size: 15px;
        }
      }
    }

    &:hover {
      box-shadow: 0 0 20px #ddd;
    }
  }
}
</style>