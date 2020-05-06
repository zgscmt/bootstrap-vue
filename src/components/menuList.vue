<template>
    <div class="menuList">
        <div class="left-menu">
            <!-- 侧边栏标签页 -->

            <ul class="nav nav-stacked accordion" id="accordionExample">
                <!-- 侧边栏选项 -->

                <li role="presentation" class="side-list">
                    <!-- 选项控制data-target对应的显隐 -->
                    <div class="dropdown-toggle" data-toggle="dropdown" v-if="!showtitle">
                        <i class="fa fa-cog fa-2x" style="padding-left:25px;margin-right:5px;color:#fff;"></i>
                    </div>
                    <a
                        id="titleBox"
                        v-if="showtitle"
                        href="javascript:;"
                        data-toggle="collapse"
                        data-target="#list1"
                        aria-controls="collapseOne"
                    >
                        <i class="fa fa-cog fa-fw" style="padding-left:10px;margin-right:5px;color:#fff"></i>
                        测试模块<i class="fa fa-angle-right fa-fw"></i
                    ></a>
                    <!-- 隐藏的详细菜单 -->
                    <ul
                        id="list1"
                        :class="[showtitle === false ? 'dropdown-menu' : 'collapse in']"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                    >
                        <li class="titleContent">
                            <!-- 通过active_router判断是否是当前路由,设置触发的样式 -->
                            <a
                                :class="active_router === '/informType' ? 'actived' : 'titleContentNext'"
                                href="javascript:;"
                                @click="jumpRouter('/informType')"
                                >模块分类</a
                            >
                        </li>
                        <li class="titleContent">
                            <a
                                :class="active_router === '/createInform' ? 'actived' : 'titleContentNext'"
                                href="javascript:;"
                                @click="jumpRouter('/createInform')"
                                >模块创建</a
                            >
                        </li>
                        <li class="titleContent">
                            <a
                                :class="active_router === '/informData' ? 'actived' : 'titleContentNext'"
                                href="javascript:;"
                                @click="jumpRouter('/informData')"
                                >模块数据</a
                            >
                        </li>
                    </ul>
                </li>

                <!-- 第二个 -->
                <li role="presentation" class="side-list">
                    <!-- 选项控制data-target对应的显隐 -->
                    <div class="dropdown-toggle" data-toggle="dropdown" v-if="!showtitle">
                        <i class="fa fa-dot-circle fa-2x" style="padding-left:25px;margin-right:5px;color:#fff"></i>
                    </div>
                    <a
                        v-if="showtitle"
                        href="javascript:;"
                        id="titleBox"
                        data-toggle="collapse"
                        data-target="#list2"
                        aria-controls="collapseTwo"
                    >
                        <i class="fa fa-dot-circle fa-fw" style="padding-left:10px;margin-right:5px;color:#fff"></i
                        >测试模块2<i class="fa fa-angle-right fa-fw"></i
                    ></a>
                    <!-- 隐藏的详细菜单 -->
                    <ul
                        id="list2"
                        :class="showtitle === true ? 'collapse in' : 'dropdown-menu'"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                    >
                        <li class="titleContent">
                            <a
                                :class="active_router === '/informType2' ? 'actived' : 'titleContentNext'"
                                href="javascript:;"
                                @click="jumpRouter('/informType2')"
                                >模块分类2</a
                            >
                        </li>
                        <li class="titleContent">
                            <a
                                :class="active_router === '/createInform2' ? 'actived' : 'titleContentNext'"
                                href="javascript:;"
                                @click="jumpRouter('/createInform2')"
                                >模块创建2</a
                            >
                        </li>
                        <li class="titleContent">
                            <a
                                :class="active_router === '/informData2' ? 'actived' : 'titleContentNext'"
                                href="javascript:;"
                                @click="jumpRouter('/informData2')"
                                >模块数据2</a
                            >
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active_router: "", //当前触发的路由
            showtitle: true,
        };
    },
    mounted() {
        this.refresh();
    },
    methods: {
        //路由简单跳转
        jumpRouter(path, params = {}) {
            this.$router.push({
                path: path,
                query: params,
            });

            for (let i in arguments) {
                this.active_router = arguments[i];
            }
            this.$emit("accept", false);
        },
        //刷新路由默认展示
        refresh() {
            let url = window.location.pathname;
            this.active_router = url;
            //消除样式  (transform)
             document.getElementById("list1").style.removeProperty("position");
            document.getElementById("list1").style.removeProperty("transform");
            document.getElementById("list2").style.removeProperty("position");
            document.getElementById("list2").style.removeProperty("transform");
        },
        changeTitle(value) {
            console.log(value);
            this.showtitle = value;
             document.getElementById("list1").style.removeProperty("position");
            document.getElementById("list1").style.removeProperty("transform");
            document.getElementById("list2").style.removeProperty("position");
            document.getElementById("list2").style.removeProperty("transform");
        },
    },
};
</script>
<style lang="stylus" scoped>
.nav{
    white-space nowrap;
    overflow hidden;
    display :flex;
    flex-direction :column
}

.dropdown-toggle::after{
   color:#fff;
}
.side-list{
    margin-top:10px;
    margin-bottom:10px;
}
.menuList{
    margin-top:40px
}
.collapse{
    // transform :unset !important;
}
.dropdown-menu{
    background:#383E4B;
    margin-left:8vw;
    margin-top:-10px
}

#titleBox{
    color:#fff;
    padding-left:15px
    text-decoration-line :none;
    // position relative
}
.titleContent{
    margin-top:8px;
    padding-left:40px
}
.actived{
    color:yellow !important
    text-decoration-line :none;
}
.titleContentNext{
    color:#fff;
    text-decoration-line :none;
}
</style>
