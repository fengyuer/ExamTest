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
    created(){
        console.log("begin")
        this.getData()
    },
    methods:{
        getData(){
            axios.get('http://localhost:8080/api/English').then(res => {
                console.log(res)
            })

        }


    }
}
</script>

