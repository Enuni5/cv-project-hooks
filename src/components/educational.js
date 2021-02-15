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
        <label htmlFor='school'>
          School:
          <input
            type='text'
            className='educationalSchool'
            name='school'
            value={educational.school}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='studyTitle'>
          Title / Degree:
          <input
            type='text'
            className='educationalStudyTitle'
            name='studyTitle'
            value={educational.studyTitle}
            onChange={handleChange}
          ></input>
          <br></br>
        </label>

        <label htmlFor='studyDates'>
          Title Date:
          <input
            type='text'
            className='educationalStudyDate'
            name='studyDates'
            value={educational.studyDates}
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
