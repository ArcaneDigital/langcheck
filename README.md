# LangCheck

Language detection module for Node with support for 57 languages, async/await and promises.

## Install

```
npm install langcheck --save
```

## Usage

```javascript
const langcheck = require("langcheck");
```

#### Async/Await

```javascript
const langcheck = require("langcheck");

(async () => {
  const lang = await langcheck(`The quick brown fox jumps over the lazy dog`);
  console.log(lang);
})();
```

#### Promises

```javascript
const langcheck = require("langcheck");

langcheck(`The quick brown fox jumps over the lazy dog`).then(lang => {
  console.log(lang);
});
```

## Langauges

- Afrikaans
- Albanian
- Arabic
- Armenian
- Basque
- Bengali
- Bosnian
- Breton
- Bulgarian
- Catalan
- Chinese
- Croatian
- Czech
- Danish
- Dutch
- English
- Esperanto
- Estonian
- Finnish
- French
- Galician
- Georgian
- German
- Greek
- Hebrew
- Hindi
- Hungarian
- Icelandic
- Indonesian
- Italian
- Japanese
- Kazakh
- Korean
- Latvian
- Lithuanian
- Macedonian
- Malay
- Malayalam
- Norwegian
- Persian
- Polish
- Portuguese
- Romanian
- Russian
- Serbian
- Sinhala
- Slovak
- Slovene
- Spanish
- Swedish
- Tagalog
- Tamil
- Telugu
- Thai
- Turkish
- Ukrainian
- Vietnamese

## Maintainers

- [Jay Goodfellow](https://github.com/jaygoodfellow)
- [Arcane Digital Inc](https://github.com/arcanedigital)

## License

Copyright (c) 2017, Arcane & Jay Goodfellow.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
