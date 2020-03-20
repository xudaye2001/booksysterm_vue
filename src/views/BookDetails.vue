<template>
    <div>
        <div>
            图书详情
        </div>
        <ul v-for="(key,item) in BookDetails" v-bind:key="index">
            <li>{{item}} : {{key}}</li>
        </ul>
    </div>
</template>

<script>
    import store from '../store'
    import axios from 'axios'
    export default {
        name: "BookDetails",
        data(){
            return{
                BookDetails:[],
                id:null,
                params:1,
            }
        },
        //
        created() {
            this.instance = axios.create({
                baseURL: "http://localhost:8001",
                timeout: 3000,
            });
            this.instance.get('/restful/bookdetails/'+store.state.bookId).then(res=>{
                this.BookDetails = res.data
                console.log(res)
            })
        },
        methods:{}
    }
</script>

<style scoped>

</style>
