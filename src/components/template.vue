<template>
    <div class="list">
        <h1>{{subject}}</h1>
        <div class="total">{{curIndex+1}} / {{list.length}}</div>

        <div class="problem" v-for="(item, listIndex) of list" :key="listIndex" v-if="listIndex===curIndex">
            <h3><span class="num">{{listIndex+1}}.</span>{{item.content}}</h3>
            <ol>
                <li
                    :class="[checkState,{checked: index === checkIndex}]" 
                    v-for="(answer, index) of item.answers" :key="answer" 
                    @click="check_question(answer,item,index)">
                    {{answer}}
                </li>
            </ol>
        </div>

        <div class="switch">
            <button type="button" :disabled="isFirst" @click="next('pre')">上一题</button>
            <button type="button" :disabled="isLast" @click="next('next')">下一题</button>
        </div>

        <div class="tip right" v-if="showRightTip">
            <span class="right">恭喜您，答对了！☺</span>
        </div>
        <div class="tip wrong" v-if="showErrTip">
            您的答案不对哦</span> <a @click="checkAnalysis">查看解析</a>
        </div>

         <div v-if="showAnalysis" class="analysis">
             <h4>解析:</h4>
             <div v-html="analysisCon"></div>
         </div>
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
            analysis: '',
            showAnalysis: false,
            analysisCon: '',
            isFirst: true,
            isLast: false,
            checkIndex: 6,
            checkState:'',
            showRightTip: false,
            showErrTip: false,
        }
    },
    methods:{
        next(way){
            const lastIndex = this.list.length - 1;

            // 重置项
            this.showRightTip = false
            this.showErrTip = false
            this.showAnalysis =  false
            this.checkIndex = 6

            let nextIndex
            let options = []

            if(way === 'pre'){
                nextIndex = this.curIndex - 1
                options = this.list[nextIndex].answers
                // console.log(options)
                options.sort(this.randomSort)
                this.curIndex --
                
            }else{
                nextIndex = this.curIndex + 1
                options = this.list[nextIndex].answers
                // console.log(options)
                options.sort(this.randomSort)
                this.curIndex ++
            }

            this.curIndex === 0 ? this.isFirst = true : this.isFirst = false
            this.curIndex === lastIndex ? this.isLast = true : this.isLast = false
        },
        check_question(option,item,index){
            this.analysisCon =  item.analysis
            console.log(this.analysisCon)
            this.checkIndex = index
            this.checkState=""
            if(option===item.correct){
                this.showRightTip = true
                this.showErrTip = false
                this.checkState="right"
            }else{
                this.showRightTip = false
                this.showErrTip = true
                this.checkState="wrong"
            }
            // console.log(option)
            // console.log(item)
        },
        // 随机排序
        randomSort(a,b){
            //通过随机产生0到1的数，然后判断是否大于0.5从而影响排序，产生随机性的效果。
            return Math.random()> .5 ? -1 : 1
        },
        checkAnalysis(){
            this.showAnalysis =  true
            console.log(this.showAnalysis)
            console.log(this.analysisCon)
        }
    }
}
</script>

