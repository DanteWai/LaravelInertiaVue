<template>
    <div class="container mx-auto">
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>

        <slot/>
    </div>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'

export default {
    name: "Layout",
    components: {Link}
}
/*
    https://inertiajs.com/links
    пропсы компонента линк
    href="/logout" method="post" as="button" type="button :data="{ foo: bar }" :headers="{ foo: bar }"
    data = FormData
 */
</script>
