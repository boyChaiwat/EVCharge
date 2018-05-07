<template>
    <div>
        <el-container>
            <el-main>
                <!-- <el-row> -->
                    <el-col :span="9" :offset="1">
                        <div class="grid-content" height="100vh">
                            <div class="text-header">
                                <h1>SEARCH <br> EVCHARGE <br> STATION</h1>
                                <el-button class="box-search" slot="append" icon="el-icon-search" type="success" round>
                                    <label>ค้นหาที่ชาร์จใกล้สุด</label>
                                </el-button>
                            </div>

                            <el-card shadow="always" class="box-status-left">
                                <div class="status-one">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <h2>32</h2>
                                    <label>Bangkok</label>
                                </div>
                                <div class="status-two">
                                    <i class="fas fa-map"></i>
                                    <h2>16</h2>
                                    <label>Provincial</label>
                                </div>
                            </el-card>
                        </div>
                    
                    </el-col>
                    <el-col :span="14">
                        <div class="grid-content">
                            <el-card shadow="always" class="box-status-right">
                                <div class="status-tree">
                                    <i class="fas fa-bolt"></i>
                                    <h2>55+</h2>
                                    <label>Station</label>
                                </div>
                            </el-card>
                            <el-carousel indicator-position="none" height="100vh">
                                <el-carousel-item v-for="item in items" :key="item.id">
                                    <h3>
                                        <div :style="fullImgBg(item.imageUrl)"></div>
                                    </h3>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-col>
                <!-- </el-row> -->
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import {dbAuth,provider,userRef} from "../firebaseConfig.js";

    export default {
        data () {
            return {
                items: [
                    { imageUrl: 'https://www.thairath.co.th/media/Kg2lj2gY7z4zNnRdX0GG0XR7POQW4azuHJm.jpg',
                            id: 'car1' },
                    { imageUrl: 'https://scontent.fbkk5-5.fna.fbcdn.net/v/t31.0-8/29351637_1747926568578775_7982655317124067288_o.jpg?_nc_cat=0&oh=0a568c1950af24cd6d9faceafe58ffdc&oe=5B8ACFEA',
                            id: 'car2' },
                    { imageUrl: 'https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/31939686_1784365261601572_7472654942218485760_o.jpg?_nc_cat=0&oh=cb5ec2d59db64b80a34757f38b72e4b7&oe=5B89F19A',
                            id: 'car3' },
                    { imageUrl: 'https://www.thairath.co.th/media/4DQpjUtzLUwmJZZPEbSfoirM8rNss5DqqVKpO2Cy4Gld.web',
                            id: 'car4' }
                ],
                currentUser: null
            }
            
        },
        created(){
            let _this = this
            dbAuth.onAuthStateChanged(function (user) {
                _this.currentUser = user
                console.log(user)
            })
        },
        methods:{
            fullImgBg:function(url) {
                return 'height:100vh; background:url('+url+') center; background-size:cover;'
            }
        }
    }
</script>

<style scoped>
    el-container {
        position: absolute;
    }
    .el-main {
        padding: 0;
    }
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 1px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    
        /* carousel */
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .text-header {
        float: left;
    }

    .text-header h1 {
        font-size: 3.6em;
        font-weight: 600;
        text-align: left;
        line-height: 1.5;
        color: #333;
        margin-top: 100px;
        margin-left: 50px;
        float: left;
    }

    .box-search {
        font-size: 1.4em;
        width: 50%;
        padding: 16px;
        margin-top: 30px;
        margin-right: 50px;
        cursor: pointer;
        float: right;
        /* position: absolute;
        z-index: 100; */
    }

    .box-search label {
        font-family: 'Prompt', sans-serif;
        padding-left: 15px;
        cursor: pointer;
    }

    .box-status-left {
        width: 68%;
        height: 160px;
        border: 0;
        margin-top: 65px;
        float: right;
        z-index: 101;
    }

    .box-status-right {
        width: 15%;
        height: 160px;
        background-color: rgb(102, 194, 58);
        border: 0;
        top: 501px;
        position: absolute;
        float: left;
        z-index: 101;
    }

    .box-status-left .status-one {
        width: 50%;
        float: left;
    }

    .box-status-left .status-two {
        width: 50%;
        float: left;
    }

    .status-one i, .status-two i {
        font-size: 2.6em;
        color: rgb(102, 194, 58);
    }

    .status-one h2, .status-two h2 {
        font-size: 3em;
        color: rgb(102, 194, 58);
        padding: 8px 0;
    }

    .status-one label, .status-two label {
        font-size: 1.2em;
        color: rgb(102, 194, 58);
    }

    .status-tree i {
        font-size: 2.6em;
        color: #FFF;
    }

    .status-tree h2 {
        font-size: 3em;
        color: #FFF;
        padding: 8px 0;
    }

    .status-tree label {
        font-size: 1.2em;
        color: #FFF;
    }
</style>

