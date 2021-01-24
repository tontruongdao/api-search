import React, { useState } from 'react';

import fetchData from '../helpers/api'
import SearchBar from './SearchBar';
import Images from './Images';

const App = () => {

    // ########## States ##########
    const [images, setImages] = useState([]);

    // ##### Helper functions #####
    const onSearchSubmit = (term) => {

        // console.log(term);
        fetchData(term)
            .then(json => {
                // console.log(json.results);
                setImages(json.results);
            })
    }

    // console.log(`The images state is currently ${images}`);

    return (
        <div>
            <SearchBar
                onSubmit={onSearchSubmit}
            />
            <Images            
                images={images}
            />
        </div>
    )
}

export default App