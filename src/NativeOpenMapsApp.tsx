import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { OpenMaps } from "./components/OpenMaps";
import { NativeOpenMapsAppProps } from "../typings/NativeOpenMapsAppProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export class NativeOpenMapsApp extends Component<NativeOpenMapsAppProps<CustomStyle>> {
    render(): ReactNode {
        return <OpenMaps name={this.props.caption} 
                        style={this.props.style}
                        lat={this.props.lat}
                        lng={this.props.lng}
                        query={this.props.query}
                        provider={this.props.platform}/>;
    }
}
