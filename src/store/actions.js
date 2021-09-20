import { fetchList } from '../api/index.js';

const actions = {
    async FETCH_LIST({commit}, pageName) { 
        const res = await fetchList(pageName);
        commit('SET_LIST', res);        
        return res;
    }
}

export {
    actions
};
    