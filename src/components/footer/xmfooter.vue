<template>
    <div class="s-footer" id="footer">
        <div class="s-f-content">
        </div>
     </div>
</template>
<script>
export default {
    data(){
        return {
            footer:['首页','分类','发现','购物车','我的'],
            msg:'this is xmfooter'
        }
    }
}
</script>
<style scoped>
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
