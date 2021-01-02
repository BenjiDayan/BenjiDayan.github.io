import React from "react";
import { Link } from "gatsby"
import Clock from "../components/clock";
import Header from "../components/header";
import {Section} from "../components/header";
import {ClockSelectableTwo, ClockSelectable} from "../components/clock";
import Textception from "../components/text_tricks";
import {Textceptions} from "../components/text_tricks";
import disco_quokka from "./disco quokka.png";
import {printChar, printChars} from "../components/char_eight_bitmap";


export default function Random() {
    return (
        <div>
            <Header title="Random stuff" />

            <Section title="Some fun visualizations using imgaug">
                <img src={disco_quokka} width="300" height="300" alt="disco quokka" title="disco quokka"></img>
            </Section>
            
            {/* <h1>Some arrays</h1>
            <Textception array={printChar('a')} letter="a" />
            <Textceptions str1="cdef" str2="abcx" /> */}
            
            <Section title="Playing around with React">
                <h3>A normal clock</h3>
                <Clock />
                <h3>A clock with two timezones</h3>
                <ClockSelectableTwo /> 
            </Section>
        </div>
    )
}
//<Textceptions arrays={printChars('abc')} letters="abc" />

