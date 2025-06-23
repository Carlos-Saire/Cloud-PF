import Games from "./Games";

class Game extends Games {
    constructor() {
        super({
            loaderUrl: "/Game/Game.loader.js",
            dataUrl: "/Game/Game.data",
            frameworkUrl: "/Game/Game.framework.js",
            codeUrl: "/Game/Game.wasm",
            stylegame: "centered-unity",
        });
        this.handleSceneReset = this.handleSceneReset.bind(this);
    }

    handleSceneReset() {
        console.log(localStorage.getItem('username'));
    }
    
    render() {
        return (
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    {super.render()}
                    <div className="centered-content">
                        <button onClick={this.handleSceneReset}>Reiniciar</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Game;