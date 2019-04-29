const bookingsList = [{
  id: 1,
  user: {
    id: 1,
    name: 'Juan Rios',
    img: "https://www.thewrap.com/wp-content/uploads/2017/07/Robert-Downey-Jr-Iron-Man-Pepper-Potts-Tony-Stark.jpg",
    identifier: `12312`,
    address: "Bolivia, Cochabamba, Chapare St 1616"
  },
  startDate: '1/1/2019',
  duration: 2,
  payed: 100,
  totalToPay: 500,
  room: {
    id: 1,
    name: 'Single Room',
    number: '101',
    capacity: 1,
    features: "TV, CABLE 26",
    img: "https://www.thonhotels.com/siteassets/hoteller/norge/oslo/thon-hotel-terminus/romtyper/small-single-room/thon-hotel-terminus-small-single-room-1.jpg?width=1100&height=550&mode=crop&quality=80",
    description: `The room comes with Dreamax bed (manufactured and 
      designed exclusively by Flex for Meliá Hotels International), a modern, 
      fully equipped bathroom finished ...`,
    level: "Level 1"
  }
}, {
  id: 2,
  user: {
    id: 2,
    name: 'Eva Costas',
    img: "https://images.immediate.co.uk/volatile/sites/3/2017/10/thor-1-4930c69.jpg?quality=90&resize=620,413",
    identifier: `12312`,
    address: "Bolivia, Cochabamba, Chapare St 1616"
  },
  startDate: '1/1/2019',
  duration: '5',
  payed: 100,
  totalToPay: 500,
  room: {
    id: 1,
    name: 'Single Room',
    number: '101',
    capacity: 3,
    features: "TV, CABLE 26",
    img: "https://www.thonhotels.com/siteassets/hoteller/norge/oslo/thon-hotel-terminus/romtyper/small-single-room/thon-hotel-terminus-small-single-room-1.jpg?width=1100&height=550&mode=crop&quality=80",
    description: `The room comes with Dreamax bed (manufactured and 
      designed exclusively by Flex for Meliá Hotels International), a modern, 
      fully equipped bathroom finished ...`,
    level: "Level 2"
  }
}];

const BookingsService = {
  getBookings: function () {
    return bookingsList;
  },

  getBookingById: function (id) {
    let selBooking = bookingsList.find(x => x.id == id);
    return selBooking;
  }
};

export default BookingsService;