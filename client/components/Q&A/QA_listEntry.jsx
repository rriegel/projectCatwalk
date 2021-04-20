import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';

class QA_listEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 2,
      answers: Object.values(this.props.item.answers),
      counter: 0
    }
    this.lmaClick = this.lmaClick.bind(this);
    this.helpfulQClick = this.helpfulQClick.bind(this);
    this.helpfulAClick = this.helpfulAClick.bind(this);
    this.onReportClick = this.onReportClick.bind(this);
  }


  lmaClick(e) {

    if (this.state.counter % 2 === 0) {
      this.setState({
        limit: 10
      })
      e.target.innerText = 'Collapse Answers';
      this.state.counter++;
    } else {
      this.setState({
        limit: 2
      })
      e.target.innerText = 'Load More Answers';
      this.state.counter++;
    }
  }

  helpfulQClick(e) {
    var question_id = this.props.item.question_id;
    axios.put(`/questionshelpful/${question_id}`)
    .then((response) => {
      console.log('helpful Q put request successful')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  helpfulAClick(id) {
    var answer_id = id;
    axios.put(`/answerhelpful/${answer_id}`)
    .then((response) => {
      console.log('helpful A put request successful')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  onReportClick(id) {
    var answer_id = id;
    axios.put(`/answerreport/${answer_id}`)
    .then((response) => {
      console.log('Answer has been reported')
    })
    .catch((error) => {
      console.log(error)
    })
  }


  render() {
    if (this.state.answers.length > 2) {
      return (
        <div>
        <p className="questionBody">Q: {this.props.item.question_body}<span className="tv_anc"> Helpful? </span><span className="tv_anc tv_underline" onClick={this.helpfulQClick}>Yes</span><span className="tv_anc"> {this.props.item.question_helpfulness} </span><span className="tv_anc"> | </span><span className="tv_anc tv_underline">Add Answer</span></p>
        <div>{this.state.answers.slice(this.state.offset, this.state.limit).map(answer =>
          <div><p>A: {answer.body}</p> <span className="lma">by {answer.answerer_name}, {moment(answer.date).format('MMM Do YYYY')}  | Helpful? </span><span className="tv_underline" onClick={e => this.helpfulAClick(answer.id)}>Yes</span><span> {answer.helpfulness} </span><span> | </span><span className="tv_underline" onClick={(e) => {this.onReportClick(answer.id); e.target.innerText = 'Reported'}}>Report</span></div>
          )}</div>
        <div className="lma lmalink" onClick={this.lmaClick}>Load More Answers</div>
        </div>
      )
    } else {
      return (
        <div>
        <p className="questionBody">Q: {this.props.item.question_body}<span className="tv_anc"> Helpful? </span><span className="tv_anc tv_underline" onClick={this.helpfulQClick}>Yes</span><span className="tv_anc"> {this.props.item.question_helpfulness} </span><span className="tv_anc"> | </span><span className="tv_anc tv_underline">Add Answer</span></p>
        <div>{this.state.answers.map(answer =>
          <div><p>A: {answer.body}</p> <span className="lma">by {answer.answerer_name}, {moment(answer.date).format('MMM Do YYYY')}  | Helpful? </span><span className="tv_underline" onClick={e => this.helpfulAClick(answer.id)}>Yes</span><span> {answer.helpfulness} </span><span> | </span><span className="tv_underline" onClick={(e) => {this.onReportClick(answer.id); e.target.innerText = 'Reported'}}>Report</span></div>
          )}</div>
        </div>
      )
    }
  }
}

export default QA_listEntry;