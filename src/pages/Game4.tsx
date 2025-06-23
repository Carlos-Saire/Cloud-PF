import Games from "./Games";

class Game4 extends Games {
    constructor() {
        super({
            loaderUrl: "/Game4/Game4.loader.js",
            dataUrl: "/Game4/Game4.data",
            frameworkUrl: "/Game4/Game4.framework.js",
            codeUrl: "/Game4/Game4.wasm",
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

export default Game4; 