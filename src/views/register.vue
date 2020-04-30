<template>
    <div class="rowBox">
        <div class="card mb-3" style="max-width: 540px">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <div style="background:#7066D7;height:100%;padding-left:10px">
                        <div style="padding-top:10%;color:white;font-size:25px;font-weight:600">欢迎注册</div>
                        <div style="color:white;padding-top:20px">Welcome,And jion us</div>
                    </div>
                </div>
                <div class="col-md-8" id="card">
                    <div class="card-body">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"
                                    ><svg
                                        class="bi bi-person-fill"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                            clip-rule="evenodd"
                                        /></svg
                                ></span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="输入用户名"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend" style="border-radius:50px">
                                <span class="input-group-text" id="basic-addon1">
                                    <svg
                                        class="bi bi-lock-fill"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="11" height="9" x="2.5" y="7" rx="2" />
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="输入密码"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend" style="border-radius:50px">
                                <span class="input-group-text" id="basic-addon1">
                                    <svg
                                        class="bi bi-lock-fill"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="11" height="9" x="2.5" y="7" rx="2" />
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="输入密码"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                            />
                        </div>

                        <button
                            type="button"
                            style="background:#7066D7;border:0"
                            class="btn btn-primary btn-sm btn-block"
                        >
                            立即注册
                        </button>
                        <p class="text-center" style="margin-top:10px;font-size:13px">
                            已有账号?<a
                                href="javascript:;"
                                @click="routerJump('/login')"
                                style="color:#0069D9"
                                class="text-decoration-none"
                                >登录</a
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
<style lang="stylus" scoped>
.rowBox{
     height :100%;
     background: url("~@/assets/image/bg.jpg") no-repeat;
     margin 0;
     padding:20px;
        background-size: 100% 100%;
        .card{
        margin:0 auto;
        margin-top:15%;
        box-shadow: 0px 0px 10px #bbb;
        .row{
            height 400px
        }

    }
    #card{
       background-color :#fff !important;
       padding:0px;
       padding-top:35px
    }
}
</style>
