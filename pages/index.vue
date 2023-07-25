<template>
  <div>

    <div class="h-[max-content] dark:bg-[#f1f1f1] w-[100%] bg-[#333] flex-col">
      <div class="
          cont
          flex
          w-[90%]
          h-[max-content]
          m-auto
          items-center
          justify-between
        ">
        <h1 class="
            w-[max-content]
            dark:text-[#000]
            py-[50px]
            text-[#fff] text-[40px]
          ">
          Flag Selection
        </h1>

        <div class="darkInp flex items-center">
          <div :class="{ activeMode: this.dark }" @click="mode" class="
            h-[27px]
            mr-[25px]
            rounded-[20px]
            bg-[#f2f2f2]
            w-[45px]
            cursor-pointer
            relative
          ">
            <div class="
              h-[25px]
              w-[25px]
              bg-[#222]
              absolute
              top-[1px]
              left-[0px]
              rounded-[50%]
            "></div>
          </div>

          <div class="blockInp w-[425px] flex items-center relative">
            <input v-model="search" v-on:blur="inputBlur" @focus="inputFocus"
              class="
              py-[16px]
              focus:border-[red]
              dark:text-[#000]
              relative
              pl-[48px]
              h-[48px]
              w-[100%]
              rounded-[24px]
              bg-[transparent]
              border-[1px] border-solid border-[#3D4554]
              outline-none
              text-[#fff]
            " placeholder="Поиск по названию" type="text" />

            <span @click="inputBlur" v-if="this.showSercher"
              class="text-[white] dark:text-[#000] absolute cursor-pointer text-[35px] top-[-5px] right-[20px]">&times;</span>
          </div>

        </div>


        <!-- даталист поисковика -->
        <div :class="{ showSearcherActive: this.showSercher }" class="
            searcherScroll
            absolute
            showSearcher
            min-h-[80px]
            overflow-y-scroll
            duration-[.3s]
            py-[10px]
            max-h-[400px]
            w-[425px]
            rounded-[8px]
            border-[2px] border-solid border-[#3D4554]
            bg-[#333]
            z-[999]
            top-[120px]
          ">
          <div v-if="this.todosByTitle.length == 0" class="
              nenash
              scrolling
              flex
              items-center
              h-[100%]
              w-[100%]
              justify-center
            ">
            <h1 class="text-[30px] text-[#fff] text-center mt-[5px]">
              Ничего не нашлось 😔
            </h1>
          </div>

          <!-- поиск -->
          <div v-for="item in this.todosByTitle" :key="item.id" @click="countryPer(item)" class="
              h-[60px]
              hover:bg-[#3b4559]
              cursor-pointer
              duration-[.3s]
              p-[16px]
              w-[100%]
              flex
              items-center
            ">
            <figure class="h-[50px] mr-[16px] w-[100px] bg-[#272E3B] rounded-[5px]">
              <img class="h-[100%] w-[100%] rounded-[5px] object-cover" :src="item.flags.png" alt="image" />
            </figure>
            <div class="flex-col justify-center">
              <p class="text-white">{{ item.name }}</p>
              <p class="text-[#909195]">{{ item.capital }}</p>
            </div>
          </div>
        </div>
        <!-- конец даталиста поисковика -->
      </div>

      <div class="wrp flex justify-between flex-wrap min-h-[809px] h-[100%] w-[90%] m-auto">


        <div v-if="this.todosByTitle.length == 0" class="nenash flex items-center h-[100vh] w-[100%] justify-center">
          <h1 class="
              text-[50px] text-[#fff]
              dark:text-[#000]
              text-center
              mt-[5px]
            ">
            Ничего не нашлось 😭
          </h1>
        </div>

        <div v-for="item in this.todosByTitle" :key="item.id" class="
            shadow
            dark:bg-[#D0D0D0]
            h-[370px]
            mb-[40px]
            bg-[#444]
            w-[350px]
            p-[10px]
            text-[white]
          ">
          <img class="h-[160px] object-contain w-[100%]" :src="item.flags.png" alt="" />
          <p class="mt-[40px] dark:text-[#000] text-[24px] max-w-[100%]">{{ item.name }}</p>
          <h3 class="mt-[10px] dark:text-[#000]">{{ item.capital }}</h3>
            <button @click="countryPer(item)" class="
              py-[10px]
              mt-[15px]
              dark:text-[#000] dark:border-[#000]
              px-[50px]
              border-[1px] border-solid border-[#fff]
            ">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/adaptation.css";
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {
      dark: false,
      showSercher: false,
      search: "",
    };
  },
  computed: {
    ...mapGetters(["countries"]),
    todosByTitle() {
      return this.countries.filter(
        (item) => item.name.toLowerCase().indexOf(this.search) !== -1);
    },
  },
  methods: {
    countryPer(item) {
      if (process.client) {
        window.localStorage.saveItem = JSON.stringify(item)
      }
      let reItem = item.name.replace(/ /g, '_')
      this.$router.push(`/${reItem}`);
    },
    mode() {
      this.dark = !this.dark;
      if (this.dark) {
        document.querySelector("html").classList.add("dark");
      } else document.querySelector("html").classList.remove("dark");
    },
    inputFocus() {
      this.showSercher = true;
      // this.close = !this.close
    },
    inputBlur() {
      let time = setTimeout(() => {
        this.showSercher = false;
      }, 300);
    },
  },
};
</script>


<style>
* {
  transition-duration: .3s;
}

.shadow {
  box-shadow: 0px 5px 20px rgb(70, 70, 70) !important;
}

.activeMode {
  background: rgb(15, 15, 15) !important;
  transition-duration: 0.5s;
}

.activeMode div {
  left: 20px !important;
  transition-duration: 0.5s;
  background: #fff !important;
}

.searcherScroll::-webkit-scrollbar {
  background: #444 !important;
  width: 5px !important;
  border-radius: 2px;
  margin: 10px !important;
}

.searcherScroll::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) !important;
  margin: 10px !important;
  border-radius: 2px;
}

::-webkit-scrollbar {
  background: #444 !important;
  width: 5px !important;
  border-radius: 2px;
  margin: 10px !important;
}

::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) !important;
  margin: 10px !important;
  border-radius: 2px;
}

.showSearcher {
  transform: translateY(100px);
  position: absolute;
  right: 100px;
  opacity: 0%;
  pointer-events: none;
}

.showSearcherActive {
  transform: translateY(0px);
  opacity: 100%;
  pointer-events: initial;
}
</style>