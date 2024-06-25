import React , {useState} from 'react'
import IMAGES from '../Images/Images'

const AgeCalculator = () => {
  const [birthdate,setBirthdate]=useState('');
  const [age , setAge]=useState(0);


  const calculateAge = () =>{
      if (!birthdate) {
        alert('Please enter a valid date of birth');
        return;
      }
    const currentDate = new Date();
    const birthDate = new Date(birthdate);

      if (birthDate > currentDate) {
        alert('Birthdate cannot be in the future');
        return;
      }


   let age = currentDate.getFullYear() - birthDate.getFullYear();
   const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
      const daysDiff = currentDate.getDate() - birthDate.getDate();
  
   if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0 )) {
      age--;
    }
      setAge(age);

  };

  const resetCalculator = () =>{
    setBirthdate('');
    setAge(0);
  }
  return (
    <>  
    <div className='container'>
      <div className='main'>
          <h2>Age calculator</h2>
          <img src={IMAGES.logoReact} alt="calculator logo" />
      </div>
      <div className='content'>
          <div className='left'>
            <h1>Let's calculate! How many <span>years</span> old are you?</h1>
              <label for="birthday">Enter your date of birth</label>
              <div className='form-child'>
              <input 
              type="date" 
              className='date'
              value={birthdate} 
              onChange={e => setBirthdate(e.target.value)}
               />
              <div className='button-1'>
              <button className='button-1' onClick={calculateAge}>Calculate</button>
              <button  className='button-1' onClick={resetCalculator}>Reset</button>
              </div>
              </div>
            <p>Your age is <span id='age-num'>{age > 0 ? `${age}` : ''}</span> years.</p>
          </div>
          <div className='right'>
          <img src={IMAGES.logoContent} alt='Person finding age'/>
          </div>
      </div>
    </div>
    </>
  )
  
}

export default AgeCalculator



