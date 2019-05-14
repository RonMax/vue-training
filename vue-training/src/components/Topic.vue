<template>
    <div class="button__container">
        <button>Pagination1</button>
        <button>Pagination2</button>
        <button>Pagination3</button>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.button__container{
    display: flex;
    flex: 1;
    width: 100%;
    text-align: center;
    justify-content: space-around;
    background-color:#003355;
    margin: auto;
    height: 100px;
    button{
        background-color: #55a0d1;
        height: 50px;
        margin: auto;
    }
}
</style>
