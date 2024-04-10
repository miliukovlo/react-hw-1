import React from 'react';

const Header = () => {
    const navHref = [
        {
            navText: 'Вернуться на GitHub',
            href: 'https://github.com/ssadown'
        },
        {
            navText: 'Написать в Telegram',
            href: 'https://t.me/Yaquya'
        }
    ]

    return (
        <>
            <header>
                <nav>
                    <ul>
                        {
                            navHref.map(navEl => {
                                return (
                                    <a href={navEl.href} target='_blank' rel="noreferrer">{navEl.navText}</a>
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
