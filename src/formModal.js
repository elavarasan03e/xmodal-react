// import React, { useState } from 'react';
// import './FormModal.css';

// const FormModal = ({ closeModal }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     dob: '',
//     phone: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.username || !formData.email || !formData.dob || !formData.phone) {
//       alert('Please fill out all fields.');
//       return;
//     }
//     if (!isValidEmail(formData.email)) {
//       alert('Invalid email. Please check your email address.');
//       return;
//     }
//     if (!isValidPhone(formData.phone)) {
//       alert('Invalid phone number. Please enter a 10-digit phone number.');
//       return;
//     }
//     // Perform any other necessary actions with the form data
//     // Clear form fields
//     setFormData({
//       username: '',
//       email: '',
//       dob: '',
//       phone: ''
//     });
//     const emailInput = form.elements['email'];
//       if (emailInput.validity.typeMismatch) {
//         emailInput.setCustomValidity(`Please include an '@' in the email address. '${emailInput}' is missing an @.`);
//       }
//       form.reportValidity();
//     }
  

//   const isValidEmail = (email) => {
//     // Simple email validation
//     return email.includes('@');
//   };

//   const isValidPhone = (phone) => {
//     // Simple phone number validation (expects 10 digits)
//     return /^\d{10}$/.test(phone);
//   };

//   const handleClickOutside = (e) => {
//     if (e.target.classList.contains('modal-overlay')) {
//       closeModal();
//     }
//   };

//   // Attach event listener when the modal is open
//   document.addEventListener('click', handleClickOutside);

//   return (
//     <div className="modal">
//       <div className="modal-overlay"></div>
//       <div className="modal-content">
//         <h2>Fill Details</h2>
//         <form onSubmit={handleFormSubmit}>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} required/>
//           <label htmlFor="email">Email:</label>
//           <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} required/>
//           <label htmlFor="phone">Phone:</label>
//           <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required/>
//           <label htmlFor="dob">Date of Birth:</label>
//           <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} required/>
         
//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormModal;
import React, { useState } from 'react';
import './FormModal.css';

const FormModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      // Perform any other necessary actions with the form data
      // Clear form fields
      e.preventDefault();
    if (!formData.username || !formData.email || !formData.dob || !formData.phone) {
      alert('Please fill out all fields.');
      return;
    }
    if (!isValidEmail(formData.email)) {
      alert('Invalid email. Please check your email address.');
      return;
    }
    if (!isValidPhone(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }
    const dobInput = form.elements['dob'];
      if (!isValidDateOfBirth(dobInput.value)) {
        alert(`Invalid date of birth. Date of Birth cannot be in the future.`);
      }
      setFormData({
        username: '',
        email: '',
        dob: '',
        phone: ''
      });
    } else {
      const emailInput = form.elements['email'];
      if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity(`Please include an '@' in the email address. '${emailInput}' is missing an @.`);
      }
      form.reportValidity();
    }
  };

    const isValidEmail = (email) => {
        // Simple email validation
        return email.includes('@');
    };
    
    const isValidPhone = (phone) => {
        // Simple phone number validation (expects 10 digits)
        return /^\d{10}$/.test(phone);
    };

    const isValidDateOfBirth = (dob) => {
        const currentDate = new Date();
        const inputDate = new Date(dob);
        return inputDate <= currentDate;
      };
    

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={handleClickOutside}></div>
      <div className="modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} required />
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} required />
          
          <button type="submit-button" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
