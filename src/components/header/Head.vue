<template>
    <div class="header">
        <div class="h-content">
            <div class="back" v-on:click="goback()">返回</div>
            <div class="word">Elling商城</div>
            <div class="search">
                <div class="search-icon"></div>
                <input placeholder="search" class="search-input"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:"this is header msg"
        }
    },
    methods:{
        goback:function(){
            this.$router.go(-1);
        }
    }
}
</script>
<style>
    body{
        
    }
    .header{
        position: fixed;
        left: 0;
        width: 100%;
    }
    .header .h-content{
        background-color: orange;
        display: flex;
        padding: 0.6rem;
        width: 100%;
    }
    .back{
        padding: 0.2rem;
        border: 1px solid gray;
        margin-right: 1rem;
    }
    .word{
        padding: 0.2rem;
    }
    .search{
        position: absolute;
        right: 0.5rem;
        border:1px solid gray;
        display: flex;
        justify-content: flex-start;
        background-color: white;
        padding: 0.4rem;
        border-radius: 10%;
    }
    .search-icon{
        border: 2px solid gray;
        padding: 0.1rem 0.2rem;
        margin-right: 1rem; 
        border-radius: 50%;
        margin-bottom: 0.3rem;
    }
    .search-icon::after{
        content: '';
        border:1px solid gray;
        transform: rotate(135deg);
        position: absolute;
        left: 1rem;
        top: 0.7rem;
        height: 0.6rem;
    }
    .search-input{
        width: 6rem;
        border: 0px;
        color: gray;
        height: 0.8rem;
    }
    </style>





