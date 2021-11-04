import { GET_LOGS, SET_LOADING,LOGS_ERROR, ADD_LOG ,SEARCH_LOGS,DELETE_LOG, SET_CURRENT,CLEAR_CURRENT,UPDATE_LOG} from "../actions/types"; 


const inititialState = {
    logs:null,
    current: null,
    loading: false,
    error:null
}

export default(state= inititialState,action)=>{
    switch(action.type){
        case SEARCH_LOGS:
            return{
                ...state,
                logs: action.payload
            }
        case SET_CURRENT:
            return{
                ...state, 
                current: action.payload
            }
            case CLEAR_CURRENT:
                return{
                    ...state, 
                    current: null
                }
        case UPDATE_LOG:
            return{
                ...state,
                logs: state.logs.map(log=> log.id===action.payload.id?action.payload:log)
            }
        case ADD_LOG:
            return{
                ...state,
                logs: [...state.logs,action.payload],
                loading:false
            }
        case GET_LOGS:
            return{
                ...state,
                logs: action.payload,
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case LOGS_ERROR:
            console.error(action.payload);
            return{
                ...state,
                error: action.payload
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log=> log.id!==action.payload),
                loading:false

            }
        default:
            return state;
    }
}