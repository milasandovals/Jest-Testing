import {sum , multiply, subtract} from './maths.js'
import {describe, expect, test} from '@jest/globals'

describe("testing maths.js library", () => {
    test("adds 4+5 and expects it to equal 9", () => {
    
        //Arrange
        let a = 4
        let b = 5
        let expectedTotal = 9
        
        //Act
        let total = sum(a,b)
        
        //Assert
        expect(total).toEqual(expectedTotal)
    })
})