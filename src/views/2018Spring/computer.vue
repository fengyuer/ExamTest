<template>
    <div class="wrapper">
        <h2>计算机应用基础</h2>
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
                    name: '第1章 计算机基础知识 - 1.3',
                    pathName: 'ctest13'
                },{
                    name: '第1章 计算机基础知识 - 1.4',
                    pathName: 'ctest14'
                },
            ]
        }
    },
    computed:{
        showCatalog(){
            if(this.$route.name === 'computer1'){
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

