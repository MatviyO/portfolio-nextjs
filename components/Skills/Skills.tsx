import styles from '../../styles/skills.module.scss';
import MainTitle from '../MainTitle/MainTitle';
import SkillsItem from './SkillsItem';

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <MainTitle text='Skills' />
            </div>
            <div className="sub-container">
                <ul className={styles.skills__list}>
                    <SkillsItem
                        title='Frontend'
                        text='Javascript, Typescript, React, Angular, NextJs, HTML, CSS'
                        iconClass={styles.skills__web}
                    />
                    <SkillsItem
                        title='Backend'
                        text='Nodejs, ExpressJs, Nestjs'
                        iconClass={styles.skills__ux}
                    />
                    <SkillsItem
                        title='Database'
                        text='MySql, Mongo, Postgres, SQL Server'
                        iconClass={styles.skills__front}
                    />
                    <SkillsItem
                        title='Clounds'
                        text='Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics, ChartBeat, CrazyEgg.'
                        iconClass={styles.skills__seo}
                    />
                </ul>
            </div>
        </section>
    );
}

export default Skills;
