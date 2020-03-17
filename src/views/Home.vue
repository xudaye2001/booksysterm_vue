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
  <div>
    <Modal
            v-model="modal1"
            title="Common Modal dialog box title"
            @on-ok="ok"
            @on-cancel="cancel">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
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
            <MenuItem name="3" v-if="isLogin === false"  @click.native="modal1=true">
              登录
              <Modal
                      v-model="modal1"
                      title="login">
              <login></login>
              </Modal>
            </MenuItem>
            <MenuItem name="3" v-if="isLogin === false" >
              注册
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
  export default {
    name: 'Home',
    data: function() {
      return {
        isLogin:false,
        modal1:false
      }
    },
    methods: {
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      }
    },
    components: { tags, login }
    // eslint-disable-next-line vue/no-unused-components
  }
</script>
