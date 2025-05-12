import styles from './Clients.module.scss'
const Clients = () => {
	return (
		<section className={styles.clients}>
			<h1>Our Clients</h1>
			<p>We have been working with some Fortune 500+ clients</p>
			<div className={styles.list}>
				<img src='/src/assets/images/Logo (1).svg' alt='logo1' />
				<img src='/src/assets/images/Logo (2).svg' alt='logo2' />
				<img src='/src/assets/images/Logo (3).svg' alt='logo3' />
				<img src='/src/assets/images/Logo (4).svg' alt='logo4' />
				<img src='/src/assets/images/Logo (5).svg' alt='logo5' />
				<img src='/src/assets/images/Logo (6).svg' alt='logo6' />
				<img src='/src/assets/images/Logo (7).svg' alt='logo7' />
			</div>
		</section>
	)
}

export default Clients
