import { useState } from "react";

const PersonForm = ({ addNewPerson }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addPerson = (e) => {
    e.preventDefault();

    if (!newName || !newPhone) return;

    let added = addNewPerson({ name: newName, number: newPhone });

    if (added) {
      setNewName("");
      setNewPhone("");
    }
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:
        <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
