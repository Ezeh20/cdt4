import Container from '../Container'
import { logo, help } from '../../../public/assets'
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { constants } from './constants';
import styles from './Navigation.module.scss'


const { dropDown } = constants

export const Navigation = () => {
    const [toggle, setToggle] = useState(false)

    const onToggle = () => {
        setToggle(prev => !prev)
    }
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <div className={styles.top}>
                        <img src={logo} alt="logo" className={styles.logo} />
                        <img src={help} alt="help" className={styles.help} />
                        {
                            toggle ? <AiOutlineClose
                                className={styles.icon}
                                onClick={onToggle}
                            />
                                : <AiOutlineMenuFold
                                    className={styles.icon}
                                    onClick={onToggle}
                                />
                        }
                    </div>
                    <div className={toggle
                        ? `${styles.bottom} ${styles.bottomAlt}`
                        : `${styles.bottom}`}>
                        <div className={styles.dropDown}>
                            {
                                dropDown.map((itm, idx) => {
                                    const { id, dropdown, lists } = itm
                                    return (
                                        <div key={id}>
                                            <div>
                                                <p>{dropDown}</p>
                                                
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </nav>
            </Container>
        </header>
    )
}