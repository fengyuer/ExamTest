<template>
    <list-template :subject="'高等数学'" :list="mathList"></list-template>
</template>
<script>
import listTemplate from "@/components/template"
import axios from "axios"

export default {
    
    components:{
        listTemplate
    },
    data(){
        return {
            mathList:[]
        }
    },
    beforeRouteEnter(to, from, next) {
        next(Vm =>{
            Vm.getData()
        })
    },
    methods:{
        getData(){
            axios.get('/api/math').then(res => {
                if(!res) return
                this.mathList = res.data.data
                console.log(this.mathList)
            })
        }
    }
}
</script>

