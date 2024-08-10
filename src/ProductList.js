import React from 'react';
import ajay from './assets/nature.jpeg';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.handleVoteChild = this.handleVoteChild.bind(this);
  }
  
  handleVoteChild(event) {
    this.props.handleVoteParent()
  }

  render() {
    // Access props directly in render method
    const { id, title, description, url, product_image, vote } = this.props;

    return (
      <div className='item'>
        <hr />
        
        <div className='image'>
          <h1>{id}</h1>
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <a>{title}</a>
            <p>{description}</p>
          </div>

          <div className='extra'>
            <span>Submitted by:</span>
            <a href={url}>
              <img src={product_image} alt={title} />
            </a>
          </div>
          <div>
            <h1>Vote is {vote}</h1>
          </div>
          <div>
            <button onClick={this.handleVoteChild}>Up Vote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
