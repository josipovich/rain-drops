import fetchWeather from './fetchWeather'

test('fetchWeather function', function (){

    it('Should return obj with name = Berlin', function(){
        const berlin = 'Berlin'
        expect.assertions(1)
        return fetchWeather({berlin}).then(d => {
          expect(d.name).toBe(berlin)
        })
    })

    // it('Shouldn\'t return obj with name Berlinsz', function(){
    //     const city = 'Test'
    //     expect.assertions(1)
    //     return fetchWeather({city}).then(data => {
    //       expect(data.name).toBe(city)
    //     })
    // })
})