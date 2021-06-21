<template>
    <main class="content">
        <router-view></router-view>
    </main>
</template>

<script>
export default {

}
</script>

<style>
    .content {
        overflow: auto;
        background: #000000;  
        background: -webkit-linear-gradient(to bottom, #434343, #000000);  
        background: linear-gradient(to bottom, #434343, #000000); 
    }
</style>