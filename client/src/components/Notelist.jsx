function NoteList({ notes, fetchNotes }) {
  const deleteNote = async (id) => {
    await fetch(
      `${import.meta.env.VITE_API_URL}/notes/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchNotes();
  };

  return (
    <div>
      {notes.map((note) => (
        <div
          key={note._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <h3>{note.title}</h3>

          <p>{note.content}</p>

          <button
            onClick={() => deleteNote(note._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;