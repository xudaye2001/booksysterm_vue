<template>
    <div>
    <Form ref="formValidateIsbn" :model="formValidateIsbn" :rules="ruleValidateIsbn" :label-width="80"
        label-position="left">
        <FormItem label="ISBN编码" prop="isbn">
            <Input v-model="formValidateIsbn.isbn" placeholder="输入ISBN"></Input>
        </FormItem>

        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidateIsbn')">提交</Button>
            <Button @click="addBook()" style="margin-left: 8px">保存</Button>
        </FormItem>
    </Form>
    <div>
        <Row style="background:#eee;padding:20px">
            <Col span="11">
                <Card :bordered="false" >
                    <p slot="title">图书信息</p>
                    <p>出版日期: {{pubdate}}</p>
                    <p>纸张: {{paper}}</p>
                    <p>规格: {{format}}</p>
                    <p>出版社: {{publisher}}</p>
                    <p>作者: {{author}}</p>
                    <p>书名: {{title}}</p>
                    <p>售价: {{price}}</p>
                    <p>页数: {{page}}</p>
                    <p>ISBN: {{isbn}}</p>
                    <p>装订: {{binding}}</p>
                    <p>生产: {{produce}}</p>
                </Card>
            </Col>
            <Col span="11" offset="2">
                <Card shadow>
                    <p slot="title">简介</p>
                    <p><img :src=img :alt=title width="200" height="250"></p>
                    <p>{{gist}}</p>
                    <p>测试用例:9787569210460</p>


                </Card>
            </Col>
        </Row>
    </div>

    </div>
</template>
<script>
    import axios from "axios"
    export default {
        data () {
            return {
                pubdate: "",
                paper: "",
                img: "",
                gist: "",
                format: "",
                publisher: "",
                author: "",
                title: "",
                price: "",
                page: "",
                isbn: "",
                binding: "",
                produce: "",

                revdata:[],

                formValidateIsbn: {
                    isbn:'',
                },
                ruleValidateIsbn: {
                    isbn: [
                        {required: true, message: 'ISBN不能为空', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            async getList() {
                let res = await this.$Http.getBookList();
                this.booklist = res.data;
            },
            async getBookMsg() {
                let res = await this.$Http.getBookMsg(this.formValidateIsbn);

                this.revdata = res.data.showapi_res_body.data;

                this.pubdate = this.revdata.pubdate;
                this.paper = this.revdata.paper;
                this.format = this.revdata.format;
                this.publisher = this.revdata.publisher;
                this.author = this.revdata.author;
                this.price = this.revdata.price;
                this.page = this.revdata.page;
                this.isbn = this.revdata.isbn;
                this.binding = this.revdata.binding;
                this.produce = this.revdata.produce;

                this.img = this.revdata.img;
                this.gist = this.revdata.gist;

                if( res.code=== 200 ) {
                    alert('查询成功')
                }
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.getBookMsg()
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            async addBook(){
                let res = await this.$Http.addBookJson(
                    this.revdata
                );
                if(res.code===200) {
                    console.log('保存成功')
                    this.$Message.success('保存成功');
                    this.getList()
                }

            }
        }
    }
</script>
