import React, { Component } from "react";
import './Main.css'
import ApiCalendar from "react-google-calendar-api";
let eventsCalendar;
class Events extends Component {
  constructor(props) {
    super(props);
    //this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    ApiCalendar.listUpcomingEvents().then(({ result }: any) => {
      //console.log(result.items);

      this.setState({
        events: result.items
      });
    });
  }
  render() {
      if(this.state.events.length >0){

          eventsCalendar = this.state.events.map(function(e) {
            var castCreateDate = new Date(e.created);
            var castStartDate = new Date(e.start.dateTime);
            var today = new Date();
            var nextMonth = new Date(today);
            nextMonth.setMonth(today.getMonth()+1);
           

            castCreateDate.setHours(0,0,0,0);
            castStartDate.setHours(0,0,0,0);
            var castCreateDateStr =
              castCreateDate.getFullYear() +
              "-" +
              (castCreateDate.getMonth() + 1) +
              "-" +
              castCreateDate.getDate();
            var castStartDateStr =
              castStartDate.getFullYear() +
              "-" +
              (castStartDate.getMonth() + 1) +
              "-" +
              castStartDate.getDate();

            
            if(nextMonth.getMonth() === castStartDate.getMonth()){
                
                return (
                  <div className="col-sm-6">
                    <div className="card marBottom">
                      <div className="card-body">
                        <h5 className="card-title">{e.summary}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Created:</h6>
                        <p className="card-text">{castCreateDateStr}</p>
                        <h6 className="card-subtitle mb-2 text-muted">Start:</h6>
                        <p className="card-text">{castStartDateStr}</p>
                        <a href={e.htmlLink} className="btn btn-primary" target="_blank">
                          Go event
                        </a>
                      </div>
                    </div>
                  </div>
                );
            }else{
                
                eventsCalendar = <h3 className="txt-white">There are no events in the calendar</h3>
            }

           
            
          });
      }else{
       
        eventsCalendar = <h3 className="txt-white">There are no events in the calendar</h3>
      }
    return (
      <div>
        <div className="row">{eventsCalendar}</div>
      </div>
    );
  }
}
export default Events;
