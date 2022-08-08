import React from 'react';
import './App.css';


const App =()=>{
  <PersonList />
}


const PersonList = () => {
  const people = [

    { img: 32, name: "Stella", job: "developer" },
    { img: 32, name: "Joanna", job: "Architect" },
    { img: 32, name: "Jane", job: "designer" },
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} />

    </section>

  );
}
const Person = (props) => {
  const { img, name, job } = props.person;
  const url=`https://randomuser.me/api/portraits/women/${img}.jpg`;
}
  return (
    <>
      <div className="person">
        <img src='{url}' alt="person"></img>
        <div>
          <h4>{name}</h4>
          <h4>{job}</h4>
        </div>
      </div>
    </>
  );


export default App;