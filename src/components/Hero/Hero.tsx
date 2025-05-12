import styles from './Hero.module.scss'
const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1>
					Lessons and insights<span> from 8 years</span>{' '}
				</h1>
				<p>
					Where to grow your business as a photographer: site or social media?
				</p>
				<a href='#'>Register</a>
			</div>
			<img
				src='/src/assets/images/Illustration.svg'
				alt='Illustration'
				loading='lazy'
			/>
			<img
				className={styles.dots}
				src='/src/assets/images/Dot.svg'
				alt='dots'
			/>
		</section>
	)
}

export default Hero
