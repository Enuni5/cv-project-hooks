import React, { useEffect } from 'react';

function Educational(props) {
  function handleChange(e) {
    props.onChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(e);
  }

  const educational = props.educationalData;
  return (
    <div>
      <form
        id='educational'
        className='educational-form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='educationalSchool'>
          School:
          <input
            type='text'
            className='educationalSchool'
            name='educationalSchool'
            value={educational.educationalSchool}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='educationalStudyTitle'>
          Title / Degree:
          <input
            type='text'
            className='educationalStudyTitle'
            name='educationalStudyTitle'
            value={educational.educationalStudyTitle}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='educationalStudyDate'>
          Title Date:
          <input
            type='text'
            className=''
            name='educationalStudyDate'
            value={educational.educationalStudyDate}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default Educational;
