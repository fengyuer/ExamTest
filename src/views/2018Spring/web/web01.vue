<template>
    <div>
        <list-template :subject="'第一章 自测题'" :list="testList"></list-template>
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
                this.testList = res.data.data.test01
                console.log(this.testList)
            })
        }
    }
}
</script>

