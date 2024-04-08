class Options {
  title: string
  category: string
  image: string
  description: string
  infos: string[]
  id: number
  grade: string

  constructor(
    title: string,
    category: string,
    image: string,
    description: string,
    infos: string[],
    id: number,
    grade: string
  ) {
    this.title = title
    this.category = category
    this.image = image
    this.description = description
    this.infos = infos
    this.id = id
    this.grade = grade
  }
}

export default Options
