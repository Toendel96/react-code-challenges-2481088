import React, { useState, useEffect } from 'react'

const getDogPic = async() => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await response.json()
  return dog.message
}

export default function DogPics () {
  // API: https://dog.ceo/dog-api/

  const [dogPic, setDogPic] = useState('')

  //Runs both when component mounts and when state changes
  // Without useEffect, a random picture will not be loaded when loading/refreshing page
  //It would only be loaded when button is clicked, so getDogPic() is called
  //With useEffect, getDogPic() is called when compoenent is created (refresh/page loaded = mounted)
  useEffect(() => {
    getDogPic()
      .then(pic => setDogPic(pic))
  }, [])
  return (
    <div className='dog-pics'>
      <img src={dogPic} />
      <button onClick={async e => setDogPic(await getDogPic())}>🐶</button>
    </div>
  )
}
