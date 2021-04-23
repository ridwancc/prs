import { useState } from 'react';
const filter = require('leo-profanity');

const SubmitSearch = () => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        let string = e.target.value;
        if (filter.check(string)){
            string = filter.clean(string);
        }
        setQuery(string);
    }

    return { query, handleChange };
}

export default SubmitSearch;