import React from 'react';

export default class Kid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false };
    }

    static getDerivedStateFromProps(props, state) {
        // const oldSteps = state.danceSteps
        // const newSteps = props.furtherSteps
        // const allSteps = oldSteps.concat.newSteps
        // return { danceSteps: allSteps }

        const danceSteps = [...state.danceSteps, ...props.furtherSteps]
        return {
            danceSteps: state.danceSteps.length < 5 ? danceSteps : state.danceSteps,
            startedPerforming: danceSteps.length >= 5 ? props.stars !== 4 ? true : false : false,
            emotion: props.emotion == null ? state.emotion : props.emotion
        }
    }

    componentDidMount() {
        // console.log('kid componentDidMount****')
        this.setState({ danceSteps: ['step1', 'step2'] })
    }

    componentWillUnmount() {
        console.log("unmouting kid.")
        this.props.availableJudge()
    }

    // qualified() {
    //     this.setState({ startedPerforming: false })
    // }

    render() {
        const { dressColor } = this.props;
        const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;
        console.log("startedPerforming ", startedPerforming)
        console.log(danceSteps)
        return (
            <div>
                <div>dressColor: {dressColor}</div>
                <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
                <div>Emotion: {emotion}</div>
                {startedPerforming &&
                    <div>
                        Current Step: {danceSteps[currentStepIndex]})
                        <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>
                            Perform Next Step
                        </button>
                    </div>}
                {!startedPerforming && <p>you have completed your task</p>}
            </div>
        )
    }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };