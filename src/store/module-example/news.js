const state = {
  news: [
    {
      id: 1,
      author: "Mahmoud Rottab",
      title: "HEllo Rottab",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      author: "Mahmoud Johnny",

      title: "HEllo Swimming",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      author: "Rottab",
      title: "HEllo Boxing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      author: "Pete Rottab",
      title: "HEllo Basketball",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      author: "Johnny Rottab",
      title: "Eating Rottab",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 6,
      author: "Mahmoud",
      title: "Hello Baseball",
      content:
        "Our Changing Planet Our Changing Planet says we are not going to hell, and we are goin to heavens. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 7,
      author: "Mahmoud",
      title: "Hello Baseball",
      content:
        "Our Changing Planet Our Changing Planet says we are not going to hell, and we are goin to heavens. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 8,
      author: "Mahmoud",
      title: "Hello Baseball",
      content:
        "Our Changing Planet Our Changing Planet says we are not going to hell, and we are goin to heavens. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 9,
      author: "Mahmoud",
      title: "Hello Baseball",
      content:
        "Our Changing Planet Our Changing Planet says we are not going to hell, and we are goin to heavens. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 10,
      author: "Mahmoud",
      title: "Hello Baseball",
      content:
        "Our Changing Planet Our Changing Planet says we are not going to hell, and we are goin to heavens. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  editObj: {},
};
const getters = {
  allNews: (state) => state.news,
  editObj: (state) => state.editObj,
};

const actions = {
  addNews({ commit }, obj) {
    commit("addNews", obj);
  },
  delNews({ commit }, id) {
    commit("deleteNews", id);
  },
  edNews({ commit }, obj) {
    commit("editNews", obj);
  },
  setEdit({ commit }, obj) {
    commit("setNews", obj);
  },
};
const mutations = {
  addNews: (state, obj) => state.news.unshift(obj),
  deleteNews: (state, id) =>
    (state.news = state.news.filter((x) => x.id !== id)),
  editNews: (state, obj) => {
    state.editObj = { ...obj, edit: true };
  },
  setNews: (state, obj) => {
    let id = state.editObj.id;
    console.log(id, "ID");
    const resultIndex = state.news.findIndex((x) => x.id === state.editObj.id);
    state.news[resultIndex].title = obj.title;
    state.news[resultIndex].author = obj.author;
    state.news[resultIndex].content = obj.content;
    state.editObj = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
