<template>
  <div>
    <ul v-for="(book,index) in booklist " v-bind:key="index">
      <div>
        <li>title:{{book.title}}</li>
        <li>author:{{book.author}}</li>
        <li>publisher:{{book.publisher}}</li>
        <li>isbn:{{book.isbn}}</li>
      </div>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'boolist',
  data: function () {
    return {
      booklist: null
    }
  },
  created () {
    // this.instance = axios.create({
    //   baseURL: 'http://127.0.0.1:8001/',
    //   timeout: 3000
    // });
    this.getBookList()
  },
  methods: {
    async getBookList() {
      let res = await this.$Http.getBookList()
      this.boolist = res.data
    }
  }
}
</script>

<style scoped>

</style>
