const faker = require("faker");

let listaConversas = [
  {
    name: faker.name.firstName() + " " + faker.name.lastName(),
    lastMessage: "+551198763512 - Talvez.",
    avatar: faker.image.avatar(),
    messages: [
      {
        time: faker.datatype.datetime(),
        content: "Hello!",
        sentBy: "contact",
      },
      {
        time: faker.datatype.datetime(),
        content: "KKKK!",
        sentBy: "contact",
      },
      {
        time: faker.datatype.datetime(),
        content: "KKKK!",
        sentBy: "user",
      },
      {
        time: faker.datatype.datetime(),
        content: "Achei legal!",
        sentBy: "contact",
      },
    ],
  },
  {
    name: faker.name.firstName() + " " + faker.name.lastName(),
    lastMessage: "+551198763512 - Vamo.",
    avatar: faker.image.avatar(),
  },
  {
    name: faker.name.firstName() + " " + faker.name.lastName(),
    lastMessage: "+551198763512 - Não vamo.",
    avatar: faker.image.avatar(),
  },
  {
    name: faker.name.firstName() + " " + faker.name.lastName(),
    lastMessage: "+551198763512 - Cade meu relatório.",
    avatar: faker.image.avatar(),
  },
  {
    name: faker.name.firstName() + " " + faker.name.lastName(),
    lastMessage: "+551198763512 - Cade meu relatório.",
    avatar: faker.image.avatar(),
  },
  {
    name: faker.name.firstName() + " " + faker.name.lastName(),
    lastMessage: "+551198763512 - Cade meu relatório.",
    avatar: faker.image.avatar(),
  },
  {
    name: faker.name.firstName() + " " + faker.name.lastName(),
    lastMessage: "+551198763512 - Cade meu relatório.",
    avatar: faker.image.avatar(),
  },
];

module.exports = { listaConversas };
