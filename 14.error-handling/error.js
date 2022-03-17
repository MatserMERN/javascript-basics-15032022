// // try catch finally
// try {
//     // code that may throw error
// } catch(ex){
//     // Code to be executed if an error occurs
// } finally {
//     // code to be executed regardless of an error
//     // Will help us to clean up the code
//     // Close DB Connections, Network Connections
//     // File Connections, setting obejcts to null

// }

// try {
//     console.log('This is try block')
//     var output = getMessage('Hello')
// } catch(ex) {
//     console.log('this is catch block')
//     console.log(ex.name)
//     console.log(ex.message)
//     console.log(ex)
// } finally {
//     console.log('Finally block will always be executed')
// }

// try {
//     eval("alert('hello)");
//   }
//   catch(err) {
//     console.log(err.name)
//     console.log(err.message)
//   }

try {
    throw "Error occured"
} catch(ex){
    console.log(ex)
}


try {
    var studentCount = 2 // getStudents(studentId)
    if(studentCount >1) {
        throw {
            studentId: 101,
            message : 'Duplicate Records found'
        }
    }

} catch(ex){
    console.log(ex)
}