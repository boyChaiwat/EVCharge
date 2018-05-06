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
                
                
                <div v-if="currentUser">
                    <el-menu-item index="7">
                        <img :src="currentUser.providerData[0].photoURL" alt="" width="30">
                        <span slot="title">{{ currentUser.displayName }}</span>
                    </el-menu-item>

                    <el-menu-item index="8" @click="signOut">
                        <i class="fas fa-sign-out-alt"></i>
                        <span slot="title">Sign Out</span>
                    </el-menu-item>
                </div>
                <div v-else>
                    <el-menu-item index="6" class="fb-singin" @click="fbSignIn">
                        <span slot="title">Sign In With Facebook</span>
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

  .fb-singin {
      height: 130px;
      background-image: url('../assets/facebook-signin.png');
      background-position: center;
      background-size: cover;
  }
</style>

<script>
    import {dbAuth,provider,userRef} from "../firebaseConfig.js";
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
            fbSignIn : function () {
                let _this = this

                dbAuth.signInWithPopup(provider).then(function(result) {
                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;

                    _this.$router.replace('home')
                    console.log(user)
                    // alert("sd")
                    userRef.child(user.uid).set({
                        displayName:user.displayName,
                        photoURL:user.photoURL,
                        facebookUid:user.providerData[0].uid
                    })
                    // userRef.child(user.uid).child("photoURL/"+user.photoURL).push("s")
                    // console.log(user)
                    // ...

                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;

                    // console.log(errorCode+' : '+errorMessage+' : '+email+' : '+credential)
                    // ...
                });
            },
            signOut:function () {
                let _this = this
                dbAuth.signOut().then(() => {
                    _this.$router.push({name: 'home'})
                })
            },

        }
    }
</script>

