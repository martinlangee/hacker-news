import React from 'react';
import NewsItem from './news-item';

const NewsList = (props) => {
    return <div> 
        {props.data.map((item) => <NewsItem />  )}               
        </div>
    
}

export default NewsList;