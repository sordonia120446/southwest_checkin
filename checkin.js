const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

const MOBILE_URL = 'https://mobile.southwest.com/check-in';

/**
 * Nightmare browser script for checking into a southwest flight.
 *
 * @param {string} confirmation 6-digit confirmation code
 */
function southwestCheckin(confirmation) {
  nightmare.goto(MOBILE_URL)
    .wait(2000)
    .type('[name="recordLocator"]', confirmation)
    .type('[name="firstName"]', 'Samuel')
    .type('[name="lastName"]', 'Ordonia')
    .click('[role="submit"]')
    .wait(2000) // wait for next page load
    .click('.button--yellow')
    .wait(2000) // wait for next page load
    // TODO add email input feature to get this confirmation
    .end()
    .then(() => {
      console.log('do sth else');
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = southwestCheckin;
