import React from "react"
import Items from "./Items"
import Categories from "./Categories"
import ShowFullItem from "./ShowFullItem"

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стол директора',
          img: './img/1.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'tables',
          price: '99.99'
        },
        {
          id: 2,
          title: 'Стуль для офиса',
          img: './img/k1.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '59.99'
        },
        {
          id: 3,
          title: 'Мягкая мебель',
          img: './img/426(1)-288x220w.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'sofa',
          price: '89.99'
        },
        {
          id: 4,
          title: 'Офисное пространство',
          img: './img/7.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'office',
          price: '79.99'
        },
        {
          id: 5,
          title: 'Стуль для приемной',
          img: './img/k2.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 6,
          title: 'Мебель для приемной',
          img: './img/504(1)-288x220w.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'office',
          price: '69.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div>
        <div className='presentation'></div>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export {MainPage};
