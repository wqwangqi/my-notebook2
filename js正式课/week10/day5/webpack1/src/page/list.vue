<template>
    <div>
            <MHead :title='listTitle'>列表项</MHead>
            <div class="content">
                <ul class="list">
                    <li v-for='(item,index) in books' :key='index'>
                        <img :src="item.bookCover" :alt="item.bookInfo">
                        <div class="right">
                            <h4>{{item.bookName}}</h4>
                            <div>￥：{{item.bookPrice}}</div>
                            <button>收藏</button>
                        </div>
                    </li>
                </ul>
            </div>
    </div> 
</template>

<script>
import MHead from "../base/head.vue";
import { hotbooks } from "../api/ajax.js";
export default {
  created() {
    hotbooks().then(res => {
      this.books = res;
    });
  },
  data() {
    return {
      books: [],
      listTitle:[$route.params.title]
    };
  },
  components: {
    MHead
  }
};
</script>
<style scoped lang='less'>
    .list {
        li {
            box-sizing: border-box;
            padding: 5px;
            img {
                width: 125px;
                padding-left: 40px
            }
        .right {
            width: 40%;
            height: 120px; 
            float: right;
            text-align: left;
            font-size: 15px;
            button{
                width: 60px;
            }
            }
        }
    }
</style>



