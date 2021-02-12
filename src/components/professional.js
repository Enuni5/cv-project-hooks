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
        <label htmlFor='professionalCompany'>
          Company:
          <input
            type='text'
            className='professionalCompany'
            name='professionalCompany'
            value={professional.professionalCompany}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='professionalPosition'>
          Position:
          <input
            type='text'
            className='professionalPosition'
            name='professionalPosition'
            value={professional.professionalPosition}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='professionalTasks'>
          Tasks asigned:
          <input
            type='textarea'
            className=''
            name='professionalTasks'
            value={professional.professionalTasks}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='professionalDates'>
          Dates:
          <input
            type='text'
            className='professionalDates'
            name='professionalDates'
            value={professional.professionalDates}
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
