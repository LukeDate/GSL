import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWikiPages } from '../redux/actions/actions';
import { PageWrapper, StyledInput, FormGroup, StyledLabel, StyledList, StyledButton } from '../styles/styles';
import ListArticles from './listArticles';
import Loader from '../components/loader';

//this is the largest component that deals with rendering search results and the input

const WikiSearchPage = () => {
    //created an initialState for the app 
    const initialState = {
        pages: [],
        saved: [],
        no_results: false
    }
    //this useState function handles the input change while typing and pushes it to the local state
    const [inputQuery, handleInputChange] = useState('');

    //useDispatch and useSelector are new React hooks for Redux, I really like them 
    //because I do not have to wrap my components in the connect HOC or pass mapStateToProps
    //this means less code and a much cleaner codebase as it goes from several lines to just 2
    //dispatch uses my redux actions and reducers to fetch and manipulate the global state

    const dispatch = useDispatch();
    const data = useSelector((state = initialState) => state);

    //method to handle enter key for search
    const handleKeyPress = (e) => {
        if(e.key === 'Enter' && inputQuery.length > 1) {
            return dispatch(fetchWikiPages(inputQuery))
        }
    }
    return (
        <PageWrapper>
            <FormGroup>
                <StyledInput 
                    placeholder="Search" 
                    name="search" 
                    id="search" 
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e)}/>
                <StyledLabel className="form__label" htmlFor="search">Search</StyledLabel>
                <StyledButton 
                    disabled={inputQuery.length < 1} 
                    onClick={() => dispatch(fetchWikiPages(inputQuery))}>Search</StyledButton>
            </FormGroup>
            {/* isFetching checks the redux actions while the api request is on going */}
            {data.isFetching ? <Loader /> : 
            // once done loading I can render my results
            <StyledList>
                {<ListArticles articles={data.pages} results={data.no_results} save/>}
            </StyledList>}
        </PageWrapper>
    );
}

export default WikiSearchPage;