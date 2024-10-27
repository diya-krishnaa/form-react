import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
  });

  // Update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate form inputs
  const isFormValid = () => {
    const { name, address, mobile, email, gender, dob, course } = formData;
    return (
      name && address && mobile && email && gender && dob && course &&
      /^[a-zA-Z\s]+$/.test(name) &&
      /^[0-9]{10}$/.test(mobile) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
  };

  //  Registration done
  const handleRegister = () => {
    if (isFormValid()) {
      alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  // cancelling the data
  const handleCancel = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: ''
    });
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light rounded p-5'>
        <div className='bg-info text-light text-center rounded mb-3 p-3'>
          <h1 className='fw-bolder'>Student Registration Form</h1>
        </div>

        <form className='mt-5'>
          <div className='mb-3'>
            <TextField
              name='name'
              label="Name"
              variant="outlined"
              className='w-100'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <TextField
              name='address'
              label="Address"
              variant="outlined"
              className='w-100'
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <TextField
              name='mobile'
              label="Mobile"
              variant="outlined"
              className='w-100'
              value={formData.mobile}
              onChange={handleChange}
              type="tel"
            />
          </div>
          <div className='mb-3'>
            <TextField
              name='email'
              label="Email"
              variant="outlined"
              className='w-100'
              value={formData.email}
              onChange={handleChange}
              type="email"
            />
          </div>
          <div className='mb-3'>
            <TextField
              name='gender'
              label="Gender"
              variant="outlined"
              className='w-100'
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <TextField
              name='dob'
              label="Date of Birth"
              variant="outlined"
              className='w-100'
              value={formData.dob}
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <FormControl fullWidth variant="outlined" className='mb-5 mt-5'>
            <InputLabel id="course-label">Course</InputLabel>
            <Select
              labelId="course-label"
              name="course"
              label="Course"
              value={formData.course}
              onChange={handleChange}
            >
              <MenuItem value="biology">Biology</MenuItem>
              <MenuItem value="computer-science">Computer Science</MenuItem>
              <MenuItem value="commerce">Commerce</MenuItem>
              <MenuItem value="humanities">Humanities</MenuItem>
            </Select>
          </FormControl>

          <Stack direction="row" spacing={2}>
            <Button onClick={handleRegister} variant="contained" style={{ width: '50%', height: '70px' }}>
              Register
            </Button>
            <Button onClick={handleCancel} variant="outlined" style={{ width: '50%', height: '70px' }}>
              Cancel
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;