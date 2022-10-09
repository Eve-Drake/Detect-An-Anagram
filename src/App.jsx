import { useState } from 'react'
import './App.css'

function App() {
  const [strOne, setStrOne] = useState('')
  const [strTwo, setStrTwo] = useState('')
  const [anagram, setAnagram] = useState(false)

  const compareStrings = () =>{
    //Sort the strings and remove spaces
    var sortedStrOne = strOne.trim().toLowerCase().split('').sort().join('')
    var sortedStrTwo = strTwo.trim().toLowerCase().split('').sort().join('')

    //Create a frequency object to count letters
    var strOneValues = {}
    for(let i = 0; i < sortedStrOne.length; i++){
      let charecter = sortedStrOne[i];
      if(strOneValues[charecter]){
        strOneValues[charecter]++
      }
      else{
        strOneValues[charecter] = 1
      }
    }
    var strTwoValues = {}
    for(let i = 0; i < sortedStrTwo.length; i++){
      let charecter = sortedStrTwo[i];
      if(strTwoValues[charecter]){
        strTwoValues[charecter]++
      }
      else{
        strTwoValues[charecter] = 1
      }
    }
    //Convert to strings and compare them
    (JSON.stringify(strOneValues) === JSON.stringify(strTwoValues) ? setAnagram(true) : setAnagram(false))
  }

  return (
    <div className="App">
      <input 
        placeholder='Word One'
        value={strOne}
        onChange={(e)=>setStrOne(e.target.value)}
      />
      <input 
        placeholder='Word Two'
        value={strTwo}
        onChange={(e)=>setStrTwo(e.target.value)}
      />
      <button onClick={compareStrings}>Compare</button>
      <div>
        <h1 className={(anagram? 'true' : 'false')}>{(anagram ? `${strOne} is an anagram of ${strTwo}` : `${strOne} is not an anagram of ${strTwo}`)}</h1>
      </div>
      
    </div>
  )
}

export default App
