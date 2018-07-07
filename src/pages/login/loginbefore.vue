<template>
    <div id="login">
        <div class="container">
            <div id="logintype">
                <span @click="changetype(1)" v-bind:class="{'logintype_sel':changelogintype}">密码登录</span>
                <span v-on:click="changetype(2)" v-bind:class="{'logintype_sel':!changelogintype}">短信登录</span>
            </div>
            <div id="content" style="padding:3rem;" v-if="isseen">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" name="username" placeholder="请输入用户名" required/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="pwd" placeholder="请输入密码" required/>
                    </div>
                    <div>
                        <button v-on:click="ontj()" class="btn btn-primary">提交</button>
                        <button class="btn btn-warning">取消</button>
                    </div>
                </form>
            </div>
            <div id="content" style="padding:3rem;" v-if="!isseen">
                <form>
                    <div class="form-group">
                        <input style="width:70%;display:inline;" type="text" class="form-control flat" v-model="phoneNumber" name="phoneNumber" placeholder="手机号" required/>
                        <span  style="width:30%;color:blue;" v-show="!countTime" v-on:click="getchapeta()" :class="{right_phone_number:rightPhoneNumber}">获取验证码</span>
                        <span  style="width:30%;" v-show="countTime" :class="{right_phone_number:rightPhoneNumber}">已发送{{countTime}}秒</span>
                    </div>
                    <div class="form-group">
                        <input  type="text" class="form-control" id="captcha" name="captcha" placeholder="验证码" required/>
                    </div>
                    <div>
                        温馨提示：未注册Elling账户的手机，登录的时候将自动注册，且代表您已同意<span style="color:red;">《用户服务协议》</span>
                    </div>
                    <div>
                        <button v-on:click="ontj()" class="btn btn-primary">提交</button>
                        <button class="btn btn-warning">取消</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        msg: 'Elling',
        isseen: true,
        phoneNumber : '',
        logintypesel : true,
        countTime: ''   //倒计时

    }
  },
  computed:{
    rightPhoneNumber: function () {
        return /^1\d{10}$/gi.test(this.phoneNumber);
    },
    changelogintype: function () {
        return this.logintypesel;
    }
  },
  methods: {
    //切换登录方式
    changetype: function (type) {
        this.isseen = !this.isseen;
        this.logintypesel = !this.logintypesel;
    },
    //获取验证码
    getchapeta: function () {
        console.log('getchapeta');
        this.countTime = 10;
        let timer = setInterval(()=>{
            this.countTime --;
            if(this.countTime == 0){
                clearInterval(timer);
            }
        },1000);
    },
    //提交
    ontj: function () {
        console.log('提交');
        //this.$router.go(-1);
        this.$router.push({path:'/hello'});
    }
  }
}
</script>
<style>
@import '../../style/bootstrap.css';
    .loginname{
        background-color: blue;
    }
    #logintype {
        padding-top: 3rem;
    }
    .logintype_sel {
        color:blue;
        font-weight: bolder;
        border-bottom: 1px solid blue;
        padding-bottom: 0.5rem;
    }
    #logintype span{
        padding-top: 0.75rem;
        margin-left: 1rem;
    }
    .right_phone_number{
        color: blue;
    }
</style>
