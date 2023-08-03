const heroReducer = {
  fetchCharactersRequest: {
    prepare: (offset, limit) => {
      return {
        payload: {
          offset,
          limit,
        },
      };
    },
    reducer: (state) => {
      state.loading = true;
    },
  },

  fetchCharactersSuccess: {
    prepare: (data) => {
      return {
        payload: { data },
      };
    },
    reducer: (state, action) => {
      const { offset, limit, total, results } = action.payload.data;
      state.data = results;
      state.offset = offset;
      state.limit = limit;
      state.total = total;
      state.loading = false;
    },
  },

  fetchCharactersFailure: {
    prepare: (error) => {
      return {
        payload: { error },
      };
    },

    reducer: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },

  fetchIdRequest: {
    prepare: (id) => {
      return {
        payload: { id },
      };
    },
    reducer: (state) => {
      state.loading = true;
    },
  },

  fetchIdSuccess: {
    prepare: (heroInfo) => {
      return {
        payload: { heroInfo },
      };
    },
    reducer: (state, action) => {
      const { heroInfo } = action.payload;
      state.heroInfo = heroInfo;
      state.loading = false;
    },
  },
  fetchIdFailure: {
    prepare: (error) => {
      return {
        payload: { error },
      };
    },

    reducer: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
};

export default heroReducer;