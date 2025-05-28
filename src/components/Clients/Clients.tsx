import styles from './Clients.module.scss'
import Logo1 from '/src/assets/images/Logo (1).svg'
import Logo2 from '/src/assets/images/Logo (2).svg'
import Logo3 from '/src/assets/images/Logo (3).svg'
import Logo4 from '/src/assets/images/Logo (4).svg'
import Logo5 from '/src/assets/images/Logo (5).svg'
import Logo6 from '/src/assets/images/Logo (6).svg'
import Logo7 from '/src/assets/images/Logo (7).svg'

const Clients = () => {
	return (
		<section className={styles.clients}>
			<h1>Our Clients</h1>
			<p>We have been working with some Fortune 500+ clients</p>
			<div className={styles.list}>
				<img src={Logo1} alt='logo1' />
				<img src={Logo2} alt='logo2' />
				<img src={Logo3} alt='logo3' />
				<img src={Logo4} alt='logo4' />
				<img src={Logo5} alt='logo5' />
				<img src={Logo6} alt='logo6' />
				<img src={Logo7} alt='logo7' />
			</div>
		</section>
	)
}

export default Clients
