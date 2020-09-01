import React from 'react'
import { Repo } from './Repo'

export const Repos = ({ repository }) => {

    return (
        <div className="mt-5">
            
                <h3 class="title-para"><strong> Resent Repository : </strong></h3>
                <ul className="p-0" >
                {
                    repository.map(
                        repo => (
                            <Repo repoitem={repo} key={repo.id} />
                        ))
                }
            </ul>
        </div>


    );


}