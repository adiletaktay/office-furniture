import React, { Component } from "react"

interface Category {
  key: string
  name: string
}

interface CategoriesProps {
  chooseCategory: (key: string) => void
}

interface CategoriesState {
  categories: Category[]
}

export default class Categories extends Component<CategoriesProps, CategoriesState> {
  constructor(props: CategoriesProps) {
    super(props)
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "chairs",
          name: "Стулья",
        },
        {
          key: "tables",
          name: "Столы",
        },
        {
          key: "sofa",
          name: "Диваны",
        },
        {
          key: "office",
          name: "Офис",
        },
      ],
    }
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    )
  }
}
