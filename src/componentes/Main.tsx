import './Main.css'
function Main(){
    return(
        <main>
            <div className="estudante-box"> 
                <img className='estudante-foto' src= "https://github.com/layswim.png" alt=""/>
                <div className="informacoes">
                    <h3 className="estudante_nome">Lays Wimmer</h3>
                    <p className="estudante_descricao">Aluna Instituto Federal</p>
                    <a className='link-git' href="https://github.com/layswim">GitHub</a>
            
                </div>
            </div>
        </main>
    ) 
}

export default Main;