import styles from './Achievements.module.scss'
import IconMembers from '/src/assets/images/Icon (3).svg'
import IconClubs from '/src/assets/images/Icon.png'
import IconEvents from '/src/assets/images/Icon (5).svg'
import IconPayments from '/src/assets/images/Icon (6).svg'

const Achievements = () => {
	return (
		<section className={styles.achievements}>
			<div className={styles.content}>
				<h1>
					Helping a local
					<span> business reinvent itself</span>
				</h1>
				<p>We reached here with our hard work and dedication</p>
			</div>
			<ul>
				<li>
					<img src={IconMembers} alt='icon3' />
					<div className={styles.flexContainer}>
						<h3>2,245,341</h3>
						<p>Members</p>
					</div>
				</li>
				<li>
					<img src={IconClubs} alt='icon4' />
					<div className={styles.flexContainer}>
						<h3>46,328</h3>
						<p>Clubs</p>
					</div>
				</li>
				<li>
					<img src={IconEvents} alt='icon5' />
					<div className={styles.flexContainer}>
						<h3>828,867</h3>
						<p>Event Bookings</p>
					</div>
				</li>
				<li>
					<img src={IconPayments} alt='icon6' />
					<div className={styles.flexContainer}>
						<h3>1,926,436</h3>
						<p>Payments</p>
					</div>
				</li>
			</ul>
		</section>
	)
}

export default Achievements
