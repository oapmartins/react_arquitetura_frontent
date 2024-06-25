import './Header.css';
function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                    <li>
                        <a href="/">Descrição</a>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <img className='profileImage' src="https://livecoins.com.br/wp-content/uploads/2022/11/doge-768x433.jpg.webp" alt="" />

                <div>
                    <p className='profileName'>Octávio Martins</p>
                    <p className='profileText'>Sou desenvolvedor a 4 anos, sem medo de tentar, e constantemente buscando desafios que me façam evoluir na vida pessoal e como profissional. Estou cursando Pós Graduação em Arquitetura de Software Distribuído, meu objetivo é me tornar um profissional completo e poder auxiliar em todas as etapas do desenvolvimento. Atualmente, atuo como desenvolvedor mobile, utilizando tecnologias como Flutter, Node.js e Firebase.</p>
                </div>

            </div>

        </header>

    );
}

export default Header;
