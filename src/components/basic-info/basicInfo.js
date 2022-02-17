import { Fragment } from 'preact';
import style from './style.css';

function BasicInfo({ data }) {
  const {
    name,
    currentRole,
    currentLocation,
    phoneNumber,
    primaryEmailId,
    yourProfiles,
  } = data;
  return (
    <div className={style.basicInfoWrapper}>
      <div>
        <h1>{name}</h1>
        <h2>{currentRole}</h2>
      </div>
      <div className={style.userInfoWrapper}>
        <hr />
        <div className={style.userInfo}>
          <div>
            <i className="fa fa-map-marker" aria-hidden="true" />
            <p>{currentLocation}</p>
          </div>
          <div>
            <i className="fa fa-phone" aria-hidden="true" />
            <p>{phoneNumber}</p>
          </div>
          <div>
            <i className="fa fa-envelope-o" aria-hidden="true" />
            <p>{primaryEmailId}</p>
          </div>
          {yourProfiles.map(({ icon, url, text }) => (
            <Fragment key={url}>
              <div key={url}>
                <i className={`fa ${icon}`} aria-hidden="true" />
                <a href={url} target="_blank" rel="noreferrer">{text}</a>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
