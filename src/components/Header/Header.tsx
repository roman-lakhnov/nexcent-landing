import styles from './Header.module.scss'
const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src='/src/assets/images/Logo.svg' alt='Nexcent' />
			</div>
			<nav>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<a href='#'>Home</a>
					</li>
					<li className={styles.navItem}>
						<a href='#'>Service</a>
					</li>
					<li className={styles.navItem}>
						<a href='#'>Feature</a>
					</li>
					<li className={styles.navItem}>
						<a href='#'>Product</a>
					</li>
					<li className={styles.navItem}>
						<a href='#'>Testimonial</a>
					</li>
					<li className={styles.navItem}>
						<a href='#'>FAQ</a>
					</li>
				</ul>
			</nav>
			<div className={styles.auth}>
				<a href='#'>Login</a>
				<a href='#'>Sign up</a>
			</div>
		</header>
	)
}

export default Header
