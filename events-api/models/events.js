import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Event = sequelize.define("Event", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 255],
          msg: "Title must be between 8 and 50 characters",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [0, 255],
          msg: "Title must be a maximum of 5000 characters",
        },
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 255],
          msg: "Title must be a maximum of 5000 characters",
        },
      },
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        min: {
          args: -90,
          msg: "Latitude must be between -90 and 90",
        },
        max: {
          args: 90,
          msg: "Latitude must be between -90 and 90",
        },
      },
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        min: {
          args: -180,
          msg: "Longitude must be between -180 and 180",
        },
        max: {
          args: 180,
          msg: "Longitude must be between -180 and 180",
        },
      },
    },
    organizerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
  });

  return Event;
};
