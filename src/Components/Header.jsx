import React from 'react';
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

    return (
            <header className='header'>
                <nav className='header-nav'>
                    <ul className='header-nav__list'>
                        {
                            // Чтобы не прописывать каждый элемент по отдельности, используется метод map,
                            //  который будет возвращать ссылку для каждого отдельного объекта
                            //  из массива navHref
                            navHref.map(navEl => {
                                return (
                                    <li key={navEl.id}>
                                        <a className='nav-list__element' href={navEl.href} target='_blank' rel="noreferrer">{navEl.navText}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
    );
}

export default Header;
