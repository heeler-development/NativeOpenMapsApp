/**
 * This file was generated from NativeOpenMapsApp.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { DynamicValue, EditableValue, NativeImage } from "mendix";

export type PlatformEnum = "os" | "google" | "apple";

export interface NativeOpenMapsAppProps<Style> {
    name: string;
    style: Style[];
    caption: string;
    icon?: DynamicValue<NativeImage>;
    iconHeight: number;
    iconWidth: number;
    query?: EditableValue<string>;
    lat?: EditableValue<string | BigJs.Big>;
    lng?: EditableValue<string | BigJs.Big>;
    platform: PlatformEnum;
}

export interface NativeOpenMapsAppPreviewProps {
    class: string;
    style: string;
    caption: string;
    icon: string;
    iconHeight: number | null;
    iconWidth: number | null;
    query: string;
    lat: string;
    lng: string;
    platform: PlatformEnum;
}
