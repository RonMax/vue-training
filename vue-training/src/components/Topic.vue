<template>
    <div class="button__container">
        <button>Pagination1</button>
        <button>Pagination2</button>
        <button>Pagination3</button>
        <router-view/>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.button__container{
    display: flex;
    text-align: center;
    justify-content: space-around;
    background-color:#003355;
    margin: auto;
    margin-top:30px;
    button{
        background-color: #55a0d1;
    }
}
</style>
