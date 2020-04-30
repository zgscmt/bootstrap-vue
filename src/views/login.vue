<template>
    <div class="row">
        <div class="card">
            <img src="../assets/image/bgLog.jpg" style="height:150px;" class="card-img-top" alt="错误" />
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

                <p class="text-right" style="margin-bottom:10px;font-size:13px">
                    <a href="javascript:;" class="text-decoration-none">忘记密码?</a>
                </p>
                <button type="button" class="btn btn-primary btn-sm btn-block">立即登录</button>
                <p class="text-center" style="margin-top:10px;font-size:13px">
                    没有账号?<a href="javascript:;" @click="routerJump('/register')" style="color:#0069D9" class="text-decoration-none">立即注册</a>
                </p>
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
.row{
    height: 100%;
    width :100%;
    margin :0px;
    background: url("~@/assets/image/bg.jpg") no-repeat;
    background-size: 100% 100%;
    padding:20px;

.card{
    // padding-top:100px;
    margin-top:15% !important;
    margin:0 auto;
    height :400px;
    width:450px
    box-shadow: 0px 0px 10px #bbb;
}
a{
    text-decoration-line :none
}
}
</style>
