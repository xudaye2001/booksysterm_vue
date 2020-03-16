<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80"
          label-position="left">
        <FormItem label="书名" prop="title">
            <Input v-model="formValidate.title" placeholder="输入书名"></Input>
        </FormItem>
        <FormItem label="作者" prop="author">
            <Input v-model="formValidate.author" placeholder="输入作者"></Input>
        </FormItem>

        <FormItem>
            <Button type="primary" >提交</Button>
<!--            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>-->
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
    import axios from "axios"
    export default {
        data () {
            return {
                formValidate: {
                    title:'',
                    author:'',
                },
                ruleValidate: {
                    title: [
                        {required:true, message:'标题不能为空', trigger:'blur'}
                    ],
                    author: [
                        {required:true, message:'作者不能为空', trigger:'blur'}
                    ]
                }
            }
        },
        methods: {
            // created () {
            //     this.instance = axios.create({
            //         baseURL: 'http://localhost:8001',
            //         timeout: 3000
            //     })
            // },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.instance = axios.create({
                            baseURL: 'http://123.56.166.234:8001/',
                            timeout: 3000
                        })
                        this.instance.post('/restful/addbookfromhand/', this.formValidate).then(res => {
                            console.log(res);
                        this.$Message.success('Success!');
                        });
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
