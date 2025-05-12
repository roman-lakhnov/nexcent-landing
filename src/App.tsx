import Achievements from './components/Achievements/Achievements'
import Blog from './components/Blog/Blog'
import Calendar from './components/Calendar/Calendar'
import Clients from './components/Clients/Clients'
import Community from './components/Community/Community'
import Customers from './components/Customers/Customers'
import Demo from './components/Demo/Demo'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Unlock from './components/Unlock/Unlock'

function App() {
	return (
		<div className='container'>
			<Header />
			<main>
				<Hero />
				<Clients />
				<Community />
				<Unlock />
				<Achievements />
				<Calendar />
				<Customers />
				<Blog />
				<Demo />
			</main>
			<Footer />
		</div>
	)
}

export default App
