import React, {Component} from 'react';
import Product from "./product";

class Products extends Component{
    constructor(props) {
        super(props);
        console.log('products.init')
    }

    render() {
        console.log('Render products');
        return <div>
            <h4 className={'category'}>{this.props.category}</h4>
            <div className={'products'}>
                {this.props.products.map(product =>
                <Product
                    name={product.name}
                    price={product.price}
                    handleClick={this.props.handleClick}
                />)}
            </div>
        </div>
    }
}

export default Products;