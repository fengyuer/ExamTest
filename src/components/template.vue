<template>
    <div class="list">
        <h1>{{subject}}</h1>
        <div v-for="(item, index) of list" :key="index">
            <h3>{{index}}.{{item.content}}</h3>
            <ul>
                <li v-for="answer of item.answers" :key="answer" v-text="answer"></li>
            </ul>
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
    }
}
</script>

