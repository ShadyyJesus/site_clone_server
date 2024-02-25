module.exports = (sequelize, DataTypes) => {

    const product = sequelize.define("product", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productimg: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return product;
}