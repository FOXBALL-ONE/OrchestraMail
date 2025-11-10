// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true },
//   modules: ['@bg-dev/nuxt-naiveui']
// })

// import AutoImport from 'unplugin-auto-import/vite'
// import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// import Components from 'unplugin-vue-components/vite'
//
// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//     modules: ['@bg-dev/nuxt-naiveui'],
//     vite: {
//         plugins: [
//             AutoImport({
//                 imports: [
//                     {
//                         'naive-ui': [
//                             'useDialog',
//                             'useMessage',
//                             'useNotification',
//                             'useLoadingBar'
//                         ]
//                     }
//                 ]
//             }),
//             Components({
//                 resolvers: [NaiveUiResolver()]
//             })
//         ]
//     }
// })


import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },
    css: ['/assets/css/main.css'],
    compatibilityDate: "2025-10-16",
    devtools: { enabled: true,

        timeline: {
            enabled: true,
        },},
    ssr: false,
    nitro: {
        experimental: {
            wasm: true,
        },
    },
    modules: [
        "@bg-dev/nuxt-naiveui"
    ],
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => {
                const customElements = ["cap-widget"];
                return customElements.includes(tag);
            },
        },
    },
    vite: {
        plugins: [
            AutoImport({
                imports: [
                    {
                        "naive-ui": [
                            "useDialog",
                            "useMessage",
                            "useNotification",
                            "useLoadingBar",
                        ],
                    },
                ],
            }),
            tailwindcss(),
            Components({
                resolvers: [NaiveUiResolver()],
            }),
        ],
    },
    devServer: {
        host: "0.0.0.0",
        port: 8090,
    },
});