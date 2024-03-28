class Options {
  title: string
  category: string
  image: string
  description: string
  infos: string[]
  id: number

  constructor(
    title: string,
    category: string,
    image: string,
    description: string,
    infos: string[],
    id: number
  ) {
    this.title = title
    this.category = category
    this.image = image
    this.description = description
    this.infos = infos
    this.id = id
  }
}

export default Options
