import type React from 'react';
//TODO: Uncomment when Film interface is added
import type { Candidate } from '../interfaces/Candidate.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

// TODO: Define FilmCardProps
type CandidateCardProps = {
    currentUser: Candidate;
    makeSelection: (isSelected: boolean) => void;
};


const CandidateCard = ({ currentUser, makeSelection }: CandidateCardProps) => {
    return (
        <>
            {currentUser?.login ? (
                <section className='CandidateCard'>
                    <figure>{currentUser?.avatar_url ?
                        (<img src={`${currentUser.avatar_url}`}
                            alt={`Github User image ${currentUser.login}`} />)
                        : (<p>No Image available</p>)
                    }

                    </figure>
                    <article className='details'>
                        <h6>User:{currentUser?.name ? `${currentUser.name}` : "Not available"}</h6>
                        <p>Bio:{currentUser?.bio ? ` ${currentUser.bio}` : "Bio unavailable"}</p>
                        <p>Location:{currentUser?.location ? ` ${currentUser.location}` : "Location unavailable"}</p>
                        <p>Email:{currentUser?.email ? ` ${currentUser.email}` : "Email unavailable"}</p>
                        <p>:Login{currentUser?.login ? ` ${currentUser.login}` : "Login unavailable"}</p>
                        <p>Company:{currentUser?.company ? ` ${currentUser.company}` : "Company unavailable"}</p>


                    </article>


                    <aside className='icons'>

                        <ImCross style={{ fontSize: '40px', cursor: 'pointer' }} onClick={() => makeSelection(true)} />
                    </aside>

                    <aside className='icons'>


                        <IoEyeOutline style={{ fontSize: '50px', cursor: 'pointer' }} onClick={() => makeSelection(false)} />
                    </aside>
                </section>) : null}

        </>
    );
};

export default CandidateCard;
