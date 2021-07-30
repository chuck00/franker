import { stat } from 'fs';
import { DEMO } from '../modules-type'
import { payload } from '../state';
const state = {
    name: '小强'
};

const mutations = {
    [DEMO](state:any, { payload }:payload) {
        state.name = payload
    }
};

const actions = {};

const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
};