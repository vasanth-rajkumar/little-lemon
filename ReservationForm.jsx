import React, { useState } from 'react';
import '../styles/ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.guests || isNaN(formData.guests) || formData.guests <= 0) newErrors.guests = 'Number of guests must be a positive number';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Reservation made successfully!');
      // Implement form submission here
    }
  };

  return (
    <section id="reserve">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} aria-required="true" />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} aria-required="true" />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} aria-required="true" />
          {errors.date && <span className="error">{errors.date}</span>}
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} aria-required="true" />
          {errors.time && <span className="error">{errors.time}</span>}
        </label>
        <label>
          Number of Guests:
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} aria-required="true" />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </label>
        <button type="submit">Reserve</button>
      </form>
    </section>
  );
};

export default ReservationForm;
