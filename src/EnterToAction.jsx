import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/EnterToAction.css";

export function EnterToAction({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}
