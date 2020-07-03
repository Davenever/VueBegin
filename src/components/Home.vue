<template>
  <el-container>
    <el-aside :width="isCollapse?'64px':'220px'" id="aside">
      <div class="adminInfo"> 
        <!-- <img src="../assets/pic/Doraemon.jpg" alt /> -->
        <span>江北的Admin Pro</span></div> 
      <div>
        <el-row class="tac">
          <el-col :span="12">
            <!-- collapse：水平折叠收起菜单 -->
            <el-menu
              default-active="6-2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#20222A"
              text-color="#fff"
              active-text-color="#409EFF"
              :collapse="isCollapse"
            >
            <!-- 菜单一 -->
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-shop"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <i class="el-icon-menu"></i><span>选项1</span></el-menu-item>
                  <el-menu-item index="1-2"><i class="el-icon-menu"></i><span>选项2</span></el-menu-item>
                </el-menu-item-group>
                  <el-menu-item index="1-3"><i class="el-icon-menu"></i><span>选项3</span></el-menu-item>
              </el-submenu>
              <!-- 菜单一 -->

              <!-- 菜单二 -->
               <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-flag"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <i class="el-icon-menu"></i><span @click="click_option">选项1</span></el-menu-item>
                  <el-menu-item index="2-2"><i class="el-icon-menu"></i><span>选项2</span></el-menu-item>
                </el-menu-item-group>
                  <el-menu-item index="2-3"><i class="el-icon-menu"></i><span>选项3</span></el-menu-item>
              </el-submenu>
              <!-- 菜单二 -->

                <!-- 菜单三 -->
               <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-s-data"></i>
                  <span>报表管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">
                    <i class="el-icon-menu"></i><span>选项1</span></el-menu-item>
                  <el-menu-item index="3-2"><i class="el-icon-menu"></i><span>选项2</span></el-menu-item>
                </el-menu-item-group>
                  <el-menu-item index="3-3"><i class="el-icon-menu"></i><span>选项3</span></el-menu-item>
              </el-submenu>
              <!-- 菜单三 -->

                <!-- 菜单四 -->
               <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-s-management"></i>
                  <span>售后管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">
                    <i class="el-icon-menu"></i><span>选项1</span></el-menu-item>
                  <el-menu-item index="4-2"><i class="el-icon-menu"></i><span>选项2</span></el-menu-item>
                </el-menu-item-group>
                  <el-menu-item index="4-3"><i class="el-icon-menu"></i><span>选项3</span></el-menu-item>
              </el-submenu>
              <!-- 菜单四 -->

               <!-- 菜单五 -->
               <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-s-home"></i>
                  <span>权限管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">
                    <i class="el-icon-menu"></i><span>选项1</span></el-menu-item>
                  <el-menu-item index="5-2"><i class="el-icon-menu"></i><span>选项2</span></el-menu-item>
                </el-menu-item-group>
                  <el-menu-item index="5-3"><i class="el-icon-menu"></i><span>选项3</span></el-menu-item>
              </el-submenu>
              <!-- 菜单五 -->
                <!-- 菜单六 -->
               <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>系统管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="6-1">
                    <i class="el-icon-menu"></i><span>用户管理</span></el-menu-item>
                  <el-menu-item index="6-2"><i class="el-icon-menu"></i><span>角色管理</span></el-menu-item>
                </el-menu-item-group>
                  <el-menu-item index="6-3"><i class="el-icon-menu"></i><span>IP黑名单</span></el-menu-item>
                  <el-menu-item index="6-4"><i class="el-icon-menu"></i><span>日志管理</span></el-menu-item>
              </el-submenu>
              <!-- 菜单六 -->
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#393D49"
          text-color="#fff"
          active-text-color="#409EFF"
        >
          <el-menu-item id="indexOne" index="1">
            <i class="el-icon-s-fold" @click="fold"></i>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4">
            <a href="/" target="_blank">订单管理</a>
          </el-menu-item>
            <el-submenu class="right_content">
              <template slot="title">江北</template>
              <el-menu-item><i class="el-icon-reading"></i>基本资料</el-menu-item>
              <el-menu-item><i class="el-icon-unlock"></i>修改密码</el-menu-item>
            </el-submenu>
          <el-button type="primary" @click="loginOut" class="right_content_btn">退出</el-button>
        </el-menu>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      MenuList: [],
      isCollapse: false
    };
  },
  methods: {
    loginOut() {
      alert(1);
    },
    click_option(){
      alert('click')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    fold() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  widows: 100%;
}
.el-menu-demo {
  width: 100%;
}
.el-header {
  padding: 0 0px;
}
.el-aside {
  background-color: #20222a;
  height: 100%;
}
#aside {
  height: 100%;
}
.adminInfo {
  height: 60px;
  text-align: center;
}
.tac {
  height: 100%;
}
// .el-menu-vertical-demo {
//   width: 200px;
// }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}

.el-menu {
  //这个是去除打开下拉时,宽度超出的问题
  border-right: none;
}
#indexOne {
  text-align: center;
  width: 80px;
}
.right_content{
  position: absolute;
  right:100px;
}
.right_content_btn{
  position: absolute;
  right:20px;
  top:50%;
  transform: translateY(-50%)
}

img{
  height: 50px;
  width: 50px;
}
.adminInfo>span{
  color: white;
  font-size: 15px;
}
</style>