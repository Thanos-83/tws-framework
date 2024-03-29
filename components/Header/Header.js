import React from 'react';
import Link from 'next/link';
import Row from '../../general-styles/Row';
import RowContainer from '../../general-styles/RowContainer';
import Button from '../../components/Button/Button';
import useDimensions from '../../custom-design-hooks/useDimensions';

function Header() {
  // const { width, height } = useDimensions('resize');
  // console.log(`window Y dim: ${height} and window X dim: ${width}`);

  return (
    <>
      <header>
        <Row color='sky-900'>
          <RowContainer displayOption='flex'>
            <div className='tws_logo'>
              <Link href='/'>
                <a> LOGO</a>
              </Link>
            </div>
            <nav className='hidden md:block'>
              <ul className='menu'>
                <li>
                  <Link href='/about'>About Us</Link>
                  <ul className='submenu'>
                    <li>
                      <a href='#'>Category 1</a>
                    </li>
                    <li>
                      <a href='#'>Category 2</a>
                    </li>
                    <li>
                      <a href='#'>Cateogry 3</a>
                    </li>
                    <li>
                      <a href='#'>Category 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href='/services'>Services</Link>
                </li>
                <li>
                  <Link href='/products'>Products</Link>
                </li>
                <li>
                  <Link href='/blog'>Blog</Link>
                </li>
              </ul>
            </nav>
            <div className='header_right'>
              <Button text='Sign In' />
              <Button text='Signout' />
            </div>
          </RowContainer>
        </Row>
      </header>
    </>
  );
}

export default Header;
