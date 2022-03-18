const IndexControllers = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')


// theorical i need test controllers and not router because is routes serve to see way in the page!!!
//remember i don't getting test page render only if mode send!!!

describe('testing about controllers', () => {
    it('testing about render home here now', () =>{
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('learning and practice more about test')
        IndexControllers.Home({}, res)
    })
} )



describe('test controllers about way products', ()=> {
    
    it('create new routes about product first off all', () => {
       let res = {
           send: function () {}
       }
       let mock = sinon.mock(res)
       mock.expects('send').once().withArgs('Welcome my page about my trademarkers')
       IndexControllers.Produt({}, res)

    })

})