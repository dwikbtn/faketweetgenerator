import React from 'react'
import HeroImage from 'assets/images/hero.png'


export default function hero() {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-auto" style={{ width: 560 }}>
                    <div className="hero pb-3">
                        <h2 >Make your Own Fake Tweet, Share It to Your Friends</h2>
                        <p>Make Whatever Tweet You want, The only limit is your <br />Self. Remember do it by <span>your Own Risk.
                        We doesn’t <br /> take responsibility by
                        Your action.</span></p>
                    </div>
                    <button type="button" className="btn btn-primary">Fake It Now</button>
                </div>
                <div className="col-auto" >
                    <img className="heroimg" src={HeroImage} alt="hero" />
                </div>
            </div>
        </div>
    )
}
