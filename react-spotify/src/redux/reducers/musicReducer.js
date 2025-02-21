import { SET_CURRENT_SONG, SET_RESULTS, SET_LIKE, SET_DISLIKE } from "../action/musicActions";

const initialState = {
  results: {
    section1: [],
    section2: [],
    section3: [],
  },
  isLoading: false,
  currentSong: null,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      console.log(action.payload);
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.sectionNumber]: action.payload.data,
        },
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case SET_LIKE:
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.sectionNumber]: [action.payload.sectionNumber].map((music) => {
            const newMusicList = music.id === action.payload.id ? { ...music, like: true } : music;
            console.log(newMusicList);
            return newMusicList;
          }),
        },
      };
    // ottimo
    case SET_DISLIKE:
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.sectionNumber]: [action.payload.sectionNumber].map((music) =>
            music.id === action.payload.id ? { ...music, like: false } : music
          ),
        },
      };
    default:
      return state;
  }
};

export default musicReducer;
