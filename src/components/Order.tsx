import React, { Component } from "react"
import { FaTrash } from "react-icons/fa"

interface OrderProps {
  item: {
    id: number
    img: string
    title: string
    price: number
  }
  onDelete: (id: number) => void
}

export default class Order extends Component<OrderProps> {
  render() {
    const { img, title, price } = this.props.item

    return (
      <div className="item">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <b>{price}$</b>
        <FaTrash className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}
