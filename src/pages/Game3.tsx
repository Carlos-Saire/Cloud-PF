import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game3() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game3/Game3.loader.js",
        dataUrl: "/Game3/Game3.data",
        frameworkUrl: "/Game3/Game3.framework.js",
        codeUrl: "/Game3/Game3.wasm",
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

  useEffect(() => {
    console.log("Registrando evento stopMusic");

    function handleStopMusic() {
        console.log("Se cerró el juego");
        if (unityProvider) {
            sendMessage("GameManager", "QuitGame");
            console.log("Mensaje enviado a Unity");
        } else {
            console.log("Unity aún no está listo para recibir mensajes.");
        }
    }

    window.addEventListener("stopMusic", handleStopMusic);

    return () => {
        console.log("Eliminando evento stopMusic");
        if (unityProvider) {
            sendMessage("GameManager", "QuitGame");
            console.log("Mensaje enviado en la eliminación del evento.");
        } else {
            console.log("Unity ya no está disponible en la eliminación del evento.");
        }
        window.removeEventListener("stopMusic", handleStopMusic);
    };
}, [unityProvider]);


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

export default Game3;