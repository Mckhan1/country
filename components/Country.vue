<template>
  <div>
        <div class="h-[max-content] w-[100%] bg-[#333] flex-col">
            <h1 class="w-[90%] m-auto py-[50px] text-[#fff] text-[40px]">Flag Selection</h1>
            <div class="wrp flex flex-wrap h-[100%] w-[90%] m-auto">
                <div v-for="i of this.country" :key="i.id" class="shadow h-[370px] mb-[40px] mr-[40px] bg-[#444] w-[350px]  p-[10px] text-[white]">
                      <img class="h-[160px] w-[100%]" :src="i.img" alt=""/>
                      <p class="mt-[40px] text-[24px]">{{ i.country }}</p>
                      <h3 class="mt-[10px]">{{ i.capital }}</h3>
                      <button @click="countryPer(i)" class="py-[10px] mt-[15px] px-[50px] border-[1px] border-solid border-[#fff]">Подробнее</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['country'])
    },
    methods: {
      countryPer(i){
          console.log(i.id);
          this.$router.push(`country/${i.id}`)
      }
    }
}
</script>


<style>
.shadow{
    box-shadow: 0px 5px 20px rgb(70, 70, 70) !important;
}
</style>