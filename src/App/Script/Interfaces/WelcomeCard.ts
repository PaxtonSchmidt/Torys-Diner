import { JsxChild } from "typescript";

export interface WelcomeCardProps{
    header: string;
    subHeader: string;
    button?: JSX.Element;
    src: string;
}