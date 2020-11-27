import React, { Component } from 'react'
import iconImg from 'assets/images/defaultProfile.png'
import DateTimePicker from 'react-datetime-picker';
import TweetBody from '../../parts/TweetBody'


import './index.scss'



export default class Form extends Component {
    state = {
        name: "username",
        isVerivied: "",
        handle: "name",
        bodyTweet: "Hello internet",
        date: new Date(),
        from: "Iphone",
        rt: "",
        qrt: "",
        likes: "",
        reply: ""
    };

    onChangeDate = (date) => {
        this.setState({ date })
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    onChangeHandle = (event) => {
        this.setState({ handle: event.target.value })

    }

    onChangeBodyTweet = (event) => {
        this.setState({ bodyTweet: event.target.value })
    }

    onChangeFrom = (event) => {
        this.setState({ from: event.target.value })
    }

    onChangeRT = (event) => {
        this.setState({ rt: event.target.value })
    }

    onChangeQRT = (event) => {
        this.setState({ qrt: event.target.value })
    }

    onChangeLikes = (event) => {
        this.setState({ likes: event.target.value })
    }

    onChangeReply = (event) => {
        this.setState({ reply: event.target.value })
    }
    handleChange = (event) => {
        this.setState({ isVerivied: event.target.value })
    };
    render() {
        const { date, name, handle, bodyTweet, from, rt, qrt, likes, reply } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <form className="col-sm half-content">
                        <div className="form-group">
                            <label className="label" htmlFor="name">Name goes here</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name Goes here"
                                id="name"
                                value={name}
                                onChange={this.onChangeName}

                            />
                        </div>
                        <p style={{ marginBottom: "5px", color: "#0F4C75" }}>Is user Verivied? </p>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio"
                                id="veriviedTrue" value={true} checked={this.state.isVerivied === "true"} onChange={this.handleChange}
                            />
                            <label className="form-check-label" htmlFor="veriviedTrue">yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="veriviedFalse"
                                value={false} checked={this.state.isVerivied === "false"} onChange={this.handleChange}
                            />
                            <label className="form-check-label" htmlFor="veriviedFalse">no</label>
                        </div>
                        <div className="form-group">
                            <img src={iconImg} alt="icon" style={{ width: "80px", height: "60px", marginBottom: "5px", marginTop: "10px" }} />
                            <input type="file" id="formControl" className="form-control-file" style={{ marginBottom: "20px" }} />
                        </div>
                        <div className="form-row">
                            <div className="col-2">
                                <input type="text" className="form-control" placeholder="@" value="@" style={{ textAlign: "center" }} disabled />
                            </div>
                            <div className="col-7">
                                <input type="text" className="form-control" placeholder="handle" id="handle" name="handle"
                                    value={handle}
                                    onChange={this.onChangeHandle} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="body-tweet">Insert The Tweet</label>
                            <textarea className="form-control" name="body-tweet" id="body-tweet" value={bodyTweet}
                                onChange={this.onChangeBodyTweet} style={{ height: "150px" }}
                            ></textarea>
                        </div>
                        <label htmlFor="date" style={{ color: "#0F4C75" }}>Pick a Date and time....</label> <br />
                        <DateTimePicker
                            id="date"
                            amPmAriaLabel="Select AM/PM"
                            calendarAriaLabel="Toggle calendar"
                            clearAriaLabel="Clear value"
                            dayAriaLabel="Day"
                            hourAriaLabel="Hour"
                            maxDetail="minute"
                            minuteAriaLabel="Minute"
                            monthAriaLabel="Month"
                            nativeInputAriaLabel="Date and time"
                            onChange={this.onChangeDate}
                            secondAriaLabel="Second"
                            value={date}
                            yearAriaLabel="Year"
                        />
                        <div className="form-group" style={{ marginTop: "20px" }}>
                            <label htmlFor="tweet-from">Twitter from?...</label>
                            <input
                                type="text"
                                className="form-control"
                                name="tweet-from"
                                placeholder="Iphone"
                                id="tweet-from"
                                value={from}
                                onChange={this.onChangeFrom}
                            />
                        </div>
                        <div className="form-row tweet-count">
                            <div className="form-group col">
                                <input type="number" className="form-control" name="rt" id="rt" placeholder="RT"
                                    value={rt}
                                    onChange={this.onChangeRT} />
                            </div>
                            <div className="form-group col">
                                <input type="number" className="form-control" name="qrt" id="qrt" placeholder="QRT"
                                    value={qrt}
                                    onChange={this.onChangeQRT} />
                            </div>
                            <div className="form-group col">
                                <input type="number" className="form-control" name="like" id="like" placeholder="likes"
                                    value={likes}
                                    onChange={this.onChangeLikes} />
                            </div>
                            <div className="form-group col">
                                <input type="number" className="form-control" name="reply" id="reply" placeholder="Replies"
                                    value={reply}
                                    onChange={this.onChangeReply} />
                            </div>

                        </div>
                    </form>
                    <div className="col-sm ">
                        <TweetBody
                            name={name}
                            username={handle}
                            body={bodyTweet}
                            from={from}
                            rt={rt}
                            qrt={qrt}
                            likes={likes}
                            reply={reply}
                        />

                    </div>
                </div>
            </div>

        )
    }
}
