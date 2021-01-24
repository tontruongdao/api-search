// import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

// async function fetchData(value){
//     const result = await fetch(`https://source.unsplash.com/featured/?${value}`);
//     console.log(result)
//     return result.url;
// }

const fetchData = async (term) => {

    // By default, fetch uses the method "Get"
    const result = await fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
                        headers: {
                            Authorization:`Client-ID ${API_KEY}`
                        }
                    })

    // Extra step to convert response to JSON format
    const JSON = result.json();
    // console.log(`Promise received is: ${JSON}`);
    return JSON;
}

// const fetchData = async (term) => {

//     await axios.get('https://api.unsplash.com/search/photos', {
//         params: { query: term },
//         headers: {
//             Authorization:`Client-ID ${API_KEY}`
//         }
//     })
// }

export default fetchData