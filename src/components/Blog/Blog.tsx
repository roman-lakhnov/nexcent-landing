import styles from './Blog.module.scss'
import ArrowRight from '/src/assets/images/Right.svg'

const Blog = () => {
	return (
		<section className={styles.blog}>
			<h1>Caring is the new marketing</h1>
			<p>
				The Nexcent blog is the best place to read about the latest membership
				insights, trends and more. See who's joining the community, read about
				how our community are increasing their membership income and lot's more.
			</p>
			<div className={styles.list}>
				<div className={styles.card}>
					<p>Creating Streamlined Safeguarding Processes with OneRen</p>
					<div className={styles.btn}>
						<a href='#'>Readmore</a>
						<img src={ArrowRight} alt='arrow' />
					</div>
				</div>
				<div className={styles.card}>
					<p>
						What are your safeguarding responsibilities and how can you manage
						them?
					</p>
					<div className={styles.btn}>
						<a href='#'>Readmore</a>
						<img src={ArrowRight} alt='arrow' />
					</div>
				</div>
				<div className={styles.card}>
					<p>Revamping the Membership Model with Triathlon Australia</p>
					<div className={styles.btn}>
						<a href='#'>Readmore</a>
						<img src={ArrowRight} alt='arrow' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Blog
