import React, { useState } from 'react';
import WeekdayChecker from './WeekdayChecker';

function WeekDayFinder() {
  const [properties, setProperties] = useState({});
  function handleFormSubmit(e) {
    e.preventDefault();
    let years = e.target.yearInput.value;
    if(years.length === 1) {
      years = "000" + years;
    } else if(years.length === 2) {
      years = "00" + years;
    } else if(years.length === 3) {
      years = "0" + years;
    }
    const properties = {
      month: e.target.monthInput.value,
      day: e.target.dayInput.value,
      year: years,
    }
    setProperties(properties);
  }
  return (
    <React.Fragment>
      <div className="container">
        <br />
        <h2 className='jumbotron'>Choose a specific date. <br /> Find out the weekday.</h2>
        <h4>Enter the date below:</h4>
        <form onSubmit={handleFormSubmit} id="dateForm">
          <label htmlFor="month">Month:</label>
          <select name="monthInput" className="selectField" required={true}>
            <option value=''>Please Select</option>
            <option value='11'>January</option>
            <option value='12'>February</option>
            <option value='1'>March</option>
            <option value='2' > April</option >
            <option value='3' > May</option >
            <option value='4' > June</option >
            <option value='5' > July</option >
            <option value='6' > August</option >
            <option value='7' > September</option >
            <option value='8' > October</option >
            <option value='9' > November</option >
            <option value='10' > December</option >
          </select >

          <label htmlFor="day" className='inputField'>Day:</label>
          <input
            type="number"
            name='dayInput'
            id="dayInput" 
            min="1"
            max="31"
            required={true}
          />

          <label htmlFor="year" className='inputField'>Year:</label>
          <input
            type="number"
            id="yearInput"
            min="0"
            max="9999"
            required={true}
          />
          <br></br><br />
          <button type="submit" className="btn btn-info">What day of the week was it?</button>
        </form>
        <WeekdayChecker month={properties.month} day={properties.day} year={properties.year}/>
      </div>
    </React.Fragment>
  );
}

export default WeekDayFinder;