import React from "react"
import { Link } from "gatsby"
import { View, Text } from "react-native";

export {Section};

export default function Header(props) {
    return (
    <View style={{backgroundColor: 'rebeccapurple', flex: 1, flexDirection: 'row',
    justifyContent: 'space-between', paddingLeft: '10px', paddingRight: '10px'}}>
        <div >
            <h1 style={{color: 'white'}}>{props.title}</h1>
        </div>
        <div >
            <Link to="/"><h1 style={{color: 'white'}}>Home</h1></Link>
        </div>
    </View>
    )
}

function Section(props) {
    return (
        <View>
            <h2>{props.title}</h2>
            <div style={{paddingLeft: '20px'}}>
                {props.children}
            </div>
        </View>
    )
}

