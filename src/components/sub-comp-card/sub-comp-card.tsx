import classNames from 'classnames';
import styles from './sub-comp-card.module.scss';

export interface SubCompCardProps {
    className?: string;
    title?: String;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-sub-comp-cards-and-templates
 */
export const SubCompCard = ({ className, title, children }: SubCompCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.subcompcard}>
                <h1>{title ? title : 'undefined'}</h1>
                <div>{children}</div>
            </div>
        </div>
    );
};
