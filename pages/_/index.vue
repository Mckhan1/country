<template>
    <div>
        <div class="h-[max-content] dark:bg-[#f1f1f1] w-[100%] bg-[#333]">
            <nuxt-link to="/">
                <svg class="icon h-[50px] w-[50px] absolute top-[25px] left-[40px]" viewBox="0 0 512 512">
                <title>Arrow Back</title>
                <path fill="none" stroke="#666 " stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
                    d="M244 400L100 256l144-144M120 256h292" />
            </svg>
            </nuxt-link>
            <h1 class="textH1 dark:text-[#000] pt-[50px] flex items-center justify-center text-[50px] text-[#fff]">{{ this.count.name }}</h1>
            <div class="wrapper h-[100%] w-[90%] pt-[125px] pb-[50px] flex m-auto justify-between">

                <div class="images h-[100%] w-[50%] flex items-center justify-center">
                    <img class="h-[450px] object-contain w-[90%] m-auto" :src="this.count.flag" alt="">
                    <!-- {{ this.count.flag }} -->
                </div>

                <div class="texts h-[50%] w-[40%] m-auto flex-col items-center text-[#fff] 
                dark:text-[#000]">
                    <h2 class="text-[30px] flex-col">name: <span class="text-[gray] dark:text-[#555] text-[22px] ml-[5px]">{{
                        this.count.name
                    }}</span></h2>

                    <p class="mt-[10px] text-[23px]">capital: <span class="text-[gray] dark:text-[#555] text-[22px] ml-[5px]">{{
                        this.count.capital
                    }}</span></p>
                    <p class="mt-[10px] text-[23px]">nativeName: <span class="text-[gray] dark:text-[#555] text-[22px] ml-[5px]">{{
                        this.count.nativeName
                    }}</span></p>


                    <p class="mt-[10px] text-[23px]">region: <span class="text-[gray] dark:text-[#555] text-[22px] ml-[5px]">{{
                        this.count.region
                    }}</span></p>


                    <p class="mt-[10px] text-[23px]">numericCode: <span class="text-[gray] dark:text-[#555] text-[22px] ml-[5px]">{{
                        this.count.numericCode
                    }}</span></p>
                    <p class="mt-[10px] text-[23px]">timezones: <span class="text-[gray] dark:text-[#555] text-[22px] ml-[5px]">{{
                        this.count.timezones
                    }}</span></p>


                    <p class="mt-[10px] text-[23px]">population: <span class="text-[gray] dark:text-[#555] text-[22px] ml-[5px]">{{
                        this.count.population
                    }}</span></p>


                    <p class="mt-[10px] text-[23px]">demonym: <span class="text-[gray] dark:text-[#555] text-[22px] ml-[5px]">
                            {{
                                this.count.demonym
                            }}</span></p>
                    <p class="mt-[10px] text-[23px]">topLevelDomain: <span class="text-[gray] dark:text-[#555] text-[22px] ml-[5px]">
                            {{
                                this.count.topLevelDomain
                            }}</span></p>

                    <div class="flex-col mt-[10px] items-center justify-center w-[180px] text-[white] mb-[10px]">
                        <p class="text-[23px]">languages:</p>
                        <div v-for="l of this.count.languages" :key="l.id" class="">
                            <p class="text-[gray] dark:text-[#555] text-[22px] mt-[3px]">{{ l.name }}</p>
                        </div>
                    </div>

                </div>

            </div>
            <!-- нижние блоки -->
            <div class="lowerBlock flex pb-[50px] h-[max-content] w-[85%] flex-wrap m-auto text-[white] dark:text-[#000]">
                <div
                    class="flex-col mr-[10px] items-center justify-center h-[max-content] w-[180px]  mb-[10px]">
                    <p class="text-[23px]">alpha3Code:
                    <p class="text-[gray] dark:text-[#555] text-[22px] ml-[5px] mt-[5px]">
                        {{this.count.alpha3Code}}
                    </p>
                    </p>
                </div>

                <div
                    class="flex-col mr-[10px] items-center justify-center h-[max-content] w-[180px]  mb-[10px]">
                    <p class="text-[23px]">alpha2Code:
                    <p class="text-[gray] dark:text-[#555] text-[22px] ml-[5px] mt-[5px]">{{
                        this.count.alpha2Code
                    }}</p>
                    </p>
                </div>

                <div
                    class="flex-col mr-[10px] items-center justify-center h-[max-content] w-[180px]  mb-[10px]">
                    <p class="text-[23px]">territory, km:
                    <p class="text-[gray] dark:text-[#555] text-[22px] ml-[5px] mt-[5px]">{{
                        this.count.area
                    }}</p>
                    </p>
                </div>

                <div
                    class="flex-col mr-[10px] items-center justify-center h-[max-content] w-[180px]  mb-[10px]">
                    <p class="text-[23px]">subregion:
                    <p class="text-[gray] dark:text-[#555] text-[22px] ml-[5px] mt-[5px]">{{
                        this.count.subregion
                    }}</p>
                    </p>
                </div>

                <div
                    class="flex-col mr-[10px] items-center justify-center h-[max-content] w-[180px]  mb-[10px]">
                    <p class="text-[23px]">independent:
                    <p v-if="this.count.independent == true" class="text-[gray] dark:text-[#555] text-[22px] ml-[5px] mt-[5px]">yes</p>
                    <p v-if="this.count.independent == false" class="text-[gray] dark:text-[#555] text-[22px] ml-[5px] mt-[5px]">no</p>
                    </p>
                </div>
                <div
                    class="flex-col mr-[10px] items-center justify-center h-[max-content] w-[180px]  mb-[10px]">
                    <p class="text-[23px]">callingCodes:
                    <p class="text-[gray] dark:text-[#555] text-[22px] ml-[5px] mt-[5px]">+ {{
                        this.count.callingCodes
                    }}</p>
                    </p>
                </div>



                <!-- <div
                    class="flex-col mr-[10px] items-center justify-center h-[max-content] w-[180px] text-[white] mb-[10px]">
                    <p class="text-[23px]">borders:</p>
                    <div v-for="item of this.count.borders" :key="item.id" class="">
                        <p class="text-[gray] dark:text-[#555] text-[22px] mt-[3px]">{{ item }}</p>
                    </div>
                </div> -->

            </div>

        </div>

        <!-- <h1>country: {{ this.count.country }}</h1> -->
        <!-- <div class="flex items-center">
    <p class="mt-[10px] text-[23px]">borders: </p>
<div class="flex items-center" v-for="i of this.count.borders" :key="i.id">
    <p>  <span class="text-[gray] dark:text-[#555] text-[22px] ml-[5px]"> {{ i }}</span></p>
</div>
</div> -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      count: {},
    };
  },
  computed: {
    ...mapGetters(["countries"]),
  },
  mounted() {
    if(process.client){
        this.count = JSON.parse(window.localStorage.saveItem)
    }
    // let path = window.location.pathname.split("_").join(" ");
    // let rePath = path.slice(1, path.length);

    // for (let i of this.countries) {
    //   if (rePath == i.name) {
    //     this.count = i;
    //   }
    // }
  },
};
</script>