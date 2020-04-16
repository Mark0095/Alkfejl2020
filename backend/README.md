# Backend dokumentáció

## Fejlesztői környezet bemutatása, beállítása
Fejlesztői környezetnek az IntelliJ IDEA-t választottuk, a fejlesztést pedig Windows 10 rendszeren végeztük.

A letöltött projektet megnyitva be kell állítani az alábbiakat:
- JDK, hogy a Java kód fordítható legyen
	- *File > Project Structure > SDKs*
- Lombok Plugin, hogy az IntelliJ megfelelően kezelje a lombok adta lehetőségeket
	- *File > Settings > Plugins*
- Maven függőségek telepítése
	- *A bal alsó sarokban levő ikon felett tartani az egérmutatót > Maven Projects, majd a jobb oldalon megjelenő ablakban "install"*

*A backend elindítása a konfigurálást követően:*
- *Maven Projects > Plugins > spring-boot > spring-boot:run*
	- ez egyszerűsíthető annyival, hogy jobb klikk után létrehozható neki egy konfiguráció, így a fenti kezelőfelületről is indítható lesz

## Használt technológiák 
- Java 8 
- Spring keretrendszer
- H2 adatbáziskezelő 
- Lombok 

## Alkalmazott könyvtárstruktúra bemutatása
A backend mappa az alábbi könyvtárstruktúrát tartalmazza.
```
+---.idea
|   \---libraries
+---.mvn
|   \---wrapper
\---src
    +---main
    |   +---java
    |   |   \---hu
    |   |       \---elte
    |   |           \---alkfejl
    |   |               \---enaplo
    |   |                   +---annotation
    |   |                   +---component
    |   |                   +---configuration
    |   |                   +---controller
    |   |                   +---interceptor
    |   |                   +---model
    |   |                   +---repository
    |   |                   \---service
    |   \---resources
    \---test
        \---java
            \---hu
                \---elte
                    \---alkfejl
                        \---enaplo
```

## Végpont-tervek és leírások
- api/users - Felhasználók kezelése
- api/subjects - Tantárgyak kezelése
- api/marks - Jegyek kezelése
- api/classes - Osztályok kezelése
- api/auth - Authorizáció kezelése

## 1 db végpont működésének leírása, mi történik, milyen lépések követik egymást (szekvenciadiagram)
- api/auth
-- api/auth/login: Várja egy felhasználó adatait, majd megnézi, hogy ezek megfelelőek-e. Ennek megfelelően visszaküld egy 200-as vagy 403-as választ. Ha a bejelentkezés sikeres, eltárolja a munkamenetet.
-- api/auth/logout: Törli a munkamenetet.
-- api/auth/user: Megmondja, hogy milyen felhasználó tartozik a munkamenethez.