import { useState } from "react";
import { FaAngleRight, FaAngleDown, FaPlus } from "react-icons/fa";
import folders from "./Data";
import Modal from "./Modal";

function Folder({ folder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const addFolder = (name) => {
    const newFolder = {
      name: name,
      folders: []
    };
    folder.folders.push(newFolder);
    setIsOpen(true);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col space-y-1">
      <div 
        className="flex gap-2 items-center font-bold cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onDoubleClick={handleOpenModal}
      >
        {folder.folders?.length > 0 && !isOpen && <FaAngleRight />}
        {isOpen && folder.folders?.length > 0 && <FaAngleDown />}
        {folder.name}
      </div>
      {isOpen && (
        <div className="ml-5 space-y-1">
          {folder.folders?.map((folder, index) => (
            <Folder key={index} folder={folder} />
          ))}
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={addFolder} />
    </div>
  );
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
