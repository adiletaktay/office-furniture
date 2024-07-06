import React, { Component } from "react"

interface ShowFullItemProps {
  item: {
    img: string
    title: string
    desc: string
    price: number
  }
  onShowItem: (item: { img: string; title: string; desc: string; price: number }) => void
  onAdd: (item: { img: string; title: string; desc: string; price: number }) => void
}

export class ShowFullItem extends Component<ShowFullItemProps> {
  render() {
    const { img, title, desc, price } = this.props.item

    return (
      <div className="full-item">
        <div>
          <img src={img} alt={title} onClick={() => this.props.onShowItem(this.props.item)} />
          <h2>{title}</h2>
          <p>{desc}</p>
          <b>{price}$</b>
          <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>
            +
          </div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem
