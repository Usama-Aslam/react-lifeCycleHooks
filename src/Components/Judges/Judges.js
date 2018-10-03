import React from 'react'
export default class Judge extends React.Component {
    constructor(props) {
        super()
        this.state = { stars: 0, available: false }
        this.applaud = this.applaud.bind(this)
        this.provideStars = this.provideStars.bind(this)
    }

    applaud() {
        //Send this applaud status to Kid.js
        this.props.applauds()
    }

    async provideStars() {
        const { stars } = this.state;
        if (stars < 5) {
            await this.setState({ stars: stars + 1 })
            this.props.setStars(stars)
        }
        console.log(stars)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.stars > 5)
            return false
        return true
    }

    componentWillUnmount() {
        console.log("unmount judge")
    }

    render() {
        const { stars, available } = this.state;

        return (
            <div>
                <button type="button" onClick={this.applaud}>
                    Appreciate performance
       </button>
                <button type="button" onClick={this.provideStars}>
                    Provide stars
       </button>

                Kid is available: {available}

                Stars gained: {stars}
            </div>
        );
    }
}
