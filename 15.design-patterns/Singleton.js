// function DBConnection(){
//     console.log('Created a new DB conenction')
// }

// var dbCon1 = new DBConnection()
// console.log(dbCon1)
// var dbCon2 = new DBConnection()
// console.log(dbCon2)
// var dbCon3 = new DBConnection()
// console.log(dbCon3)
// var dbCon4 = new DBConnection()
// console.log(dbCon4)
// var dbCon5 = new DBConnection()
// console.log(dbCon5)

var Database = (function(){

    var connection = null

    var createConnection = function(){
        var obj = Object.create(null)
        console.log('Connection is created')
        return obj
    }

    var getConnection = function(){
       if(!connection){
            connection = createConnection()
        }
        return connection
    }

    var obj = {getConnection : getConnection }

    return obj
})()


var con1 =  Database.getConnection()
console.log(con1)

var con2 =  Database.getConnection()
console.log(con2)

var con3 =  Database.getConnection()
console.log(con3)

var con4 =  Database.getConnection()
console.log(con4)
