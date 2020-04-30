<template>
    <div>
        <nav
            class="navbar navbar-expand-lg navbar-dark  sticky-top bg-dark flex-md-nowrap p-0"
            style="background-color:#383E4B !important;height:45px"
        >
            <a class="navbar-brand" href="#" style="color:#0069D9;font-weight:600;font-size:19px !important"
                >通用表单管理系统</a
            >
            <button
                style="width:50px;height:35px"
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-expanded="false"
                @click="showSide"
            >
                <span class="navbar-toggler-icon" style="width:25px;height:25px"></span>
            </button>

            <div class="collapse navbar-collapse" id="null">
                <ul class="navbar-nav px-3 mr-auto"></ul>
                <ul class="nav navbar-nav navbar-right">
                    <li
                        class="nav-item text-nowrap dropdown"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <img
                            src="../assets/image/user.jpg"
                            alt="失败"
                            style="height:33.5px;"
                            class="rounded-circle nav-item text-nowrap "
                        />
                        <i style="margin-right:15px;color:#fff" class="fa fa-caret-down"></i>

                        <div class="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#" @click="routerJump('/login')">退出</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="sidePop" v-if="showPop">
                <popRight @accept="acceptPop" class="pop_right" />
            </div>
            <div class="row">
                <nav class="col-md-1 d-none d-md-block bg-light sidebar">
                    <menuList ref="exportTite" />
                </nav>
                <main role="main" class="col-md-11 ml-sm-auto col-lg-11">
                    <keep-alive>
                        <router-view
                            v-if="$route.meta.keepAlive"
                            class="margin_top_20"
                            style="margin-top:8px"
                        ></router-view>
                    </keep-alive>
                    <router-view
                        v-if="undefined == $route.meta.keepAlive"
                        class="margin_top_20"
                        style="margin-top:8px"
                    ></router-view>
                </main>
            </div>
        </div>
    </div>
</template>
<script>
import menuList from "../components/menuList";
import sideBar2 from "../components/sideBar2";
import popRight from "../components/popRight";
import { navMenu } from "@/assets/js/navMenu.js";
export default {
    components: {
        menuList,
        sideBar2,
        popRight,
    },
    data() {
        return {
            authMenu: navMenu,
            showPop: false,
            screenWidth: document.body.clientWidth, // 屏幕宽度
        };
    },
    mounted() {
        const that = this;
        if (document.body.clientWidth > 1318) {
            that.$refs.exportTite.changeTitle(true);
        } else {
            that.$refs.exportTite.changeTitle(false);
        }
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        };
    },
    watch: {
        screenWidth(val) {
            this.screenWidth = val;
            let that = this;
            setTimeout(function() {
                // console.log(that.screenWidth)
                if (that.screenWidth > 1318) {
                    that.showPop = false;
                    that.$refs.exportTite.changeTitle(true);
                } else {
                    that.$refs.exportTite.changeTitle(false);
                }
            }, 50);
        },
    },

    methods: {
        showSide() {
            if (this.showPop) {
                this.showPop = false;
            } else {
                this.showPop = true;
            }
        },
        //接受子组件值
        acceptPop(pop_show) {
            this.showPop = pop_show;
        },
    },
};
</script>

<style lang="stylus" scoped>
.sidebar {
    position: fixed;
    top: 20px;
    bottom: 0;
    left: 0;
    z-index: 100;
    /* Behind the navbar */
    padding: 0;
    background :#383E4B !important;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}
.sidePop{
 z-index:1000;
    position:fixed
    top:20
    right:0
    -webkit-transition:width 2s
}
.pop_right{
//    transform :200px
}
</style>
