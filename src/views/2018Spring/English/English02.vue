<template>
    <div>
        <list-template :subject="'Unit 2 成长篇（二）单元自测 ---- 代词'" :list="testList"></list-template>
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
            axios.get('/api/English2018').then(res => {
                if(!res) return
                this.testList = res.data.data.test02
                console.log(this.testList)
            })
        }
    }
}
</script>

