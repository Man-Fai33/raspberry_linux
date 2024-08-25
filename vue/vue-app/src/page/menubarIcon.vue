<script setup lang="ts">
import { ref, defineProps, computed, watch } from 'vue';


const props = defineProps<{ isActive: boolean }>();
const isChanged = ref(props.isActive)
watch(() => props.isActive, (newValue) => {
    isChanged.value = newValue;
});

const emitToggleMenu = defineEmits(['toggle-menu']);

function toggleMenu() {
    emitToggleMenu('toggle-menu');
}
const containerClass = computed(() => ({
    container: true,
    width: "20%",
    change: isChanged.value
}))

</script>
<template>

    <div :class="containerClass" @click="toggleMenu">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
</template>
<style>
.container {
    display: inline-block !important;
    cursor: pointer;
    width: fit-content;
}

.bar1,

.bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

.bar2 {
    width: 25px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}

.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}
</style>