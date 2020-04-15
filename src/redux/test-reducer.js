let initial_state = {
  pagesArr: [],
  totalCount: 83,
  count: 28,
  currentPage: 1,
};

let testReduser = (state = initial_state, action) => {
  switch (action.type) {
    case "GET-PAGES":
      return {
        ...state,
        pagesArr: action.pagesArr,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export default testReduser;
