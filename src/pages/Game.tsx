import {Unity, useUnityContext} from "react-unity-webgl";

function Game() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game/Game.loader.js",
        dataUrl: "/Game/Game.data",
        frameworkUrl: "/Game/Game.framework.js",
        codeUrl: "/Game/Game.wasm",
    });

    function handleSceneReset() {
        sendMessage("LoadScena", "ReloadScene");
    }

    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <button onClick={handleSceneReset}>Reinicar</button>
                    </div>

                </div>
            </div>

        </>
    );
}


export default Game