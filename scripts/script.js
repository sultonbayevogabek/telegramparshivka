'use strict';

document.addEventListener('DOMContentLoaded', () => {
   //declare selection functions
   function $(selector) {
      return document.querySelector(selector);
   }

   function $$(selector) {
      return document.querySelectorAll(selector);
   }

   const messagesList = $('.messages-list'),
      chatForm = $('.chat-form'),
      typingField = $('#typing-field'),
      chatList = $('.chat-list__ul'),
      searchInput = $('#search-input'),
      chatSound = $('#chat-sound');


   typingField.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
         e.preventDefault();
         formSubmit(e.target.parentElement);
      } else {
         keysPressed[e.key] = true;
         if (keysPressed['Control'] && e.key === 'Enter') {
            alert(e.key);
         }
      }

   })

   function formSubmit(target) {

      const sendingTime = timeReturner();

      messagesList.innerHTML += `
         <li class="message send">
            <p>${typingField.value}</p>
            <time class="message-time">${sendingTime}</time>
         </li>
      `
      setTimeout(() => {
         chatSound.play();
      }, 100)

      answerWriter(typingField.value);

      target.reset();

      messagesList.scrollTop = messagesList.scrollHeight;

      typingField.focus();
   }

   chatForm.addEventListener('submit', formSubmit);

   function timeReturner() {
      return addZero(new Date().getHours()) + ':' + addZero(new Date().getMinutes());
   }

   function addZero(number) {
      if (number < 10) {
         return `0${number}`
      }
      return number
   }

   function answerWriter(message) {

      setTimeout(() => {

         const sendingTime = timeReturner(),
            myMessage = message.trim().toLowerCase();

         let answer;

         if (myMessage === 'salom') {
            answer = 'Valaykum salom. Ishlaring yaxshimi?'
         } else if (myMessage === '') {
            answer = 'Zerikdingmi deyman!'
         } else if (myMessage === 'tentak' || myMessage === 'ahmoq') {
            answer = 'So`kinma nomard. Man sanga nima dedim?'
         } else if (myMessage === 'xayr') {
            answer = 'Xayr salomat bo`ling. Yaxshi kunlarda ko`rishaylik! :)'
         } else {
            answer = message + ' - bu gapga nima deb javob qaytarish meni miyyamga kiritilmagan! :( Ming bor uzur. Ayb mandamas, dasturchida'
         }
         messagesList.innerHTML += `
         <li class="message received">
            <p>${answer}</p>
            <time class="message-time">${sendingTime}</time>
         </li>
      `
         setTimeout(() => {
            chatSound.play();
         }, 100);

         messagesList.scrollTop = messagesList.scrollHeight;

      }, 2000);

   }

   function renderChatList(array) {
      chatList.innerHTML = '';

      array.forEach(chat => {
         chatList.innerHTML += `
            <li class="chat-list__li ${chat.isOnline ? 'active-contact' : ''}" data-contact-id=${chat.contactId}>
               <div class="contact-img">
                  <img src=${chat.avatarURL} alt=${chat.contactName} width="60" height="60">
                  <div class="active-indicator"></div>
               </div>
               <div class="chat-info">
                  <h3 class="contact-name">${chat.contactName}</h3>
                  <div class="last-message">${chat.chatMessages.sent[0]['messageText']}</div>
               </div>
               <time>${chat.chatMessages.sent[0].messageTime}</time>
            </li>
         `
      })
   }

   renderChatList(data);

   let chatListItems = $$('.chat-list__li'),
      selectedChatId = 1;

   searchInput.addEventListener('input', e => {
      const searchingContactName = e.target.value;

      const filteredContactsArray = data.filter(contact => {
         return contact.contactName.toLowerCase().indexOf(searchingContactName.toLowerCase()) > -1
      })

      renderChatList(filteredContactsArray);

      chatListItems = $$('.chat-list__li')

      chatListAndField();
   })

   chatListItems[0].classList.add('selected-chat');

   function chatListAndField() {
      chatListItems.forEach(chat => {
         chat.addEventListener('click', e => {
            chatListItems.forEach(item => item.classList.remove('selected-chat'));

            e.currentTarget.classList.add('selected-chat');

            selectedChatId = e.currentTarget.getAttribute('data-contact-id');

            chatListItems = $$('.chat-list__li')

            chatFieldRender(selectedChatId);
         })
      })
   }

   chatListAndField();

   const chattingContact = $('.chatting-contact'),
      chattingContactName = $('.chatting-contact__name');

   function chatFieldRender(id = 1) {
      const selectedChat = data[id - 1];

      if (selectedChat.isOnline) {
         chattingContact.classList.add('active-contact');
      } else {
         chattingContact.classList.remove('active-contact');
      }

      chattingContactName.textContent = selectedChat.contactName;

      messagesList.innerHTML = `
         <li class="message received">
            <p>${selectedChat.chatMessages.received[0].messageText}</p>
            <time class="message-time">${selectedChat.chatMessages.received[0].messageTime}</time>
         </li>
         <li class="message send">
            <p>${selectedChat.chatMessages.sent[0].messageText}</p>
            <time class="message-time">${selectedChat.chatMessages.sent[0].messageTime}</time>
         </li>
      `
   }

   chatFieldRender();

   //video call

   const darkLayer = $('.dark-layer'),
      videoCall = $('.video-call'),
      videoCallImg = $('.video-call__img'),
      videoCallEndBtn = $('.video-call__option--item:first-child'),
      videoCallContactName = $('.video-call h3'),
      videoCallerBtn = $('#video-call'),
      videoCallSound = $('#gudok'),
      videoCallEndSound = $('#call-end-sound');

   videoCallerBtn.addEventListener('click', () => {
      startVideoCall(selectedChatId);
   })

   videoCallEndBtn.addEventListener('click', endVideoCall);

   window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
         endVideoCall();
      }
   })

   darkLayer.addEventListener('click', e => {
      if (e.target === darkLayer) {
         endVideoCall();
      }
   })

   function startVideoCall(id) {
      setTimeout(() => {
         darkLayer.classList.remove('hide');
         videoCallImg.src = data[id - 1].avatarURL;
         videoCallContactName.textContent = data[id - 1].contactName;
         videoCallSound.play()
      }, 1000)
   }

   function endVideoCall() {
      setTimeout(() => {
         darkLayer.classList.add('hide');
         videoCallSound.pause();
         videoCallEndSound.play();
      }, 1000)
   }
})