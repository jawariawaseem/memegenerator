import React from 'react';

class Memegenerator extends React.Component{

	constructor(){
		super();
		this.state = {
			topText: "",
			bottomText:"",
			meme:"http://i.imgflip.com/1bij.jpg",
			allImageImgs:[]
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
		const {name,value} = e.target;
		this.setState({
			[name]:value
		});
	}
	handleSubmit(e){
		e.preventDefault();
		const randomElement = Math.floor(Math.random() * this.state.allImageImgs.length);
		const randomImage = this.state.allImageImgs[randomElement].url;
		this.setState({
			meme:randomImage
		});
	}
	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes")
		.then(response => response.json())
		.then(response => {
			const {memes} = response.data;
			this.setState({
				allImageImgs:memes
			});
		});
		
	}
	render(){
	return (
		<div>
			<form className="meme-form" onSubmit={this.handleSubmit}>
				 <input placeholder="Top Text" type="text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
				 <input placeholder="Bottom Text" type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
				 <button>Generate</button>
			</form>
			<div className="meme">
			<img src={this.state.meme} alt="meme"/>
			<h2 className="top">{this.state.topText}</h2>
			<h2 className="botton">{this.state.bottomText}</h2>
			</div>
		</div>
		);
	}
}

export default Memegenerator;