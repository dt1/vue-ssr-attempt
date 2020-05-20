import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = 'https://api.butternotes.com';

export function fetchPage(page){
    return Vue.axios.get(page).then((resp => resp.data))
}
