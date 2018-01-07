<template>
    <div class="list">
        <h1>{{subject}}</h1>
        <div class="extra">
            <span>答对：{{rightTotal}}个</span>
            <span>答错：{{errTotal}}个</span>
            <span>得分：{{150 / list.length * rightTotal}}分</span>
            <span class="page">{{curIndex+1}} / {{list.length}}</span>
        </div>

        <div class="problem" v-for="(item, listIndex) of list" :key="listIndex" v-if="listIndex===curIndex">
            <h3><span class="num">{{listIndex+1}}.</span>{{item.content}}</h3>
            <ol>
                <li
                    :class="[checkState,{checked: index === checkIndex }]" 
                    v-for="(answer, index) of item.answers" :key="answer">
                    <input type="button" 
                        :disabled="isChekedCur"
                        :value="answer" 
                        @click="checkQuestion(answer,item,index)">
                </li>
            </ol>
        </div>

        <div class="switch">
            <button type="button" :disabled="isFirst" @click="next('pre')">上一题</button>
            <button type="button" :disabled="isLast" @click="next('next')">下一题</button>
        </div>

        <div class="tip right" v-if="showRightTip">
            恭喜您，答对了！☺ <a @click="checkAnalysis">查看解析</a>
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
            curIndex: 0,            // 当前题号
            rightTotal: 0,          // 答对总数
            errTotal: 0,            // 打错总数
            isFirst: true,          // 是否是第一题
            isLast: false,          // 是否是最后一题
            showAnalysis: false,    // 是否显示解析
            analysisCon: '',        // 解析内容
            checkList: [],
            checkIndex: 6,
            isChekedCur: false,
            checkState:'',
            showRightTip: false,    // 是否显示正确提示
            showErrTip: false,      // 是否显示错误提示
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
                options.sort(this.randomSort)
                this.curIndex --
                
            }else{
                nextIndex = this.curIndex + 1
                options = this.list[nextIndex].answers
                options.sort(this.randomSort)
                this.curIndex ++
            }

            this.verifySelect(this.list[nextIndex].id,options)

            this.curIndex === 0 ? this.isFirst = true : this.isFirst = false
            this.curIndex === lastIndex ? this.isLast = true : this.isLast = false
        },
        checkQuestion(option,item,index){
            this.analysisCon =  item.analysis
            this.checkIndex = index
            this.checkState=""
            this.isChekedCur = true

            let obj = {
                id: item.id,
                isRight: false,
                checkedVal: option,
                analysisCon: item.analysis
            }

            if(option===item.correct){
                this.showRightTip = true
                this.showErrTip = false
                this.checkState="right"
                this.rightTotal++
                obj.isRight = true
            }else{
                this.showRightTip = false
                this.showErrTip = true
                this.checkState="wrong"
                this.errTotal++
            }
            this.checkList.push(obj)
            console.log(this.checkList)
        },
        // 随机排序
        randomSort(a,b){
            //通过随机产生0到1的数，然后判断是否大于0.5从而影响排序，产生随机性的效果。
            return Math.random()> .5 ? -1 : 1
        },
        checkAnalysis(){
            this.showAnalysis =  true
        },
        // 验证是否选择
        verifySelect(id,options){
            console.log(this.checkList)
            this.checkList.find((v) => {
                if(v.id === id){
                    this.isChekedCur = true

                    this.analysisCon = v.analysisCon

                    // 选择是否正确
                    if(v.isRight){
                        this.showRightTip = true
                        this.checkState = "right"
                    }else{
                        this.showErrTip = true
                        this.checkState = "wrong"
                    }

                    // 选择的项
                    options.find((option,index) => {
                        if(option === v.checkedVal){
                            this.checkIndex= index
                        }
                    })
                    return true
                }
                this.isChekedCur = false
            })
        }
    }
}
</script>

