import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const folderName = e.target.folderName.value;
    onSubmit(folderName);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-slate-900 rounded-lg shadow-lg w-1/3 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create New Folder</h2>
          <button onClick={onClose} className="text-gray-600">&times;</button>
        </div>
        <form className='' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="folderName" className="block text-white text-gray-700">{"Folder Name"}</label>
            <input type="text" id="folderName" name="folderName" className="w-full bg-stone-900 text-white px-4 py-2 border rounded-lg" required />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 border rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
