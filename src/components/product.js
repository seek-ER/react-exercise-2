import React, {Component} from 'react';

class Product extends Component{

    render() {
        console.log('Render product');
        return <span className={'product'}>
            <div>{this.props.name}</div>
            <img src="#" alt=""/>
            <span>{this.props.price}</span>
            <input type="button" className={'button'} value={'add to cart'} onClick={this.props.handleClick}/>
        </span>
    }
}

export default Product;