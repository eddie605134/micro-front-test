import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './public-path'

let app: any = null
function render(props: any = {}) {
    app = createApp(App)
    const { container } = props
    app.use(router).mount(container ? container.querySelector('#app') : '#app')
}


if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

export async function bootstrap() {
    console.log('vue3+webpack bootstraped');
}

/**
* 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
*/
export async function mount(props: unknown) {
    // ReactDOM.render(<App />, props.container ? props.container.querySelector('#root') : document.getElementById('root'));

    console.log('乾坤子应用容器加载完成，开始渲染 child')
    console.log('props from main mount', props)
    render(props)
}

/**
* 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
*/
export async function unmount() {
    console.log('unmount-------------------')
    app.unmount()
    app = null

}


/**
* 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
*/
export async function update(props: unknown) {
    console.log('update props', props);
}
