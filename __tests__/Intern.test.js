const Intern = require("../lib/Intern")

describe("Intern", function(){
    const intern = new Intern("Kevin","1120","kmjordan2009.kj@gmail.com","UMKC")
    test("intern has name Kevin", function(){
        expect(intern.getName()).toBe("Kevin")
    })
    test("intern has ID 1120", function(){
        expect(intern.getId()).toBe("1120")
    })
    test("intern has email kmjordan2009.kj@gmail", function(){
        expect(intern.getEmail()).toBe("kmjordan2009.kj@gmail.com")
    })
    test("intern has school of UMKC", function(){
        expect(intern.getSchool()).toBe("UMKC")
    })
    test("intern has role intern", function(){
        expect(intern.getRole()).toBe("Intern")
    })

})