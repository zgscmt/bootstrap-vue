<template>
    <div class="home">
        <nav id="headerBox" class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#" style="color:#fff">通用表单管理系统</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                管理员 <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a @click="routerJump('/login')">退出</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-sm-1 sidebar" id="leftBox"  v-if="showSide">
                    <sideBar />
                    <!-- <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column nav-pills">
                                <li class="nav-item text-nowrap">
                                    <a class="nav-link flex-sm-fill active" href="#"
                                        ><span data-feather="home"></span>首页<span class="sr-only">(current)</span></a
                                    >
                                </li>
                                <div class="dropdown-divider"></div>
                                <li class="nav-item text-nowrap">
                                    <a class="nav-link flex-sm-fill" href="#"
                                        ><span data-feather="info-create"></span>信息建立</a
                                    >
                                </li>
                                <li class="nav-item text-nowrap">
                                    <a class="nav-link flex-sm-fill" href="#"
                                        ><span data-feather="info-query"></span>信息查询</a
                                    >
                                </li>
                                <li class="nav-item text-nowrap">
                                    <a class="nav-link flex-sm-fill" href="#"
                                        ><span data-feather="info-manager"></span>信息管理</a
                                    >
                                </li>
                                <div class="dropdown-divider"></div>
                                <li class="nav-item text-nowrap">
                                    <a class="nav-link flex-sm-fill" href="#"
                                        ><span data-feather="setting"></span>设置</a
                                    >
                                </li>
                                <li class="nav-item text-nowrap">
                                    <a class="nav-link flex-sm-fill" href="#"><span data-feather="help"></span>帮助</a>
                                </li>
                            </ul>
                        </div>
                    </nav> -->
                </div>
                <div class="col-sm-11">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import sideBar from "../components/sideBar";
export default {
    name: "Home",
    components: {
        sideBar,
    },
    data() {
        return {
            timer: null,
            showSide: false,
            screenWidth: document.body.clientWidth, // 屏幕宽度
        };
    },

    mounted() {
        const that = this;
        if (document.body.clientWidth > 999) {
            that.showSide = true;
        }
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
                // console.log(that.screenWidth)
            })();
        };
        // this.refresh();
    },
    watch: {
        screenWidth(val) {
            if (!this.timer) {
                this.screenWidth = val;
                this.timer = true;
                let that = this;

                setTimeout(function() {
                    if (that.screenWidth > 999) {
                        that.showSide = true;
                    } else {
                        that.showSide = false;
                    }
                    that.timer = false;
                }, 400);
            }
        },
    },
    methods: {},
};
</script>
<style lang="stylus" scoped>
#headerBox{
    border-radius:0px;
    background :#343A40;
    border-bottom:0px
}
.container{
    margin-top:-2.05vh
}
#leftBox{
    margin-top:0px !important;
    height :94.5vh;
    background:#343A40;
    min-width :3.5rem;
                overflow-x: hidden;
}
</style>
