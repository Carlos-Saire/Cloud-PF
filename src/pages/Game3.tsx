import { Unity, useUnityContext } from "react-unity-webgl";

function Game3() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game3/Game3.loader.js",
        dataUrl: "/Game3/Game3.data",
        frameworkUrl: "/Game3/Game3.framework.js",
        codeUrl: "/Game3/Game3.wasm",
    });

    // Función para deshabilitar la entrada de Unity
    function handleSceneReset() {
        
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

export default Game3;
