const faker = require('faker');

module.exports = () => {
    var userList = []
    for (var index = 0; index < 5; index++) {
        userList.push({
            id: index+1,
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber(),
            picture: faker.internet.avatar()
        });
    }

    return {users: userList};
}