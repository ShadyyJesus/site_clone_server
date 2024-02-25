module.exports = (sequelize, DataTypes) => {

    const gallary = sequelize.define("gallary", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return gallary;
}