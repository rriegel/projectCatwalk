import React from 'react';
import { TiDelete } from 'react-icons/ti';
import axios from 'axios';

class YOCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemData: {},
      allStyles: [],
      stylePreview: '',
      averageStars: undefined
    }

    this.styles = {
      'backgroundColor': 'white',
      'margins': 'center',
      'width': '200px',
      'height': '300px',
      'cursor': 'pointer',
      'box-shadow': '0 6px 12px 0'
    };

    this.fetchData = this.fetchData.bind(this);
    this.renderStars = this.renderStars.bind(this);
  }

  fetchData() {
    // get product info
    axios.get(`/products/${this.props.item.id}`)
    .then(res => {

      this.setState({
        itemData: res.data
      })
    })
    .catch(err => {
      console.log('RP CARD DATA GET ERROR: ', err)
    })
    // get images
    axios.get(`/products/${this.props.item.id}/styles`)
    .then(res => {
        this.setState({
          allStyles: res.data.results,
          stylePreview: res.data.results[0].photos[0]['thumbnail_url']
        })
    })
    .catch((error) => {
      console.log('error in RPCARD /styles request, error:', error)
    })
    // get review stars
    axios.get(`/reviews/meta/${this.props.item.id}`)
    .then((response) => {
      var rateObj = response.data.ratings;
      var result = 0;
      var numRating = 0;
      for (var key in rateObj) {
        result = result + Number(key) * Number(rateObj[key]);
        numRating = numRating + Number(rateObj[key]);
      }
      var currRating;
      if (numRating === 0) {
        currRating = 'Not yet rated';
      } else {
        currRating = (result / numRating);
      }
      this.setState({
        averageStars: currRating
      })
    })
  }

  renderStars() {
    if (this.state.averageStars === "Not yet rated") {
      return (
        <span>
          {this.state.averageStars}
        </span>
      );
    } else {
      var numArray = [];
      var newNum = this.state.averageStars;
      for (var i = 1; i <= 5; i++) {
        if (newNum >= 1) {
          numArray.push(1);
        } else if (newNum < 1 && newNum > 0) {
          numArray.push(newNum);
        } else {
          numArray.push(0);
        }
        newNum--;
      }
      return (
        <span id="af-stars" style={{'align-self': 'center'}}>
          {numArray.map((num, index) => {
            if (num === 1 || num > 0.872) {
              return <div id="af-full-star" key={index}>1</div>
            } else if (num >= 0.63 && num <= 0.872) {
              return <div id="af-three-quarter-star" key={index}>0.75</div>
            } else if (num > 0.38 && num <= 0.62) {
              return <div id="af-half-star" key={index}>0.5</div>
            } else if (num >= 0.12 && num <= 0.38) {
              return <div id="af-quarter-star" key={index}>0.25</div>
            } else {
              return <div id="af-empty-star" key={index}>0</div>
            }
          })
          }
        </span>
      );
    }
  }
  // will render sale price if first display style is on sale
  renderPrice() {
    if (this.state.allStyles.length > 0) {
      if (this.state.allStyles[0].sale_price !== null) {
        return (
          <div>
            <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
              ${this.state.itemData.default_price}
            </span>
            <span style={{color: 'red'}}>
              SALE: ${this.state.allStyles[0].sale_price}
            </span>
          </div>
)
      } else {
        return (
          <div>
            <span >
              ${this.state.itemData.default_price}
            </span>
          </div>
        )
      }
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.item.id !== prevProps.item.id) { this.fetchData(); }
  }

  render() {

    return (
      <div className='rr-column-container' style={this.styles}>
        <div className='rr-action-button' onClick={e => { this.props.remove(this.state.itemData.id); }} > < TiDelete size={30}/> </div>
        <img className='rr-thumbnail' src={this.state.stylePreview} alt={'image: ' + `${this.state.itemData.name}`} onClick={ () => {
        return this.props.click(this.state.itemData) } }></img>
        <span>
          {this.state.itemData.category}
        </span>
        <h4 onClick={ () => {
        return this.props.click(this.state.itemData) } }>
          {this.state.itemData.name}
        </h4>

        { this.renderPrice() }

        { this.renderStars() }

      </div>
    )
  }
}

export default YOCard;