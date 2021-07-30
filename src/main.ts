import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import 'lib-flexible';
import { NavBar, Tabbar, TabbarItem } from 'vant'

const app = createApp(App)

app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)

app.use(router)
app.use(store)

app.mount('#app')
