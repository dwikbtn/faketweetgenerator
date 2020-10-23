import React, { Component } from 'react'
import iconImg from 'assets/images/defaultProfile.png'
import DateTimePicker from 'react-datetime-picker';


import './index.scss'



export default class Form extends Component {
    state = {
        firstname: "",
        date: new Date(),
    };

    onChange = date => this.setState({ date })



    render() {
        const { date } = this.state;
        return (
            <form className="half-content">
                <div className="form-group">
                    <label className="label" htmlFor="name">Name goes here</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name Goes here"
                        id="name"
                    />
                </div>
                <p style={{ marginBottom: "5px", color: "#0F4C75" }}>Is user Verivied? </p>
                <div className="form-check form-check-inline">

                    <input className="form-check-input" type="radio" name="isVerivied" id="veriviedYes" value="true" />
                    <label className="form-check-label" htmlFor="verivied">yes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="isVerivied" id="veriviedNo" value="true" />
                    <label className="form-check-label" htmlFor="verivied">no</label>
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
                        <input type="text" className="form-control" placeholder="user name" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="body-tweet">Insert The Tweet</label>
                    <textarea className="form-control" name="body-tweet" id="body-tweet" style={{ height: "150px" }}></textarea>
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
                    onChange={this.onChange}
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
                    />
                </div>
                <div className="form-row tweet-count">
                    <div className="form-group col">
                        <input type="number" className="form-control" name="rt" id="rt" placeholder="RT" />
                    </div>
                    <div className="form-group col">
                        <input type="number" className="form-control" name="qrt" id="qrt" placeholder="QRT" />
                    </div>
                    <div className="form-group col">
                        <input type="number" className="form-control" name="like" id="like" placeholder="likes" />
                    </div>
                    <div className="form-group col">
                        <input type="number" className="form-control" name="reply" id="reply" placeholder="Replies" />
                    </div>

                </div>

            </form>
        )
    }
}
