import React from 'react';

const Header = () => {
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

    return (
        <>
        {/* Header  в котором хранится информация о доступных сслыках */}
            <header>
                <nav>
                    <ul>
                        {
                            // Чтобы не прописывать каждый элемент по отдельности, используется метод map,
                            //  который будет возвращать ссылку для каждого отдельного объекта
                            //  из массива navHref
                            navHref.map(navEl => {
                                return (
                                    <a key={navEl.id} href={navEl.href} target='_blank' rel="noreferrer">{navEl.navText}</a>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
