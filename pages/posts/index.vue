<template>
  <div class="posts-page">
      <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  asyncData(context, callback){
    setTimeout(() => {
      callback(null, {
        loadedPosts: [     
          {id: '1', title: 'First Post', previewText: 'this is my first post', thumbnail: 'https://annenberg.usc.edu/sites/default/files/womenintech.jpg', isAdmin:false},
          {id: '2', title: 'Second Post', previewText: 'this is my second post', thumbnail: 'https://annenberg.usc.edu/sites/default/files/womenintech.jpg', isAdmin:false}
      ]})
    },1500)
  },
  components: {
    PostList
  }
};
</script>

<style scoped>
.posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>