import classNames from 'classnames';
import styles from './sub-comp-button.module.scss';

export interface SubCompButtonProps {
    className?: string;
    value?: string;
    type?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-sub-comp-buttons-and-templates
 */
export const SubCompButton = ({ className, type, value }: SubCompButtonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button className={styles.button}>{value ? value : "undefined"}</button>
        </div>
    );
};
