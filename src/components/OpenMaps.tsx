import { Component, ReactNode, createElement } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { CustomStyle } from "../NativeOpenMapsApp";

import  open, { ShowOptions }  from 'react-native-open-maps';
import { EditableValue, DynamicValue, NativeImage } from "mendix";
import { Image } from "mendix/components/native/Image"
import { PlatformEnum } from "../../typings/NativeOpenMapsAppProps";

export interface OpenMapProps {
    name: string;
    style: CustomStyle[];
    query?: EditableValue<string>;
    lat?: EditableValue<string | BigJs.Big>;
    lng?: EditableValue<string | BigJs.Big>;
    provider: PlatformEnum;
    Icon?: DynamicValue<NativeImage>;
    IconHeight: number;
    IconWidth: number;
}


const defaultStyle: CustomStyle = {
    container: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flex: 1,
        marginTop: 5,
        marginBottom: 5
        
    },
    label: {
        color: 'black',
        textAlign: 'center',
        fontWeight: '600'
        
    }
};








export class OpenMaps extends Component<OpenMapProps> {
    private readonly styles = mergeNativeStyles(defaultStyle, this.props.style);
    
    

    openMap = () => {
        var openParameters:ShowOptions={};
        
        if (this.props.lat && this.props.lng) {
            openParameters["query"] = this.props.lat.displayValue + ',' + this.props.lng.displayValue
        }
        if(this.props.query) {
            openParameters["query"] = this.props.query.displayValue;
        }
        if (this.props.provider != "os"){
            openParameters["provider"] = this.props.provider
        }
        open(openParameters)
    


    }


    render(): ReactNode {
        return (
            <View style={this.styles.container}>
                <TouchableOpacity onPress={this.openMap}>
                    <Image source={this.props.Icon?.value} 
                           style={{height: this.props.IconHeight, 
                                   width: this.props.IconWidth, 
                                   alignSelf: 'center'}}/>
                    <Text style={this.styles.label}>{this.props.name}</Text>
                </TouchableOpacity>
           </View>
        );
    }
}
