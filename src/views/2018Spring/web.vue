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
                },
                {
                    name: '第3章 C程序的基本控制结构',
                    pathName: 'wTest3'
                },
                {
                    name: '第一次作业',
                    pathName: 'wHomework1'
                },
                {
                    name: '第4章 数组',
                    pathName: 'wTest4'
                },
                {
                    name: '第二次作业',
                    pathName: 'wHomework2'
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
