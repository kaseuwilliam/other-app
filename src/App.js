import React,{useEffect, useState} from 'react'
import axios, { Axios } from 'axios'

const BASE_URL = 'https://api.unsplash.com'

const api = axios.create({baseURL:BASE_URL})

const App = () => {

  const [images, setImages] = useState([])

  useEffect(()=>{
    
    api.get(`/photos/?client_id=${process.env.REACT_APP_CLIENT_ID}`).then( response =>{

      console.log( response.data)
      setImages(response.data)
    })

  },[])


  return (
    <>
    
    {images.map(image =>{
      
      return <img src={image.urls.small} />
    })}
    
    </>
  )
}

export default App