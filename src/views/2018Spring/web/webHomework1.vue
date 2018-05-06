<template>
    <div>
        <a href="http://www.wendangku.net/doc/03206a48be1e650e52ea992f.html">交通大学C作业及复习题</a>
        <list-template :subject="'第一次作业 第1-3章概念题'" :list="testList"></list-template>
    </div>
</template>
<script>
import listTemplate from "@/components/template"
import axios from "axios"

export default {
    components: {
        listTemplate
    },
    data(){
        return{
            testList:[]
        }
    },
    beforeRouteEnter(to, from, next) {
        next(Vm =>{
            Vm.getData()
        })
    },
    methods:{
        getData(){
            axios.get('/api/web2018').then(res => {
                if(!res) return
                this.testList = res.data.data.homework1
                console.log(this.testList)
            })
        }
    }
}
</script>

