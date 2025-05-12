import {Unity, useUnityContext} from "react-unity-webgl";

function Game5() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game5/Game5.loader.js",
        dataUrl: "/Game5/Game5.data",
        frameworkUrl: "/Game5/Game5.framework.js",
        codeUrl: "/Game5/Game5.wasm",
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


export default Game5