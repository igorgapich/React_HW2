import React from 'react';
import InfoClub from "./InfoClub";

export default function ClubList({ clubs }) {
    return (
        <>
            <div>
                <h1>Інформація про футбольні клуби</h1>

                {clubs.map((c) => (
                 <InfoClub clubs={c}/>)
                )}
             </div>
        </>
    );
}