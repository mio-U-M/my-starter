<template lang="pug">
.home
    h1 {{msg}}
</template>

<script>
export default {
    name: "home",
    components: {
    },
    data() {
        return {
            msg: 'hello world!'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "common";
</style>
