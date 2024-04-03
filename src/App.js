import React from "react";
import InfoClub from "./components/InfoClub";
import Achievement from "./components/Achievement";
import TeamComposition from "./components/TeamComposition";
import ClubList from "./components/ClubList";

export default function App() {
  const CLUBS = [
    {
      name: "Верес Рівне",
      city: 'Рівне',
      foundationDate: '1957',
      logo: 'https://upload.wikimedia.org/wikipedia/uk/e/e1/%D0%95%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0_%D0%A0%D0%9D%D0%9A_%D0%92%D0%B5%D1%80%D0%B5%D1%81_2020.png',
    },
    {
      name: "Реал Мадрид",
      city: 'Мадрид',
      foundationDate: '6 березня 1902',
      logo: 'https://upload.wikimedia.org/wikipedia/uk/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
    },
    {
      name: 'ФК Барселона',
      city: 'Барселона',
      foundationDate: '29 листопада 1899',
      logo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/200px-FC_Barcelona.svg.png',
    }
  ]

  return (
    <div className="App">
      <InfoClub clubs={CLUBS[0]}/>
      <Achievement/>
      <TeamComposition/>
      <ClubList clubs={CLUBS}/>
    </div>
  );
}