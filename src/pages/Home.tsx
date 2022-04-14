import { Header } from "../components/Header";

import '../styles/home.scss';
import { Characters } from "../components/Characters";
import { ProfileCard } from "../components/ProfileCard";


export function Home(){
	
	return (
		<>
			<title>GLA Profile Manager</title>
			<header>
				<Header />
			</header>

			<ProfileCard />
	
			<Characters />
		</>
	)	
}