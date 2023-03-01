import React, {useState, useEffect } from  'react';
import axios from 'axios'
import '../Styles/ChatGPTStyles.css'

const DogApi = () => {
 const [breeds, setBreeds] = useState([])
 const [selectedBreed, setSelectedBreed] = useState('')
 const [imageUrl, setImageUrl] = useState('')

 useEffect(() => {
  axios.get('https://dog.ceo/api/breeds/list/all')
  .then(response => {
   const breedList = Object.keys(response.data.message);
   setBreeds(breedList)
  })
  .catch(error => console.error(error))
 }, []);

 const handleBreedChange = (e) => {
  const breed = e.target.value;
  setSelectedBreed(breed);

  axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
  .then(response => {
   setImageUrl(response.data.message);
  })
  .catch(error => console.error(error));
 };

  return (
    <div>
     <div className='selector'>
      <select className='select-bar' value={selectedBreed} onChange={handleBreedChange}>
        <option value="">Select a breed</option>
        {breeds.map(breed => (
          <option key={breed} value={breed}>{breed}</option>
        ))}
      </select>
      </div>
     <div className='image'>
     <img className='dog-img' src={imageUrl} alt={selectedBreed} />
    </div>
    </div>
  )
}
export default DogApi