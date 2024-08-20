import { Component } from "react"

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

export default class ShowFullItem extends Component<ShowFullItemProps> {
  render() {
    const { img, title, desc, price } = this.props.item

    return (
      <div className="full-item">
        <img src={img} alt={title} onClick={() => this.props.onShowItem(this.props.item)} loading="lazy" />
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
