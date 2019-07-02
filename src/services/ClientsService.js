const clientsList = [
  {
    id: 1, name: 'Juan Rios',
    img: "https://i.scdn.co/image/3c6d545f32c6db1193c34f719e7fdb2eea4986e3",
    identifier: `12312`,
    address: "Bolivia, Cochabamba, Chapare St 1616"
  }, {
    id: 2, name: 'Eva Costas',
    img: "https://media.licdn.com/dms/image/C4E03AQGCKYdnkEuy6Q/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=9uRass6Nh4zz3cUyixciZFmaWGwOWM3PLQLSmDeo8pI",
    identifier: `12312`,
    address: "Bolivia, Cochabamba, Chapare St 1616"
  }
];

const ClientsService = {
  getClients: function () {
    return clientsList;
  },


  getClientById: function (id) {
    let selClient = clientsList.find(x => x.id == id);
    return selClient;
  }
};

export default ClientsService;