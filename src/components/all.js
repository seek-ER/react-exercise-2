import React, {Component} from 'react';
import Products from "./products";

class All extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number:0,
            categories: [],
            products: {}
        }
    }

    componentDidMount = async () => {
            const URL = 'http://localhost:3000/products';
            const response = await fetch(URL);
            const data = await response.json();
            const categories =[];
            const products = {};
            data.forEach(
                element => {
                    if(!categories.includes(element.category)){
                        categories.push(element.category);
                        products[element.category] = [];
                        products[element.category].push(element);
                    }else {
                        products[element.category].push(element);
                    }
                })

            this.setState({
                number:0,
                categories:categories,
                products:products
            })
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    }

    render() {
        console.log('Render all');
        return <div id={'all'}>
            <div className={'top'}>
                <span className={'store'}>Store</span>
                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-cart-check" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    <path 
                          d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                </svg>
                <input type="text" className={'number'} value={this.state.number}/>
            </div>

            {this.state.categories.map(category =>
                <Products
                    key={category}
                    category={category}
                    products={this.state.products[category]}
                    handleClick={this.handleClick}
                />)}
        </div>
    }
}

export default All;