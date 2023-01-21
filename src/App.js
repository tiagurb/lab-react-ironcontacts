import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json";


function App() {

  const [contact, setContacts] = useState(contacts.slice(0,5));

  function oscarAward (oscar) {
    if (oscar === true) {
      return ("🏆")
    } else {
      return ""
    }
  };

  function emmyAward (emmy) {
    if (emmy === true) {
      return ("🏆")
    } else {
      return ""
    }
  };

  function getRandomContact () {
    let newContact = contacts[Math.floor((Math.random()*contacts.length))]
    setContacts([newContact, ...contact])
  };

  function sortByName () {
    const sortedName = [...contact].sort((a, b) =>
    a.name > b.name ? 1 : -1,
    )
    setContacts(sortedName)
  }

  function sortByPopularity () {
    const sortedPopularity = [...contact].sort((a, b) => a.popularity - b.popularity);
    setContacts(sortedPopularity)
  }

  function handleDeleteContact(contactID) {
    const filteredContact = [...contact].filter((person) => {
      return person.id !== contactID;
    });
    setContacts(filteredContact);
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={getRandomContact}>Add a random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th></th>
        </tr>
        {contact.map((person) => {
                return (
                  <tr>
                    <td><img src={person.pictureUrl} alt='contact'/></td>
                    <td>{person.name}</td>
                    <td>{person.popularity}</td>
                    <td>{oscarAward(person.wonOscar)}</td>
                    <td>{emmyAward(person.wonEmmy)}</td>
                    <td><button onClick={() => handleDeleteContact(person.id)}>Delete</button></td>
                  </tr>  
                )}
        )}
      </table>
    </div>
  )
    
}

export default App;
