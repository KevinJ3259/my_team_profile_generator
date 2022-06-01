const Engineer = require("../lib/Engineer")

describe("Engineer", function(){
    const engineer = new Engineer("Kevin","1120","kmjordan2009.kj@gmail.com","kevinj3259")
    test("engineer has name Kevin", function(){
        expect(engineer.getName()).toBe("Kevin")
    })
    test("engineer has ID 1120", function(){
        expect(engineer.getId()).toBe("1120")
    })
    test("engineer has email kmjordan2009.kj@gmail", function(){
        expect(engineer.getEmail()).toBe("kmjordan2009.kj@gmail.com")
    })
    test("engineer has github username of kevinj3259", function(){
        expect(engineer.getGithub()).toBe("kevinj3259")
    })
    test("engineer has role engineer", function(){
        expect(engineer.getRole()).toBe("Engineer")
    })

})