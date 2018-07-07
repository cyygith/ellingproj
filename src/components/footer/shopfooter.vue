<template>
    <div class="shop-footer" id="footer">
        <div class="s-f-content">
            <span>car</span>
            <div style="background-color: orangered">
                <router-link class="router-link" :to='{path:"addgoods",query:{id:gid}}'>
                    加入购物车
                </router-link>
            </div>
            <div style="background-color: red">
                <router-link class="router-link" to="/clearinggoods">
                    立即购买
                </router-link>
            </div>
        </div>
     </div>
</template>
<script>                                          
export default {
    data(){
            return {
                footer:['加入购物车','立即购买'],
                gid:null
            }
        },
    created(){
        this.gid = this.$route.query.gid;
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
/**footer部分样式****/
.shop-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid gray;
    background-color: white;
    color: white;
    font-size: 1.2rem;
}
.shop-footer .s-f-content{
    display: flex;
    justify-content: space-around;
}
.shop-footer .s-f-content span{
    color: black;
    padding: 1rem;
    text-align: center;
    background-color: lightblue;
}
.shop-footer .s-f-content div{
    text-align: center;
    flex:1;
    height: 1.5rem;
    padding: 1rem;
}
</style>