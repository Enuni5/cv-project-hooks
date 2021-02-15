import React, { useEffect } from 'react';

function Professional(props) {
  function handleChange(e) {
    props.onChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(e);
  }

  const professional = props.professionalData;

  return (
    <div>
      <form
        id='professional'
        className='professional-form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='company'>
          Company:
          <input
            type='text'
            className='professionalCompany'
            name='company'
            value={professional.company}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='position'>
          Position:
          <input
            type='text'
            className='professionalPosition'
            name='position'
            value={professional.position}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='tasks'>
          Tasks asigned:
          <input
            type='textarea'
            className='professionalTasks'
            name='tasks'
            value={professional.tasks}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='dates'>
          Dates:
          <input
            type='text'
            className='professionalDates'
            name='dates'
            value={professional.dates}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default Professional;
