import React from 'react'
import './Tester.css'

class Tester extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			value: 12, 
			fontSize: 10,
			fontFamily: 'times',
			fontWeight: '600',
			fontStyle: 'italic',
			letterSpacing: 0
		}
	}

	handleRangeChange(event) {
		const {value} = this.state
		this.setState({
			value: event.target.value
		})
	}

	handleSelectChange(event) {
	}

	handleFontSizeChange(event) {}
	handleFontFamilyChange(event) {}
	handleFontWeightChange(event) {}
	handleFontStyleChange(event) {}
	handleLetterSpacingChange(event) {}



	render() {
		const {value} = this.state
    	const {min, max} = this.props
		return(
			<div>
				<div>
					<label>Size</label>
					<input 
						type="range"
						min={min} 
		          		max={max}
		          		value={value}
		          		onChange={this.handleRangeChange.bind(this)}
					/>
				</div>
				<div>
					<label>Typeface (Select)</label>
					<select onChange={this.handleSelectChange.bind(this)}>
						<option value="arial">Arial</option>
						<option value="times">Times</option>
					</select>
				</div>	
				<div>
					<label>Weight (Select)</label>
					<select onChange={this.handleSelectChange.bind(this)}>
						<option value="regular">Regular</option>
						<option value="bold">Bold</option>
					</select>
				</div>	
				<div>
					<label>Style (Select)</label>
					<select onChange={this.handleSelectChange.bind(this)}>
						<option value="normal">Normal</option>
						<option value="italic">Italic</option>
					</select>
				</div>	
				<div>
					<label>Letterspacing (Range)</label>
					<input 
						type="range"
						min="0" 
		          		max="100"
		          		value="0"
		          		onChange={this.handleSelectChange.bind(this)}
		          	/>
		        </div>
		        <div>  	
					<p>{value}</p>
					<p
						contenteditable='true' 
						style={
							{
								fontSize: this.state.value+'px', 
								fontFamily: 'times', 
								fontWeight: '600',
								fontStyle: 'italic',
								letterSpacing:'0px',
								lineHeight: '1em'
							}
						}
					>
					Edit Me
					</p>
				</div>
			</div>
		) 
	}
}

export default Tester