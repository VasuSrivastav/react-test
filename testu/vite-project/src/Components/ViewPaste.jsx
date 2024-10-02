import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
const ViewPaste = () => {
    const {id}= useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.find((paste) => paste.id === id);
    // const paste = allPastes.filter((p) => p.id === id)[0];
  return (
    <div>
      <div className="flex gap-7 place-content-between">
        <input
          type="text"
          placeholder="Enter Title"
          className="border-2 border-gray-300 p-2 rounded-lg mt-2 w-[60%]"
          value={paste.title}
          disabled
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* <button
          className="bg-blue-500 text-white p-2 rounded-lg mt-2"
          onClick={createPaste}
        >
          {pasteId ? "Update My Note" : "Create My Note"}
        </button> */}
      </div>
      <div>
        <textarea
          className="border-2 border-gray-300 rounded-lg mt-2 min-w-[500px] p-4"
          value={paste.content}
          placeholder="Enter code stuff here..."
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={16}
        ></textarea>
      </div>
    </div>
  )
}

export default ViewPaste