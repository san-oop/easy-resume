import style from './style.css';

function Content({ children }) {
  return (
    <div className={style.content}>
      {children}
    </div>
  );
}

export default Content;
