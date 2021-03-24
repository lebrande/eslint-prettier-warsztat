# Search + Dropdown = Wyszukiwarka stanów

## Opis projektu

Wyszukiwarka stanów w USA. Po wpisaniu frazy rozwija się dropdown z pasującymi wynikami. Można sterować klawiaturą lub myszką i wybrać pozycję. Wtedy wyświetla się strona z informacjami na temat stanu. Typ informacji do wyświetlenia oraz sposób wyszukiwania można wybrać z dodatkowego menu.

## Instalacja bundlera Parcel

- upewnij się, że masz zainstalowany `node.js`
- w tym odcinku pokazuję jak to zrobic - [instalacja node.js](https://www.youtube.com/watch?v=fhw9SHtzAX0)
- przejdź do terminala i wpisz `npm init -y` - utworzy się plik package.json
- następnie wpisz `npm i -S parcel-bundler`
- utwórz katalog `src` a w nim plik `index.js`, zrób jakiś `hello world`
- utwórz plik `index.html` i wypełnij go jakąś przykładową treścią
- dodaj tag script do pliku js
- w pliku `package.json` dodaj `"start": "parcel src/index.html"`
- przejdź do terminala i uruchamiam serwer deweloperski `npm start`
- sprzewdź w przeglądarce, czy wszystko ok

## Jak zrobić dopdown z inputem?

- utwórz komponent `App.js` w katalogu `components`
- w [dokumentacji bulmy](https://bulma.io/documentation/) przejdź do `Components/Dropdown`
- skopuj kod, ale zmień button na input
- input jest w sekcji `Form`
- pamiętaj o zmianie `class` na `className`

## Linki:

- https://bulma.io/documentation/
- https://github.com/CivilServiceUSA/us-states
