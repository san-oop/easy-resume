import style from './style.css';

function WorkExperience({ duration, companyName, description }) {
  return (
    <div>
      <div className={style.roleContainer}>
        <p className={style.roleName}>{companyName}</p>
        <p>{duration}</p>
      </div>
      <p>
        {description}
      </p>
    </div>
  );
}

export default WorkExperience;
