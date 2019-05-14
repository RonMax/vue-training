<template>
    <div class="header__container">
        <a href="Home">Home</a>
        <a href="About">About</a>
        <a href="Product">Product</a>
        <a href="More">More</a>
    </div>
</template>

<script>
export default {
  name: 'Header',
  
}
</script>

<style lang="scss" scoped>
.header__container{
    flex-basis: 100px;
    width: 100%;
    margin-top: -10px;
    display: flex;
    background-color: #2c3e50;
    justify-content: center;
    &--image{
        border-radius: 50%;
    }
    a{
        font-size: 28px;
        text-decoration: none;
        color: aliceblue;
        margin: auto;
        text-align: right;
    }
}
</style>
