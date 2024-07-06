import React, { Component } from "react"
import Item from "./Item"

interface ItemData {
  id: number
  img: string
  title: string
  desc: string
  price: number
}

interface ItemsProps {
  items: ItemData[]
  onShowItem: (item: { img: string; title: string; desc: string; price: number }) => void
  onAdd: (item: { img: string; title: string; desc: string; price: number }) => void
}

export class Items extends Component<ItemsProps> {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
          <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    )
  }
}

export default Items
