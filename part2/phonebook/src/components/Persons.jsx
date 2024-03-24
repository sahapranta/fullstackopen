const Persons = ({ persons, search }) => {
  const filteredPersons = persons.filter((person) =>
    search ? person.name.toLowerCase().includes(search.toLowerCase()) : true
  );

  return filteredPersons.map((person) => (
    <p key={person.id}>
      {person.name} {person.number}
    </p>
  ));
};
export default Persons;
