import { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game4() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game4/Game4.loader.js",
        dataUrl: "/Game4/Game4.data",
        frameworkUrl: "/Game4/Game4.framework.js",
        codeUrl: "/Game4/Game4.wasm",
    });

    const [inputValue, setInputValue] = useState("");

    function handleFocus() {
        sendMessage("GameManager", "InputWep", "false");
    }

    function handleBlur() {
        sendMessage("GameManager", "InputWep", "true");
    }

    function handleSendInput() {
        sendMessage("GameManager", "GetInputFiel", inputValue);
        console.log("Hola desde unity");
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">React + Unity / Tecsup</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />

                <div className="centered-content">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="Escribe algo para Unity"
                    />
                    <button onClick={handleSendInput}>Enviar a Unity</button>
                </div>

                <div className="centered-content">
                    <button onClick={() => sendMessage("GameManager", "SpawnEnemies")}>
                        Reiniciar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Game4;
