import React, {useContext, useEffect} from 'react';
import {FetchContext} from "../App";
import axios from "axios";

const DataFetchingTwo = () => {
    const fetchContext = useContext(FetchContext)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
              fetchContext.dispatchFetch({type: 'FETCH_SUCCESS', payload: res.data})
            })
            .catch(err=>{
                fetchContext.dispatchFetch({type: 'FETCH_ERROR'})
            })
    }, [])
    return (
        <div>
            {fetchContext.stateFetch.loading ? 'Loading' : fetchContext.stateFetch.post.title}
            {fetchContext.stateFetch.error ? fetchContext.stateFetch.error : null}
        </div>
    );
};

export default DataFetchingTwo;