import { createStore,Store } from 'vuex'
import demo from './modules/demo'

// 全局状态
const state = {}
const mutations = {}
const actions = {}

export default createStore({
    state,
    mutations,
    actions,
    modules: {
        demo
    }
})