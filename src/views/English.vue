<template>
    <list-template :subject="'英语'" :list="EnglistList"></list-template>
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
            EnglistList:[]
        }
    },
    beforeRouteEnter(to, from, next) {
        next(Vm =>{
            Vm.getData()
        })
    },
    methods:{
        getData(){
            axios.get('/api/English').then(res => {
                if(!res) return
                this.EnglistList = res.data.data
                console.log(this.EnglistList)
            })
        }
    }
}
</script>

