<template>
  <div id="app">

  <!-- //渲染登录页面在这里 -->
   <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  //生命周期函数网页加载完就执行
  mounted(){
      this.$axios({
        url:"https://api.github.com/users",
        method:"get",   // method在vue中只能发起get请求 params用与post请求

      }).then(res=>{
        //测试请求是否发起和返回数据
          console.log(res)
      })
  }
}

</script>

<style>

</style>
