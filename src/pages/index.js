import React from "react"
import { Link } from "gatsby"
import Header from "../components/header";
import {Section} from "../components/header";
import bbb from "./big_bang_blaster_image_cropped.png"

export default function Home() {
    return (
        <div>
            <Header title="Benjamin Dayan" />

            <Link to="/about/"><h2>About Me</h2></Link>

            <Section title="Various Links">
                <Link to="https://github.com/Ziggareto">Github</Link>
                <br></br>
                <Link to="https://www.linkedin.com/in/benjamin-d-633502115/">LinkedIn</Link>
            </Section>

            <Section title="Other Projects">
                <p>Worked in a Berkeley Game Design Decal team to make Big Bang Blaster - shoutout to my teammates and mentor.</p>
                <a href="https://kevponce4.itch.io/big-bang-blaster"><img src={bbb} width="150" height="150" alt="Big Bang Blaster Game"></img></a>
            </Section>
            <Link to="/random/"><h2>Random other stuff</h2></Link>
        </div>
    
    )
}
