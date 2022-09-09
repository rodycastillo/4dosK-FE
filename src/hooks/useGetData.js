import {useEffect, useState} from 'react';
import axios from 'axios';

export const useGetData = () => {
    const[posts, setPosts] = useState([])

    const getData = async () => {
        try {
            const {data} = await axios.get("https://likeseasons.com/appsaga/api/index.php/lead/list")
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        getData()
    },[])

    useEffect(()=>{
        const intervalId = setInterval(() => {
            getData()
        }, 30000);
        return () => {
            clearInterval(intervalId)
        }
    },[])

  return {
    posts
  }
}
