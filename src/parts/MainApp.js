import React from 'react'
import Form from 'elements/forms'

export default function mainApp() {
    return (
        <div className="container">
            <h2 className="main"> <span className="underline">Fill The Form Bellow</span></h2>
            <div className="row">
                <div className="col-auto">
                    <Form />
                </div>
                <div className="col-auto">
                </div>
            </div>
        </div>


    )
}
