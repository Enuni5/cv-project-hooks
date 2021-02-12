import React, { useEffect } from 'react';

function Personal(props) {
  function handleChange(e) {
    props.onChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(e);
  }

  function handleEdit(e) {
    e.preventDefault();
    props.onClick(e);
  }

  const personal = props.personalData;

  return (
    <div>
      <form id='personal' className='personal-form' onSubmit={handleSubmit}>
        <label htmlFor='fname'>
          First Name:
          <input
            type='text'
            className='personalFname'
            name='fname'
            value={personal.fname}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='lname'>
          Last Name:
          <input
            type='text'
            className='personalLname'
            name='lname'
            value={personal.lname}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='jposition'>
          Job Position:
          <input
            type='text'
            className='personalJPosition'
            name='jposition'
            value={personal.jposition}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='email'>
          E-mail:{' '}
          <input
            type='text'
            className='personalEmail'
            name='email'
            value={personal.email}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='phone'>
          Phone:{' '}
          <input
            type='text'
            className='phone'
            name='phone'
            value={personal.phone}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <input type='submit' value='Submit' />
        <button type='edit' value='Edit' onClick={handleEdit}>
          Edit
        </button>
      </form>
    </div>
  );
}

export default Personal;
