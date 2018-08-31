import capitalize from './capitalize'


describe('Capitalize function', () => {

    it('Should throw an error if don\'t give it a string', function () {
        expect(()=>capitalize()).toThrow(Error)
    })

    it('Should return empty string if empty str is passed to it', function(){
        expect(capitalize('')).toBe('')
    })

    it('Should capitalize all first chars in a word and all other should be lowercase', function(){
        expect(capitalize('a car came to an u turn')).toBe('A Car Came To An U Turn')
    })

    it('Should capitalize chars if they are single', function(){
        expect(capitalize('a b c 2')).toBe('A B C 2')
    })    

    it('Should capitalize chars if they are non-ASCII', function(){
        expect(capitalize('ÿöur striñg')).toBe('Ÿöur Striñg')
    })
})