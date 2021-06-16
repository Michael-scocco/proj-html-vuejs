new Vue({
    // ELEMENT
    el: '#app',
      //DATA
      data: {
        menuDestra: [
          'Home',
          'Culinary History',
          'Our Team',
          'Our Menu',
          'Takeout',
          'Bulletin',
          'Reservation'
        ],
      
          tipologie: [
            {
              name: 'THE BEST TABLE IN TOWN',
              description: 'Sed aenean egestas ut aliquam turpis mauris, molestie. Vitae tellus tempor sem id tempus neque, tellus turpis turpis. Morbi tortor id gravida aliquet',
              img: 'sushi-1',
              link: 'EXPLORE THE MENU'
            },
            {
              name: 'PERFECT FOR GROUPS',
              description: 'Quam eu proin sit massa condimentum. Volutpat non pulvinar aliquet nunc. Orci elementum in aliquet a gravida vivamus aliquam turpis vitae.',
              img: 'sushi-2',
              link: 'MAKE A RESERVATION'
            },
            {
              name: 'FRESH PRODUCE EVERY DAY',
              description: 'Hendrerit amet, volutpat leo non, commodo maecenas scelerisque tincidunt. Morbi vulputate morbi purus quisque sit sagittis orci elementum gravida',
              img: 'sushi-3',
              link: 'LEARN MORE ABOUT US'
            }
        ],
        
     
      }
})