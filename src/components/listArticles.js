import React from 'react';
import { useDispatch } from 'react-redux';
import { saveWikiArticle, removeWikiArticle } from '../redux/actions/actions';
import Button from './button';
import PropTypes from 'prop-types';

//This renders a list of all the articles, it's a great example of 
//a reusable component as I'm using it in the search and saved articles pages



const ListArticles = ({ articles, save, results }) => {
    //using dispatch again so I can access my reducers
    const dispatch = useDispatch();
    //quick chekc here to see if any results come back from the api
    if(results && save) {
        return <h3>No results for you search, please try another term</h3>
    } else {
        //simply map the results into a list when returned from api request
        return (
            articles.map((page, index) => 
                <li key={'index' + index}>
                    <div style={{ display: 'flex' }}>
                    <a target="_blank" href={`http://en.wikipedia.org/?curid=${page.pageid}`}>
                        {page.title}
                    </a>
                    {/* different buttons here whether I am saving the articles
                    or removing them from my saved list */}
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

//typing check which helps with debugging
ListArticles.propTypes = {
    articles: PropTypes.array,
    save: PropTypes.bool,
    results: PropTypes.bool
}

export default ListArticles;