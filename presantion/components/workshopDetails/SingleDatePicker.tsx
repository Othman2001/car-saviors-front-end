import moment from "moment";
import React, { Component } from "react";
import { Calendar } from "react-native-calendars";

const XDate = require("xdate");

type Props = {
  initialRange: React.PropTypes.array.isRequired;
  onSuccess: React.PropTypes.func.isRequired;
  handleChange: React.PropTypes.func.isRequired;
};
export default class DateRangePicker extends Component<Props> {
  state = {
    isFromDatePicked: false,
    isToDatePicked: false,
    markedDates: {},
  };

  componentDidMount() {
    this.setupInitialRange();
  }

  onDayPress = (day) => {
    let markedDates = {
      [day.dateString]: {
        endingDate: true,
        startingDate: true,
        color: this.props.theme.markColor,
        textColor: this.props.theme.markTextColor,
      },
    };
    this.setState({
      markedDates,
      isFromDatePicked: true,
      isToDatePicked: true,
    });
    this.props.handleChange(day.dateString);
  };

  setupStartMarker = (day) => {
    let markedDates = {
      [day.dateString]: {
        endingDate: true,
        color: this.props.theme.markColor,
        textColor: this.props.theme.markTextColor,
      },
    };
    this.setState({
      isFromDatePicked: true,
      isToDatePicked: true,
      fromDate: day.dateString,
      markedDates: markedDates,
    });
  };

  setupMarkedDates = (fromDate, toDate, markedDates) => {
    let mFromDate = new XDate(fromDate);
    let mToDate = new XDate(toDate);
    let range = mFromDate.diffDays(mToDate);
    if (range >= 0) {
      if (range == 0) {
        markedDates = {
          [toDate]: {
            color: this.props.theme.markColor,
            textColor: this.props.theme.markTextColor,
          },
        };
      } else {
      }
    }
    return [markedDates, range];
  };

  setupInitialRange = () => {
    if (!this.props.initialRange) return;
    let [fromDate, toDate] = this.props.initialRange;
    let markedDates = {
      [fromDate]: {
        startingDay: true,
        color: this.props.theme.markColor,
        textColor: this.props.theme.markTextColor,
      },
    };
    let [mMarkedDates, range] = this.setupMarkedDates(
      fromDate,
      toDate,
      markedDates
    );
    this.setState({ markedDates: mMarkedDates, fromDate: fromDate });
  };

  render() {
    return (
      <Calendar
        {...this.props}
        markingType="period"
        current={this.state.fromDate}
        markedDates={this.state.markedDates}
        disableMonthChange={true}
        disableArrowRight={false}
        disableArrowLeft={true}
        hideExtraDays={true}
        minDate={moment.now()}
        onDayPress={(day) => {
          this.onDayPress(day);
        }}
        onDayLongPress={(day) => this.onDayPress(day)}
      />
    );
  }
}

DateRangePicker.defaultProps = {
  theme: { markColor: "#00adf5", markTextColor: "#ffffff" },
};
