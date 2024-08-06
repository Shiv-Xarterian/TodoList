import React from "react";

const Note = ({ Note }) => {
  return (
    <div className="min-h-[40vh] w-[90vw] bg-gray-800 rounded-md flex flex-col items-center gap-3.5 p-3">
      <span className="h-[6vh] w-[85vw] flex bg-slate-100 rounded-sm text-xl items-center p-3 font-poppins">
        {Note.Title}
      </span>
      <span className="h-[23vh] w-[85vw] flex bg-slate-100 rounded-sm text-sm p-3 font-poppins">
        {Note.Message}
      </span>
      <button className="bg-green-400 px-3 py-2 rounded-sm text-white self-start">
        Edit
      </button>
    </div>
  );
};

export default Note;
