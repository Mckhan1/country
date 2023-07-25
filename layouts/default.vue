<template>
  <div class="w-[100%] bg-[red]" id="layout-default">
    <div v-if="preload" class="preloader">
      <div class="three col">
        <div class="loader" id="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: [],
      preload: true,
    };
  },
  mounted() {
    this.$store.dispatch("FETCH_DATA");

    setTimeout(() => {
        this.preload = false
    }, 3000);

  },
};
</script>

<style scoped>
h1{
    color: white;
    font-size: 70px;
}
.preloader {
  height: 100vh;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: #333;
  left: 0;
  transition-duration: 1s;
  /* pointer-events: none; */
  top: 0;
}
.preloaderNone {
  opacity: 0 !important;
  display: none !important;
  pointer-events: none !important;
}

#loader span{
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #ffffff;
  margin: 35px 5px;
}

#loader span:nth-child(1){
  animation: bounce 1s ease-in-out infinite;
}

#loader span:nth-child(2){
  animation: bounce 1s ease-in-out 0.33s infinite;
}

#loader span:nth-child(3){
  animation: bounce 1s ease-in-out 0.66s infinite;
}

@keyframes bounce{
  0%, 75%, 100%{
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25%{
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
</style>
