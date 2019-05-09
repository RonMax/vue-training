<template>
    <div class="header__container">
        <div class="header__container__background"></div>
        <div class="header__container__menu">
                <div class="header__container__logo">
                    <a href="https://www.owlting.com/market">
                        <img class="header__container__logo--image" src="@/assets/images/icon.png">
                    </a>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header__container{
    flex: 1;
    width: 100%;
    &__background{
        background-color: rgba(0,0,0,.3);
    }
    &__menu{
        display: flex;
        align-items: center;
    }
    &__logo{
        &--image{
            margin-left: 108px;
            margin-top: 8px;
            margin-bottom: 8px;
        }
    }
    &__menu-item{
        display: block;
        text-decoration:none;
        font-size: 14px;
        padding: 8px 24px;
        color: #3c4145;
        line-height: 1.7;
        display: -ms-flexbox;
        display: flex;
        word-break: break-all;
    }
}
</style>
