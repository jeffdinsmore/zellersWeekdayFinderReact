import React from 'react';
import PropTypes from 'prop-types';

function WeekdayChecker(props) {
  const { day, month, year } = props;
  const weekdayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthArray = ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'];
  
  function zellersEquation() {
    if (day && day > 0 && month && month > 0 && year && year >= 0) {
      //let years = 
      let days = parseInt(day);
      let months = parseInt(month);
      let century = parseInt(year.substring(0, 2));
      let twoDigitYear = parseInt(year.slice(-2));
      if (months === 11 || months === 12) {
        twoDigitYear = twoDigitYear - 1;
      }
      let innerEquation = days + Math.floor((13 * months - 1) / 5) + twoDigitYear + Math.floor(twoDigitYear / 4) + Math.floor(century / 4) - (2 * century);
      if (innerEquation < 0 && innerEquation > -7) {
        innerEquation = innerEquation + 7;
      }
      let answer = Math.floor(innerEquation % 7);
      if (answer < 0 && answer > -7) {
        answer = answer + 7;
      }
      return parseInt(answer);
    } else {
      return 8;
    }
  }

  function checkLeapYear() {
    let yearInt = parseInt(year);
    if ((yearInt % 4 === 0 && yearInt % 100 !== 0) || (yearInt % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <React.Fragment>
      <br />
      <h1 style={{ display: day && year && month ? 'block' : 'none' }}><strong>{weekdayArray[zellersEquation()]}</strong></h1>
      <br />
      <p style={{ display: day && year && month ? 'block' : 'none' }}>The day of the week that {monthArray[parseInt(month) - 1]} {day}, {parseInt(year).toString()} falls on is <strong>{weekdayArray[zellersEquation()]}</strong>.</p>
      <p style={{ display: checkLeapYear() ? 'block' : 'none' }}>This year falls on a <strong>Leap Year</strong>!</p>
    </React.Fragment>
  );
}

WeekdayChecker.propTypes = {
  day: PropTypes.string,
  year: PropTypes.string,
  month: PropTypes.string,
}

export default WeekdayChecker;