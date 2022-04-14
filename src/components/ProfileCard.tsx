import '../styles/profile-card.scss'

export function ProfileCard() {
    return(
        <>
            <div className="profile">
                <div className="left">
                    <div className="outer-border">
                        <div className="inner-border">
                            <img src="https://i.pinimg.com/originals/b2/ef/44/b2ef44389be779bae4926207c2cba632.jpg" alt="zoro" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <span>Nível da tripulação 0</span>
                    <span>Estrelas da tripulação 0</span>
                    <span>Nível do navio 0</span>
                    <span>Personagens 0</span>
                    <span>Conquistas 0</span>
                    <span>Torneios Vencidos 0</span>
                    <span>Vitórias oficiais 0</span>
                    <span>Ícones de perfil 0</span>
                </div>
            </div>
        </>
    );
}