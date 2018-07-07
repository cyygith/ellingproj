<template>
    <div class="store" id="store">
        <div class="main">
            <div class="s-left">
                <div class="s-l-content">
                    <div v-for="(item,index) in menu"><a v-bind:href="'#'+item.alias">{{item.name}}</a></div>
                </div>
            </div>
            <div class="s-content">
                <div class="s-c-p-box">
                    <div class="s-c-box" v-for="item in menu">
                        <div class="s-c-title" v-bind:id="item.alias">
                            <span>--</span>
                            <span>{{item.name}}</span>
                            <span>--</span>
                        </div>
                        <div class="s-c-content">
                            <span v-for="v in item.childs">
                                <router-link  class="router-link" :to='{path:"/goodsdetail",query:{gid:v.id}}'>
                                
                                <!--<router-link class="router-link" v-bind:to="{path:'/goodsdetail',query{id:item.id}}">-->
                                    {{v.name}}
                                </router-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="s-footer">
           <div class="s-f-content">
               <div  v-for="item in footer"> 
                   <div class="s-f-img"></div>
                   <div class="s-f-font">
                       <router-link  class="router-link" :to='{path:item.path}'>
                           {{item.name}}
                       </router-link>
                   </div>
                </div>
           </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
                menu:[],
                menuItems:[],
                footer:[]
            }
    },
    components:{
        
    },
    mounted:function(){
        fetch("http://localhost:9001/static/data/menudata.json").then(res=>res.json())
                .then(data=>{
                    this.menu = data.menu;
                    this.footer = data.footer;
                }).catch(function(err){
                    console.log('oops! error:',err.message);
                });
    },
    methods:{
            getMenu:function(){}
        }
}
</script>
<style>
body{
    margin: 0;
    padding: 0;
}
.router-link{
    color: currentColor;
    text-decoration: none;
}
.store{
    position: relative;
}
.main{
    display: flex;
}
/**左边菜单栏****/
.s-left{
    position: fixed;
    flex: 1;
    height: 82%;
    width: 25%;
    overflow: auto;
    border-right: 1px solid gray;
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
    color: currentColor;
}

/**内容页****/
.s-content{
    position: fixed;
    left: 26%;
    width: 90%;
    height: 82%;
    flex: 6;
    overflow: auto;
}
.s-content .s-c-p-box{
    overflow: auto;
}
.s-content .s-c-box{
    border-bottom: 1px solid gray;
    width: 80%;
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
    width:100%;
    height: 10%;
    border-top: 1px solid gray;
}
.s-footer .s-f-content{
    display: flex;
    justify-content: space-around;
    padding: 1rem;
}
.s-f-img{
    height: 0.4rem;
    width: 0.4rem;;
    padding: 0.4rem;
    margin-left: 0.4rem;
    box-shadow: 0 0 1rem rgba(100, 100, 255, 0.7) inset;
}
.s-footer .s-f-content .s-f-font{
    height: 4rem;
    border-radius: 45%;
    text-align: center;
}
</style>