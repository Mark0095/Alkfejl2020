import { browser, by, element } from 'protractor';
import { getPath } from './getpath';

describe('Bejelentkezés tesztelése', () => {
  beforeEach(() => {
    browser.get('/login');
  })

  it('El lehet érni a bejelentkező oldalt', () => {
    expect(getPath()).toEqual('/login');
  })

  it('Nem lehet bejelentkezni rossz adatokkal', () => {
    element(by.css('input[id="username"]')).sendKeys('asd');
    element(by.css('input[id="password"]')).sendKeys('asd');
    element(by.css('button[value="Login"]')).click();
    expect(getPath()).toEqual('/login');
  });

  it('Jó adatokkal be lehet jelentkezni', () => {
    element(by.css('input[id="username"]')).sendKeys('admin');
    element(by.css('input[id="password"]')).sendKeys('teszt');
    element(by.css('button[value="Login"]')).click();
    expect(getPath()).toEqual('/admin-panel');
  });

  it('Bejelentkezést követően ki lehet jelentkezni', () => {
    // Bejelentkezés
    element(by.css('input[id="username"]')).sendKeys('admin');
    element(by.css('input[id="password"]')).sendKeys('teszt');
    element(by.css('button[value="Login"]')).click();

    // Kijelentkezés
    element(by.css('mz-navbar button')).click();
    expect(getPath()).toEqual('/logged-out');
  });

  // Alapesetben az egyes szerepkörökhöz tartozik valamilyen kezdőoldal,
  // amit a /start-page rendel hozzájuk.
  // Pl. az adminnál ilyen az /admin-panel, ami a főbb adminisztratív 
  // eszközöket tartalmazza.
  // Viszont, ha vendégként a /profile oldalt kéri le, bejelentkezés után
  // oda irányítja a rendszer, nem az /admin-panel-re.
  // Ez a teszteset ezt a funkcionalitást vizsgálja.
  describe('Bejelentkezés után a vendégként kért oldal jelenik meg', () => {
    describe('Profil oldal lekérése vendégként', () => {
      beforeEach(() => {
          browser.get('/profile');
      })

      it('Jogosultság híján átirányít a bejelentkező oldalra', () => {
        expect(getPath()).toContain('/login');
      });

      it('Bejelentkezést követően az alap kezdőoldal helyett az eredetileg kért oldalra irányít', () => {
        element(by.css('input[id="username"]')).sendKeys('admin');
        element(by.css('input[id="password"]')).sendKeys('teszt');
        element(by.css('button[value="Login"]')).click();

        expect(getPath()).toEqual('/profile');
      });
    });
  });

})
