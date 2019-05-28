const clientsList = [
  {
    id: 1, name: 'Juan Rios',
    img: "https://www.thonhotels.com/siteassets/hoteller/norge/oslo/thon-hotel-terminus/romtyper/small-single-room/thon-hotel-terminus-small-single-room-1.jpg?width=1100&height=550&mode=crop&quality=80",
    identifier: `12312`,
    address: "Bolivia, Cochabamba, Chapare St 1616"
  }, {
    id: 2, name: 'Eva Costas',
    img: "https://media-cdn.tripadvisor.com/media/photo-s/05/6f/52/8c/doubletree-by-hilton.jpg",
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