<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue';
import MenbarIcon from './page/menubarIcon.vue'
function openMenu() {
  open.value = !open.value;
}

function linkonclick(event: MouseEvent) {
  const target = event.target as HTMLAnchorElement;
  alert(target.textContent)
}

const open = ref(false)
const windowwidth = ref(window.innerWidth)
const controlMenu = computed(() => {
  return windowwidth.value > 1400 ? true : open.value;

})

function windowResize() {
  windowwidth.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener('resize', windowResize);
  windowResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', windowResize);
});
watchEffect(() => {
  controlMenu.value
})

</script>
<template>
  <div class="testShow">
    <div class="bar">
      <div class="topbar">
        <div class="menu-icon">
          <MenbarIcon :isActive="open" @toggle-menu="openMenu" />
        </div>
        <div class="title">
          <a> 白頭翁不吃小米</a>
          <div class="logo">
            <i class="headwhite"></i>
            <i class="eye"></i>
            <i class="head"></i>
            <i class="zui"></i>
          </div>
        </div>



      </div>

      <nav class="menu" v-show="controlMenu">
        <a @click="linkonclick">白頭翁的特性</a>
        <a @click="linkonclick">白頭翁的故事</a>
        <a @click="linkonclick">白頭翁的美照</a>
        <a @click="linkonclick">白頭翁的危機</a>
      </nav>
    </div>
    <div class="context">
      <div class="bgImage">
        <div class="bgImageText">
          <h1>白頭翁 (Chinese bulbul)</h1>
          <p>又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。</p>
        </div>
      </div>
      <div class="intro">
        <div class="introContext">
          <div class="introTitle">
            外觀
            <i class="gg-shape-circle"></i>
          </div>
          <p>
            白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。
          </p>
        </div>
        <div class="introContext">
          <div class="introTitle">
            棲地
            <i class="gg-shape-circle"></i>
          </div>
          <p>
            白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。</p>
        </div>
        <div class="introContext">
          <div class="introTitle">
            食性
            <i class="gg-shape-circle"></i>
          </div>
          <p> 以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。</p>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.testShow {
  display: flex;
  flex-direction: row;
}

.bar {
  width: 20%;
  height: 100dvh;
  background: white;
  box-shadow: 0px 4px 4px 0px #00000040;

}

.title {
  position: relative;
  font-size: x-large;
  display: flex;
  justify-content: center;
  padding: 3rem;
  font-weight: bold;
}

.menu {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.menu-icon {
  display: none;
}

.menu a {
  padding: 0.7rem
}

.menu a:hover {
  text-decoration: underline;
  color: #AA6666;

  text-underline-offset: 8px;
  font-weight: bold;

}



.logo {
  position: absolute;
  top: 40px;
  right: -30px;
  z-index: 30;
  border-radius: 180px;
  width: 3rem;
  height: 3rem;
  box-shadow: 0px 0px 6px 0px #00000040;

  background-color: white;
}

.context {
  position: absolute;
  width: 80%;
  height: 100dvh;
  left: 20%;
  background-color: #DCCCBC;
  ;
}

.bgImage {
  position: relative;
  width: 100%;
  height: 50%;
  background-image: url("./components/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bgImageText {
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: end;
  color: aliceblue;
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0), black);
  padding: 2rem 1rem 2rem 5rem;
  border-radius: 60rem 0rem 0rem 0rem;
}

.bgImageText h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 65.38px;
}

.bgImageText p {

  font-size: 18px;
  font-weight: 400;
  line-height: 24.52px;


}


.intro {
  display: flex;
  flex-direction: row;
  padding: 4rem;

}

.intro div {
  display: flex;
  flex-direction: row;
  margin-right: 2rem;
}

.introContext {
  margin-right: 3rem;
}

.introContext p {
  font: 16px;
  text-align: justify;
}

.introTitle {
  position: relative;
  font-size: xx-large;
  height: fit-content;
  padding: 0.7rem;
  font-weight: bold;
}

@media (max-width: 1400px) {
  .menu-icon {
    display: flex;
    padding-top: 0.2rem;
    width: fit-content;
  }

  .testShow {
    flex-direction: column;
  }

  .title {

    flex-grow: 1;
    justify-content: center;
  }

  .title a {
    padding-top: 0.5rem;
  }

  .bar {

    padding: 1rem;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;

  }

  .logo {

    right: 1rem;
    top: 0px;
  }

  .topbar {
    display: flex;
    width: 100%;

  }

  .menu-icon {
    padding-left: 2rem;
    width: fit-content;
    height: 3rem;
  }

  .title {
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .menu {
    display: none;
  }

  .context {
    position: relative;
    width: 100%;

    height: 100dvh;
    left: 0;
  }




  .menu {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 10px;
    right: 0;
    background-color: #FAFBFF;
    width: 100%;
    padding: 10px 0;
    z-index: 1;
  }


}



@media (max-width:830px) {

  .intro {
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }

  .introTitle {
    padding: 0.5rem;
  }

}




/* icon */


.headwhite {
  width: 30px;
  height: 17px;
  background-color: aliceblue;
  border-color: white;
  border-radius: 20px 12px 12px 0;
  position: absolute;
  z-index: 30;
  top: 16px;
  left: 9px;
}

.eye {
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 50%;
  z-index: 50;
  position: absolute;
  top: 22px;
  left: 28px;
}

.head {
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 20px 16px 16px 0;
  position: absolute;
  top: 10px;
  left: 9px;
}

.zui {
  width: 7px;
  height: 5px;
  background-color: black;

  position: absolute;
  top: 21px;
  left: 38px;
  border-radius: 0 180% 0 0;
}

/* icon  */
.gg-shape-circle {
  position: absolute;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  display: block;
  transform: scale(var(--ggs, 1));
  color: #AA6666;
  width: 24px;
  opacity: 0.6;
  height: 24px;
  border: 8px solid;
  border-radius: 100px
}
</style>
