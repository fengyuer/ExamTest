<template>
    <div class="wrapper">
        <h2>大学英语(一)</h2>
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
                    name: 'Unit 1 单元自测',
                    pathName: 'eTest1'
                },
                {
                    name: 'Unit 2 单元自测',
                    pathName: 'eTest2'
                }
            ]
        }
    },
    computed:{
        showCatalog(){
            if(this.$route.name === 'English1'){
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
