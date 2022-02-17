import style from './style.css';

function Education({ data }) {
  return (
    <>
      {data.map(({
        course,
        courseDuration,
        school,
      }) => (
        <div>
          <div className={style.roleContainer}>
            <p className={style.roleName}>{course}</p>
            <p>{courseDuration}</p>
          </div>
          <p className={style.companyName}>{school}</p>
        </div>
      ))}
    </>
  );
}

export default Education;
