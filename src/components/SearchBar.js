import React, { useState } from 'react';

// const onInputChange = (event) => {
    // console.log(event.target.value);
// }

const SearchBar = (props) => {

    // ########## States ##########
    const [term, setTerm] = useState("");
    // console.log(`The term state is: ${term}`);




    // ##### Helper functions #####
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(term);
    }



    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label>Image Search</label>
                    <input 
                        type='text' 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;