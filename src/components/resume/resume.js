import style from './style.css';
import DATA from '../../data/data';
import Title from '../title/title';
import Content from '../content/content';
import Summary from '../summary/summary';
import Projects from '../projects/projects';
import SkillSet from '../skill-set/skillSet';
import Education from '../education/education';
import BasicInfo from '../basic-info/basicInfo';
import WorkExperience from '../work-experience/workExperience';

function Resume() {
  return (
    <div id="resume" className={style.resumeWrapper}>
      <BasicInfo data={DATA.BASIC_DETAILS} />
      <Title text="summary" />
      <Content>
        <Summary data={DATA.SUMMARY} />
      </Content>
      <Title text="skills & abilities" />
      <Content>
        <SkillSet data={DATA.SKILLS_AND_ABILITIES} />
      </Content>
      <Title text="Work Experience" />
      <Content>
        {DATA.PREVIOUS_EXPIRIENCE.map(({ companyName, workSpan, description }) => (
          <WorkExperience
            companyName={companyName}
            duration={workSpan}
            description={description}
          />
        ))}
      </Content>
      <Title text="projects" />
      <Content>
        {DATA.NOTABLE_PROJECTS.map(({ title, keyPoints }, index) => (
          <Projects
            key={title}
            serialNumber={index + 1}
            title={title}
            projectDetails={keyPoints}
          />
        ))}
      </Content>
      <Title text="education" />
      <Content>
        <Education data={DATA.EDUCATION_DETAILS} />
      </Content>
    </div>
  );
}

export default Resume;
