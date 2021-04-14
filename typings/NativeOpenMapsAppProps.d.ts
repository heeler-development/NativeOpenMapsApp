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
    Icon?: DynamicValue<NativeImage>;
    IconHeight: number;
    IconWidth: number;
    query?: EditableValue<string>;
    lat?: EditableValue<string | BigJs.Big>;
    lng?: EditableValue<string | BigJs.Big>;
    platform: PlatformEnum;
}

export interface NativeOpenMapsAppPreviewProps {
    class: string;
    style: string;
    caption: string;
    Icon: string;
    IconHeight: number | null;
    IconWidth: number | null;
    query: string;
    lat: string;
    lng: string;
    platform: PlatformEnum;
}
