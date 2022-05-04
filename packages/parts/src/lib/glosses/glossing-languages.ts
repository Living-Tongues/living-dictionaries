// BCP 47 language codes are used to identify correct Keyman keyboards for language inputs
// Codes pulled from: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
// internalName pulled from: https://keyman.com > search for keyboard, select one with desktop and mobile web if possible, then copy Keyboard ID and add 'Keyboard_' to the beginning
// Latin script options: Keyboard_european, Keyboard_sil_euro_latin, Keyboard_basic_kbdus, Keyboard_us

import type { IGlossLanguages } from '@living-dictionaries/types';

export const glossingLanguages: IGlossLanguages = {
  en: {
    vernacularName: 'English',
    internalName: 'Keyboard_us',
  },
  ab: {
    vernacularName: 'аҧсуа бызшәа',
  },
  ace: {
    vernacularName: 'Basa Acèh',
  },
  ach: {
    vernacularName: 'Lwo',
  },
  aa: {
    vernacularName: 'Qafaraf',
    vernacularAlternate: 'Afaraf',
  },
  af: {
    internalName: 'Keyboard_european',
  },
  ak: {
    vernacularName: 'Akan',
  },
  akl: {
    vernacularName: 'Inakeanon',
  },
  sq: {
    vernacularName: 'gjuha shqipe',
  },
  am: {
    vernacularName: 'አማርኛ',
    vernacularAlternate: 'Amarəñña',
    internalName: 'Keyboard_gff_amharic',
    showKeyboard: true,
  },
  ar: {
    vernacularName: 'العَرَبِيَّة‎',
    internalName: 'Keyboard_sil_arabic_phonetic',
    showKeyboard: true,
  },
  hy: {
    vernacularName: 'Հայերէն',
  },
  as: {
    vernacularName: 'অসমীয়া',
    vernacularAlternate: 'Asamiya',
    internalName: 'Keyboard_isis_bangla',
    showKeyboard: true,
  },
  av: {
    vernacularName: 'Магӏарул мацӏ ',
    vernacularAlternate: 'Авар мацӏ',
  },
  ay: {
    vernacularName: 'Aymar aru',
    internalName: 'Keyboard_european2',
  },
  az: {
    vernacularName: 'Azərbaycan dili/Aзәрбајҹан дили',
    vernacularAlternate: 'آذربايجانجا ديلي',
  },
  bkr: {
    vernacularName: 'Bara-Jida',
    vernacularAlternate: 'Bakambai',
  },
  ban: {
    vernacularName: 'Basa Bali',
  },
  bal: {
    vernacularName: 'بلۏچی',
    vernacularAlternate: ' Balòci',
  },
  bm: {
    vernacularName: 'Bamanankan',
  },
  bjn: {
    vernacularName: 'Bahasa Banjar',
  },
  bfa: {
    vernacularName: 'Karo',
    vernacularAlternate: 'Kutuk na Bari',
  },
  eu: {
    vernacularName: 'Euskara',
  },
  bbc: {},
  be: {
    vernacularName: 'Беларуская мова',
    vernacularAlternate: 'Bielaruskaja mova',
  },
  bem: {
    vernacularName: 'ChiBemba',
  },
  bn: {
    vernacularName: 'বাংলা',
    vernacularAlternate: 'Bangla',
    internalName: 'Keyboard_bengali',
    showKeyboard: true,
  },
  bew: {
    vernacularName: 'Bahasa Betawi',
  },
  bhw: {
    vernacularName: 'wós vyak',
    vernacularAlternate: 'wós kovedi',
  },
  bik: {
    vernacularName: 'Bicol',
    vernacularAlternate: 'Bicol Naga',
  },
  bi: {},
  brx: {
    vernacularName: 'बड़ो',
  },
  bos: {
    vernacularName: 'Bosanski',
  },
  bug: {
    vernacularName: 'Basa Ugi',
  },
  bg: {},
  my: {
    vernacularName: 'မြန်မာစာ',
    vernacularAlternate: 'mranmabhasa',
    internalName: 'Keyboard_burmese02',
    showKeyboard: true,
  },
  yue: {
    vernacularName: '广东话',
    internalName: 'Keyboard_chinese',
    useKeyboard: 'cmn',
    showKeyboard: true,
  },
  ca: {
    vernacularName: 'català',
  },
  ceb: {
    vernacularName: 'Binisaya',
  },
  nya: {
    vernacularName: 'Chicheŵa',
  },
  cjk: {},
  chk: {
    vernacularName: 'Chuuk',
  },
  hr: {
    vernacularName: 'hrvatski',
  },
  cs: {
    vernacularName: 'čeština',
  },
  dga: {
    vernacularName: 'Dagaari',
  },
  dag: {
    vernacularName: 'Dagomba',
  },
  da: {
    vernacularName: 'dansk',
  },
  prs: {
    vernacularName: 'درى',
  },
  dv: {},
  din: {
    vernacularName: 'Thuɔŋjäŋ',
  },
  dgo: {
    vernacularName: 'डोगरी',
    vernacularAlternate: ' ڈوگری‬',
  },
  nl: {
    vernacularName: 'Nederlands',
    internalName: 'Keyboard_dutch',
    showKeyboard: true,
  },
  dyu: {
    vernacularName: 'Julakan',
  },
  dz: {},
  efi: {},
  ekg: {
    vernacularAlternate: 'Kapauku',
  },
  et: {
    vernacularName: 'eesti keel',
  },
  ee: {
    vernacularName: 'Eʋegbe',
  },
  ewo: {},
  fan: {
    vernacularName: 'Pangwe',
    vernacularAlternate: 'Pahouin',
  },
  fat: {
    vernacularName: 'Mfante',
  },
  fao: {
    vernacularName: 'føroyskt',
  },
  fj: {
    vernacularName: 'na vosa vaka-Viti',
  },
  fil: {
    vernacularName: 'Wikang Pilipino',
  },
  fi: {
    vernacularName: 'Suomen kieli',
  },
  fon: {
    vernacularName: 'Fɔngbè',
  },
  fr: {
    vernacularName: 'français',
    internalName: 'Keyboard_french',
    showKeyboard: true,
  },
  fry: {
    vernacularName: 'Frysk',
  },
  ff: {
    vernacularName: 'Fulfulde* ',
  },
  gaa: {
    vernacularName: 'Gã',
  },
  glg: {
    vernacularName: 'lingua Galega',
  },
  cab: {
    vernacularAlternate: "Kali'ina",
  },
  gba: {
    vernacularName: 'Ngbàkà',
    vernacularAlternate: 'Manza',
  },
  ka: {
    vernacularName: 'ქართული',
    vernacularAlternate: 'Kartuli',
    internalName: 'Keyboard_georgian',
    showKeyboard: true,
  },
  de: {
    vernacularName: 'Deutsch',
    internalName: 'Keyboard_european',
  },
  gjn: {
    vernacularName: 'Ngbanyito',
  },
  gor: {
    vernacularName: 'Gorontalo',
  },
  gux: {
    vernacularName: 'Gourmanchema',
  },
  el: {
    vernacularName: 'ελληνικά',
  },
  gn: {
    vernacularName: 'Guaraní',
    vernacularAlternate: 'avañe’ẽ',
    internalName: 'Keyboard_european',
  },
  pov: {
    vernacularName: 'Crioulo',
  },
  guj: {
    vernacularName: 'Gujarātī',
  },
  ha: {
    vernacularName: 'Harshen',
    vernacularAlternate: 'هَرْشَن هَوْسَ',
    internalName: 'Keyboard_naijanfd10',
    showKeyboard: true,
  },
  he: {
    vernacularName: 'עברית',
  },
  hz: {
    vernacularName: 'Otjiherero',
  },
  hi: {
    vernacularName: 'हिन्दी',
    vernacularAlternate: 'Hindī',
    internalName: 'Keyboard_dev_inscript',
    showKeyboard: true,
  },
  ho: {
    vernacularName: 'Hiri Motu',
  },
  hui: {
    vernacularName: 'Huli-Hulidana',
    vernacularAlternate: 'Huri',
  },
  hun: {
    vernacularName: 'Magyar',
  },
  iba: {
    vernacularName: 'jaku Iban',
  },
  ibg: {},
  ibb: {},
  is: {
    vernacularName: 'Íslenskt tungumál',
  },
  ig: {
    vernacularName: 'Asụsụ Igbo',
    internalName: 'Keyboard_naijanfd10',
    showKeyboard: true,
  },
  ilo: {
    vernacularName: 'Iloko ',
    vernacularAlternate: 'Pagsasao nga Ilokano',
  },
  id: {
    vernacularName: 'Bahasa Indonesia',
    internalName: 'Keyboard_basic_kbdus',
  },
  gle: {
    vernacularName: 'Gaeilge',
  },
  it: {
    vernacularName: 'Italiano',
  },
  ja: {
    vernacularName: '日本語',
    vernacularAlternate: 'Nihongo',
    internalName: 'Keyboard_japanese',
    showKeyboard: true,
  },
  jav: {
    vernacularName: 'wong jawa',
    vernacularAlternate: 'boso jowo (jawa)',
  },
  dyo: {
    vernacularName: 'Kujóolay',
  },
  kac: {
    vernacularName: 'Jìngphòʔ gà',
    vernacularAlternate: 'ဈိာင်ေဖါစ်',
  },
  lew: {
    vernacularName: 'Ledo Kaili',
    vernacularAlternate: 'Palu',
  },
  kl: {
    vernacularName: 'Kalaallisut',
  },
  kn: {
    vernacularName: 'ಕನ್ನಡ',
  },
  kr: {},
  pam: {},
  kaa: {
    vernacularName: 'Қарақалпақ тили / Qaraqalpaq tili',
    vernacularAlternate: 'قاراقالپاق تىلى',
  },
  xsm: {
    vernacularAlternate: 'Kasena',
  },
  ks: {
    vernacularName: 'कॉशुर ',
    vernacularAlternate: 'كٲشُر',
  },
  kmg: {},
  kk: {
    vernacularName: 'Қазақ тілі / Qazaq tili',
    vernacularAlternate: 'قازاق ٴتىلى',
  },
  knx: {
    vernacularName: 'Kanayatn',
    vernacularAlternate: 'Bahasa Badameà  (Ahe, Banana, Belangin, etc.)',
  },
  kha: {
    vernacularName: 'Ka Ktien Khasi',
  },
  km: {
    vernacularName: 'ភាសាខ្មែរ',
    vernacularAlternate: 'Cambodian',
    internalName: 'Keyboard_khmer10',
    showKeyboard: true,
  },
  khw: {
    vernacularName: 'کھووار',
  },
  ki: {
    vernacularName: 'Gĩkũyũ',
  },
  kmb: {},
  krj: {
    vernacularName: 'Kinaray-a',
  },
  rw: {
    vernacularName: 'Kinyarwanda',
  },
  gil: {
    vernacularName: 'Taetae ni Kiribati',
  },
  rn: {
    vernacularName: 'Kirundi',
  },
  ktu: {
    vernacularName: 'Kikongo ya leta',
  },
  kg: {
    vernacularName: 'Kikongo',
  },
  knn: {
    vernacularName: 'कोंकणी / ಕೊಂಕಣಿ ',
    vernacularAlternate: 'കൊങ്കണി / كونكڼى',
  },
  ko: {
    vernacularName: '한국어 ',
    vernacularAlternate: '조선말',
  },
  kos: {
    vernacularName: 'Kusaie',
    vernacularAlternate: 'Kosrae',
  },
  kri: {},
  rop: {},
  bzj: {},
  kun: {},
  ku: {
    vernacularName: 'Kurdî',
    vernacularAlternate: 'کوردی',
  },
  kru: {
    vernacularName: 'कुड़ुख़',
  },
  kj: {
    vernacularName: 'Oshikwanyama',
    vernacularAlternate: 'Oshindonga',
  },
  ky: {
    vernacularName: 'Kyrgyz tili / Кыргыз тили ',
    vernacularAlternate: 'قىرعىز تىلى',
  },
  lbj: {
    vernacularName: 'ལ་དྭགས་སྐད་',
  },
  slp: {},
  lo: {
    vernacularName: 'ພາສາລາວ',
    vernacularAlternate: 'phasa lao',
    internalName: 'Keyboard_lao_2008_basic',
    showKeyboard: true,
  },
  lv: {
    vernacularName: 'latviešu valoda',
  },
  lir: {
    vernacularName: 'Kolokwa',
    vernacularAlternate: 'Kreyol',
  },
  lin: {
    vernacularName: 'Lingála',
  },
  lt: {
    vernacularName: 'lietuvių kalba',
  },
  lg: {
    vernacularName: 'Oluganda',
  },
  luo: {
    vernacularAlternate: 'Dholuo',
  },
  ltz: {
    vernacularName: 'Lëtzebuergesch',
  },
  mas: {
    vernacularName: 'ɔl Maa',
  },
  mkd: {
    vernacularName: 'македонски',
  },
  mad: {
    vernacularName: 'Basa Mathura',
  },
  mdh: {},
  mai: {
    vernacularName: 'मैथिलि',
  },
  mak: {
    vernacularName: "Basa Mangksara'",
  },
  mg: {
    vernacularName: 'Fiteny Malagasy',
  },
  ms: {
    vernacularName: 'Bahasa Melayu',
    vernacularAlternate: ' بهاس ملايو',
  },
  ml: {
    vernacularName: 'മലയാളം',
  },
  mlt: {
    vernacularName: 'Malti',
  },
  xmm: {
    vernacularName: 'Bahasa Manado',
    vernacularAlternate: 'Minahasa Malay',
  },
  tbf: {
    vernacularAlternate: 'Wandala',
  },
  cmn: {
    vernacularName: '官话',
    internalName: 'Keyboard_chinese',
    showKeyboard: true,
  },
  mnk: {
    vernacularName: 'Mandinka kango',
  },
  mqy: {},
  mni: {
    vernacularName: 'Meeteilon ',
    vernacularAlternate: 'Meithei',
  },
  mri: {
    vernacularName: 'te reo Māori',
  },
  mrw: {
    vernacularName: 'Mëranaw',
  },
  mr: {
    vernacularName: 'मराठी',
    vernacularAlternate: 'Marāṭhī',
    internalName: 'Keyboard_marathi',
    showKeyboard: true,
  },
  mah: {
    vernacularName: 'Kajin Majōl',
  },
  men: {
    vernacularName: 'Mɛnde yia',
  },
  min: {
    vernacularName: 'Baso Minangkabau ',
    vernacularAlternate: 'باسو مينڠكاباو',
  },
  miq: {
    vernacularName: 'Mískitu',
  },
  lus: {
    vernacularName: 'Mizo ṭawng',
  },
  mos: {
    vernacularName: 'Mòoré',
  },
  mon: {
    vernacularName: 'ဘာသာ မန်;',
  },
  mn: {
    vernacularName: 'монгол',
  },
  mui: {
    vernacularAlternate: 'Palembang',
  },
  naq: {
    vernacularName: 'Khoekhoegowab',
  },
  nau: {
    vernacularName: 'dorerin Naoero',
  },
  ne: {
    vernacularName: 'नेपाली/खस कुरा',
    vernacularAlternate: 'Gorkhali, Khas-Kura',
    internalName: 'Keyboard_dev_inscript',
    useKeyboard: 'hi',
    showKeyboard: true,
  },
  new: {
    vernacularName: 'नेपाल भाषा',
  },
  nij: {
    vernacularName: 'Dayak Ngaju',
  },
  sba: {},
  yrl: {},
  nia: {},
  max: {},
  nde: {
    vernacularName: 'Sindebele/isiNdebele',
  },
  sme: {
    vernacularName: 'davvisámegiella',
  },
  nso: {
    vernacularName: 'Sesotho sa leboa/Sepedi',
  },
  nod: {
    vernacularName: "Kam Mu'ang/คำเมือง",
  },
  no: {
    vernacularName: 'norsk',
  },
  nus: {
    vernacularName: 'Thok Naath',
  },
  nzi: {
    vernacularName: 'Nzema',
  },
  oci: {
    vernacularName: "lenga d'òc",
  },
  or: {
    vernacularName: 'ଓଡ଼ିଆ',
    vernacularAlternate: 'Oṛiā, Odia',
    internalName: 'Keyboard_isis_oriya',
    showKeyboard: true,
  },
  om: {
    vernacularName: 'Afaan Oromoo',
  },
  pau: {
    vernacularName: 'a tekoi er a Belau',
  },
  pag: {
    vernacularName: 'Salitan Pangasinan',
  },
  pap: {
    vernacularAlternate: 'Papiamentu',
  },
  pmy: {},
  ps: {
    vernacularName: 'پښتو',
  },
  fa: {
    vernacularName: 'فارسی',
    vernacularAlternate: 'Farsi',
    internalName: 'Keyboard_dari_clra',
    showKeyboard: true,
  },
  pis: {
    vernacularName: 'Pijin/Pisin',
  },
  pon: {
    vernacularName: 'Pohnpei',
  },
  pol: {
    vernacularName: 'polski',
  },
  pt: {
    vernacularName: 'português',
    internalName: 'Keyboard_portuguese',
    showKeyboard: true,
  },
  fuc: {
    vernacularName: 'Pulaar',
  },
  fuf: {
    vernacularName: 'Pular',
  },
  pa: {
    vernacularName: 'ਪੰਜਾਬੀ',
    vernacularAlternate: 'پن٘جابی',
    internalName: 'Keyboard_isis_gurmukhi',
    showKeyboard: true,
  },
  qu: {
    vernacularName: 'Runa Simi',
    internalName: 'Keyboard_european',
  },
  rki: {
    vernacularName: ' ra.hkuing bhasa',
    vernacularAlternate: 'ရခိုင်ဘာသာ',
  },
  ron: {
    vernacularName: 'limba română',
  },
  rm: {
    vernacularName: 'aka Rumantsch',
  },
  ru: {
    vernacularName: 'русский',
    vernacularAlternate: 'язык',
    internalName: 'Keyboard_russian',
    showKeyboard: true,
  },
  sbl: {
    vernacularName: 'Sambali',
  },
  sag: {
    vernacularName: 'jáŋɡá tí sāŋɡō',
  },
  sat: {
    vernacularName: 'hoɽ roɽ',
  },
  mwm: {},
  srm: {
    vernacularName: 'Saamáka',
  },
  sas: {
    vernacularName: 'Base Sasak',
  },
  srr: {
    vernacularName: 'Seereer',
  },
  'seh ': {
    vernacularName: 'Chisena',
    vernacularAlternate: 'Chibarwe',
  },
  srp: {
    vernacularName: 'српски',
    vernacularAlternate: 'srpski',
  },
  shn: {
    vernacularName: 'kwam tai',
  },
  sal: {
    vernacularName: 'ݜینا',
    vernacularAlternate: 'षीना ',
  },
  sn: {
    vernacularName: 'Shona',
    internalName: 'Keyboard_us',
  },
  jiv: {
    vernacularAlternate: 'Jivaro',
  },
  ii: {
    vernacularName: 'ꆈꌠ꒿ ',
    vernacularAlternate: 'Nuosuhxop',
  },
  sid: {
    vernacularName: 'Sidaama',
    vernacularAlternate: 'Sidaam-u afo',
  },
  snd: {
    vernacularName: 'سنڌي',
    vernacularAlternate: 'सिंधी, ਸਿੰਧੀ',
  },
  sin: {
    vernacularName: 'සිංහල',
  },
  slk: {
    vernacularName: 'Slovenský',
  },
  slv: {
    vernacularName: 'Slovenski',
  },
  so: {
    vernacularName: 'af Soomaali',
    vernacularAlternate: 'اَف صَومالي˜',
  },
  snk: {
    vernacularName: 'Sooninkanxanne',
  },
  nbl: {
    vernacularName: 'isiNdebele',
  },
  st: {
    vernacularName: 'seSotho',
  },
  es: {
    vernacularName: 'español',
    vernacularAlternate: 'castellano',
    internalName: 'Keyboard_spanish',
    showKeyboard: true,
  },
  srn: {
    vernacularName: 'Sranan Tongo',
  },
  sun: {
    vernacularName: 'Basa sunda',
  },
  sw: {
    vernacularName: 'Kiswahili',
    internalName: 'Keyboard_basic_kbdus',
  },
  ss: {
    vernacularName: 'siSwati',
  },
  sv: {
    vernacularName: 'Svenska språk',
  },
  tl: {
    vernacularName: 'Wikang Tagalog',
    internalName: 'Keyboard_basic_kbdus',
  },
  tg: {
    vernacularName: 'Тоҷики',
    vernacularAlternate: 'تاجيكى',
  },
  tzm: {
    vernacularName: 'Tamaziɣt',
  },
  ta: {
    vernacularName: 'தமிழ்',
    internalName: 'Keyboard_tamil',
    showKeyboard: true,
  },
  tsg: {
    vernacularName: 'bahasa Sūg',
  },
  te: {
    vernacularName: 'తెలుగు',
    internalName: 'Keyboard_telugu',
    showKeyboard: true,
  },
  tem: {
    vernacularName: 'KʌThemnɛ',
  },
  tft: {},
  tet: {
    vernacularName: 'Lia-Tetun',
  },
  th: {
    vernacularName: 'ภาษาไทย',
    vernacularAlternate: 'Phasa Thai',
    internalName: 'Keyboard_thai_kedmanee',
    showKeyboard: true,
  },
  bo: {
    vernacularName: 'ལྷ་སའི་སྐད་',
    vernacularAlternate: 'བོད་སྐད',
    internalName: 'Keyboard_basic_kbdtiprd',
    useKeyboard: 'bo-Tibt-CN',
    showKeyboard: true,
  },
  tvo: {},
  tig: {
    vernacularName: 'ትግረ / ትግሬ',
    vernacularAlternate: 'ኻሳ',
  },
  ti: {
    vernacularName: 'ትግርኛ',
  },
  tiv: {
    vernacularName: 'dzwa Tiv',
  },
  tpi: {
    vernacularName: 'Pijin',
    internalName: 'Keyboard_european',
  },
  toi: {
    vernacularName: 'Chitonga',
  },
  ton: {
    vernacularName: 'Lea Fakatonga',
  },
  tcs: {
    vernacularName: 'Yumplatok',
  },
  lua: {
    vernacularName: 'Luba-Kasai',
    vernacularAlternate: 'Luba-Lulua',
  },
  ts: {
    vernacularName: 'Xitsonga',
  },
  tn: {
    vernacularName: 'Setswana',
  },
  tuo: {
    vernacularName: 'Dahseyé',
  },
  tr: {
    vernacularName: 'Türkçe',
  },
  tk: {
    vernacularName: 'Түркмен дили',
  },
  tvl: {
    vernacularName: "Te 'gana Tūvalu",
  },
  tw: {},
  uk: {
    vernacularName: 'Українська мова',
  },
  umb: {},
  ur: {
    vernacularName: 'اُردُو',
    internalName: 'Keyboard_kbdurdu',
    showKeyboard: true,
  },
  ug: {
    vernacularName: 'ئۇيغۇرچە ',
    vernacularAlternate: 'Уйғурчә / Uyghurche',
  },
  uzb: {
    vernacularName: "O'zbek tili",
  },
  ven: {
    vernacularName: 'Tshivenda',
  },
  vi: {
    vernacularName: 'tiếng Việt',
    internalName: 'Keyboard_vietnamese',
    showKeyboard: true,
  },
  war: {
    vernacularName: 'Waray Waray',
  },
  cym: {
    vernacularName: 'Cymraeg',
  },
  wlo: {},
  wo: {
    vernacularName: 'Wollof',
  },
  wuu: {
    vernacularName: '吴语',
    internalName: 'Keyboard_chinese',
    useKeyboard: 'cmn',
    showKeyboard: true,
  },
  xho: {
    vernacularName: 'IsiXhosa',
  },
  jae: {
    vernacularName: 'Jabêm',
  },
  yka: {
    vernacularName: 'Bissa Yakan',
  },
  sah: {
    vernacularName: 'саха тыла',
  },
  yap: {
    vernacularName: 'Waab',
  },
  yo: {
    vernacularName: 'Èdè Yorùbá',
    internalName: 'Keyboard_yorubadot',
    showKeyboard: true,
  },
  dje: {
    vernacularName: 'Zarmaciine',
  },
  zu: {
    vernacularName: 'isiZulu',
  },
};
