import React from 'react';

interface ModalProps {
  onClose: () => void;
}

function ContactModal({ onClose }: ModalProps) {
  const phoneNumber = '+64 022 499 3402';
  const emailAddress = 'hughavery101@gmail.com';

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg p-10">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="mb-2">
          <p className="text-green-500 font-semibold">Phone:</p>
          <p>{phoneNumber}</p>
        </div>
        <div className="mb-2">
          <p className="text-green-500 font-semibold">Email:</p>
          <a className="underline text-indigo-600" href={`mailto:${emailAddress}`}>
            {emailAddress}
          </a>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-purple-200 text-gray-700 px-4 py-2 rounded mt-4 hover:bg-sky-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
