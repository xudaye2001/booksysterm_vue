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
                <router-link to="/">首页</router-link>
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                <router-link to="mylibrary">我的图书馆</router-link>
              </MenuItem>
              <MenuItem name="3" v-if="isLogin === true">
                <Icon type="ios-analytics" ></Icon>
                <router-link to="userprofile">{{username}}</router-link>
              </MenuItem>
              <MenuItem name="3" v-if="isLogin === false" >
                <router-link to="login">登录</router-link>
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Content :style="{padding: '0 50px'}">
          <Card>
            <div style="min-height: 200px;">
              <router-view></router-view>
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
  import store from './store/index'
  export default {
    data: function() {
      return {
        isLogin:false,
        modal1:false,
        username:'',
        store
      }
    },
    created(){
        this.isLogined()
    },
    methods: {
      async isLogined() {
        console.log('执行isLogin');
        if(window.localStorage.getItem("token")) {
          let res = await this.$Http.isLogin();
          console.log(res.data);
          console.log(res.status)
          if (res.status === 200) {
            this.isLogin = true;
            this.username = res.data;
          }
          console.log(res)
        }
      }
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
