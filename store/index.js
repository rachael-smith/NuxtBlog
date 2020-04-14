import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            { id: '1', title: 'First Post', previewText: 'this is my first post', thumbnail: 'https://annenberg.usc.edu/sites/default/files/womenintech.jpg', isAdmin: false },
                            { id: '2', title: 'Second Post', previewText: 'this is my second post', thumbnail: 'https://annenberg.usc.edu/sites/default/files/womenintech.jpg', isAdmin: false }
                        ])
                        resolve()
                    }, 1500)
                })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore