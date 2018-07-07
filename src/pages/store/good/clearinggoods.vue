<template>
    <div class="clearinggoods">
        <div class="goodsdetail">
            <div class="goodsdetail-div">购物清单</div>
            <div class="goodsdetail-div1">
                <span class="gd-span1">图片</span>
                <span class="gd-span2">米家wiha精修螺旋丝到套装 灰色</span>
                <span class="gd-span3">1*<font style="color: red;">99元</font></span>
            </div>
        </div>
        <div class="prop">
            <div class="prop-div1">收货地址</div>
            <div class="prop-div2">
                添加收货地址
                <span>></span>
            </div>
        </div>
        <div class="prop">
            <div class="prop-div1">配送时间</div>
            <div class="prop-div2">不限配送时间<span>></span></div>
        </div>
        <div class="prop">
            <div class="prop-div1">发票信息</div>
            <div class="prop-div2">请添加发票信息<span>></span></div>
        </div>
        <div class="prop">
            <div class="prop-div1">优惠券</div>
            <div class="prop-div2">未使用优惠券<span>></span></div>
        </div>
        <div class="order">
            <div class="order-bill">
                <span class="o-b-span">订单金额</span>
                <span class="o-b-span2"><font color="gray">应付</font>109.00元</span>
            </div>
            <div class="order-bill">
                <span class="o-b-span">商品总价</span>
                <span class="o-b-span2">99.00元</span>
            </div>
            <div class="order-bill">
                <span class="o-b-span">运费</span>
                <span class="o-b-span2">10.00元</span>
            </div>
        </div>
        <div class="tips">
            <span class="img">!</span>
            <span>您还没有填写收货地址，点击添加</span>
        </div>
        <footer class="goodfooter">使用微信支付</footer>
    </div>
</template>
<script>
export default {
    date(){
        return {
            msg:'this is chearinggoods...'
        }
    }
}
</script>
<style scoped>
.clearinggoods{
    background-color: lightgray;
    position: relative;
}
.goodsdetail{
    background-color: white;
    padding:1rem 0;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
}
.goodsdetail-div{
    padding: 0.5rem;
    border-bottom: 1px solid rgb(199, 192, 192);
}
.goodsdetail-div1{
    padding: 1rem;
    position: relative;
    font-size: 0.8rem;
}
.gd-span1{
    padding: 0.7rem;
    border: 1px solid yellow;
    margin-right: 0.5rem;
    box-shadow: 0 0 1rem rgba(83, 167, 223, 0.705) inset;
}
.gd-span3{
    position: absolute;
    right: 1rem;
}
/*****收货地址等属性*****/
.prop{
    padding: 0.7rem 0 0.5rem 0;
    background-color: white;
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
}
.prop-div1{
    padding: 0.3rem;
    border-bottom: 1px solid lightgray;
}
.prop-div2{
    color: gray;
    padding: 0.5rem 0 0.3rem 0.3rem;
    font-size: 0.8rem;
    position: relative;
}
.prop-div2 span{
    position: absolute;
    right: 1rem;
}
/****订单金额******/
.order{
    background-color: white;
    line-height: 1.5rem;
    position: relative;
    padding-bottom: 2.5rem;
}
.order-bill{
    padding: 0.7rem 0 0.5rem 0.5rem;
    border-bottom: 1px solid lightgray;
}

.o-b-span2{
    position: absolute;
    right: 1rem;
    color: red;
}
.tips{
    position: fixed;
    bottom: 3.5rem;
    background-color: rgba(245, 245, 21, 0.7);
    color: brown;
    padding: 0.7rem 0.3rem;
    width: 100%;
    font-size: 0.8rem;
}
.tips .img{
    padding: 0.2rem 0.6rem;
    background-color: red;
    color: white;
    border-radius: 50%;
    margin-right: 0.2rem;
}
.goodfooter{
    color: white;
    background-color: greenyellow;
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
    height: 1.5rem;
    padding: 1rem;
    letter-spacing: 1rem;
    font-size: 1.2rem;
}
</style>


