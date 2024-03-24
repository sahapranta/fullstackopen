const Persons = ({ persons, search, onDelete }) => {
  const filteredPersons = persons.filter((person) =>
    search ? person.name.toLowerCase().includes(search.toLowerCase()) : true
  );

  return filteredPersons.map((person) => (
    <p key={person.id}>
      {person.name} {person.number}{" "}
      <button onClick={() => onDelete(person)}>delete</button>
    </p>
  ));
};
export default Persons;
