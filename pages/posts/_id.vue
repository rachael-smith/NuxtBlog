<template>
    <div class="single-post-page">
        <section class="post">
            <h1>{{loadedPost.title}}</h1>
            <div class="post-details">
                <div class="post-details"> Last updated on {{loadedPost.updatedDate}} </div>
                <div class="post-details"> Written by {{loadedPost.author}}</div>
            </div>
            <p class="post-content">{{loadedPost.content}}</P>
            <div class="post-feedback">
                <p>Let me know what you think about the post, send email to <a href="mailto:imcool@test.com">imcool@test.com</a></p>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  asyncData(context, callback){
    setTimeout(()=> {
      callback(null, {
        loadedPost: [
          {id: '1', title: 'First Post', previewText: 'this is my first post', content: 'jrferiowrepowqhreqlhrewqlkrjewklq', thumbnail: 'https://annenberg.usc.edu/sites/default/files/womenintech.jpg', isAdmin:false, updatedDate:'1/1/2020', author:'Rachael Smith'},
        ]
      })
    },1000)
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>