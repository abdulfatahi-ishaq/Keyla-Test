// import { API } from "../config";
import axios from "axios";
import { useEffect, useReducer } from "react";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error"
};


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, videos: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, videos: action.payload.videos };
    
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, videos:[] };
    
       default:
      return state;
  }
}

export default function useFetchvideos() {
  const [state, dispatch] = useReducer(reducer, { videos: [], loading: true });

  useEffect(() => {
      const cancelToken1 = axios.CancelToken.source();
    dispatch({type:ACTIONS.MAKE_REQUEST})
    axios.get("https://movie-gallery-api.herokuapp.com/movies",
        {cancelToken:cancelToken1.token}).then(res =>{
        dispatch({type:ACTIONS.GET_DATA,payload:{videos:res.data}})
    }).catch(e =>{
        if(axios.isCancel(e)) return 
        dispatch({type:ACTIONS.ERROR, payload:{error:e}})
    })
    // return () => {
    //     cancelToken1.cancel();
    //     cancelToken2.cancel();
    // }
  }, [])

  return state;
}



