import html2pdf from 'html2pdf.js';

import style from './style.css';

function Header() {
  const downloadResume = () => {
    const element = document.getElementById('resume');
    html2pdf(element);
  };

  return (
    <header className={style.header}>
      <h1>REaSyUME</h1>
      <button type="button" onClick={downloadResume}>Download</button>
    </header>
  );
}

export default Header;
