<template>
    <div class="store" id="store">
        <div class="s-left">
            <div class="s-l-content">
                <div v-for="(item,index) in menu"><a v-bind:href="'#'+item">{{item}}</a></div>
            </div>
        </div>
        <div class="s-content">
            <div class="s-c-p-box">
                <div class="s-c-box" v-for="item in menuItems">
                    <div class="s-c-title" v-bind:id="item.name">
                        <span>--</span>
                        <span>{{item.name}}</span>
                        <span>--</span>
                    </div>
                    <div class="s-c-content">
                        <span v-for="v in item.childs">{{v}}</span>
                    </div>
                </div>
                <div class="s-c-box" id="test">
                    <div class="s-c-title">
                        <span>--</span>
                        <span v-bind:click="getMenu()">测试</span>
                        <span>--</span>
                    </div>
                    <div class="s-c-content">
                        <span>测试1</span>
                        <span>测试1</span>
                        <span>测试1</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="s-footer">
           <div class="s-f-content">
               <div v-for="item in footer"> {{item}}</div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
                menu:['新品','手机','电视','电脑','家电','家装','路由','智能','儿童','灯具','电源','耳机','音箱','礼品','生活','服务','会员卡','米粉卡','零售店'],
                menuItems:[{name:'新品',childs:['小米8','小米6','小米MIX','红米S2','红米6Pr','红米6']},
                {name:'手机',childs:['小米8','小米6','小米MIX','红米S2','红米6Pr','红米6']},
                {name:'电视',childs:['小米8','小米6','小米MIX','红米S2','红米6Pr','红米6']},
                {name:'电脑',childs:['小米8','小米6','小米MIX','红米S2','红米6Pr','红米6']},
                {name:'家电',childs:['小米8','小米6','小米MIX','红米S2','红米6Pr','红米6']},
                {name:'家装',childs:['小米8','小米6','小米MIX','红米S2','红米6Pr','红米6']},
                {name:'路由',childs:['小米8','小米6','小米MIX','红米S2','红米6Pr','红米6']},
                {name:'智能',childs:['剃须刀','智能家庭','VR眼镜','摄像机','智能插座','尤克里里']},
                {name:'儿童',childs:['小米8','小米6','小米MIX','红米S2','红米6Pr','红米6']}],
                footer:['首页','分类','发现','购物车','我的']
            }
    },
    methods:{
            getMenu:function(){
                console.log("here....");
                //Vue.http.get('./menudata.json');
                // this.$http.get('./menudata.json').then(success=>{
                //     console.log("成功："+success);
                // },err=>{
                //     console.log("失败"+err);
                // })
            }
        }
}
</script>
<style>
.store{
    background-color: black;
    color: white;
    position: relative;
    display: flex;
}
/**左边菜单栏****/
.s-left{
    position: fixed;left: 0;top: 0;
    width: 25%;height: 90%;
    margin-bottom: 10%;
    margin-right: 10px;
    border-right: 1px solid gray;
    overflow: auto;
}
.s-left .s-l-content{
    display:flex;
    flex-direction: column;
    padding: 4px;
    overflow: auto;
}
.s-left .s-l-content div{
    text-align: center;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
}
.s-l-content a{
    text-decoration: none;
    color:white;
}
/**内容页****/
.s-content{
    margin-left: 27%;
    width: 100%;
    height: 100%;
}
.s-content .s-c-p-box{
    overflow: auto;
    height: 90%;
}
.s-content .s-c-box{
    border-bottom: 1px solid gray;
}
.s-content .s-c-box .s-c-title{
    margin-top: 1rem;
    text-align: center;
}
.s-content .s-c-box .s-c-content{
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-around;
}
.s-content .s-c-box .s-c-content span{
    padding: 1rem;
    margin-right: 5px;
    border-radius: 40%;
}
/**footer部分样式****/
.s-footer{
    position: fixed;
    bottom: 0;
    right: 0.5rem;
    left: 0.5rem;
    width: 100%;
    border-top: 1px solid gray;
}
.s-footer .s-f-content{
    display: flex;
    justify-content: space-around;
    padding: 4px;
}
.s-footer .s-f-content div{
    height: 2.375rem;
    line-height: 2.375rem;
    border-radius: 45%;
    text-align: center;
}
</style>