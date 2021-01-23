import React from 'react';

import SearchBar from './SearchBar';

const App = () => {

    // ##### Helper functions #####
    const onSearchSubmit = (term) => {
        console.log(term);
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