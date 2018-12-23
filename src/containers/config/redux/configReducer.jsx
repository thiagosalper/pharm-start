const initialState = {
  dash: {
    title: "",
  }
};

const dash = (state = initialState, action) => {
  switch(action.type){
    case "INIT_DASH":
      return {
        ...state
      };
    default: {
      return {
        ...state
      };
    }
  }
};

export default dash;