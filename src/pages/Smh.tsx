import { Header } from "../components/Header";
import { useState } from "react";
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

            <main>
                <div className="search-box">
                        <img src="/assets/search.svg" alt="search icon" />
                        <input type="text" placeholder="Search a special mission..." />
                    </div>
                <div className="content-smh">

                {Object.keys(smhUrlList).map((smh, url) => {
                    const [done, setDone] = useState(0);
                    const [lose, setLose] = useState(0);
                
                    function incrementDones() {
                        setDone(done+1);
                    }
                
                    function incrementLoses() {
                        setLose(lose+1);
                    }
                        return (
                            <div className="smh">
                                <img src={smhUrlList[smh]} alt={smh} />
                                <div className="smh-pop-up">
                                    <div>
                                        <span>Win: {done}</span>
                                        <button onClick={incrementDones}>+</button>
                                    </div>
                                    <div>
                                        <span>Lose: {lose}</span>
                                        <button onClick={incrementLoses}>+</button>
                                    </div>
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