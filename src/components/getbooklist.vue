<template>
    <div class="container-thingy">
        <ul>
            <li v-for="(book, index) in booklist" v-bind:key="index">
                <p><img v-bind:src=book.img class="" alt="神圣家族" width="115" height="172"></p>
                <p>作者:{{book.author}}</p>
                <p>出版社:{{book.publisher}}</p>
                <p>发布者:{{book.ownners[0].name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
export default {
  name: 'getbooklist',
  data() {
    return {
        booklist:[]
    }
  },
  created () {
      this.getList();
  },
  methods: {
      async getList() {
          let res = await this.$Http.getBookList();
          this.booklist = res.data;
          console.log(res.data)
      }
  }
}
</script>
<style scoped>
    ul {
        display: flex; /*activate power*/
        margin: 0;
        padding: 0;
        /*background: #ea8c8c;*/
        list-style: none;
        flex-wrap: wrap;
           /*justify-content: space-around;*/
        /*height: 500px;*/
        /*   align-items: center;*/
        /*   align-content: space-between;*/
    }

    li {
        margin: 5px; /* Adds space between items */
        /*background: #c3e2d2;*/
        border-radius: 3px;
    }

    ul li:last-of-type {
        /*flex-grow: 2;*/
        align-self: flex-end;
    }

</style>
