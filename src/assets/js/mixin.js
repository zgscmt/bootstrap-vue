import {
    apiUrls
} from './apiUrls.js'
import storage from "good-storage";

export const globalMixin = {
    data() {
        return {
            apiUrls: apiUrls,
            loadingStatus: { //loading
                refresh: false, //刷新
                button: false, //按钮
                table: false, //列表
                dialog: false, //弹出层
                search: false, //查询
                tree: false, //树形结构
                form: false //表单
            },
            dialogStatus: { //弹出层状态
                detail: false,
                create: false,
                update: false
            },

            tableLists: [], //list 数据
            paging: { //分页器参数
                page_size: 10,
                page_num: 1,
                amount: 0,
                page: 1,
                total: 0,
                per_page: 15
            },
            storeForm: {},
            message: { //操作提示语
                success: '操作成功',
            },
            button: false,
            verifyType: '', //验证码类型
            bindingStatus: "", //绑定状态
            selectRole: "" //判断角色是主账户还是子账户
        }
    },
    mounted() {

    },
    methods: {

        //路由简单跳转
        routerJump(path, params = {}) {
            this.$router.push({
                path: path,
                query: params
            })

        },
        post(url, params, callback = (response) => {}) {
            this.$axios.get(this.apiUrls[url], params).then(res => {
                let response = res.data;
                console.log(response)
                if (true === response.success) {
                    return callback(response)
                } else if (Number(-1) === response.result) {
                    storage.clear();
                    setTimeout(() => {
                        this.routerJump('/login')
                    }, 1000)
                } else if (0 === response.result) {
                    this.button=false;
                }
            }).catch(error => {
                console.log(error)
            })

        },
        //转换数组数据
        formatterColumn(cellValue) {
            let value = cellValue.join(",");
            // console.log(value）  
            return value;
        },

        formatDate(time) {
            var date = new Date(time * 1000);
            var month =
                (date.getMonth() + 1).toString().length == 2 ?
                date.getMonth() + 1 :
                "0" + (date.getMonth() + 1);
            var day =
                date.getDate().toString().length == 2 ?
                date.getDate() :
                "0" + date.getDate();
            var hours =
                date.getHours().toString().length == 2 ?
                date.getHours() :
                "0" + date.getHours();
            var minutes =
                date.getMinutes().toString().length == 2 ?
                date.getMinutes() :
                "0" + date.getMinutes();
            var seconds =
                date.getSeconds().toString().length == 2 ?
                date.getSeconds() :
                "0" + date.getSeconds();
            return (
                date.getFullYear() +
                "-" +
                month +
                "-" +
                day +
                " " +
                hours +
                ":" +
                minutes +
                ":" +
                seconds
            );
        },

        // 获取日期
        getDay(day) {
            var today = new Date();
            var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
            today.setTime(targetday_milliseconds); //注意，这行是关键代码
            var tYear = today.getFullYear();
            var tMonth = today.getMonth();
            var tDate = today.getDate();
            tMonth = this.doHandleMonth(tMonth + 1);
            tDate = this.doHandleMonth(tDate);
            return tYear + "-" + tMonth + "-" + tDate;
        },
        doHandleMonth(month) {
            var m = month;
            if (month.toString().length == 1) {
                m = "0" + month;
            }
            return m;
        }
    }
}