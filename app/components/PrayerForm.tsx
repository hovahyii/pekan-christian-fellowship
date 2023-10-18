import React, { useState } from 'react';
import Modal from 'react-modal';
import { createClient } from '@supabase/supabase-js';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi'; // Import an icon for the drop zone

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
  },
};

const PrayerForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [prayerRequest, setPrayerRequest] = useState('');
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async () => {
    // Create a new prayer request in Supabase
    const SUPABASE_URL = process.env.SUPABASE_URL || '';
    const SUPABASE_KEY = process.env.SUPABASE_KEY || '';
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    const { data, error } = await supabase.from('prayers').upsert([
      {
        name,
        prayerRequest,
        profileImage,
        date: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Error submitting prayer request:', error);
    }

    setModalIsOpen(false);
    setPrayerRequest('');
    setName('');
    setProfileImage(null);

     // Reload the page
     window.location.reload();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Prayer Request Form"
    >
      <h1><strong>Submit a Prayer Request</strong></h1>
      <form>
        <div className="mb-3">
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', width: '100%' }}
          />
        </div>
        <div className="mb-3">
          <label>Profile Image</label>
          <div {...getRootProps()} className="border border-dashed border-gray-400 p-4 rounded">
            <input {...getInputProps()} />
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile Image"
                className="w-20 h-20 rounded-full object-cover mb-2"
              />
            ) : (
              <div className="text-gray-500">
                <FiUpload size="24px" className="mb-2" style={{ backgroundColor: 'white' }}/>
                <p>Drag 'n' drop an image here or click to select an image</p>
              </div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label>Prayer Request</label>
          <textarea
            value={prayerRequest}
            onChange={(e) => setPrayerRequest(e.target.value)}
            style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', width: '100%' }}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              backgroundColor: '#0070f3',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            style={{
              backgroundColor: '#ff4c4c',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
              marginLeft: '10px',
            }}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default PrayerForm;
