import Games from "./Games";

class Game5 extends Games {
    constructor() {
        super({
            loaderUrl: "/Game5/Game5.loader.js",
            dataUrl: "/Game5/Game5.data",
            frameworkUrl: "/Game5/Game5.framework.js",
            codeUrl: "/Game5/Game5.wasm",
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

export default Game5;