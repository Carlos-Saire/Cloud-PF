import {Unity, useUnityContext} from "react-unity-webgl";

function Game() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game1/Build.loader.js",
        dataUrl: "/Game1/Build.data",
        frameworkUrl: "/Game1/Build.framework.js",
        codeUrl: "/Game1/Build.wasm",
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


export default Game