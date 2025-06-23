import Games from "./Games";

class Game3 extends Games {
    constructor() {
        super({
            loaderUrl: "/Game3/Game3.loader.js",
            dataUrl: "/Game3/Game3.data",
            frameworkUrl: "/Game3/Game3.framework.js",
            codeUrl: "/Game3/Game3.wasm",
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

export default Game3;