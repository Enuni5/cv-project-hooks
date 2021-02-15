import React, { useState, useEffect } from 'react';
import '../App.css';
import profilepic from '/Users/Emilio/projects/cv-project-hooks/src/ben-sweet-2LowviVHZ-E-unsplash.jpg';
import Personal from './personal';
import Educational from './educational';
import Professional from './professional';
import _ from 'lodash';

function App() {
  const [personal, setPersonal] = useState({
    fname: 'Emilio',
    lname: 'Nuñez Nieto',
    jposition: 'Caraculo',
    email: 'pepito@hello.com',
    phone: '555555555',
  });

  const [educational, setEducational] = useState({
    school: [''],
    studyTitle: [''],
    studyDates: [''],
  });

  const [professional, setProfessional] = useState({
    company: [''],
    position: [''],
    tasks: [''],
    dates: [''],
  });

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    console.log(e);
    if (e.target.form.id === 'personal') {
      setPersonal({ ...personal, [name]: value });
    } else if (e.target.form.id === 'educational') {
      setEducational({ ...educational, [name]: [value] });
      console.log(educational);
    } else if (e.target.form.id === 'professional') {
      setProfessional({ ...professional, [name]: [value] });
      console.log(professional);
    } else console.log('pfff');
  }

  function handleSubmit(e) {
    console.log(e);
  }

  return (
    <div className='App'>
      <Personal
        personalData={personal}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Educational
        educationalData={educational}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Professional
        professionalData={professional}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className='CV'>
        <div className='personal-info'>
          <div className='name-position'>
            <h1 className='fullName'>
              {personal.fname} {personal.lname}
            </h1>
            <h2 className='position'>{personal.jposition}</h2>
          </div>
          <img
            src={profilepic}
            className='profilePic'
            alt='Pic by Ben Sweet on Unsplash'
          />
          <div className='contact-data'>
            <h4 className='contact'>Contact:</h4>
            <h4 className='email'>📧 {personal.email}</h4>
            <h4 className='phone'>📱 {personal.phone}</h4>
          </div>
        </div>
        {/* <div className='experience'>
          <h4 className='experience-title'>Educational Information:</h4>
          <h4 className='experience-title'>Professional Information:</h4>
          <div className='educational-info'>{listEducational}</div>
          <div className='professional-info'>{listProfessional}</div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
