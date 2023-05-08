const DataTypes = require("sequelize");
const db = require("../config/dbconection");

const client = db.define('client', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: true
    },
    email:{
        type: DataTypes.STRING
    },
    cidade:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    },
    cep:{
        type: DataTypes.STRING
    }
});

(async () => {
    try{
        await client.sync();
        console.log("Tabela Client criada com sucesso!");
    }catch (error) {
        console.log("Não foi possivel conectar-se ao banco de dados: ", error)
    }
})();

module.exports = client