import styles from './Calendar.module.scss'
import PanaImage from '/src/assets/images/pana.svg'

const Calendar = () => {
	return (
		<section className={styles.calendar}>
			<img src={PanaImage} alt='loginImage' />
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<h1>How to design your site footer like we did</h1>
					<p>
						Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
						augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
						elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
						habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
						facilisis finibus. In euismod augue vitae nisi ultricies, non
						aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
						efficitur quis massa. Praesent felis est, finibus et nisi ac,
						hendrerit venenatis libero. Donec consectetur faucibus ipsum id
						gravida.
					</p>
				</div>
				<a href='#'>Learn More</a>
			</div>
		</section>
	)
}

export default Calendar
