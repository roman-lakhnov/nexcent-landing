import styles from './Demo.module.scss'
import ArrowWhite from '/src/assets/images/Right_white.svg'

const Demo = () => {
	return (
		<section className={styles.demo}>
			<h1>Pellentesque suscipit fringilla libero eu.</h1>
			<div className={styles.btn}>
				<a href='#'>Get a Demo</a>
				<img src={ArrowWhite} alt='arrow' />
			</div>
		</section>
	)
}

export default Demo
