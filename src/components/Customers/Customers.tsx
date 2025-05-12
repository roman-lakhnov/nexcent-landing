import styles from './Customers.module.scss'
const Customers = () => {
	return (
		<section className={styles.customers}>
			<div className={styles.content}>
				<p>
					Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
					sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
					Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
					molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
					molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
					ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
					turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
					sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
					neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
					dignissim finibus ac sit amet magna.
				</p>
				<p>Tim Smith</p>
				<p>British Dragon Boat Racing Association</p>
				<div className={styles.flexBox}>
					<div className={styles.list}>
						<img src='/src/assets/images/Logo (8).svg' alt='logo8' />
						<img src='/src/assets/images/Logo (9).svg' alt='logo9' />
						<img src='/src/assets/images/Logo (10).svg' alt='logo10' />
						<img src='/src/assets/images/Logo (11).svg' alt='logo11' />
						<img src='/src/assets/images/Logo (12).svg' alt='logo12' />
						<img src='/src/assets/images/Logo (13).svg' alt='logo13' />
					</div>
					<div className={styles.btn}>
						<a href='#'>Meet all customers</a>
						<img src='/src/assets/images/Right.svg' alt='arrow' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Customers
