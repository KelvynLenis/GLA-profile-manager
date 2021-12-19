import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { smhUrlList } from '../utils/smhUrlList';

import '../styles/smh.scss';

export function Smh(){
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
                        <input type="text" placeholder="Search a special mission..." />
                    </div>
                <div className="content-smh">

                {Object.keys(smhUrlList).map((smh, url) => {
                        return (
                            <div className="smh">
                                <img src={smhUrlList[smh]} alt={smh} />
                                <div className="smh-pop-up">
                                    <span>Win: 0</span>
                                    <span>Lose: 0</span>
                                </div>
                            </div>
                        );
                    }
                )}
                </div>
            </main>
        </>
    );
}