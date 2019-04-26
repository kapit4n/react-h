const clientsList = [
  {
    id: 1, name: 'Juan Rios',
    img: "https://www.thonhotels.com/siteassets/hoteller/norge/oslo/thon-hotel-terminus/romtyper/small-single-room/thon-hotel-terminus-small-single-room-1.jpg?width=1100&height=550&mode=crop&quality=80",
    identifier: `12312`
  }, {
    id: 2, name: 'Eva Auriola',
    img: "https://media-cdn.tripadvisor.com/media/photo-s/05/6f/52/8c/doubletree-by-hilton.jpg",
    identifier: `12312`
  }, {
    id: 3, name: 'Hansel Ortiz',
    img: "https://fishh.nnhotels.com/files/img/small/triple-room-hotel-u232-2-524.jpg",
    identifier: `123213`
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