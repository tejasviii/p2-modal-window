'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('button click');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  //btnOpenModal[i].addEventListener('click',function () {
  //    console.log('button click');
  //    modal.classList.remove('hidden');
  //    overlay.classList.remove('hidden');
  //});

  //btnCloseModal.addEventListener('click', function(){
  //    modal.classList.add('hidden');
  //    overlay.classList.add('hidden');
  //});

  //overlay.addEventListener('click',function(){
  //    modal.classList.add('hidden');
  //    overlay.classList.add('hidden');
  //});

  btnsOpenModal[i].addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}
