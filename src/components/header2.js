import { Link } from "gatsby"
import React from "react"
import './header2.css'

class Header2 extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = { hasScrolled: false }
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = (event) => {
		const scrollTop = window.pageYOffset

		if (scrollTop > 50) {
			this.setState({ hasScrolled: true })
		} else {
			this.setState({ hasScrolled: false })
		}
	}

  	render() {
		return (
			<div className = {this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
				<div className = "HeaderGroup">
					<Link to="/">Secret Foundry</Link>
				</div>
				<div className = "NavigationGroup">
					<Link to="/typefaces">Typefaces</Link>
					<Link to="/info">Info</Link>
				</div>
			</div>
		);
  	}
}

export default Header2