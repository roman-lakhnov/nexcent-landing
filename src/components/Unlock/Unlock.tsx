import styles from './Unlock.module.scss'
const Unlock = () => {
	return (
		<section className={styles.unlock}>
			<img src='/src/assets/images/rafiki.svg' alt='mobileApp' />
			<div className={styles.content}>
				<h1>The unseen of spending three years at Pixelgrade</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
					justo ipsum. Sed accumsan quam vitae est varius fringilla.
					Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
					tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
					Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
					elementum pulvinar odio.
				</p>
				<a href=''>Learn More</a>
			</div>
		</section>
	)
}

export default Unlock
