import React from "react";
import "../../css/landingPage.css";
import Button from "./Button";

export default function LandingPage() {
    return (
        <div id="landingPage">
            <div className="sectionText">
                <h1>Online Selbsthilfegruppen</h1>
                <p>
                    Tausche Dich mit anderen Betroffenen aus oder starte eine
                    neue Gruppe. Unabhängig von deinem Wohnort und passend zu
                    deiner Lebenssituation.
                </p>
                <Button
                    txt="Jetzt starten"
                    bgColor="#A64D79"
                    txtColor="#FCFCFC"
                />
            </div>
            <div className="sectionImg">
                <img src="img_resources/1.png" />
                <img src="img_resources/2.png" />
                <img src="img_resources/3.png" />
                <img src="img_resources/4.png" />
            </div>
        </div>
    );
}
