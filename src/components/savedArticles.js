
import React from 'react';
import { PageWrapper } from '../styles/styles';
import { useSelector } from 'react-redux';
import ListArticles from './listArticles';
import { StyledList } from '../styles/styles';

//Here I'm rendering a list of all the saved articles, fairly simple component

const SavedArticles = () => {
    const articles = useSelector(state => state);
    return (
        <PageWrapper savedArticles={true}>
            <StyledList>
                {articles ? <ListArticles saved={false} articles={articles.saved}/> : 'NO SAVED ARTICLES'}
        </StyledList>        
    </PageWrapper>
    )
}

export default SavedArticles;