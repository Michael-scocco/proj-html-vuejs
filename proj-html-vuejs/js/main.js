new Vue({
    // ELEMENT
    el: '#app',
      //DATA
      data: {
        menuDestra: [
            {
                nome: 'Home',
                tag: '',
            },
            {
                nome: 'Culinary History',
                tag: '',
            },
            {
                nome: 'Our Team',
                tag: '',
            },
            {
                nome: 'Takeout',
                tag: 'New',
            },
            {
                nome: 'Bulletin',
                tag: '',
            },
            {
                nome: 'Reservation',
                tag: '',
            },
        ],
        bestTable:[
            {
                name:'THE BEST TABLE IN TOWN',
                title: 'FINE DINING EXPERIENCE',
                description: 'Pellentescque vitae viverra risus, sagittis. Venetatis ridiculus scelerisque nisi in urnanulla. Sit tempor a er nisl, ac felis.'
            }
        ],
        sessioneUp:[
            {
                textStrong: 'HAC TELLUS, FELIS RISUS AT',
                textNormal: 'mattis mattis. Eget euismod semper eget tortor, donec amet, blandit. Tristique facilisi faucibus elementum feugiat in nam in feugiat. Ipsum odio etiam duis facilisis amet vulputate.',
                title:'FOOD IS OUR COMMON GROUND, A UNIVERSAL EXPERIENCE.',
                textNormal2: 'Tristique tempus condimentun diam donec. Condimentum ullamcorper sit elementum hendrerit mi nulla in consaquat, ut. Mentus, nullam scelerique netus viverra dui',
                
            }
        ],
      
          tipologieSushi: [
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
              name: 'FRESH PRODUCE EVERYDAY',
              description: 'Hendrerit amet, volutpat leo non, commodo maecenas scelerisque tincidunt. Morbi vulputate morbi purus quisque sit sagittis orci elementum gravida',
              img: 'sushi-3',
              link: 'LEARN MORE ABOUT US'
            }
        ],
        maggy:[
            {
                name: 'MEGGY STEWART',
                paper: 'NEW YORK TIMES',
                description: 'Non arcu mauris tortor ultrices mollis tellus euismod fermentum. Habitant amet tincidunt id sapien accumsan sed at.',
                description2: 'Mmalesuada ullamcorper amet. Pretium pretium dignissim nisi.'
            },
        ],
        maxey:[
            {
                name: 'MARY MAXEY',
                paper: 'THE GUARDIAN',
                description: 'Non arcu mauris tortor ultrices mollis tellus euismod fermentum. Habitant amet tincidunt id sapien accumsan sed.',
            }
        ],
        patrik:[
            {
                name: 'PATRICK MONROE',
                paper: 'GLOBE AND MAIL',
                description: 'Vivamus magna justo, lacinia eget consectuer sed, convallis at tellus. Nulla porttitor accumsan tincidunt.',
            }
        ],

        prodottoCoffee: [
            {
              name: 'caffe',
              title: 'THE BEST COFFE IN TOWN',
              make: 'By admin',
              data: 'Jennuary, 7th, 2020',
              categories:'Categories: news'
            }
        ],
        prodottoNewMenu: [  
            {
              name: 'chef',
              title: 'DISCOVER OUR NEW MENU',
              make: 'By admin',
              data: 'Jennuary, 7th, 2020',
              categories:'Categories: news'
            }
        ],
        prodottoBancomant: [
            {
              name: 'bancomat',
              title: 'WE NOW ACCEPT SQUARE',
              make: 'By admin',
              data: 'Jennuary, 7th, 2020',
              categories:'Categories: news'
            }
        ],
        nomiPagine:[
            {
                namePage1: "HORS D'OEUVRES",
                namePage2: "MAIN COURSE",
                namePage3: "DESSERTS",
            }
        ],
        menu1:[
            {
                nameDish: 'AHI SALMON NIGIRI',
                price: '48',
                description: 'Eget vulputate vite quis rutrum blandit sed. Quam nulla sit lacina'
            },
            {
                nameDish: 'UMI MASU SALAD',
                price: '21',
                description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.'
            },
            {
                nameDish: 'TEMAKI WITH CRAB',
                price: '32',
                description: 'Ac vel, risus ornare senectus placerat duis amet dictumst tellus'
            },
            {
                nameDish: 'CALIFORNIA ROLLS',
                price: '22',
                description: 'Ac vel, risus ornare senectus placerat duis amet dictumst tellus'
            },
        ],
        menu2:[
            {
                nameDish: 'BRAISED ABALONE',
                price: '52',
                description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.'
            },
            {
                nameDish: 'TWINCE COOKED PORK',
                price: '21',
                description: 'Ac vel, risus ornare senectus placerat duis amet dictumst tellus.'
            },
            {
                nameDish: 'KUNGU PAO CHICKEN',
                price: '32',
                description: 'Quis guis sit dictum aliquam a velit enim. Tellus in sit augue aliquam.'
            },
            {
                nameDish: 'CHAR SIU SUCHIS',
                price: '22',
                description: 'Feugiat rhoncus ipsum tristique purus diam, et dolor molestie.'
            },
        ],
        menu3:[
            {
                nameDish: 'CHOCOLATE BALL CAKE',
                price: '13',
                description: 'In pellentesque in fellis massa vehicula. In sed euismod ut.'
            },
            {
                nameDish: 'LIME PIE WITH CRUST',
                price: '14',
                description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.'
            },
            {
                nameDish: 'RASBERRY PEAR CAKE',
                price: '18',
                description: 'Eget vulputate vite quis rutrum blandit sed. Quam nulla sit lacina.'
            },
            {
                nameDish: "CAFE' AU LAIT",
                price: '6',
                description: 'Eget vulputate vite quis rutrum blandit sed. Quam nulla sit lacina.'
            },
        ],
        descrizioneAbalone:[
            {
                nameDish: "BRAISED ABALONE",
                price: '52',
                description: 'Pretium accumsan porttitor viverra leo gravida nollis imperdiet. Fringilla nibh pharetra sociis leo amet.'
            }
        ],
        socials: [
      {
        url: 'https://www.facebook.com',
        ico: 'facebook-f'
      },
      {
        url: 'https://www.twitter.com/',
        ico: 'twitter'
      },
      {
        url: 'https://www.youtube.com/',
        ico: 'youtube'
      },
      {
        url: 'https://www.instagram.com/',
        ico: 'instagram'
      },
      {
        url: 'https://www.linkedin.com/',
        ico: 'linkedin'
      }
    ],
    diritti:[
        {
            copy: 'Copyright 2012 - 2019 Avada',
            all: 'All Rights Reserved',
            word: 'WordPress',
            Theme: 'ThemeFusion'
        }
    ]
      }
})