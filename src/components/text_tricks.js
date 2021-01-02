import React from 'react';
import {printChar} from "./char_eight_bitmap";

export {Textceptions};


export default class Textception extends React.Component {

    render() {
        var letter = this.props.letter;
        return (
            <div style={{fontFamily: "Courier New"}}>
                <table>
                <tbody>
                {this.props.array.map(function(arr, i) {
                    return <tr> 
                        {arr.map(function(elt, j) {
                            return <td>{elt ? letter: ' '}</td>;
                        })
                    }</tr>
                })
                }
                </tbody>
                </table>        
            </div>
        )
    }
}


class Textceptions extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {str1: props.str1, str2: props.str2};
    // }

    render() {
        var str1 = Array.from(this.props.str1);
        var str2 = Array.from(this.props.str2);
        return (
            <div style={{fontFamily: "Courier New"}}>
                <table>
                <tbody>
                <tr>
                {str1.map(function(char, i) {
                    return <td><Textception array={printChar(char)} letter={str2[i]} /></td>
                })
                }
                </tr>
                </tbody>
                </table>        
            </div>
        )
    }
}