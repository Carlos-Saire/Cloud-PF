import React from "react";
import UnityGame from "./UnityGame";

class Games extends React.Component<any> {
    private loaderUrl: string;
    private dataUrl: string;
    private frameworkUrl: string;
    private codeUrl: string;
    private stylegame: string;
    protected unitySendMessage: any;

    constructor(props: any) {
        super(props);
        this.loaderUrl = props.loaderUrl;
        this.dataUrl = props.dataUrl;
        this.frameworkUrl = props.frameworkUrl;
        this.codeUrl = props.codeUrl;
        this.stylegame = props.stylegame;
        this.handleUnityReady = this.handleUnityReady.bind(this);
        this.handleUnityMessage = this.handleUnityMessage.bind(this);
    }

   render() {
        return (
            <UnityGame
                loaderUrl={this.loaderUrl}
                dataUrl={this.dataUrl}
                frameworkUrl={this.frameworkUrl}
                codeUrl={this.codeUrl}
                className={this.stylegame}
                onUnityReady={this.handleUnityReady}
                onUnityReception={this.handleUnityMessage}
            />
        );
    }

    private handleUnityReady(sendMessage: any) {
        this.unitySendMessage = sendMessage;
    }
    protected handleUnityMessage(message: string) {
        console.log("Mensaje recibido desde Unity:", message);
        this.setState({ unityMessage: message });
        console.log(localStorage.getItem('username'));
    }
    componentWillUnmount() {
        this.DestroyGame();
        console.log("Se elimino el juego");
    }
    private DestroyGame(){
        this.unitySendMessage("ConnectionReact", "QuitGame");
    }

}
export default Games;