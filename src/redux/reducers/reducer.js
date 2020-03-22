import { 
    REQUEST_PAGES, 
    RECEIVE_PAGES, 
    REQUEST_PAGES_ERROR, 
    ADD_TO_SAVED, 
    REMOVE_SAVED_ARTICLE 
} from '../actions/actions';
import { bindActionCreators } from 'redux';

const initState = {
    pages: [],
    saved: []
}

const wikiSearchReducer = (state = initState, action) => {

    switch(action.type) {
        case REQUEST_PAGES:
            return { ...state, isFetching: true }
        case RECEIVE_PAGES:
            let no_results = action.pages.length;

            return { 
                ...state, 
                pages: action.pages, 
                isFetching: false,
                no_results: no_results === 0
            }
        case ADD_TO_SAVED:
            let existed_item = state.saved.find(item =>  action.page.pageid === item.pageid);
            if(existed_item) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state, 
                    saved: [...state.saved, action.page]
                }
            }
        case REQUEST_PAGES_ERROR:
            return { ...state, isFetching: false, error: action.error }
        case REMOVE_SAVED_ARTICLE: 
            let new_saved_articles = state.saved.filter(item => action.page.pageid !== item.pageid);
            return {
                ...state,
                saved: new_saved_articles
            }
    }
}

export default wikiSearchReducer;