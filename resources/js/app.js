import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import Layout from "./Layout";

createInertiaApp({
    resolve: name => {
        const page = require(`./Pages/${name}`).default
        page.layout = page.layout || Layout

        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})

/*
    layout можно либо стандартно передать как компонент
    либо
    лично к объекту страницы добавить свойство layout и передать в него компонент
    либо
    сделать общий layout во время передачи страницы
 */
