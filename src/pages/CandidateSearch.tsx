import { type FormEvent, useState } from 'react';

import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  
  const [currentUser, setCurrentUser] = useState<Candidate>({
    id: "",
    name:"",
    location: "",
    email: "",
    company: "",
    bio: "",
    avatar_url:"",
    login: "",
  });

  const [searchInput, setSearchInput] = useState<string>('');



  function searchcurrentCandidate(_event: FormEvent<HTMLFormElement>, _searchInput: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <section id='searchSection'>
        <form
          
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
