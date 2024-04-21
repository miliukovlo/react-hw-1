import React from 'react';

const Header = () => {
    // массив ссылок и их описания
    const navHref = [
        {
            navText: 'Вернуться на GitHub',
            href: 'https://github.com/ssadown/react-hw-1'
        },
        {
            navText: 'Написать в Telegram',
            href: 'https://t.me/Yaquya'
        }
    ]

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
                                    <a href={navEl.href} target='_blank' rel="noreferrer">{navEl.navText}</a>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
    );
}

export default Header;
