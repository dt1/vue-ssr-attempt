import Vue from 'vue'
import Vuex from 'vuex'
import * as util from 'util'

Vue.use(Vuex)

import { fetchPage } from './api'

export function createStore () {
    return new Vuex.Store({
        strict: true,

        state: () => ({
            res: {}
        }),

        actions: {
            actXY ({ commit }, page) {
                return fetchPage(page).then(item => {
                    commit('mutXY', { page , item } );
                })
            }
        },

        mutations: {
            mutXY (state, {page, item }) {
                Vue.set(state.res, page, item);
            }
        }
    })
}
