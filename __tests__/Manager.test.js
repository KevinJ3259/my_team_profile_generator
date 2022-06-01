const Manager = require("../lib/Manager")

describe("Manager", function(){
    const manager = new Manager("Kevin","1120","kmjordan2009.kj@gmail.com","1")
    test("manager has name Kevin", function(){
        expect(manager.getName()).toBe("Kevin")
    })
    test("manager has ID 1120", function(){
        expect(manager.getId()).toBe("1120")
    })
    test("manager has email kmjordan2009.kj@gmail", function(){
        expect(manager.getEmail()).toBe("kmjordan2009.kj@gmail.com")
    })
    test("manager has office number 1", function(){
        expect(manager.getOfficeNumber()).toBe("1")
    })
    test("manager has role manager", function(){
        expect(manager.getRole()).toBe("Manager")
    })

})