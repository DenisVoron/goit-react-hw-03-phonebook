import css from './Section.module.css';


export const Section = ({ title, children }) => (
    <section className={css.section}>
        <h2 className={css.sectionTitle}>{title}</h2>
        {children}
    </section>
);