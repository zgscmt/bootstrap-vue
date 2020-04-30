<template>
    <!-- 点击后收缩 -->
    <div class="sideBar2">
        <!-- <ul
            class="textHead"
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            v-for="(item, index) in authMenu"
            :key="index"
        >
           <i class="iconfont icon-shezhi'index'"></i>
            {{
                item.auth_name
            }}
            <svg
                class="bi bi-chevron-right"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                    clip-rule="evenodd"
                />
            </svg>
            <li>
                <div class="collapse" id="collapseExample">
                    <ul class="list-menu">
                        <li
                            id="list-menu-li"
                            :class="[nav.active == false ? 'actived' : 'activing']"
                            v-for="(nav, ol) in item.children"
                            :key="ol"
                            @click="getUrl(nav.route)"
                        >
                            {{ nav.auth_name }}
                        </li>
                    </ul>
                </div>
            </li>
        </ul> -->
        <li class="dropdown" v-for="(item, index) in authMenu" :key="index">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"> {{ item.auth_name }} <b class="caret"></b> </a>
            <ul class="dropdown-menu" style="border:0px !important">
                <li  v-for="(nav, ol) in item.children" :key="ol">
                    <a href="javascript:;" @click="getUrl(nav.route)">{{ nav.auth_name }}</a>
                </li>
            </ul>
        </li>
    </div>
</template>
<script>
import { navMenu } from "@/assets/js/navMenu.js";
export default {
    data() {
        return {
            authMenu: navMenu,
        };
    },
    mounted() {
        this.refresh();
    },
    methods: {
        refresh() {
            //刷新获取地址，展现相应的active
            let url = window.location.href;
            // console.log(url);
            for (let i in this.authMenu) {
                let childrenRf = this.authMenu[i].children;
                for (let j in childrenRf) {
                    childrenRf[j].active = false;
                    if (url.indexOf(childrenRf[j].route) > -1) {
                        childrenRf[j].active = true;
                    }
                }
            }
        },
        getUrl(name) {
            this.routerJump(name);
            for (let i in this.authMenu) {
                let children = this.authMenu[i].children;
                for (let j in children) {
                    children[j].active = false;
                    if (name === children[j].route) {
                        children[j].active = true;
                    }
                }
            }
        },
    },
};
</script>
<style lang="stylus" scoped>
.sideBar2{
    margin-top:20px;
    white-space nowrap;
    margin-left:10px;

}
.textHead{
 margin-top:30px !important;
    color:#fff;
}
.list-menu{
    margin-left:10px
    color:#fff;
    .activing{
        padding-top:10px;
        white-space nowrap;
        color:yellow
    }
    .actived{
       padding-top:10px;
        white-space nowrap;
        color:#fff
    }

}
a{
    text-decoration-line :none
}
</style>
