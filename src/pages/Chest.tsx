import { Header } from "../components/Header";
import { IslandCard } from "../components/IslandCard";
import { Sidebar } from "../components/Sidebar";
import { islandUrlList } from "../utils/islandUrlList";

import '../styles/chest.scss'

export function Chest(){
    return(
        <>
            <title>GLA Profile Manager</title>
			<header>
				<Header />
			</header>

			<Sidebar />

            <main className="main">
                <div className="search-box">
                        <img src="/assets/search.svg" alt="search icon" />
                        <input type="text" placeholder="Search a island..." />
                    </div>
                <div className="content-chest">

                {Object.entries(islandUrlList).map(([island, url]) => {

                    Object.assign
                        return (
                            <>
                            <IslandCard 
                            islandName={island}
                            islandUrl={url}
                            allChest={10}
                            />
                            </>
                        );
                    }
                )}
                </div>
            </main>
        </>
    );
}