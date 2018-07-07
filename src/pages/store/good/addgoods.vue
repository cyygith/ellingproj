<template>
    <div class="addgoods">
        <div class="goodsreview-box">
            <div class="goodsreview">
                <div class="g-img">{{goodsDetail.img}}</div>
                <div class="g-desc">
                    <div>{{goodsDetail.desc}}</div>
                    <div>
                        <span class="g-d-span1">{{goodsDetail.currPrice}}元</span>
                        <span class="g-d-span2">{{goodsDetail.orginPrice}}元</span>
                        <span class="g-d-span3">直降{{goodsDetail.discount}}元</span>
                    </div>
                </div>
            </div>
            <div class="promotion">
                <span class="p-span-1">促销</span>
                <span class="p-span-2">满减</span>
                <span class="p-span-3">{{goodsDetail.promotion}}</span>
            </div>
        </div>

        <div class="goodsparam">
            <div class="g-properties">
                <div class="g-p-div1">颜色</div>
                <div class="g-p-div2">
                    <span :class="{'active':color.name ==goodSel.color}" v-for="(color,index) in goodsDetail.color" v-on:click="toggleColor(color.name)">{{color.zhname}}</span>
                </div>
            </div>
            <div class="g-properties">
                    <div class="g-p-div1">尺寸</div>
                    <div class="g-p-div2">
                        <span :class="{'active':v.name ==goodSel.inch }"  v-for="(v,index) in goodsDetail.inch" v-on:click="toggleInch(v.name)">{{v.zhname}}</span>
                    </div>
                </div>
            <div class="g-bay-count">
                <span class="g-b-c-span1">购买数量</span>
                <div class="g-b-c-div">
                    <span class="g-b-c-min" v-on:click="delCount()">－</span>
                    <span class="g-b-c-num">{{goodSel.count}}</span>
                    <span class="g-b-c-add" v-on:click="addCount()">＋</span>
                </div>
            </div>
        </div>
        <footer class="goodfooter" v-on:click="submitGood()">确定</footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            id:null,
            goodSel:{
                color:'',
                inch:'',
                count:1
            },
            goodsDetail:{
                color:{},
                inch:{}
            }
        }
    },
    created(){
        this.id = this.$route.query.id;
    },
    mounted(){
        //这里模拟获取值，从本地json文件中获取，真实环境应从数据库中获取
        let url = "http://localhost:9001/static/data/detail.json";
        fetch(url).then(res=>res.json()).then(data=>{
            this.goodsDetail = data.goods[this.id-1];
            console.log(this.goodsDetail);
        }).catch(function(err){
            console.log('oops,something wrong here:'+err);
        });
    },
    methods:{
        addCount:function(){
            if(this.goodSel.count<this.goodsDetail.store) this.goodSel.count++;
        },
        delCount:function(){
            if(this.goodSel.count>1) this.goodSel.count--;
        },
        toggleColor(color) {
            console.log("come in"+color);
            this.goodSel.color = color;
            console.log(this.goodSel.color);
        },
        toggleInch(inch) {
            this.goodSel.inch = inch
        },
        submitGood(){
            console.log("start to commit");
            console.log(this.goodSel);
        }
    }
}
</script>
<style>
body{
    margin: 0;
    padding: 0;
}
.active{
    color: orangered;
    border: 1px solid orangered !important;
}
/**主内容**/
.addgoods{
    position: relative;
    background-color: rgba(233, 229, 229, 0.856);
}
.goodsreview-box{
    background-color: white;
    margin-bottom: 0.4rem;
}
.goodsreview{
    padding: 1rem;
    display: flex;
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
}
.g-img{
    flex:1;
    padding:1rem;
    border: 2px solid gray;
    margin-right: 0.5rem;
}
.g-desc{
    flex:4;
    padding:0.6rem;
    line-height: 1.5rem;
}
.g-desc .g-d-span1{
    color: orangered;
    padding-right: 0.4rem;
}
.g-desc .g-d-span2{
    font-size: 0.8rem;
    color: gray;
    text-decoration: line-through;
    padding-right: 0.4rem;
    
}
.g-desc .g-d-span3{
    color: white;
    background-color: orangered;
    font-size: 0.8rem;
    
}
/***促销***/
.promotion{
    padding: 1rem;
}
.p-span-1{
    color: gray;
    font-size: 0.8rem;
    margin-right: 1rem;
}
.p-span-2{
    border: 1px solid red;
    color: red;
    font-size: 0.8rem;
}

/**属性**/
.goodsparam{
    background-color: white;
    padding: 1rem 0.5rem;
}
.g-properties{
    line-height: 2rem;
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
}
.g-p-div1{
    color: gray;
    margin: 0 0.3rem 0.5rem 0;   
}
.g-p-div2{
    margin-left: 0.5rem;  
    color: currentColor;
}
.g-p-div2 span{
    border: 1px solid gray;
    margin-right: 10px;
    padding: 0.3rem;
}
.g-p-div2 span:active,{
    color: orange;
    border: 1px solid orange;
}
.g-bay-count{
    position: relative;
    padding: 1rem;
    display: flex;
}
.g-b-c-span1{
    color: gray;
}
.g-b-c-div{
    position: absolute;
    right: 1rem;
    border: 1px solid black;
    display: flex;
}
.g-b-c-div span{
    padding: 0.2rem 0.6rem;
    flex: 1;
}
.g-b-c-div .g-b-c-min{
    border-right: 1px solid gray;
}
.g-b-c-div .g-b-c-num{
    border-right: 1px solid gray;
}
.goodfooter{
    color: white;
    background-color: orangered;
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
