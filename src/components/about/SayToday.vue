<template>
    <div id="say">
        Hello everyone ,My name is {{msg}}, I'm {{name}} ,nice to see you
    </div>
</template>
<script>
export default {
  name: 'sayHello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'Elling'
    }
  }
}
</script>
<style scoped>
   a {
        color: #42b983;
    }
</style>
