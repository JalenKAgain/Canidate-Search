import { type FormEvent, useState } from 'react';

import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';


const CandidateSearch = () => {
  
  const [] = useState({});

  const [searchInput, setSearchInput] = useState<string>('');


  






















  function searchcurrentCandidate(_event: FormEvent<HTMLFormElement>, _searchInput: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <section id='searchSection'>
        <form
          // TODO: Add correct type to event
          onSubmit={(event) => searchcurrentCandidate(event, searchInput)}
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
      <CandidateCard
        currentUser={currentUser} makeSelection={function (_isSelected: boolean): void {
          throw new Error('Function not implemented.');
        } }
      />
    </>
  );
};

export default CandidateSearch;
