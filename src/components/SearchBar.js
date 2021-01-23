import React, { useState } from 'react';

const onInputChange = (event) => {
    console.log(event.target.value);
}

const SearchBar = () => {

    const [term, setTerm] = useState("");

    return(
        <div>
            <form>
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