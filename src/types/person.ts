export interface IPerson {
  user: {
    name: string,
    email: string,
    about: string,
    links: Links[],
    skills: Partial<Skills[]>,
    experience: Experience[]
  }
}

export type Links = {
  name: string,
  url: string
}

export type Skills = "HTML5"
  | "CSS"
  | "Sass"
  | "JavaScript"
  | "Typescript"
  | "ReactJS"
  | "VueJS"
  | "NodeJS"
  | "PostgreSQL"
  | "Vuex"
  | "Nuxt"
  | "Sequelize"
  | "Express"
  | "Kotlin"
  | "Android"

export type Experience = {
  company: string,
  city: string,
  country: string,
  position: string,
  start: string,
  end: string,
  description: string
}

export type Projects = {
  id: number,
  name: string,
  techs: Partial<Skills[]>,
  src: string
}