import React from "react"
import moment from "moment"

class YearsSince extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      startDate: new Date(props.startDate),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
      startDate: this.state.startDate,
    })
  }

  render() {
    return (
      <span>
        {moment().diff(this.state.startDate, "years", false)}
      </span>
    )
  }
}

export default YearsSince
