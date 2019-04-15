const roomsList = [
  {
    id: 1, name: 'Room 1', 
    img: "https://s-ec.bstatic.com/images/hotel/max1024x768/731/73118462.jpg",
    description: `The room comes with Dreamax bed (manufactured and 
    designed exclusively by Flex for Meliá Hotels International), a modern, 
    fully equipped bathroom finished ...`
  },{
    id: 2, name: 'Room 2', 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_QdkWDQ14NeiuWrC8B6rIBTxOKtz_aapSiLNSJuXZGPj17h_",
    description: `The room comes with Dreamax bed (manufactured and designed 
    exclusively by Flex for Meliá Hotels International), a modern, fully equipped bathroom finished ...`
  }

]

const RoomsService = {
    getRooms: function() {
      return roomsList;
    },

    getRoomById: function(id) {
      return roomsList.filter(x => x.id == id);
    }
};

export default RoomsService;