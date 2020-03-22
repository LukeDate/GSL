import fetch from 'cross-fetch'

export const REQUEST_PAGES = 'REQUEST_PAGES';
function requestWikiPages(searchQuery) {
    return {
        type: REQUEST_PAGES,
        searchQuery
    }
}

export const RECEIVE_PAGES = 'RECEIVE_PAGES';
function receiveWikiPages(searchQuery, json) {
    return {
        type: RECEIVE_PAGES,
        searchQuery,
        pages: json.query.search
    }
}

export const ADD_TO_SAVED = 'ADD_TO_SAVED';
function addToSavedArticles(data) {
    return {
        type: ADD_TO_SAVED,
        page: data
    }
}

export const REMOVE_SAVED_ARTICLE = 'REMOVE_SAVED_ARTICLE';
function removeSavedArticle(data) {
    return {
        type: REMOVE_SAVED_ARTICLE,
        page: data
    }
}

export const REQUEST_PAGES_ERROR = 'REQUEST_PAGES_ERROR';
function requestPagesError() {
    return {
        type: REQUEST_PAGES_ERROR,
        error: true
    }
}

export function fetchWikiPages(query) {
    return function(dispatch) {
        dispatch(requestWikiPages(query));
        return fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&format=json&srsearch=${query}`)
            .then(response => response.json())
            .then(json => dispatch(receiveWikiPages(query, json)))
            .catch(() => dispatch(requestPagesError()));
    }
}

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