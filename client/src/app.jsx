import { useEffect, useState } from "react";

import NoteForm from "./components/Noteform";
import NoteList from "./components/Notelist";

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/notes`
    );

    const data = await response.json();

    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div
      style={{
        width: "600px",
        margin: "auto",
      }}
    >
      <h1>Notes App</h1>

      <NoteForm fetchNotes={fetchNotes} />

      <hr />

      <NoteList
        notes={notes}
        fetchNotes={fetchNotes}
      />
    </div>
  );
}

export default App;