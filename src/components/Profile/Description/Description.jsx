import React from 'react';
import classes from './Description.module.css'
import Preloader from '../../Preloader/Preloader';
import img_Profile from '../../../images/profile.png'

const Description = (props) => {
  debugger
  if (!props.profile) {
    return <Preloader isPreloader={props.isPreloader} />
  }
  return (
    <div className={classes.description}>
      <div className={classes.avatar}>
        {
          props.profile.photos.small == null && props.profile.photos.large == null
            ? <img src={img_Profile} />
            : <img src={props.profile.photos.large} />
        }
      </div>
      <div className={classes.information}>
        <h3>{props.profile.fullName}</h3>
        {props.profile.aboutMe == null
          ? <p>Я поленился что-либо писать о себе</p>
          : <p>{props.profile.aboutMe}</p>
        }
        {props.profile.lookingForAJob == 'true'
          ? <p>В поиске работы: да</p>
          : <p>В поиске работы: нет</p>
        }
      </div>
    </div>
  )
}

export default Description