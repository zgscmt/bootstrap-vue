<template>
    <div class="popRight">
        <div class="card" style="width:15rem;height:94vh;background:#383E4B;border-radius:0px">
            <div class="card-body">
                <menuList @accept="acceptVlaue" style="margin-top:0px" />
            </div>
            <!-- 底部tab -->
            <div class="card-footer text-muted">
                <button type="button" style="margin-top:-5px" class="btn btn-sm btn-primary btn-block" @click="routerJump('/login')">
                    退出登录
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { navMenu } from "@/assets/js/navMenu.js";
import menuList from "../components/menuList";
export default {
    components: {
        menuList,
    },
    data() {
        return {
            authMenu: navMenu,
            showPop: false,
        };
    },
    mounted() {},
    methods: {
        acceptVlaue(value){
            this.$emit('accept',value)
        }

    },
};
</script>
