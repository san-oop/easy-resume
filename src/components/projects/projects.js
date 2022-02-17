import style from './style.css';

function Projects({ serialNumber, title, projectDetails }) {
  return (
    <div className={style.projectsWrapper}>
      <p className={style.projectTitle}>
        <span>{`${serialNumber}) `}</span>
        {title}
      </p>
      {projectDetails.map((item) => (
        <p className={style.projectDetails} key={item.id}>
          {item.value}
        </p>
      ))}
    </div>
  );
}

export default Projects;
