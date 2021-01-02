import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import "../styles/global.css"
import benji from "./benji_profile_pic.jpg"
import { View, Text } from "react-native";

export default function About() {
    return (
        <div>
            <Header title="About Me" />
            <View style={{flex: "0 1", flexDirection: 'row', justifyContent: "space-between"}}>
                <View style={{flexShrink: 1, marginRight: '10px'}}>
                    <p>Hi I'm Benji! I'm from London, and currently based there. I graduated from 3 years of cambridge maths
                     in June 2020, and have since been working as a product and research engineer at a small computer vision
                     ML startup.
                    </p>
                    <p>I speak some mandarin. I like badminton and tennis, math coding and much more.</p>

                    <p>I'm not very good at frontend but wanted to have a go at making a personal website. This is made with
                     react and gatsby.</p>
                </View>
                <View>
                    <img src={benji} width="300px" alt="Benjamin Dayan" title="Benjamin Dayan"></img>
                </View>
            </View>
        </div>
    )
}