import React from "react";
import styled from 'styled-components';
const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);

const AchievementClub = styled.div`
    background-color: ${randomColor()};
    padding: 20px;
    margin-bottom: 20px;
`;

const AchievementsTitle = styled.h2`
    color: ${randomColor()};
`;
/*const ImageLogo = styled.img`
    border-radius: 25%;
`*/
export default function Achievement(){

    return(
        <>
            <AchievementClub>
            <AchievementsTitle>Club achievement</AchievementsTitle >
            <ul><h3>Перша ліга чемпіонату України:</h3>
            <li><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Gold_medal_icon.svg/16px-Gold_medal_icon.svg.png"/>
                Переможець (2): 1992, 2020/21</li>
            <li><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bronze_medal_icon.svg/16px-Bronze_medal_icon.svg.png"/>
                Бронзовий призер (1): 2016/17</li>
            <h3>Друга ліга чемпіонату України:</h3>
            <li><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Silver_medal_icon.svg/16px-Silver_medal_icon.svg.png"/>
                Срібний призер: 2015/16</li>
            <h3>Кубок України:</h3>
            <li><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bronze_medal_icon.svg/16px-Bronze_medal_icon.svg.png"/>
                Півфіналіст: 1993/94</li>
            </ul>
            </AchievementClub>
        </>
    )
}