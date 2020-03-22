
import React from 'react';
import { PageWrapper } from '../styles/styles';
import { useSelector } from 'react-redux';
import ListArticles from './listArticles';
import { StyledList } from '../styles/styles';

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