import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState({});

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const addNewPerson = async (person) => {
    let found = persons.find((p) => p.name === person.name);

    if (found && found.number === person.number) {
      alert(`${person.name} is already added to phonebook`);
      return false;
    }

    if (found && found.number !== person.number) {
      let res = confirm(
        `${person.name} is already added to phonebook, replace the old number with a new one?`
      );

      if (res) {
        await personService
          .update(found.id, person)
          .then(() => loadPersons())
          .catch((err) =>
            setMessage({
              type: "error",
              text: err.message,
            })
          );

        return true;
      }

      return false;
    }

    personService
      .create({ ...person, id: `${persons.length + 1}` })
      .then(() => {
        setMessage({
          type: "success",
          text: `Added ${person.name} to phonebook`,
        });
        loadPersons();
      })
      .catch((err) =>
        setMessage({
          type: "error",
          text: err.message,
        })
      );

    return true;
  };

  const onDelete = (person) => {
    let res = confirm(`Delete ${person.name}`);

    if (res) {
      personService
        .remove(person.id)
        .then(() => {
          setMessage({
            type: "error",
            text: `Information of ${person.name} has been removed.`,
          });
          loadPersons();
        })
        .catch((err) =>
          setMessage({
            type: "error",
            text: err?.response?.data || err.message,
          })
        );
    }
  };

  const loadPersons = () => {
    personService
      .getAll()
      .then((res) => setPersons(res.data))
      .catch((err) =>
        setMessage({
          type: "error",
          text: err.message,
        })
      );
  };

  useEffect(() => {
    loadPersons();
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter search={search} handleSearchChange={handleSearchChange} />

      <h2>Add a new</h2>
      <PersonForm addNewPerson={addNewPerson} />

      <h2>Numbers</h2>
      <Persons search={search} persons={persons} onDelete={onDelete} />
    </div>
  );
};

export default App;
