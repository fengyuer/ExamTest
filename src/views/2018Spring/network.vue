<template>
    <div class="wrapper">
        <h2>计算机网络</h2>
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
                    name: '第一次作业',
                    pathName: 'netHomework1'
                }, {
                    name: '第二次作业',
                    pathName: 'netHomework2'
                }, {
                    name: '第三次作业',
                    pathName: 'netHomework3'
                }, {
                    name: '第四次作业',
                    pathName: 'netHomework4'
                }
            ]
        }
    },
    computed:{
        showCatalog(){
            if(this.$route.name === 'network1'){
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