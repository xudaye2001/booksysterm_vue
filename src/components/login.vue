<template>
    <div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="name">
                <Input type="text" v-model="formInline.name" placeholder="Username" >
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
        </Form>
    </div>

</template>
<script>

    // import store from ;

    export default {
        data () {
            return {
                formInline: {
                    name: '',
                    password: '',
                    // store,
                },
                ruleInline: {
                    name: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.login();

                    } else {
                        this.$Message.error('校验失败!');
                    }
                })
            },
            async login(){
                let res = await this.$Http.login(this.formInline, true);
                console.log(res);
                if (res.data.status === "ok") {
                    window.localStorage.setItem("token", res.headers.token);
                    this.$Message.success("登录成功");
                    await this.$router.push('/')
                }else {

                    this.$Message.error("登录失败: "+res.data.message)
                }
                // console.log(res.headers.token)
            }
        },
        // computed: {
        //     'info': function () {
        //         console.log('obj.a changed');
        //         this.$store.commit('increse')
        //         return this.$store.commit("loginData", this.formInline.name);
        //     }
        // },
        // watch:{
        //     formInline:function (newName, oldName) {
        //         console.log(this.formInline())
        //         this.$store.commit('increse')
        //     }
        // }
        watch: {
            'formInline.password': {
                handler(newName, oldName) {
                    this.$store.commit("loginData", this.formInline);
                },
                // immediate: true
            }
        }

    }
</script>



