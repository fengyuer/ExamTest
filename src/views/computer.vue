<template>
    <list-template :subject="'计算机'" :list="computerList"></list-template>
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
            computerList:[]
        }
    },
    beforeRouteEnter(to, from, next) {
        next(Vm =>{
            Vm.getData()
        })
    },
    methods:{
        getData(){
            axios.get('/api/Computer').then(res => {
                if(!res) return
                this.computerList = res.data.data
                console.log(this.computerList)
            })
        }
    }
}
</script>

