<template>
    <div>
        <list-template :subject="'Unit 4 故事会（二）单元自测 ---- 数词'" :list="testList"></list-template>
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
                this.testList = res.data.data.test05
                console.log(this.testList)
            })
        }
    }
}
</script>

