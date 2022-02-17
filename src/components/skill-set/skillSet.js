import style from './style.css';

function SkillSet({ data }) {
  return (
    <div>
      <div className={style.gridContainer}>
        {data.map(({ title, skills }) => (
          <>
            <div className={style.gridItem}>
              <p className={style.skillType}>{title}</p>
            </div>
            <div className={style.gridItem}>
              <p>{skills}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default SkillSet;
