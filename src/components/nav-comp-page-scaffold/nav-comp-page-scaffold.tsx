import classNames from 'classnames';
import styles from './nav-comp-page-scaffold.module.scss';
import { SubCompCard } from '../sub-comp-card/sub-comp-card';
import { SubCompButton } from '../sub-comp-button/sub-comp-button';

export interface NavCompPageScaffoldProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-nav-comp-page-scaffolds-and-templates
 */
export const NavCompPageScaffold = ({ className }: NavCompPageScaffoldProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.root}>
                <nav className={styles.scaffoldnav}>
                    <a href="/home" className={styles.link}>
                        Earn
                    </a>{' '}
                    <a href="/projects" className={styles.link}>
                        Order
                    </a>
                    <a href="/about" className={styles.link}>
                        Account
                    </a>
                    <a href="/contact" className={styles.link}>
                        Help
                    </a>
                </nav>
                <div>
                    <SubCompCard title={'Fill Order'}>
                        <form>
                            <label>First name:</label>
                            <br />
                            <input type="text" />
                            <br />
                            <label>Last name:</label>
                            <br />
                            <input type="text" />
                            <br />
                            <br />
                            <SubCompButton type="submit" value="Submit" />
                        </form>
                    </SubCompCard>
                </div>
            </div>
        </div>
    );
};
