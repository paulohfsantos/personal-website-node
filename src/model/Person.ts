import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/pg";
import { IPerson } from "../types/person";

const personTable = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },

  name: { type: DataTypes.STRING },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate:{
      isEmail: { msg: "It must be a valid Email address" },
    }
  },
  about: { type: DataTypes.STRING },
  links: {
    type: DataTypes.ARRAY()
  },
  skills: { type: DataTypes.ARRAY(DataTypes.STRING) },
  experience: {},
  projects: {}
}

const personProps = {
  tableName: "",
  timestamps: false,
}

// export const Person = sequelize
//  .define<IPerson>("User", personTable, personProps);