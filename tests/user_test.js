Feature('user')

Scenario('Simple Get', ({ I }) => {
    I.sendGetRequest('/users/13696')
    I.seeResponseCodeIs(200)
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(data.login).to.be.equal('agapito123')
    })
})

Scenario('Simple Post', async ({ I }) => {
    const response = await I.sendPostRequest('/users', {
        "login": "bugluna2",
        "full_name": "Bug Luna Arlequina Pequena da Silva Agapito Correa",
        "email": "bugluna@gmail.com",
        "age": "12"
    })

    I.seeResponseCodeIs(201)

    await I.seeResponseValidByCallback(({ data, status, expect }) => {
        I.sendGetRequest(`/users/${data.id}`)
        I.seeResponseCodeIs(200)
        I.seeResponseValidByCallback(({ data, status, expect }) => {
            expect(data.login).to.be.equal('bugluna2')
        })
    })
})
