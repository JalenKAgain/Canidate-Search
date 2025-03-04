import { type FormEvent, useState } from 'react';

import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';

const SavedCandidates = () => {
 
  const [currentCandidate, setSavedCandidates] = useState({});

  const [searchInput, setSearchInput] = useState<string>('');

  
  const addCandidate = () => {
   
    let parsedSavedCandidates = [];
    const storedSavedCandidates = localStorage.getItem('SavedCandidates');
    if (typeof SavedCandidates === 'string') {
      parsedSavedCandidates = JSON.parse(storedSavedCandidates);
    }
    parsedSavedCandidates.push(SavedCandidates);
    localStorage.setItem('SavedCandidates', JSON.stringify(parsedSavedCandidates));
  };

 
  
 

  return (
    <>
      <section id='searchName'>
        <form
          // TODO: Add correct type to event
          onSubmit={(event) => setSavedCandidates(event, searchInput)}
        >
          <input
            type='text'
            name=''
            id=''
            placeholder='Enter Name'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' id='searchBtn'>
            Search
          </button>
        </form>
      </section>
     
    </>
  );
};

export default SavedCandidates;