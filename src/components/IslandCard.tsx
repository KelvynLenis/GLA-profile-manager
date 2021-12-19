import { useState } from 'react';
import '../styles/island-card.scss';

type islandProps = {
    islandName: string;
    islandUrl: string;
    allChest: number;
}

export function IslandCard(props: islandProps) {
    const [chest, setChest] = useState(0);

    const allChest = props.allChest;

    function increment() {
        setChest(chest+1);
    }

    return (
        <div className="island-card">
            <img src={props.islandUrl} alt={props.islandName} />
            <span>{props.islandName}</span>
            <div className="chest">
                <img src="assets/ilhas/treasure-gold.png" alt="chest" />
                <span>{chest}/{allChest}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}