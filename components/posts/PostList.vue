<template>
  <div class="home-page">
    <section class="post-list">
      <PostPreview
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://www.bsr.org/images/heroes/tech-against-trafficking-hero.jpg"
        title="Post 1"
        previewText="hello"
      />
      <PostPreview
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://annenberg.usc.edu/sites/default/files/womenintech.jpg"
        title="Post 2"
        previewText="hello 2"
      />
      <PostPreview
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://insuranceblog.accenture.com/wp-content/uploads/2019/09/Technology_Vision1.jpeg"
        title="Post 3"
        previewText="hello 3"
      />
    </section>
  </div>
</template>
<script>
import PostPreview from "@/components/posts/PostPreview";
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin:{
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
    .post-list {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>