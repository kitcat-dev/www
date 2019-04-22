import React from 'react';
import { Link } from 'gatsby';

function Header() {
  const partiallyActive = className => ({ isPartiallyCurrent }) => ({
    className: className + (isPartiallyCurrent ? ` active` : ``),
  });

  const PartiallyActiveLink = ({ className, ...rest }) => (
    <Link getProps={partiallyActive(className)} {...rest} />
  );

  const tabs = [
    {
      name: 'Главная',
      link: '/',
    },
    {
      name: 'Проекты',
      link: '/projects/',
    },
    {
      name: 'Блог',
      link: '/blog/',
    },
    {
      name: 'Списки',
      link: '/lists/',
    },
  ];

  return (
    <header className="page-header">
      <nav>
        <ul>
          {tabs.map(tab => (
            <li key={tab.link}>
              <PartiallyActiveLink to={tab.link}>
                {tab.name}
              </PartiallyActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;