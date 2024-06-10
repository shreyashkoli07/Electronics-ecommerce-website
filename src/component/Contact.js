import React,{useState}from 'react'
import './contact.css'
const Contact = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(`Name: ${name}`);
    console.log(` Email: ${email}`);
    console.log(`Message: ${message}`);
  };

  return (
    <div className='contact_main'>
      
      <form onSubmit={handleSubmit} className='contact'>
      <h1>Contact Us</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button  className='btn btn-success'>Send Message</button>
      </form>
    </div>
  );
}

export default Contact