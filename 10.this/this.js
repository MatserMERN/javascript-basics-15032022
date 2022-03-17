console.log(this)

function sample(){
    console.log(this)
}

sample()


var obj = {
    name: 'Scott',
    getName: function(){
        var self = this

        console.log(self)
        self.name ='Desatnick'
        console.log(self)

       var updateName = function(){
           self.name ='Scott Desatnick'
           console.log(self) // This points to global
       } 
       updateName()
    }
}

obj.getName()
