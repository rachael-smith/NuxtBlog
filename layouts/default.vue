<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySideNav= false"/>
    <nuxt />
  </div>
  
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader'
import TheSidenav from '@/components/navigation/TheSidenav'
export default {
  components:{
    TheHeader,
    TheSidenav
  },
  data(){
    return {
      displaySidenav: false
    }
  }
}

<style>

html{
  font-family: "Open Sans", sans-serif;
}

body{
  margin: 0
}

</style>
