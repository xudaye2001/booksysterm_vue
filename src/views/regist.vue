<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
        </FormItem>

        <FormItem label="E-mail" prop="email">
            <Input v-model="formValidate.email" placeholder="Enter your e-mail"></Input>
        </FormItem>

        <FormItem label="手机号码" prop="mobile">
            <Input v-model="formValidate.mobile" placeholder="Enter your mobile"></Input>
        </FormItem>

        <FormItem label="密码" prop="password">
            <Input v-model="formValidate.password" placeholder="Enter your password"></Input>
        </FormItem>

        <FormItem label="确认密码" prop="repassword">
            <Input v-model="formValidate.repassword" placeholder="Enter your password agin"></Input>
        </FormItem>

        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>


    </Form>
</template>
<script>
    export default {
        name:'regist',
        data () {
            return {
                formValidate: {
                    name: '',
                    email: '',
                    mobile:'',
                    password:'',
                    repassword:'',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    password: [
                        {required:true, message:'password'}
                    ],
                    repassword: [
                        {required:true, message:'repassword'}
                    ],
                    mobile: [
                        {required:true, message:'mobile'}
                    ]
                }
            }
        },
        methods: {
            async regist(){
                let res = await this.$Http.addUser(this.formValidate, true);
                console.log(res.data);
                console.log(res.data.rspCode);
                if (res.data.rspCode === "000000") {
                    await this.$router.push('/')
                }

            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.regist();
                        this.$Message.success('Success!');
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
