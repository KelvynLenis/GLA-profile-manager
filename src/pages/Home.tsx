import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { CharacterCard } from "../components/CharacterCard";

import '../styles/home.scss';
import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { tierList } from "../utils/tierList";

export class Home extends React.Component {

	constructor(props:any){
		super(props)

		this.state = {
			list: [
				{
				}
			],
	
			newCharacter: {
				name: String,
				tier: Number
			}
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	addItem(){
	}

	handleSubmit(e){
		this.setState({
			list:[
				...this.state.list,
				{ name: this.state.newCharacter.name, tier:this.state.newCharacter.tier }
			]
			
		})

		e.preventDefault();
	}

	handleTextChange(e){
		this.setState({ newCharacter: e.target.value })
	}

	render() {
		return (
			<>
				<title>GLA Profile Manager</title>
				<header>
					<Header />
				</header>
		
				<aside>
					<Sidebar />
				</aside>
		
				<main>
				
					<div className="search-box">
						<img src="/assets/search.svg" alt="search icon" />
						<input type="text" placeholder="Search a character..." />
					</div>
	
					<div className="content-main">
		
						<CharacterCard 
							name="Luffy"
							tier="2"
						/>
	
						{this.state.list.map((item:any, index:any) => {
							// return <CharacterCard key={index} name={item.name} tier={item.tier} />
						})}
						
		
						<div className="add-char">
							<form onSubmit={this.handleSubmit}>
								<input value={this.state.newCharacter.name} onChange={this.handleTextChange} type="text" placeholder="Enter character name" />
								<input value={this.state.newCharacter.tier} onChange={this.handleTextChange} type="number" placeholder="Enter character tier" />
								<button type="submit">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
										<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
									</svg>
								</button>				
							</form>
						</div>
					</div>
		
				</main>
			</>
		)
	}
	
}