<template>
    <div class="goodsDetail">
            <div class="img">
                <div>img</div>
            </div>
            <div class="overview">
                <div class="o-title">{{gDetail.name}}</div>
                <div class="o-desc">{{gDetail.desc}}</div>
                <div class="o-price">{{gDetail.price}}元</div>
            </div>
            <div class="selectParam">
                <div class="s-box">
                    <span class="s-box-sel">送至</span>
                    <div>
                        <span>厦门市 湖里区</span>
                        <font color="red">有现货 </font>
                    </div>
                    <span class="s-box-other">></span>
                </div>
                <div class="s-box">
                    <span class="s-box-sel">已选</span>
                    <div>
                        <span>{{gDetail.name}}</span>
                        <span>{{gDetail.choose.colorZh}}</span>
                        <span>*{{gDetail.choose.count}}</span>
                    </div>
                    <span class="s-box-other">></span>
                </div>
                <div class="s-contain">
                    <div class="s-contain-box" v-for="(item,index) in gDetail.promise">
                        <span class="s-check">√</span>
                        <span class="s-note">{{item}}</span>
                    </div>
                </div>
            </div>
            <div class="userComments">
                <div class="u-tilte">
                    <div class="u-1">用户评价({{gDetail.evaluate.count}})</div>
                    <div class="u-2">查看全部评价</div>
                </div>
                <div class="u-comment">
                    <span class="u-c-img">{{gDetail.evaluate.userImg}}</span>
                    <div class="u-c-reply">
                        <div>{{gDetail.evaluate.userId}}</div>
                        <div>{{gDetail.evaluate.evaDesc}}
                        </div>
                        <div class="u-c-reply-img">
                            <span v-for="v in gDetail.evaluate.evaDescImg">{{v.name}}</span>
                        </div>
                        <div>{{gDetail.evaluate.date}}</div>
                        <div class="u-c-reply-official">
                            <span>官方回复</span>：{{gDetail.evaluate.officialReply.content}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail">
                <div class="d-title">
                    <div><span>概述</span></div>
                    <div>参数</div>
                </div>
                <div class="d-detail">
                    <div>图片1</div>
                    <div>图片1</div>
                    <div>图片1</div>
                </div>
            </div>
            <shopfooter></shopfooter>   
    </div>
</template>
<script>
import shopfooter from "@/components/footer/shopfooter";
export default {
  data() {
    return {
      msg: "this is goods detail",
      id: null,
      gDetail: {
        addr: {},
        choose: {},
        evaluate: {
          officialReply: {}
        }
      }
    };
  },
  components: {
    shopfooter
  },
  created() {
    this.id = this.$route.query.gid;
  },
  mounted() {
    //这里模拟获取值，从本地json文件中获取，真实环境应从数据库中获取
    fetch("http://localhost:9001/static/data/detail.json")
      .then(res => res.json())
      .then(data => {
        this.gDetail = data.goodsdetail[this.id - 1];
      })
      .catch(function(err) {
        console.log("oops! error:", err.message);
      });
  }
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: white;
  color: black;
}
.goodsDetail {
  background-color: rgba(233, 229, 229, 0.856);
}
/****翻转图片*****/
.img div {
  height: 100px;
  padding: 1rem;
  text-align: center;
  background-color: white;
  box-shadow: 0 0 1rem rgba(68, 126, 233, 0.9) inset;
}
/****商品概览*****/
.overview {
  background-color: white;
  line-height: 1.7rem;
  padding-left: 1rem;
  margin-bottom: 0.6rem;
}

.overview .o-title {
  font-size: 1rem;
}
.overview .o-desc {
  font-size: 0.7rem;
  color: rgb(160, 151, 151);
  line-height: 1.2rem;
}
.overview .o-price {
  color: red;
}

/****选择参数*****/
.selectParam {
  background-color: white;
  position: relative;
  line-height: 1.3rem;
}
.selectParam .s-box {
  padding: 0.7rem 0;
  display: flex;
  border-bottom: 1px solid gray;
  margin: 0 0.7rem;
}
.selectParam .s-box .s-box-sel {
  color: gray;
  padding: 0.5rem;
}
.selectParam .s-box div {
  padding: 0.5rem;
}
.selectParam .s-box-other {
  position: absolute;
  padding: 0.5rem;
  right: 0;
  margin-right: 1rem;
}
.selectParam .s-contain {
  padding: 0.8rem 0;
  margin: 0 0.7rem;
  display: flex;
  font-size: 0.8rem;
}
.selectParam .s-contain-box {
  padding: 0.6rem;
}
.selectParam .s-check {
  border: 2px solid red;
  border-radius: 40%;
  color: red;
}

/****用户评价*****/
.userComments {
  margin-top: 0.5rem;
  background-color: white;
  padding: 0 0.7rem;
}
.userComments .u-tilte {
  display: flex;
  position: relative;
  padding: 0.7rem;
  border-bottom: 1px solid rgb(201, 198, 198);
}

.u-tilte .u-2 {
  padding: 0 0.5rem;
  position: absolute;
  right: 0;
}
.userComments .u-comment {
  position: relative;
  padding: 1rem;
  display: flex;
  font-size: 0.8rem;
  line-height: 1.2rem;
}
.u-comment .u-c-img {
  padding: 0.5rem;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 0.5rem;
  box-shadow: 0 0 1rem rgba(68, 126, 233, 0.9) inset;
}
.u-c-reply-img {
  margin: 1.3rem 0;
}
.u-c-reply .u-c-reply-img span {
  margin-right: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(68, 126, 233, 0.6) inset;
}
.u-c-reply .u-c-reply-official {
  background-color: rgb(243, 242, 242);
  padding: 0.6rem;
}
.u-c-reply-official span {
  color: red;
}
/****商品详情*****/
.detail {
  background-color: white;
  margin-top: 0.6rem;
  padding: 0.5rem;
}
.detail .d-title {
  display: flex;
  text-align: center;
}
.d-title div {
  flex: 1;
  margin-bottom: 1rem;
}
.d-title div span {
  padding-bottom: 0.5rem;
  border-bottom: 2px solid orange;
}
.detail .d-detail div {
  padding: 10rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 0 1rem rgba(68, 126, 233, 0.3) inset;
}
</style>
