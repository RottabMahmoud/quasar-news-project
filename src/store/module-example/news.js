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
};
const getters = {
  allNews: (state) => state.news,
};

const actions = {
  addNews({ commit }, obj) {
    commit("addNews", obj);
  },
  delNews({ commit }, id) {
    commit("deleteNews", id);
  },
  setEdit({ commit }, obj) {
    commit("setNews", obj);
  },
};
const mutations = {
  addNews: (state, obj) => state.news.unshift(obj),
  deleteNews: (state, id) =>
    (state.news = state.news.filter((x) => x.id !== id)),
  setNews: (state, obj) => {
    const existingNews = state.news.find((x) => x.id === obj.id);
    if (existingNews) {
      existingNews.title = obj.title;
      existingNews.author = obj.author;
      existingNews.content = obj.content;
    } else {
      console.error("News item with ID", obj.id, "not found.");
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
