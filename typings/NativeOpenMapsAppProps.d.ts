/**
 * This file was generated from NativeOpenMapsApp.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { EditableValue } from "mendix";

export type PlatformEnum = "os" | "google" | "apple";

export interface NativeOpenMapsAppProps<Style> {
    name: string;
    style: Style[];
    caption: string;
    query?: EditableValue<string>;
    lat?: EditableValue<string | BigJs.Big>;
    lng?: EditableValue<string | BigJs.Big>;
    platform: PlatformEnum;
}

export interface NativeOpenMapsAppPreviewProps {
    class: string;
    style: string;
    caption: string;
    query: string;
    lat: string;
    lng: string;
    platform: PlatformEnum;
}
