import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveWikiArticle, removeWikiArticle } from '../redux/actions/actions';
import { StyledButton } from '../styles/styles';
import Button from './button';

const ListArticles = ({ articles, save, results }) => {
    const dispatch = useDispatch();
    
    if(results && save) {
        return <h3>No results for you search, please try another term</h3>
    } else {
        return (
            articles.map((page, index) => 
                <li key={'index' + index}>
                    <div style={{ display: 'flex' }}>
                    <a target="_blank" href={`http://en.wikipedia.org/?curid=${page.pageid}`}>
                        {page.title}
                    </a>
                    {save ? 
                     <Button key={index} handleClick={() => dispatch(saveWikiArticle(page))}>Save Article</Button>
                     :
                     <Button remove={true} handleClick={() => dispatch(removeWikiArticle(page))}>Remove</Button>
                    }
                    </div>
                    <p className="snippet" dangerouslySetInnerHTML={{ __html: page.snippet }} />
                </li>)
        )
    }

}

export default ListArticles;