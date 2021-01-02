import React from 'react';
import {Textceptions} from "./text_tricks";

export {TimeZoneSelector, ClockSelectable, ClockSelectableTwo};


export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), two: props.two};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnomount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        console.log(this);
    }

    render() {
        const two = this.state.two;
        return (
            <div>
                {two ? <Textceptions str1={this.state.date.toLocaleTimeString()} str2={this.state.date.toLocaleTimeString()} /> : <h2 style={{fontFamily: "Roboto Mono", color: "black"}}>{this.state.date.toLocaleTimeString()}</h2>}
            </div>
            )
    }
}

class TimeZoneSelector extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            gmt_offset: 0
        }
        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitOffset = this.submitOffset.bind(this);
    }
    submitOffset(event) {
        event.preventDefault();
        const { gmt_offset } = this.state;
        const { onSubmit } = this.props
        onSubmit(gmt_offset);
    }
    inputUpdated(event) {
        this.setState({ gmt_offset: event.target.value });
    }
    render() {
        return (
            <form onSubmit={this.submitOffset}>
                <h3>{this.props.title ? this.props.title : "Time Zone Selector"}</h3>
                <label htmlFor="gmt offset">GMT offset in hours </label>
                <input name="gmt_offset" type="number" step="any" value={this.state.gmt_offset} onInput={this.inputUpdated} />
                <button type="submit" className='btn btn-success'>Set Offset</button>
            </form>
        )
    }
}

 class ClockSelectable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), gmt_offset: 0};
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnomount() {
        clearInterval(this.timerID);
    }

    createDateAsUTC(date) {
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    }

    tick() {
        var new_date = new Date();
        console.log("new_date: ", new_date);
        new_date = new_date.getTime() + this.state.gmt_offset * 1000*60*60;
        console.log("new_date: ", new_date);
        this.setState({
            date: new Date(new_date)
        });
        console.log(this);
    }

    onFormSubmit(gmt_offset) {
        this.setState({ gmt_offset: gmt_offset});
    }

    render() {
        return (
            <div>
                <TimeZoneSelector onSubmit={this.onFormSubmit} />
                <h2 style={{color: 'black'}}>{this.state.date.toLocaleTimeString()}</h2>  
            </div>
        )
    }
}

class ClockSelectableTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date1: new Date(), date2: new Date(), gmt_offset1: 0, gmt_offset2: 0};
        this.onFormSubmit1 = this.onFormSubmit1.bind(this);
        this.onFormSubmit2 = this.onFormSubmit2.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnomount() {
        clearInterval(this.timerID);
    }

    createDateAsUTC(date) {
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    }

    tick() {
        let new_date = new Date();
        let new_date1 = new_date.getTime() - new_date.getTimezoneOffset() * 1000*60 + this.state.gmt_offset1 * 1000*60*60;
        let new_date2 = new_date.getTime() - new_date.getTimezoneOffset() * 1000*60 + this.state.gmt_offset2 * 1000*60*60;
        this.setState({
            date1: new Date(new_date1),
            date2: new Date(new_date2)
        });
    }

    onFormSubmit1(gmt_offset) {
        this.setState({ gmt_offset1: gmt_offset});
    }
    onFormSubmit2(gmt_offset) {
        this.setState({ gmt_offset2: gmt_offset});
    }

    render() {
        return (
            <div>
                <TimeZoneSelector title="First timezone" onSubmit={this.onFormSubmit1} />
                <TimeZoneSelector title="Second timezone" onSubmit={this.onFormSubmit2} />
                <Textceptions str1={this.state.date1.toLocaleTimeString()} str2={this.state.date2.toLocaleTimeString()} />
            </div>
        )
    }
}