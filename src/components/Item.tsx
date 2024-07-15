import React, { Component } from "react"

interface ItemProps {
  item: {
    img: string
    title: string
    desc: string
    price: number
  }
  onShowItem: (item: { img: string; title: string; desc: string; price: number }) => void
  onAdd: (item: { img: string; title: string; desc: string; price: number }) => void
}

export default class Item extends Component<ItemProps> {
  render() {
    const { img, title, desc, price } = this.props.item

    return (
      <div className="item">
        <img src={img} alt={title} onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <b>{price}$</b>
        <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>
          +
        </div>
      </div>
    )
  }
}
