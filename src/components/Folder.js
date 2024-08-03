import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
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


    return (
        <div className="flex flex-col space-y-1">
            <div 
                className="flex gap-2 items-center font-bold cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                onDoubleClick={() => setModalOpen(true)}
                onDrag={(e) => console.log(e)}
            >
                {folder.folders?.length > 0 && !isOpen && <FaAngleRight />}
                {isOpen && folder.folders?.length > 0 && <FaAngleDown />}
                {folder.name}
            </div>
            {isOpen && (
                <div 
                    className="ml-5 space-y-1"
                >
                    {folder.folders?.map((folder, index) => (
                        <Folder key={index} folder={folder} />
                    ))}
                </div>
            )}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(!isModalOpen)} onSubmit={addFolder} />
        </div>
    );
}

export default Folder;