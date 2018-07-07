<template>
    <div class="login" id="login">
        <div class="topic">欢迎光临</div>
        <div class="logintype">
            <div class="lt-title">
                <div v-bind:class="{'msglogin':loginflag}" v-on:click="changeLoginType(1)">短信登录</div>
                <div v-bind:class="{'msglogin':!loginflag}" v-on:click="changeLoginType(2)">密码登录</div>
            </div>
            <div class="lt-content" v-if="loginflag">
                <div class="item-div">
                    <input id="phonenum" placeholder="手机号"/>
                    <span>获取验证码</span>
                </div>
                <div class="item-div">
                    <input id="captcha" placeholder="验证码"/>
                </div>
                <div>温馨提示：未注册elling账号的手机，登录时将自动注册，且代表您已经同意<font color="blue">《用户服务协议》</font></div>
            </div>
            <div class="lt-content" v-if="!loginflag">
                <div class="item-div">
                    <input id="phonenum" placeholder="手机/邮箱/用户名"/>
                </div>
                <div class="item-div">
                    <input id="pwd" placeholder="密码"/>
                    <div class="switch">
                        <input id="yy-toggle-1" v-model="pwdshow" class="yy-toggle yy-toggle-round" type="checkbox">
                        <label for="yy-toggle-1"></label>
                    </div>
                </div>
            </div>
            <div class="login-button">登录</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg: 'this is login page',
            loginflag:true,
            pwdshow:true,
            user:{
                loginid:'',
                phonenum:'',
                chaptar:''
            }
        }
    },
    methods:{
        changeLoginType:function(type){ 
            switch(type){
                case 1 : this.loginflag = true;break;
                case 2 : this.loginflag = false;break;
            }
        },
    }
}
</script>
<style>
.login{
   
}
.topic{
    margin: 4rem 6rem 0 6rem;
    border: 1px solid white;
    padding: 2rem;
    box-shadow: 0 0 4rem rgba(176, 200, 231, 0.6) inset;
    text-align: center;
}
.logintype{
    margin:2rem;
}
.lt-title{
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    margin-bottom: 1rem;
}
.msglogin{
    border-bottom: 2px solid orangered;
    padding-bottom: 0.8rem;
}
.item-div{
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    border: 1px solid gray;
    margin-bottom: 1rem;
}
.item-div input{
    padding-right: 1rem;
    border: 0px;
    height: 2rem;
}
.item-div span{
    padding: 0.4rem;
    position: absolute;
    right: 3rem;
}
/***简单切换显示密码样式（no finished）******/
.c-o-span{
    position: absolute;
    right: 3rem;
    border: 1px solid black;
    border-radius: 60px;
    padding: 0.2rem 0rem;
}
.c-o-span::before{
    content: '';
    width: 1rem;
    height: 1rem;
    padding: 0.2rem 0.8rem;
    border: 1px solid blue;
    border-radius: 60px;
}
/***切换显示密码样式（a little more long,late need optimization）******/
.switch{
    position: absolute;
    right: 3rem;
    padding-top: 0.5rem;
}
.yy-toggle{
    position: absolute;
    margin-left: -99999px;
    visibility: hidden;
}
.yy-toggle + label{
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
}
input.yy-toggle-round + label{
    padding: 2px;
    width: 2rem;
    height: 1rem;
    background-color: #dddddd;
    border-radius: 60px;
}
input.yy-toggle-round + label::before,input.yy-toggle-round + label::after{
    display: block;
    position: absolute;
    top: 1px;left:1px;bottom:1px;content: '';
}
input.yy-toggle-round + label::before{
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 60px;
    transition: background 0.4s;
}
input.yy-toggle-round + label::after{
    width:0.9rem;
    background-color: #ffffff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: margin 0.4s;
}
input.yy-toggle-round:checked + label::before{
    background-color: #8ce196;
}
input.yy-toggle-round:checked + label::after{
    margin-left: 1.2rem;
}
/*******提交按钮******/
.login-button{
    margin-top: 1rem;
    background-color: rgb(129, 236, 129);
    padding: 1rem;
    color: white;
    text-align: center;
    letter-spacing: 2rem;
}


</style>

