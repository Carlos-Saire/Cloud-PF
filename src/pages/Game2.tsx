import {Unity, useUnityContext} from "react-unity-webgl";

function Game2() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game2/Game2.loader.js",
        dataUrl: "/Game2/Game2.data",
        frameworkUrl: "/Game2/Game2.framework.js",
        codeUrl: "/Game2/Game2.wasm",
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
                        <button onClick={handleSceneReset}>Spawn Enemies</button>
                    </div>

                </div>
            </div>

        </>
    );
}


export default Game2