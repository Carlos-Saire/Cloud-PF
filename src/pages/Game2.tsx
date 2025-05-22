import Games from "./Games";

class Game2 extends Games {
    constructor() {
        super({
            loaderUrl: "/Game2/Game2.loader.js",
            dataUrl: "/Game2/Game2.data",
            frameworkUrl: "/Game2/Game2.framework.js",
            codeUrl: "/Game2/Game2.wasm",
            stylegame: "centered-unity",
        });
    }

    render() {
        return (
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    {super.render()}

                </div>
            </div>
        );
    }
}

export default Game2;