import { Header } from "../components/Header";
import { ProfileCard } from "../components/ProfileCard";
import { Sidebar } from "../components/Sidebar";

import '../styles/profile.scss'

export function Profile() {
    return(
        <>
            <title>GLA Profile Manager</title>
			<header>
				<Header />
			</header>

            <main>
                <ProfileCard />
            </main>
        </>
    );
}