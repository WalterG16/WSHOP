import Usuario from "./Usuario.js";
import SuperUser from "./SuperUser.js";
import Product from "./Product.js";
import Shopping from "./Shopping.js";


Shopping.belongsTo(Usuario)
Shopping.belongsTo(Product)
Product.belongsTo(SuperUser)


export {
    Shopping,
    Product,
    Usuario,
    SuperUser
}