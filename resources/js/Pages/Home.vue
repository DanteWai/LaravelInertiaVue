<template>
    <Head>
        <title>{{ title }}</title>
    </Head>
    <h1>{{ title }}</h1>
</template>

<script setup>
import {Head} from '@inertiajs/inertia-vue3'

defineProps({
    title: String
})
</script>
