<template>
    <div class="informData">
        <div class="card">
            <div class="card-header" style="background:#007ACC">
                新的数据
            </div>
            <div class="card-body">
                <div class="table-responsive ">
                    <table class="table table-striped">
                        <thead style="text-align:center">
                            <tr>
                                <th >序号</th>
                                <th >标题</th>
                                <th >内容</th>
                                <th >日期</th>
                            </tr>
                        </thead>
                        <tbody v-for="(item, index) in tableLists" :key="index" style="text-align:center">
                            <tr>
                                <th>{{ item.id }}</th>
                                <td>{{ item.title }}</td>
                                <!-- <td>{{ decode(item.content) }}</td> -->
                                <td>{{ item.visit_count }}</td>
                                <td>{{ item.create_at }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableLists: [],
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.post("datas", {}, (response) => {
                // console.log(response.data)
                this.tableLists = response.data;
            });
        },
        decode(text) {
            var div = document.createElement("div");
            div.innerHTML = text;
            text = div.innerText || div.textContent;
            div = null;
            return text;
        },
    },
};
</script>
<style lang="stylus" scoped>
.card-body{
    padding:0px
}
</style>
