import React from 'react';

import SearchBar from './SearchBar';
import fetchData from '../helpers/api'

const App = () => {

    // ##### Helper functions #####
    const onSearchSubmit = (term) => {

        console.log(term);
        fetchData(term)
        
    }



    return (
        <div>
            <SearchBar
                onSubmit={onSearchSubmit}
            />
        </div>
    )
}

export default App