import React from 'react';
import classes from './Description.module.css'

const Description = () => {
  return (
    <div className={classes.description}>
      <div className={classes.avatar}>
        <img src="images/nzQUof-JqQ0.jpg" alt=""></img>
      </div>
      <div className={classes.information}>
        <h3>Vasyaev Mark</h3>
        <p>Дата рождения: 15.04.1995</p>
        <p>Город: Санкт-Петербург</p>
      </div>
    </div>
  )
}

export default Description