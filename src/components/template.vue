<template>
    <div class="list">
        <h1>{{subject}}</h1>
        <div v-for="(item, index) of list" :key="index" v-if="index===curIndex">
            <h3><span class="num">{{index+1}}.</span>{{item.content}}</h3>
            <ol>
                <li v-for="answer of item.answers" :key="answer" v-text="answer"></li>
            </ol>
        </div>

        <div class="switch">
            <button type="button" :disabled="isFirst" @click="change('pre')">上一题</button>
            <button type="button" :disabled="isLast" @click="change('next')">下一题</button>
        </div>

        <!-- <div>解析</div> -->
    </div>
</template>
<script>
export default {
    props:{
        subject:{
            type: String,
            default: ''
        },
        list: {
            type: Array
        }
    },
    data(){
        return {
            curIndex: 0,
            isFirst: true,
            isLast: false
        }
    },
    methods:{
        change(way){
            let lastIndex = this.list.length - 1;

            let nextIndex
            let options = []

            if(way === 'pre'){
                nextIndex = this.curIndex - 1
                options = this.list[nextIndex].answers
                console.log(options)
                options.sort(this.randomSort)
                this.curIndex --
            }else{
                nextIndex = this.curIndex + 1
                options = this.list[nextIndex].answers
                console.log(options)
                options.sort(this.randomSort)
                this.curIndex ++
            }
            this.curIndex === 0 ? this.isFirst = true : this.isFirst = false
            this.curIndex === lastIndex ? this.isLast = true : this.isLast = false
        },
        // 随机排序
        randomSort(a,b){
            //通过随机产生0到1的数，然后判断是否大于0.5从而影响排序，产生随机性的效果。
            return Math.random()> .5 ? -1 : 1
        }
    }
}
</script>

