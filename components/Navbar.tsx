import styles from '../styles/components/Navbar.module.css'
import { ActiveLink } from "./ActiveLink"

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
];

export const Navbar = () => {
  return (
    <nav className={ styles['menu-container'] }>
        { 
          menuItems.map( route => 
            <ActiveLink 
              key={route.href}
              activeClass={styles.active} 
              text={route.text} 
              href={route.href}
            />
          )
        }
    </nav>
  )
}
