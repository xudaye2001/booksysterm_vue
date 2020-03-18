const BOOK_API = {
    // 获取联系人列表
    getBookList:{
        method:'get',
        url:'/restful/booklist'
    },
    // // 新建联系人 form-data
    // newContactForm:{
    //     method:'post',
    //     url:'/contact/new/form'
    // },
    // 新建联系人 application/json
    getBookMsg:{
        method:'post',
        url:'/restful/addbookfromisbn'
    },
    addBookJson:{
        method:'post',
        url:'/restful/tasks/addbook',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    },
    // 编辑联系人
    // editContact:{
    //     method:'put',
    //     url:'/contact/edit'
    // },
    // 删除联系人
    delBook:{
        method:'delete',
        url:'/restful/deletebook'
    },
    //创建角色
    addUser:{
        method:'post',
        url:'/restful/register'
    },
    login:{
        method:'post',
        url:'/restful/login'
    }
};
export default BOOK_API
