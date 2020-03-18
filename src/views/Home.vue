<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
<template>
  <div>
  <div class="layout">
    <Layout>

      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              首页
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              我的图书馆
            </MenuItem>
            <MenuItem name="3" v-if="isLogin === true">
              <Icon type="ios-analytics" ></Icon>
              用户中心
            </MenuItem>
            <MenuItem name="3" v-if="isLogin === false" >
              <router-link to="/views/login">登录</router-link>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">

        <Card>
          <div style="min-height: 200px;">
            <tags></tags>
            <!--                        <router-view/>-->
          </div>
        </Card>

      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
  </div>
</template>
<script>
  // eslint-disable-next-line no-unused-vars
  import tags from '../components/tags'
  import login from "../components/login";
  import store from '../store/index'
  export default {
    name: 'Home',
    data: function() {
      return {
        isLogin:false,
        modal1:false,
        store
      }
    },
    created(){

    },
    methods: {
      async login(){
        console.log("执行请求");
        console.log(store.state.formInline)
        let res = await this.$Http.login(store.state.formInline, true);
        console.log(res)
        if (res.data.status === "ok") {
          window.localStorage.setItem("token", res.headers.token);
          this.$Message.info(res.data)
        }
      }
    },
    components: { tags, login }
    // eslint-disable-next-line vue/no-unused-components
  }
</script>
