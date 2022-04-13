<template>
  <div class="type-nav">
    <div class="container">
        <div  @mouseenter="enterShow" @mouseleave="enterLeave">
      <h2 class="all">全部商品分类</h2>
      <transition name="sort">
      <div class="sort" v-show="show" >
        <div class="all-sort-list2" @click="goSearch">
          <div
            class="item"
            v-for="(c1, index) in categoryList"
            :key="c1.categoryId"
          >
            <h3
              @mouseenter="changeIndex(index)"
              @mouseleave="removeIndex"
              :class="{ cur: currentIndex == index }"
            >
              <a
                :data-categoryName="c1.categoryName"
                :data-category1id="c1.categoryId"
                >{{ c1.categoryName }}-----{{ index }}</a
              >
            </h3>
            <div
              class="item-list clearfix"
              :style="{ display: currentIndex == index ? 'block' : 'none' }"
            >
              <div class="subitem">
                <dl
                  class="fore"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dt>
                    <a
                      :data-categoryName="c2.categoryName"
                      :data-category2id="c2.categoryId"
                      >{{ c2.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <em
                      v-for="(c3, index) in c2.categoryChild"
                      :key="c3.categoryChild"
                    >
                      <a
                        :data-categoryName="c3.categoryName"
                        :data-category3id="c3.categoryId"
                        >{{ c3.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          </div>
        </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  name: "typeNav",
  data() {
    return {
      currentIndex: -1,
      show: true
    };
  },
  mounted() {
    this.$store.dispatch("categoryList");
    // 如果是路径是search，那就隐藏
    if(this.$route.path=='/search') {
        this.show = false;
    }
    
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
  methods: {
    changeIndex: throttle(function (index) {
      //节流 ：防止用户行为过快导致浏览器反应不过来而出现卡顿现象（如果有大业务的情况下）
      this.currentIndex = index;
    }, 50),
    removeIndex() {
      this.currentIndex = -1;
    },
    goSearch(event) {
      // event.target 获取到当前点击事件的节点 [a,h3......]
      // event.target.dataset 获取到该节点的自定义属性与属性值
      let element = event.target.dataset;
      let { categoryname, category1id, category2id, category3id } = element;
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.categoryId = category1id;
        } else if (category2id) {
          query.categoryId = category2id;
        } else if (category3id) {
          query.categoryId = category3id;
        }
        location.query = query;
        this.$router.push(location);
      }

      // 注意点击的是a标签，但是a标签是在h3里面的
      // 如果拥有这个属性那么是a标签
      
    },
    enterShow() {
        this.show = true
    },
    enterLeave() {
        if(this.$route.path=='/search') {
            this.show = false;
        }
    }
  },
};
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }

    //sort为transition的名字 -enter表示动画开始时（进入阶段）
    .sort-enter {
        height: 0;
    }
    // 动画结束
    .sort-enter-to {
        height: 46px;
    }
    //定义动画时间和速率
    .sort-enter-active {
        transition: all 0.03s linear;
    }

  }
}
</style>