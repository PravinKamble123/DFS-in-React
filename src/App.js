import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import folders from "./Data";

function Folder({ folder }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div 
        className=" flex items-center font-bold cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {folder.folders?.length > 0 && !isOpen && <FaAngleRight />}
        {isOpen && <FaAngleDown />}
        {folder.name}
      </div>
      { isOpen &&
        <div className="ml-5">
        {folder.folders?.map((folder, index) => {
          return <Folder key={index} folder={folder}/>
        })}
      </div>}
    </div>
  )
}

function App() {

  return (
    <div className="bg-slate-900 min-h-screen text-white p-4">
      {
        folders.map(function getFolders(folder, index) {
          return  <Folder key={index} folder={folder}/>
        })
      }
    </div>
  );
}

export default App;
