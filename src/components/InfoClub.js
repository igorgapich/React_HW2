import React from 'react';
import styled from 'styled-components';

const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);

const ClubInfoWrapper = styled.div`
  background-color: ${randomColor()};
  padding: 20px;
  margin-bottom: 20px;
`;

const ClubName = styled.h2`
  color: ${randomColor()};
`;

const ClubImage = styled.img`
  width: 200px;
  border-radius: 25%;
`;
export default function InfoClub(props){
    const{name, city, foundationDate, logo} = props.clubs;
    return(
        <>
            <ClubInfoWrapper>
                <ClubName>Info about football club</ClubName>
                <p>{name}</p>
                <p>Місто: {city}</p>
                <p>Дата заснування: {foundationDate}</p>
                <p>Emblem: </p>
                <ClubImage src={logo}/>
            </ClubInfoWrapper>
        </>
    )
}