import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        myCartProductList: [],
        myAddress: {}
    },
    getters: {
        // countOfCartProducts: (state) => {
        //     return state.myCartProductList.length
        // },
    },
    actions: {
        insert({commit}, item){
            commit("ADD_TO_CART", item)
        },
        test(context){
            context.commit('ADD_TO_CART')
        }
    }
    ,
    mutations: {
        ADD_TO_CART: (state, item) => {
            state.myCartProductList.push(item);
        },
        DELETE_FROM_CART: (state, product) => {
            state.myCartProductList.splice(product,1);
        },
        SET_SHIP_ADDRESS: (state, address_info) => {
            state.myAddress = address_info
        }
    },
    actions: {},
});

export default store