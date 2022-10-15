import css from './Wrapper.module.css';

export const Wrapper = ({ children }) => (
    <div className={css.wrapperList}>
        {children}
    </div>
);