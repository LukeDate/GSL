import { 
    REQUEST_PAGES, 
    RECEIVE_PAGES, 
    REQUEST_PAGES_ERROR, 
    ADD_TO_SAVED, 
    REMOVE_SAVED_ARTICLE 
} from '../actions/actions';


//these reducers show how I am updating and manipulating the state

//initialise a state with empty parameters
const initState = {
    pages: [],
    saved: []
}

const wikiSearchReducer = (state = initState, action) => {
    //go through this switch statement which checks which action has been dispatched
    //then from there I update the state accordingly from the action payloads
    switch(action.type) {
        //simply checks if the request is ongoing and keeps a loading state to true
        case REQUEST_PAGES:
            return { ...state, isFetching: true }
        //once the request is complete we add the results to our state
        case RECEIVE_PAGES:
            let no_results = action.pages.length;
            return { 
                //spread over state to keep other state objects tracked
                ...state, 
                //pages added from payload
                pages: action.pages, 
                isFetching: false,
                no_results: no_results === 0
            }
        //case where we are adding our saved items
        case ADD_TO_SAVED:
            //checking whether we have saved an item or not
            let existed_item = state.saved.find(item =>  action.page.pageid === item.pageid);
            if(existed_item) {
                return {
                    ...state
                }
            } else {
                //if not then we add that item to our saved array
                return {
                    ...state, 
                    saved: [...state.saved, action.page]
                }
            }
            //error check and update state accordningly
        case REQUEST_PAGES_ERROR:
            return { ...state, isFetching: false, error: action.error }
            //removing our articles just filters through the array and updates the state with the new array
        case REMOVE_SAVED_ARTICLE: 
            let new_saved_articles = state.saved.filter(item => action.page.pageid !== item.pageid);
            return {
                ...state,
                saved: new_saved_articles
            }
    }
}

export default wikiSearchReducer;