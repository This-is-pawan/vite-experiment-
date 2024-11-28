import React from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    title: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', body: '' }); // Reset form fields
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
