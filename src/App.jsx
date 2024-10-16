import { useState } from 'react'
import './App.css'

function App() {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [strength, setStrength] = useState(0)
  const [agility, setAgility] = useState(0)
  const [zombieFighters, setzombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  )


  // addFighter
const checkIfAffordable = (price) => {
  if (money > 0 && price <= money) {
    return true;
  } else {
    console.log("You can't afford it");
    return false;
  }
};

// Add fighter to the team
const handleAddFighter = (zombieFighter) => {
  if (checkIfAffordable(zombieFighter.price)) {
    setTeam([...team, zombieFighter]);
    setMoney(money - zombieFighter.price);
    setStrength(strength + zombieFighter.strength);
    setAgility(agility + zombieFighter.agility);
  }
};

// Remove fighter from the team
const handleRemoveFighter = (member, index) => {
  const updatedTeam = team.filter((_, i) => i !== index);
  setTeam(updatedTeam);
  setMoney(money + member.price);
  setStrength(strength - member.strength);
  setAgility(agility - member.agility);
};

// List of zombie fighters
const listOfZombieFighters = zombieFighters.map((zombieFighter, index) => (
  <li key={`${zombieFighter.name} ${index}`}>
    <img src={zombieFighter.img} alt="Zombie Fighter Image" />
    <h3>{zombieFighter.name}</h3>
    <p>Price: {zombieFighter.price}</p>
    <p><small>Strength: {zombieFighter.strength}</small></p>
    <p><small>Agility: {zombieFighter.agility}</small></p>
    <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
  </li>
));

// List of team members
const teamMembers = team.map((member, index) => (
  <li key={`${member.name} ${index}`}>
    <img src={member.img} alt="Zombie Fighter Image" />
    <h3>{member.name}</h3>
    <p>Price: {member.price}</p>
    <p><small>Strength: {member.strength}</small></p>
    <p><small>Agility: {member.agility}</small></p>
    <button onClick={() => handleRemoveFighter(member, index)}>Remove</button>
  </li>
));

return (
  <div className="body">
    <h1>Zombie Fighters</h1>

    {/* Stats */}
    <p>Money: {money}</p>
    <p>Team Strength: {strength}</p>
    <p>Team Agility: {agility}</p>

    {/* Team */}
    <p>Team</p>
    <ul>
      {teamMembers.length !== 0 ? teamMembers : 'Pick Some Team Members'}
    </ul>

    {/* Display list of zombie fighters */}
    <ul>{listOfZombieFighters}</ul>
  </div>
);
}

export default App;