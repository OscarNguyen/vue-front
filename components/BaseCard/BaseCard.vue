<template>
  <div class="root">
    <!-- <Nuxt /> -->
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import '@/static/asset/style/default.scss';

.root{
  border:1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0px 0px 2px $primary-color;
}
</style>
