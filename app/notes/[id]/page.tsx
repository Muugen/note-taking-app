import styles from "../Notes.module.css";

const getNote = async (noteId: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/Notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
};

const NotePage = async ({ params }: any) => {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
};

export default NotePage;
