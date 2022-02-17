import style from './style.css';

function Title({ text }) {
  return (
    <div className={style.title}>
      <h3>
        <span>
          {text}
        </span>
      </h3>
    </div>
  );
}

export default Title;
