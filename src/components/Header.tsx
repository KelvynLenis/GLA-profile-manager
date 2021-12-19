import '../styles/header.scss';

export function Header() {
    return(
        <>
            <div className="header">
                <div className="leftside">
                    <img src="/assets/sunny.png" alt="sunny logo" />
                    <span>GLA Profile Manager</span>
                </div>

                <div className="rightside">
                    <a href="https://wiki.gla.com.br/" target="_blank">
                        <img src="/assets/logo.png" alt="gla logo" />
                    </a>

                    <a href="https://grandlineadventures.com/en/" target="_blank">
                        <button>Play Now</button>
                    </a>
                </div>
            </div>
            <div className="line"></div>
        </>
    );
}