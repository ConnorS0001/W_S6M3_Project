import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TextGenerator from './TextGenerator'

function App() {

  const [photoData, setData] = useState()
  const URL = "http://localhost:9009/api/apod?api_key=DEMO_KEY"

  function FetchData(url) {
    useEffect(() => {
      function fetchRequest(url) {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(res => {
                console.log(res.message)
            })
        }

      fetchRequest(url)

        /*
      setData({
        "copyright":"NASA, ESA, and the Hubble Heritage Team (STScI/AURA)",

        "date":"April 1, 1995",
      
        "explanation":"The Pillars of Creation is a striking image of interstellar columns of gas and dust in the Eagle Nebula. It was captured by the Hubble Space Telescope and has become one of the most famous astronomical photographs ever taken. The image showcases the ongoing process of star formation and provides valuable insights into the birth and evolution of stars and planetary systems.",
      
        "media_type":"image",
      
        "title":"Pillars of Creation",
      
        "url":"https://bloominstituteoftechnology.github.io/img/pillars-of-creation.png",
      
        "service_version":"v1"})
        */
    }, [])
  }

  FetchData(URL)
  

  if (!photoData) return 'Searching for Pictures'
  return (
    
    <section>
        <TextGenerator 
          title={photoData.title}
          ImgURL={photoData.url}
          date={photoData.date}
          text={photoData.explanation}
        />
    </section>
  )
}

export default App

