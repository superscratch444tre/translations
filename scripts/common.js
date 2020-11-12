const fs = require('fs');
const pathUtil = require('path');

module.exports = {
  IN_DIR: pathUtil.join(__dirname, '../in'),
  OUT_DIR: pathUtil.join(__dirname, '../out'),
  LANGUAGES_DIR: pathUtil.join(__dirname, '../languages'),
  LANGUAGES_MD: pathUtil.join(__dirname, '../languages.md'),
  LANGUAGES: {
    // https://github.com/LLK/scratch-l10n/blob/master/src/supported-locales.js
    'ab': {name: 'Аҧсшәа'},
    'ar': {name: 'العربية'},
    'am': {name: 'አማርኛ'},
    'az': {name: 'Azeri'},
    'id': {name: 'Bahasa Indonesia'},
    'be': {name: 'Беларуская'},
    'bg': {name: 'Български'},
    'ca': {name: 'Català'},
    'cs': {name: 'Česky'},
    'cy': {name: 'Cymraeg'},
    'da': {name: 'Dansk'},
    'de': {name: 'Deutsch'},
    'et': {name: 'Eesti'},
    'el': {name: 'Ελληνικά'},
    'es': {name: 'Español'},
    'es-419': {name: 'Español Latinoamericano'},
    'eu': {name: 'Euskara'},
    'fa': {name: 'فارسی'},
    'fr': {name: 'Français'},
    'ga': {name: 'Gaeilge'},
    'gd': {name: 'Gàidhlig'},
    'gl': {name: 'Galego'},
    'ko': {name: '한국어'},
    'hy': {name: 'Հայերեն'},
    'he': {name: 'עִבְרִית'},
    'hr': {name: 'Hrvatski'},
    'zu': {name: 'isiZulu'},
    'is': {name: 'Íslenska'},
    'it': {name: 'Italiano'},
    'ka': {name: 'ქართული ენა'},
    'sw': {name: 'Kiswahili'},
    'ht': {name: 'Kreyòl ayisyen'},
    'ku': {name: 'Kurdî'},
    'ckb': {name: 'کوردیی ناوەندی'},
    'lv': {name: 'Latviešu'},
    'lt': {name: 'Lietuvių'},
    'hu': {name: 'Magyar'},
    'mi': {name: 'Māori'},
    'mn': {name: 'Монгол хэл'},
    'nl': {name: 'Nederlands'},
    'ja': {name: '日本語'},
    'ja-Hira': {name: 'にほんご'},
    'nb': {name: 'Norsk Bokmål'},
    'nn': {name: 'Norsk Nynorsk'},
    'uz': {name: 'Oʻzbekcha'},
    'th': {name: 'ไทย'},
    'km': {name: 'ភាសាខ្មែរ'},
    'pl': {name: 'Polski'},
    'pt': {name: 'Português'},
    'pt-br': {name: 'Português Brasileiro'},
    'rap': {name: 'Rapa Nui'},
    'ro': {name: 'Română'},
    'ru': {name: 'Русский'},
    'sr': {name: 'Српски'},
    'sk': {name: 'Slovenčina'},
    'sl': {name: 'Slovenščina'},
    'fi': {name: 'Suomi'},
    'sv': {name: 'Svenska'},
    'vi': {name: 'Tiếng Việt'},
    'tr': {name: 'Türkçe'},
    'uk': {name: 'Українська'},
    'zh-cn': {name: '简体中文'},
    'zh-tw': {name: '繁體中文'}
  }
};

if (!fs.existsSync(module.exports.IN_DIR)) {
  fs.mkdirSync(module.exports.IN_DIR);
}

if (!fs.existsSync(module.exports.OUT_DIR)) {
  fs.mkdirSync(module.exports.OUT_DIR);
}

if (!fs.existsSync(module.exports.LANGUAGES_DIR)) {
  fs.mkdirSync(module.exports.LANGUAGES_DIR);
}
