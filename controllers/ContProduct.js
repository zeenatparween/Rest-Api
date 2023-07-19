const getOneProducts = async (req, res) =>{
    res.status(200).json({
        Name: "Peeter Goel",
        Id: "20BB876D56",
        Performence: "Good in all Round",
        msg: "I am from OneProducts Func"

    })
}

const getMultiProducts = async (req, res) => {
    res.status(300).json({
        Name: "Sabistean , Chadwick, Elena",
        Occupation: "All are computer science students",
        msg: "I am from Multiproducts Func"
    })
}

module.exports = { getOneProducts, getMultiProducts }