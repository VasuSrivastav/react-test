import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Paste = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  // console.log(pastes);
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handledelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
    console.log("delete");
  }

  return (
    <div>
      <input
        className="w-1/2 mx-auto mt-4 p-2 border-2 border-gray-300  rounded-md min-w-[500px]"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5">
        {filterData.length > 0 &&
          filterData.map((paste) => (
            <div
              key={paste?.id}
              className="border-2 border-gray-300 p-2 rounded-md"
            >
              <h1>{paste.title}</h1>
              <p>{paste.content}</p>
              {/* <p>{paste.id}</p> */}
              <div className="flex gap-4 place-content-evenly">
                <button>
                    
                <NavLink className="text-black" to={`/?pasteId=${paste?.id}`}> Edit</NavLink>
                </button>
                <button>
                    <NavLink className="text-black" to={`/pastes/${paste.id}`}> View</NavLink>
                    </button>
                <button onClick={() => handledelete(paste?.id)}>Delete</button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied to clipboard");
                }}
                >
                  Copy
                </button>
                {/* share mai url dalna hai jo browser pe jake koi bhi dekh sake  */}
                <button>Share</button>
              </div>
              <div>{paste.createdAt}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Paste;
