
import { useEffect, useState } from 'react'
import './App.css'
import PollWidget from './components/poll'
import { Poll as PollType } from './types';
import { fetchPoll } from './db/api';

function App() {
  const [pollData,setPollData] = useState<PollType | null>(null);

  useEffect(()=>{
    const loadPoll = async() =>{
      try {
        const data = await fetchPoll(41);
        setPollData(data);
      } catch (error) {
        console.error("Failed to load poll:",error);
      }
    }
    loadPoll()
  },[])

  if(!pollData){
    return <h1>loading...</h1>
  }

  return (
   <PollWidget/>
  )
}

export default App
