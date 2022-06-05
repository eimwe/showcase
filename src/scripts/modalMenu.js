/**
 * Polyfill for HTML <dialog> element
 * @constant
 * @default
 */
 const dialogPolyfill = require('./dialog-polyfill');

/**
 * @constant
 * @default
 * @member {HTMLElement}
 */
 const menuModal = document.querySelector('.modal--menu');

 /**
 * Register menu modal node with dialog polyfill
 * @constant
 * @default
 * @memberof dialogPolyfill
 * @instance
 */
dialogPolyfill.registerDialog(menuModal);

/**
 * Variable for a menu modal close button
 * @member {HTMLElement}
 */
 let menuCloseButton = document.querySelector('.modal--menu .btn--close');

/**
* Close modal on click at close button
* @listens click
* @fires menuModal.close
*/
menuCloseButton.addEventListener('click', () => menuModal.close());

export { menuModal };