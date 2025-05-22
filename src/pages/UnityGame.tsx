import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect } from "react";

const UnityGame = ({ 
    loaderUrl, 
    dataUrl, 
    frameworkUrl, 
    codeUrl, 
    className, 
    onUnityReady,
    onUnityReception 
}: {
    loaderUrl: string;
    dataUrl: string;
    frameworkUrl: string;
    codeUrl: string;
    className: string;
    onUnityReady: (sendMessage: any) => void;
    onUnityReception: (message: string) => void;
}) => {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl,
        dataUrl,
        frameworkUrl,
        codeUrl,
    });

    useEffect(() => {
        onUnityReady(sendMessage);

        (window as any).ReceiveUnityMessage = (message: string) => {
            onUnityReception(message);
        };

        return () => {
            delete (window as any).ReceiveUnityMessage;
        };
    }, [sendMessage]);

    return <Unity unityProvider={unityProvider} className={className} />;
};

export default UnityGame;