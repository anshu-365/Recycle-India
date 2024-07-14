/* reffer video */
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import "../style/login.scss";
import Swal from 'sweetalert2';

const EmailForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

//   const[submitButtonDisbled,setSubmitButtonDisbled]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(!name.name || !email.email || !message.message)//if any parameter is missing then show erroe mess 
    // {
    //     Swal.fire("Fill all fields");
    //     // return;
    // }

    
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_wwwbsxc';
    const templateId = 'template_oz76j0q';
    const publicKey = 'ld89JPBgNtMd5Ylb8';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Green India',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        Swal.fire("Email Send Successfully",response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        Swal.fire(error.message);
      });
  }

  return (
    <div className='container2'>
        <div className='innerBox1'>
            <h1 className='heading1'>Send Email </h1>
            <div className='container1'>
               
    {/* <form onSubmit={handleSubmit} className='emailForm'> */}
    <input
      type="text"
      placeholder="Your Name*"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
    <input
      type="email"
      placeholder="Your Email*"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <textarea className='messa'
    required

      cols="30"
      rows="10"
      value={message}
      placeholder="Message Here*"
      onChange={(e) => setMessage(e.target.value)}
    >
    </textarea>
    <button type="submit"
    onClick={handleSubmit}
    >Send Email</button>
  {/* </form> */}
  </div>
  </div>
  </div>
  )
}

export default EmailForm;