import style from './style.css';

function Summary({ data }) {
  const { primary, secondary } = data;
  return (
    <div>
      <p className={style.summaryOne}>{primary}</p>
      <p>{secondary}</p>
    </div>
  );
}

export default Summary;
