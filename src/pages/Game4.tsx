import {Unity, useUnityContext} from "react-unity-webgl";

function Game4() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game4/Game4.loader.js",
        dataUrl: "/Game4/Game4.data",
        frameworkUrl: "/Game4/Game4.framework.js",
        codeUrl: "/Game4/Game4.wasm",
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


export default Game4