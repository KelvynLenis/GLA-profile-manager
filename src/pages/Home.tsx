import { Header } from "../components/Header";
import { Dropdown } from 'reactjs-dropdown-component';

import '../styles/home.scss';
import { Characters } from "../components/Characters";


export function Home(){
	
	return (
		<>
			<title>GLA Profile Manager</title>
			<header>
				<Header />
			</header>
	
			<Characters />
		</>
	)	
}