import React from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import { Component } from 'react'
import MainApp from 'parts/MainApp'


export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props} />
                <Hero {...this.props} />
                <MainApp {...this.props} />
            </>
        )
    }
}
