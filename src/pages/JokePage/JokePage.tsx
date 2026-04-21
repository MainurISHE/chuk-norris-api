import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { axiosApi } from '../../axiosApi';

export const JokePage = () => {
    const [joke, setJoke] = useState<string>('');
    const {category} = useParams();

    useEffect(() => {
        const getJoke = async() => {
            try{
                const res = await axiosApi(`/random?category=${category}`)
                const jokeData = res.data;
                setJoke(jokeData.value)
            } catch(e) {
                console.log(e)
            }
        }
        if (category) {
            getJoke()
        }
    },[category])
  return (
    <div>
        Joke category = {category}
    </div>
  )
}
