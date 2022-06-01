const Employee = require("../lib/Employee")

describe("Employee", function(){
    const employee = new Employee("Kevin","1120","kmjordan2009.kj@gmail.com")
    test("employee has name Kevin", function(){
        expect(employee.getName()).toBe("Kevin")
    })
    test("employee has ID 1120", function(){
        expect(employee.getId()).toBe("1120")
    })
    test("employee has email kmjordan2009.kj@gmail", function(){
        expect(employee.getEmail()).toBe("kmjordan2009.kj@gmail.com")
    })
    test("employee has role employee", function(){
        expect(employee.getRole()).toBe("Employee")
    })

})