import styles from './Community.module.scss'
import Icon1 from '/src/assets/images/Icon.svg'
import Icon2 from '/src/assets/images/Icon (1).svg'
import Icon3 from '/src/assets/images/Icon (2).svg'

const Community = () => {
	return (
		<section className={styles.community}>
			<h1>Manage your entire community in a single system</h1>
			<p>Who is Nextcent suitable for?</p>
			<div className={styles.contentList}>
				<div className={styles.listItem}>
					<img src={Icon1} alt='icon1' />
					<h2>Membership Organisations</h2>
					<p>
						Our membership management software provides full automation of
						membership renewals and payments
					</p>
				</div>
				<div className={styles.listItem}>
					<img src={Icon2} alt='icon2' />
					<h2>National Associations</h2>
					<p>
						Our membership management software provides full automation of
						membership renewals and payments
					</p>
				</div>
				<div className={styles.listItem}>
					<img src={Icon3} alt='icon3' />
					<h2>Clubs And Groups</h2>
					<p>
						Our membership management software provides full automation of
						membership renewals and payments
					</p>
				</div>
			</div>
		</section>
	)
}

export default Community
