declare module '*.vue'{
    import {ComponentOptions} from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
// 创建xxx.d.ts文件，告诉TS如何理解.vue文件。
declare module '*.md' {
    const str: string
    export default str
}