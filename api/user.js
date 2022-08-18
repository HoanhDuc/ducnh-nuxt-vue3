const HEADER = {
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token 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`,
  },
};
export default ($axios, env) => (_resource) => ({
  getListUser({q,page}) {
    const axiosInstance = $axios.create(HEADER);
    return axiosInstance
      .get("search/users", {
        params: {
          q,
          per_page: 12,
          page
        },
      })
      .then((response) => response.data.items)
      .catch((error) => console.log(error));
  },
  getUserFollows(url) {
    const axiosInstance = $axios.create(HEADER);
    return axiosInstance
      .get(url)
      .then((response) => response.data.length || 0)
      .catch((error) => console.log(error));
  },
  getUserDeatail() {},
});
