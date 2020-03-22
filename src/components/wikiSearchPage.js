import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWikiPages } from '../redux/actions/actions';
import { PageWrapper, StyledInput, FormGroup, StyledLabel, StyledList, StyledButton } from '../styles/styles';
import ListArticles from './listArticles';
import Loader from '../components/loader';

const WikiSearchPage = () => {
    const initialState = {
        pages: [],
        saved: [],
        no_results: false
    }
    const [inputQuery, handleInputChange] = useState('');
    const dispatch = useDispatch();
    const data = useSelector((state = initialState) => state);

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
                <StyledButton disabled={inputQuery.length < 1} onClick={() => dispatch(fetchWikiPages(inputQuery))}>Search</StyledButton>
            </FormGroup>
            {data.isFetching ? <Loader /> : 
            <StyledList>
                {<ListArticles articles={data.pages} results={data.no_results} save/>}
            </StyledList>}
        </PageWrapper>
    );
}

export default WikiSearchPage;