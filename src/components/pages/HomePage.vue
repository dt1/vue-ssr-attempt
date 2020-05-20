<template>
<div v-if="htmlData">
  <div>{{ htmlData.title }}</div>
  <div>{{ htmlData.description }}</div>
  <div>{{ htmlData.html }}</div>
</div>
</template>

<script>
export default ({
    name: 'homepage',
    computed: {
        htmlData () {
            return this.$store.state.res.homepage
        }
    },

    serverPrefetch () {
        return this.getData()
    },
    mounted () {
        console.log("in mounted")
        if (!this.item) {
            this.getData()
        }
    },
    methods: {
        async getData () {
            await this.$store.dispatch('actXY', 'homepage')
        }
    }
})
</script>

<style scoped>

</style>
