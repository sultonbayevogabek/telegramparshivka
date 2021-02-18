function randomId() {
   return Math.round(Math.random() * 10000000000);
}
const data = [
   {
      contactId: 1,
      contactName: 'Vladimir Putin',
      isOnline: true,
      avatarURL: 'img/contacts/putin.png',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '16:05',
               messageText: 'Wazzap Dude'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '16:02',
               messageText: 'Hello Russia'
            }
         ]
      }

   },
   {
      contactId: 2,
      contactName: 'Baha Moretz',
      isOnline: false,
      avatarURL: 'https://i.pravatar.cc/60?img=33',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '16:00',
               messageText: 'I love Uzbekistan'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '13:42',
               messageText: 'Do you know Uzbekistan?'
            }
         ]
      }

   },
   {
      contactId: 3,
      contactName: 'Asad',
      isOnline: false,
      avatarURL: 'img/contacts/asad.png',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '15:45',
               messageText: 'Jo`ra nichiksan? Ishlaring yaxshimi?'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '13:42',
               messageText: 'Heey kak dela?'
            }
         ]
      }
   },
   {
      contactId: 4,
      contactName: 'Ahyad',
      isOnline: true,
      avatarURL: 'img/contacts/ahad.png',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '15:05',
               messageText: 'Can you find socks?'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '15:35',
               messageText: 'Ok. Where are my socks?'
            }
         ]
      }
   },
   {
      contactId: 5,
      contactName: 'Alina Kim',
      isOnline: true,
      avatarURL: 'img/contacts/alina.png',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '13:00',
               messageText: 'Hi'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '13:01',
               messageText: 'Hi, what\'up? Are you free today? Let\' go to the cinema!'
            }
         ]
      }
   },
   {
      contactId: 6,
      contactName: 'Behance',
      isOnline: false,
      avatarURL: 'https://i.pravatar.cc/60?img=47',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '12:32',
               messageText: 'Hi'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '12:43',
               messageText: 'Discover the best of the week catch up with the best ...'
            }
         ]
      }
   },
   {
      contactId: 7,
      contactName: 'Asal',
      isOnline: true,
      avatarURL: 'https://i.pravatar.cc/60?img=1',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '12:32',
               messageText: 'Salom'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '12:43',
               messageText: 'Salom. Asal qalaysiz ishlariz yaxshimi?'
            }
         ]
      }
   },
   {
      contactId: 8,
      contactName: 'Kamila',
      isOnline: true,
      avatarURL: 'https://i.pravatar.cc/60?img=5',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '12:22',
               messageText: 'Salom. Og`abek, sog`liqlariz yaxshimi?'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '12:43',
               messageText: 'Salom. Yaxshi rahmat, o`ziz tuzukmisiz?'
            }
         ]
      }
   },
   {
      contactId: 9,
      contactName: 'Sulaymon',
      isOnline: false,
      avatarURL: 'https://i.pravatar.cc/60?img=8',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '10:32',
               messageText: 'Ahvolla yaxshima? Bormisanbi go`rinmi getdingqu?'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '10:35',
               messageText: 'Ova yuribmiz jo`ra na disan?'
            }
         ]
      }
   },
   {
      contactId: 10,
      contactName: 'Bobom',
      isOnline: true,
      avatarURL: 'https://i.pravatar.cc/60?img=17',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '10:31',
               messageText: 'Og`abek bolam nichiksan? Oydin yuribmisan? Sog`liqlaring, o`qishlaring yaxshima?'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '10:31',
               messageText: 'Salommalakim. Buva nichiksiz? Man yaxshi oydin yuribman! O`zingizni sog`liqlariz yaxshimi?'
            }
         ]
      }
   },
   {
      contactId: 11,
      contactName: 'Jamshid',
      isOnline: true,
      avatarURL: 'https://i.pravatar.cc/60?img=56',
      chatMessages: {
         received: [
            {
               messageId: randomId(),
               messageTime: '10:31',
               messageText: 'Jo`ra man Toshkenta galdim'
            }
         ],
         sent: [
            {
               messageId: randomId(),
               messageTime: '10:35',
               messageText: 'Yaxshi nerlari aylanamiz indi?'
            }
         ]
      }
   }
]