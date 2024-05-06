import { useState } from 'react';
import './App.css';
import FormModal from './formModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = ({ username, email, phone, dob }) => {
    // Handle form submission logic here
    console.log('Submitted:', { username, email, phone, dob });
    closeModal(); // Close the modal after submission
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      {isOpen && <FormModal closeModal={closeModal} handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
