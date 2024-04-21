import React, { useContext } from 'react';
import ExitButton from '../Header/ExitButton';
import { loginContext } from '../../Context/Context';

    // массив ссылок и их описания
    const navHref = [
        {
            id: 1,
            navText: 'Вернуться на GitHub',
            href: 'https://github.com/ssadown/react-hw-1'
        },
        {
            id: 2,
            navText: 'Написать в Telegram',
            href: 'https://t.me/Yaquya'
        }
    ]

const Header = () => {

    const isLoginContext = useContext(loginContext)

    return (
            <header>
                <nav>
                    <ul>
                        {
                            // Чтобы не прописывать каждый элемент по отдельности, используется метод map,
                            //  который будет возвращать ссылку для каждого отдельного объекта
                            //  из массива navHref
                            navHref.map(navEl => {
                                return (
                                    <li key={navEl.id}>
                                        <a href={navEl.href} target='_blank' rel="noreferrer">{navEl.navText}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                {isLoginContext.isLogin && (<ExitButton/>)}
            </header>
    );
}

export default Header;
