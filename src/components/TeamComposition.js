import React from 'react';
import styled from 'styled-components';

const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);

const SquadWrapper = styled.div`
  background-color: ${randomColor()};
  padding: 20px;
  margin-bottom: 20px;
`;

const SquadTitle = styled.h2`
  color: ${randomColor()};
`;
export default function TeamComposition (){
    return(
        <>
            <SquadWrapper>
            <SquadTitle>Список гравців:</SquadTitle>
            <ul><h4>Воротарі</h4>
                <li>ВАДИМ ЮЩИШИН</li>
                <li>ЄВГЕН ПАСТ</li>
                <li>БОГДАН КОГУТ</li>
            </ul>
            <ul><h4>Захисники</h4>
                <li>МАКСИМ СМІЯН</li>
                <li>СЕМЕН ВОВЧЕНКО</li>
                <li>ВАСИЛЬ КУРКО</li>
                <li>ЖУЛІО СЕЗАР</li>
                <li>ДЕНИС БАЛАН</li>
                <li>ОЛЕКСАНДР МЕЛЬНИК</li>
                <li>ВАСИЛЬ ГАКМАН</li>
                <li>ЄВГЕНІЙ ШЕВЧЕНКО</li>
            </ul>
            <ul><h4>Півзахисники</h4>
                <li>ДЕНИС ЯНАКОВ</li>
                <li>ДМИТРО ГОДЯ</li>
                <li>ДМИТРО КЛЬОЦ</li>
                <li>ВІТАЛІЙ ДАХНОВСЬКИЙ</li>
                <li>РОМАН КОВАЛЮК</li>
                <li>ЯГО СІКЕЙРА</li>
                <li>РОСТИСЛАВ БАРАН</li>
                <li>ОЛЕКСАНДР КУЧЕРЕНКО</li>
                <li>ДМИТРО ШУХ</li>
                <li>ВАЛЕРІЙ КУЧЕРОВ</li>
                <li>ДМИТРО ШАСТАЛ</li>
                <li>ЄВГЕН БАНАДА</li>
                <li>ВЛАДИСЛАВ ШАРАЙ</li>
                <li>АНДРІЙ КУХАРУК</li>
                <li>ДЕНИС СВІТЮХА</li>
                <li>ЄВГЕНІЙ МОРОЗКО</li>
            </ul>
            <ul><h4>Нападники</h4>
                <li>МИХАЙЛО ШЕСТАКОВ</li>
                <li>МАРКО МРВАЛЬЄВИЧ</li>
                <li>МИКОЛА ГАЙДУЧИК</li>
            </ul>
            </SquadWrapper>
        </>
    )
}