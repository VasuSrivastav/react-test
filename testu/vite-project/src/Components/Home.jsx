import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  const pasteId = searchParam.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);
  
  useEffect(() => {
    if (pasteId) {
      const currentPaste = allPastes.find((paste) => paste.id === pasteId);
      setValue(currentPaste?.content);
      setTitle(currentPaste?.title);
    }
  
  },
[pasteId])
  function createPaste() {
    const paste = {
      title: title,
      content: value,
      id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    

    if (pasteId) {
      //update paste
      dispatch(updateToPastes(paste));
    } else {
      //create paste
      dispatch(addToPastes(paste));
    }
    //after creating or updating the paste
    //reset the form & values
    setValue("");
    setTitle("");
    setSearchParam({}); //clear the search params
  }

  return (
    <div>
      <div className="flex gap-7 place-content-between">
        <input
          type="text"
          placeholder="Enter Title"
          className="border-2 border-gray-300 p-2 rounded-lg mt-2 w-[60%]"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-lg mt-2"
          onClick={createPaste}
        >
          {pasteId ? "Update My Note" : "Create My Note"}
        </button>
      </div>
      <div>
        <textarea
          className="border-2 border-gray-300 rounded-lg mt-2 min-w-[500px] p-4"
          value={value}
          placeholder="Enter code stuff here..."
          onChange={(e) => setValue(e.target.value)}
          rows={16}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
