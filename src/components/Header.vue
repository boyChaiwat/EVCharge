<template>
    <div >
        <el-menu default-active="2" class="el-menu-vertical-demo absolute"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Navigator One</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">Group One</span>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">item four</span>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
            </el-submenu>
            
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">Navigator Four</span>
            </el-menu-item>
            
            <div class="menu-footer">
                <el-menu-item index="5" >
                    <i class="el-icon-service"></i>
                    <span slot="title">Navigator Four</span>
                </el-menu-item>

                <a href="login">
                    <el-menu-item index="6">
                        <i class="fas fa-sign-in-alt"></i>
                        <span slot="title">SIGN IN</span>
                    </el-menu-item>
                </a>
                
                <div v-if="currentUser">
                    <el-menu-item index="7">
                        <img :src="currentUser.providerData[0].photoURL" alt="" width="30">
                        <span slot="title">{{ currentUser.displayName }}</span>
                    </el-menu-item>

                    <el-menu-item index="8" @click="signOut">
                        <span slot="title">SIGN OUT</span>
                    </el-menu-item>
                </div>
            </div>
        </el-menu>
    </div>
</template>

<style scope>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 500px;
  }
  .absolute {
      position: absolute;
  }
  .menu-footer {
      margin-top: 300px;
  }
</style>

<script>
    import {dbAuth} from "../firebaseConfig"
    export default {
        data() {
            return {
                isCollapse: true,
                currentUser:null
            }
        },
        created(){
            let _this = this
            dbAuth.onAuthStateChanged(function (user) {
                _this.currentUser = user
                console.log(user)
            })
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath)
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath)
            },
            signOut:function () {
                let _this = this
                dbAuth.signOut().then(() => {
                    _this.$router.push({name: 'login'})
                })
            },
        }
    }
</script>

