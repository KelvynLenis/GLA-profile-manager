import '../styles/character-card.scss';
import { avatarUrlList } from '../utils/avatarUrlList';
import { charClass } from '../utils/classUrlList';
import { tierList } from '../utils/tierList';
import { RatingStar } from './RatingStar';

type characterProps = {
    name: string;
    tier: string;
}

export function CharacterCard(props:characterProps) {
    const tier = props.tier;

    // function handleCursos() {
    //     var tooltip = document.querySelectorAll('.coupontooltip');

    //     document.addEventListener('mousemove', fn, false);

    //     function fn(event:EventListener) {
    //         for (var i=tooltip.length; i--;) {
    //             tooltip[i].style.left = event.pageX + 'px';
    //             tooltip[i].style.top = event.pageY + 'px';
    //         }
    //     }
    // }

    return (
        <div className="char-card">
            <div>
                { tier.includes("1") && <span className='tier1'>Tier {props.tier}</span>}
                { tier.includes("2") && <span className='tier2'>Tier {props.tier}</span>}
                { tier.includes("3") && <span className='tier3'>Tier {props.tier}</span>}
                { tier.includes("4") && <span className='tier4'>Tier {props.tier}</span>}
                <button className='delete'>X</button>
            </div>
            
            <span>{props.name}</span>
            <div className="info">
                <img src={avatarUrlList[props.name]} alt={`${props.name}`}/>
                <div className="info-pop-up">
                    { tier.includes("1") && <span ><RatingStar color="#45B9DE" /></span>}
                    { tier.includes("2") && <span ><RatingStar color="#E7C12D" /></span>}
                    { tier.includes("3") && <span ><RatingStar color="#979797" /></span>}
                    { tier.includes("4") && <span ><RatingStar color="#B19152" /></span>}
                    <span>0/40</span>
                </div>

                <div className="classes">
                    {charClass[props.name].map(classe => {
                        return (
                            <img src={classe} alt={`classes`} />
                        );
                    })}
                </div>

                {/* <img src={classUrlList[props.class]} alt={`${props.class}`} /> */}
            </div>

            { tier.includes("1") && <button style={{background: '#45B9DE'}}>Detalhes</button>}
            { tier.includes("2") && <button style={{background: '#E7C12D'}}>Detalhes</button>}
            { tier.includes("3") && <button style={{background: '#979797'}}>Detalhes</button>}
            { tier.includes("4") && <button>Detalhes</button>}
        </div>
    );
}