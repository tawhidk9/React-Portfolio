import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='flex flex-col mb-10 mx-auto '>
    <form  className='flex flex-col w-full md:w-7/12 items-center pt-10' onSubmit={handleSubmit}>
      <div className='px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className='px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>

  );
};

export default Contact;
