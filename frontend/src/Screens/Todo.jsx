import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "../ApiCalls/Note";
import Note from "../Components/Note";

const Todo = () => {
  const dispatch = useDispatch();
  const { User } = useSelector((state) => state.User);
  const { Notes } = useSelector((state) => state.Note);
  useEffect(() => {
    if (User) {
      getAllNotes(dispatch);
    }
  }, [User]);
  return (
    <div
      className="h-screen w-screen flex flex-col items-center "
      style={{
        background: `url(${`https://imgs.search.brave.com/GgNyVGKKf5nzkVYoWTtY4c4mhOE28N4m4JiRaLwyvgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NTA2Mzk1Ny9waG90/by90by1kby1saXN0/LW9uLW5vdGVib29r/LW92ZXItcGFzdGVs/LWJsdWUtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9d2FXMksy/QnZaNzVRdXhZeVRP/NG9qdmZTRElabzRi/QVc4bVI5Z013RTlD/MD0`})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavBar />
      <div className="h-[95vh] w-[95vw] overflow-y-scroll flex flex-col items-center gap-5 no-scrollbar">
        {Notes ? (
          Notes.map((note) => {
            return <Note key={note._id} Note={note} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Todo;
