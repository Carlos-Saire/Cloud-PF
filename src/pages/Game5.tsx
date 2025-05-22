import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

declare global {
    interface Window {
        receiveMessageFromUnity: (message: string) => void;
    }
}

function Game5() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game5/Game5.loader.js",
        dataUrl: "/Game5/Game5.data",
        frameworkUrl: "/Game5/Game5.framework.js",
        codeUrl: "/Game5/Game5.wasm",
    });

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        window.receiveMessageFromUnity = function (message) {
            console.log("Mensaje recibido de Unity:", message);
        };
    }, []);

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

export default Game5;