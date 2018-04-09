<template>
    <div class="wrapper">
        <h2>C语言程序设计</h2>
        <ul class="catalog" v-if="showCatalog">
            <li 
            v-for="(item, index) of list" 
            :key="index" 
            @click="nextTo(item.pathName)">{{item.name}}</li>
        </ul>

        <router-view/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list: [
                {
                    name: '第1章 C语言概述',
                    pathName: 'wTest1'
                },
                {
                    name: '第2章 数据与运算',
                    pathName: 'wTest2'
                }
            ]
        }
    },
    computed:{
        showCatalog(){
            if(this.$route.name === 'web1'){
                return true
            }
            return false
        }
    },
    methods:{
        nextTo(name){
            this.$router.push({name})
        }
    }
}
</script>
