import fetch from 'cross-fetch'

//I find redux graet for state management but it can be a little confusing at times
//my actions here bascically tell the state what has changed and if it needs to update


//requesting my pages
export const REQUEST_PAGES = 'REQUEST_PAGES';
function requestWikiPages(searchQuery) {
    return {
        type: REQUEST_PAGES,
        searchQuery
    }
}

//receiving pages
export const RECEIVE_PAGES = 'RECEIVE_PAGES';
function receiveWikiPages(searchQuery, json) {
    return {
        type: RECEIVE_PAGES,
        searchQuery,
        pages: json.query.search
    }
}

//adding my pages to saved page
export const ADD_TO_SAVED = 'ADD_TO_SAVED';
function addToSavedArticles(data) {
    return {
        type: ADD_TO_SAVED,
        page: data
    }
}

//removing pages
export const REMOVE_SAVED_ARTICLE = 'REMOVE_SAVED_ARTICLE';
function removeSavedArticle(data) {
    return {
        type: REMOVE_SAVED_ARTICLE,
        page: data
    }
}

//error just incase request does not go through
export const REQUEST_PAGES_ERROR = 'REQUEST_PAGES_ERROR';
function requestPagesError() {
    return {
        type: REQUEST_PAGES_ERROR,
        error: true
    }
}

//this function dispatches my actions to the API, takes in the query search term which I retrieve from my componets
export function fetchWikiPages(query) {
    return function(dispatch) {
        dispatch(requestWikiPages(query));
        return fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&format=json&srsearch=${query}`)
            .then(response => response.json())
            .then(json => dispatch(receiveWikiPages(query, json)))
            .catch(() => dispatch(requestPagesError()));
    }
}

//saving the articles which just takes in the data from my component and saves it to an array held in the global state
export function saveWikiArticle(data) {
    return function(dispatch) {
        dispatch(addToSavedArticles(data));
    }
}

export function removeWikiArticle(data) {
    return function(dispatch) {
        dispatch(removeSavedArticle(data));
    }
}