<template>
  <div id="home">
    <HeaderTop class="header"/>
    <div class="content">
      <!--<router-link to="/">home</router-link>
      <router-link to="/main">main</router-link>
      <button v-on:click="changeTo()">跳转到hello页</button>-->
      <router-view/>
    </div>
    <!--<Footer/>-->
  </div>
</template>

<script>
import HeaderTop from './header/Head';
import Footer from './footer/Foot';
import first from '../pages/store/first';

export default {
  name: 'home',
  methods:{
    changeTo:function(){
      this.$router.push('/hello');
    }
  },
  components:{
    first,
    HeaderTop,
    Footer
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
} 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content{
  position: fixed;
  top: 3rem;
  bottom: 3rem;
  width: 100%;
  overflow-y: auto;
}
</style>
