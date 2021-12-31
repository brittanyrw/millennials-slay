export interface Industry {
  name: string;
  image: string;
  type: Type;
  origin: Origin;
  summary: string;
  sources: Source[];
}

export type Type = "product" | "activity" | "tradition" | "location";

export interface Origin {
  year: string;
  link: string;
}

export interface Source {
  name: Media;
  year: number;
  link: string;
  reaction?: string;
}

export type Media =
  | "ABC 10"
  | "Apartment Therapy"
  | "The Atlantic"
  | "Bloomberg"
  | "Business Insider"
  | "Bustle"
  | "BuzzFeed"
  | "Caribbean News Service"
  | "CB Insights"
  | "CBS News"
  | "CNBC"
  | "CNET"
  | "CS Monitor"
  | "The Cut"
  | "The Daily Beast"
  | "The Drive"
  | "E-Merchant Broker"
  | "Elle"
  | "Entrepreneur"
  | "Esquire"
  | "European Council on Foreign Relations"
  | "F Newsmagazine"
  | "Fast Company"
  | "Florida Today"
  | "Forbes"
  | "Fortune"
  | "The Globe and Mail"
  | "Good Housekeeping"
  | "Hotel Executive"
  | "Houston Chronicle"
  | "HR Technologist"
  | "HuffPost"
  | "Inc"
  | "Inside Out"
  | "KRWG"
  | "Live Mint"
  | "MarketWatch"
  | "Marketscale"
  | "Mashable"
  | "Metro"
  | "Money and Markets"
  | "Moneywise"
  | "My Recipes"
  | "NBC News"
  | "New Boston Post"
  | "New York Times"
  | "New Zealand Herald"
  | "Notable Life"
  | "NY Post"
  | "Nylon"
  | "Observer"
  | "OilPrice"
  | "Philadelphia"
  | "PR Week"
  | "Refinery29"
  | "Restaurant Business Online"
  | "Reuters"
  | "RigZone"
  | "Savings"
  | "Southern Living"
  | "Sportico"
  | "The Streamable"
  | "TechCrunch"
  | "ThoughtMatter"
  | "Time"
  | "Today"
  | "Transfers Magazine"
  | "The Tyee"
  | "USA Today"
  | "Venture Beat"
  | "View the Vibe"
  | "Wall Street Journal"
  | "Washington Post"
  | "We Forum"
  | "Willamette Week"
  | "Yahoo! News";

export const industries: Industry[] = [
  {
    name: "Doorbells",
    image: "door",
    type: "product",
    origin: {
      year: "in 1817",
      link: "https://en.wikipedia.org/wiki/Doorbell#:~:text=William%20Murdoch%2C%20a%20Scottish%20inventor%2C%20installed%20a%20number%20of%20his%20own%20innovations%20in%20his%20house%2C%20built%20in%20Birmingham%20in%201817%3B%20one%20of%20these%20was%20a%20loud%20doorbell%2C%20that%20worked%20using%20a%20piped%20system%20of%20compressed%20air.",
    },
    summary:
      "Apparently startling someone in their home is preferred over giving a gentle heads up via text.",
    sources: [
      {
        name: "Wall Street Journal",
        year: 2017,
        link: "https://www.wsj.com/articles/ask-not-for-whom-the-doorbell-tolls-they-wont-answer-it-1503864316",
      },
      {
        name: "BuzzFeed",
        year: 2019,
        link: "https://buzzfeed.com/aliciabarron/tk-hilarious-reasons-why-millennials-are-now-terrified-to",
      },
      {
        name: "Today",
        year: 2019,
        link: "https://www.today.com/home/millennials-explain-why-they-don-t-use-doorbells-anymore-t155530",
      },
      {
        name: "Apartment Therapy",
        year: 2017,
        link: "https://www.apartmenttherapy.com/millennials-are-killing-doorbells-amp-honestly-good-riddance-249740",
      },
    ],
  },
  {
    name: "Fabric Softener",
    image: "basket",
    type: "product",
    origin: {
      year: "in the early 20th century",
      link: "https://montrealgazette.com/opinion/columnists/the-right-chemistry-the-pros-and-cons-of-fabric-softeners#:~:text=Historically%2C%20fabric%20softeners%20first%20appeared%20in%20the%20early%2020th%20century%2C%20introduced%20because%20the%20dyes%20used%20back%20then%20left%20cotton%20fabrics%20with%20a%20harsh%20feel.",
    },
    summary: "Mmmmm...smells like clothes drenched in chemicals.",
    sources: [
      {
        name: "Wall Street Journal",
        year: 2016,
        link: "https://www.wsj.com/articles/fabric-softener-sales-are-losing-their-bounce-1481889602",
      },
      {
        name: "KRWG",
        year: 2019,
        link: "https://www.krwg.org/post/fabric-softeners-and-millennials-best-laid-plans-marketing-peskiest-generation",
      },
    ],
  },
  {
    name: "Fashion Industry",
    image: "dress",
    type: "product",
    origin: {
      year: "in the early 20th century",
      link: "https://en.wikipedia.org/wiki/Clothing_industry",
    },
    summary: "Florals...for spring? Groundbreaking.",
    sources: [
      {
        name: "Nylon",
        year: 2017,
        link: "https://www.nylon.com/articles/why-did-j-crew-die-millennials/amp",
      },
      {
        name: "ThoughtMatter",
        year: 2018,
        link: "https://medium.com/thoughtmatter/millennials-are-killing-high-fashion-e0fdaae2b0f6",
      },
      {
        name: "View the Vibe",
        year: 2015,
        link: "https://viewthevibe.com/millennials-fashion/",
      },
    ],
  },
  {
    name: "Soda",
    image: "cup-with-straw",
    type: "product",
    origin: {
      year: "in 1783",
      link: "https://en.wikipedia.org/wiki/Soft_drink#:~:text=with%20one%20such%20inventor%2C%20J.%20J.%20Schweppe%2C%20forming%20Schweppes%20in%201783%20and%20selling%20the%20world%27s%20first%20bottled%20soft%20drink.%5B4%5D%5B5%5D",
    },
    summary: "Healthier options claims another victim.",
    sources: [
      {
        name: "Observer",
        year: 2019,
        link: "https://observer.com/2019/02/millennials-killing-coca-cola/",
      },
      {
        name: "ABC 10",
        year: 2019,
        link: "https://www.abc10.com/article/news/millennials-are-killingsoda/103-3cd11d21-a99c-4a0f-bc82-8094948d5952",
      },
    ],
  },
  {
    name: "Stilettos",
    image: "high-heeled-shoe",
    type: "product",
    origin: {
      year: "in 1953",
      link: "https://en.wikipedia.org/wiki/Stiletto_heel#:~:text=French%20designers%20such%20as%20Roger%20Vivier%20and%20Andr%C3%A9%20Perugia%20popularized%20the%20stiletto%20design%20in%20the%201950s%2C%20which%20quickly%20spread%20across%20Europe%20and%20the%20United%20States.",
    },
    summary: "Chronic foot pain ftw.",
    sources: [
      {
        name: "Elle",
        year: 2016,
        link: "https://www.elle.com/fashion/a35864/how-athleisure-killed-the-stiletto/",
      },
    ],
  },
  {
    name: "Stoves",
    image: "fire",
    type: "product",
    origin: {
      year: "in 1735",
      link: "https://en.wikipedia.org/wiki/Stove#:~:text=Traditionally%20these%20have%20been%20fueled%20by%20wood%2C%20and%20one%20of%20the%20earliest%20recorded%20instances%20of%20a%20wood%2Dburning%20kitchen%20stove%20was%20the%20so%2Dcalled%20stew%20stove%20(developed%20in%201735%20by%20the%20French%20designer%20Fran%C3%A7ois%20de%20Cuvilli%C3%A9s%20and%20officially%20termed%20the%20Castrol%20Stove).",
    },
    summary: "We only cook over open flames.",
    sources: [
      {
        name: "Forbes",
        year: 2018,
        link: "https://www.forbes.com/sites/andriacheng/2018/06/26/millennials-are-ordering-food-for-delivery-more-but-are-they-killing-the-kitchen-too/?utm_source=TWITTER&utm_medium=social&utm_content=1621513402&utm_campaign=sprinklrForbesMainTwitter&sh=16471742393e",
      },
    ],
  },
  {
    name: "Toys",
    image: "teddy-bear",
    type: "product",
    origin: {
      year: "in prehistoric times",
      link: "https://en.wikipedia.org/wiki/Toy#:~:text=The%20origin%20of%20toys%20is%20prehistoric%3B%20dolls%20representing%20infants%2C%20animals%2C%20and%20soldiers%2C%20as%20well%20as%20representations%20of%20tools%20used%20by%20adults%20are%20readily%20found%20at%20archaeological%20sites.",
    },
    summary: "If Furbies are discontinued why have toys at all?",
    sources: [
      {
        name: "Florida Today",
        year: 2018,
        link: "https://amp.floridatoday.com/amp/445823002",
      },
    ],
  },
  {
    name: "Wine Corks",
    image: "wine-glass",
    type: "product",
    origin: {
      year: "in the 1600s",
      link: "https://en.wikipedia.org/wiki/Wine_cork#:~:text=The%20inventor%20of%20cork%2Dbased%20wine%20stoppers%20is%20unknown.%20Colloquial%20stories%20attribute%20the%20Benedictine%20monk%20Dom%20P%C3%A9rignon.%20The%20stoppers%20date%20to%20about%20the%201600s.",
    },
    summary:
      "We're definitely evil for liking easier, non-contaminating methods of sealing bottles that were invented before most of us could legally drink.",
    sources: [
      {
        name: "The Atlantic",
        year: 2016,
        link: "https://www.theatlantic.com/technology/archive/2016/02/wine-cork-comeback/470961/",
        reaction: "eye-roll",
      },
    ],
  },
  {
    name: "Movies",
    image: "film-frames",
    type: "activity",
    origin: {
      year: "in 1888",
      link: "https://en.wikipedia.org/wiki/History_of_film#:~:text=On%2010%20January%201888%2C%20the%20French%20artist%20and%20inventor%20Louis%20Le%20Prince%20registered%20the%20first%20British%20patent%20for%20a%20camera%20that%20was%20capable%20of%20filming%20motion.%5B21%5D%20He%20recorded%20the%20earliest%20known%20motion%20picture%20in%20extant%20on%2014%20October%201888.",
    },
    summary: "Make better movies then.",
    sources: [
      {
        name: "CNET",
        year: 2021,
        link: "https://www.cnet.com/news/ridley-scott-blames-millennials-for-the-box-office-failure-of-the-last-duel/",
        reaction: "eye-roll",
      },
      {
        name: "NY Post",
        year: 2016,
        link: "https://nypost.com/2016/04/15/millennials-are-killing-the-movie-business/",
      },
      {
        name: "The Atlantic",
        year: 2016,
        link: "https://www.theatlantic.com/business/archive/2016/06/hollywood-has-a-huge-millennial-problem/486209/",
      },
      {
        name: "The Tyee",
        year: 2019,
        link: "https://thetyee.ca/Culture/2019/03/20/Millennials-Killed-Classic-Cinema/",
      },
    ],
  },
  {
    name: "The Olympics",
    image: "sports-medal",
    type: "activity",
    origin: {
      year: "in 776 BC",
      link: "https://en.wikipedia.org/wiki/Ancient_Olympic_Games#:~:text=The%20first%20Olympic%20Games%20are%20traditionally%20dated%20to%20776%20BC.",
    },
    summary: "",
    sources: [
      {
        name: "Bloomberg",
        year: 2016,
        link: "http://www.bloomberg.com/news/articles/2016-08-19/nbc-s-12-billion-olympics-bet-stumbles-thanks-to-millennials?curator=MediaREDEF",
      },
      {
        name: "Esquire",
        year: 2016,
        link: "https://www.esquire.com/sports/news/a47918/plummeting-olympics/",
      },
      {
        name: "Sportico",
        year: 2021,
        link: "https://www.sportico.com/business/media/2021/millennials-cable-sports-future-1234627516/",
      },
    ],
  },
  {
    name: "Mayonnaise",
    image: "white-circle",
    type: "product",
    origin: {
      year: "in 1815",
      link: "https://en.wikipedia.org/wiki/Mayonnaise#:~:text=It%20is%20only%20in%201815%20that%20Antonin%20Car%C3%AAme%20mentions%20a%20cold%20%22magnonaise%22%20emulsified%20with%20egg%20yolk.%20The%20word%20%22mayonnaise%22%20is%20attested%20in%20English%20in%201815.",
    },
    summary: "RIP.",
    sources: [
      {
        name: "Philadelphia",
        year: 2018,
        link: "https://www.phillymag.com/news/2018/08/11/mayonnaise-industry-millennials/#8Qe1kpK6vsPplpl9.99",
        reaction: "eye-roll",
      },
      {
        name: "New Zealand Herald",
        year: 2001,
        link: "https://www.nzherald.co.nz/lifestyle/claims-millennials-killed-mayonnaise-sparks-fury/TOEPHXA7EGE6VBJGV6FESTTML4/",
      },
    ],
  },
  {
    name: "Large Turkeys",
    image: "turkey",
    type: "product",
    origin: {
      year: "20 million years ago",
      link: "https://en.wikipedia.org/wiki/Turkey_(bird)#:~:text=The%20earliest%20turkeys%20evolved%20in%20North%20America%20over%2020%20million%20years%20ago%20and%20they%20share%20a%20recent%20common%20ancestor%20with%20grouse%2C%20pheasants%2C%20and%20other%20fowl.",
    },
    summary:
      "'Turkeys bred in the industrial farming industry so that they're two times the size they would normally be' just doesn't roll off the tongue, you know?",
    sources: [
      {
        name: "Bloomberg",
        year: 2018,
        link: "https://www.bloomberg.com/news/articles/2018-11-15/millennials-are-disrupting-thanksgiving-with-their-tiny-turkeys",
      },
      {
        name: "Refinery29",
        year: 2018,
        link: "https://www.refinery29.com/en-us/2018/11/217206/small-turkey-millennial-thanksgiving-trend",
      },
    ],
  },
  {
    name: "Sitcoms",
    image: "rolling-on-the-floor-laughing",
    type: "product",
    origin: {
      year: "in 1946",
      link: "https://en.wikipedia.org/wiki/Sitcom#:~:text=There%20were%20prior%20examples%20on%20radio%2C%20but%20the%20first%20television%20sitcom%20is%20said%20to%20be%20Pinwright%27s%20Progress%2C%20ten%20episodes%20being%20broadcast%20on%20the%20BBC%20in%20the%20United%20Kingdom%20between%201946%20and%201947.",
    },
    summary: "Give us one with realistic apartments.",
    sources: [
      {
        name: "Refinery29",
        year: 2015,
        link: "https://www.refinery29.com/en-us/2015/09/94322/hangout-sitcoms-friends",
      },
    ],
  },
  {
    name: "Gyms",
    image: "woman-lifting-weights-medium-dark-skin-tone",
    type: "location",
    origin: {
      year: "over 3000 years ago",
      link: "https://en.wikipedia.org/wiki/Gym#:~:text=The%20first%20recorded%20gymnasiums%20date%20back%20to%20over%203000%20years%20ago%20in%20ancient%20Persia%2C%20where%20they%20were%20known%20as%20zurkhaneh%2C%20areas%20that%20encouraged%20physical%20fitness.",
    },
    summary:
      "How dare millennials prefer tech-savvy, updated specialized facilities.",
    sources: [
      {
        name: "ABC 10",
        year: 2019,
        link: "https://www.abc10.com/article/life/millennials-are-killinggyms/103-09fa19a7-e011-40f1-8438-d1932884e376",
      },
      {
        name: "NY Post",
        year: 2016,
        link: "https://nypost.com/2016/10/17/millennials-are-killing-gyms-too/",
      },
      {
        name: "Venture Beat",
        year: 2020,
        link: "https://venturebeat.com/2020/06/28/how-coronavirus-and-millennials-killed-the-non-digital-gym/",
      },
      {
        name: "CB Insights",
        year: 2020,
        link: "https://www.cbinsights.com/research/millennials-killing-industries/",
      },
    ],
  },
  {
    name: "Newspaper",
    image: "newspaper",
    type: "product",
    origin: {
      year: "in 1566",
      link: "https://en.wikipedia.org/wiki/History_of_newspaper_publishing#:~:text=The%20modern%20newspaper%20is%20a%20European%20invention.%5B1%5D%20The%20oldest%20direct%20handwritten%20news%20sheets%20that%20circulated%20widely%20in%20Venice%20as%20early%20as%201566.",
    },
    summary: "Not our fault they cant keep up with technology.",
    sources: [
      {
        name: "Reuters",
        year: 2019,
        link: "https://www.reutersagency.com/en/reuters-community/millennials-killed-print-will-gen-z-revive-it/",
      },
    ],
  },
  {
    name: "American Dream",
    image: "flag-united-states",
    type: "tradition",
    origin: {
      year: "in 1931",
      link: "https://en.wikipedia.org/wiki/American_Dream#:~:text=The%20term%20%22American%20Dream%22%20was%20coined%20by%20James%20Truslow%20Adams%20in%201931%2C%20saying%20that%20%22life%20should%20be%20better%20and%20richer%20and%20fuller%20for%20everyone%2C%20with%20opportunity%20for%20each%20according%20to%20ability%20or%20achievement%22%20regardless%20of%20social%20class%20or%20circumstances%20of%20birth.%5B1%5D",
    },
    summary: "Why support something you can never achieve?",
    sources: [
      {
        name: "Washington Post",
        year: 2015,
        link: "https://www.washingtonpost.com/news/the-fix/wp/2015/12/10/48-percent-of-millennials-think-the-american-dream-is-dead-heres-why/",
      },
    ],
  },
  {
    name: "Oil",
    image: "oil-drum",
    type: "product",
    origin: {
      year: "in 1859",
      link: "https://www.acs.org/content/acs/en/education/whatischemistry/landmarks/pennsylvaniaoilindustry.html#:~:text=On%20this%20site%20Edwin%20Drake,to%20treat%20rheumatism%20and%20sprains.",
    },
    summary: "It would be a good thing??",
    sources: [
      {
        name: "RigZone",
        year: 2019,
        link: "https://www.rigzone.com/news/wire/oil_has_a_millennial_problem-02-aug-2019-159469-article/?amp",
      },
      {
        name: "OilPrice",
        year: 2016,
        link: "https://oilprice.com/Energy/Energy-General/How-Millennials-Could-Bring-The-Oil-Industry-To-Its-Knees.html",
      },
    ],
  },
  {
    name: "Brunch",
    image: "pancakes",
    type: "tradition",
    origin: {
      year: "in 1895",
      link: "https://en.wikipedia.org/wiki/Brunch#:~:text=the%20term%20was%20coined%20in%20Britain%20in%201895%20to%20describe%20a%20Sunday%20meal%20for%20%22Saturday%2Dnight%20carousers%22",
    },
    summary: "Millennials are the ones holding up this industry tbh.",
    sources: [
      {
        name: "NY Post",
        year: 2017,
        link: "https://nypost.com/2017/03/23/millennials-have-officially-ruined-brunch/",
      },
    ],
  },
  {
    name: "Running",
    image: "person-running-medium-skin-tone",
    type: "activity",
    origin: {
      year: "in 632 BCE",
      link: "https://en.wikipedia.org/wiki/Running#:~:text=Records%20of%20competitive%20racing%20date%20back%20to%20the%20Tailteann%20Games%20in%20Ireland%20between%20632%20BCE%20and%201171%20BCE%2C%5B6%5D%5B7%5D%5B8%5D%20while%20the%20first%20recorded%20Olympic%20Games%20took%20place%20in%20776%20BCE.%20Running%20has%20been%20described%20as%20the%20world%27s%20most%20accessible%20sport.%5B9%5D",
    },
    summary: "Too busy running from the cops to do it for fun.",
    sources: [
      {
        name: "Wall Street Journal",
        year: 2016,
        link: "https://www.wsj.com/articles/how-millennials-ended-the-running-boom-1462473195",
      },
    ],
  },
  {
    name: "Baby Names",
    image: "baby-medium-skin-tone",
    type: "tradition",
    origin: {
      year: "30,000 years ago",
      link: "https://www.nationalgeographic.com/science/article/whos-the-first-person-in-history-whose-name-we-know#:~:text=This%20was%2030%2C000%20years%20ago.%20Writing%20hadn%E2%80%99t%20been%20invented%2C%20so%20they%20couldn%E2%80%99t%20chalk%20their%20names%20on%20the%20rock.",
    },
    summary: "No babies have been named since.",
    sources: [
      {
        name: "Time",
        year: 2016,
        link: "https://time.com/4511927/millennials-parents-baby-names/?iid=sr-link4",
      },
      {
        name: "Good Housekeeping",
        year: 2020,
        link: "https://www.goodhousekeeping.com/life/parenting/a31213216/grandparents-hate-millennial-baby-names/",
      },
    ],
  },
  {
    name: "Office Dress Codes",
    image: "t-shirt",
    type: "tradition",
    origin: {
      year: "in the early 20th century",
      link: "https://www.insider.com/how-the-way-we-dress-for-work-has-changed-2019-2#throughout-the-early-20th-century-offices-were-very-formal-women-wore-traditional-gowns-and-men-wore-full-suits-1",
    },
    summary: "Alright fine, they can have this one.",
    sources: [
      {
        name: "F Newsmagazine",
        year: 2019,
        link: "https://fnewsmagazine.com/2019/04/millennials-killed-professionalism/",
      },
      {
        name: "Bustle",
        year: 2018,
        link: "https://www.bustle.com/p/have-millennials-killed-the-dress-code-10104742",
      },
      {
        name: "Houston Chronicle",
        year: 2018,
        link: "https://www.chron.com/life/article/Millennials-have-now-been-blamed-for-killing-13208987.php",
      },
      {
        name: "New Boston Post",
        year: 2016,
        link: "https://newbostonpost.com/blogs/millennials-killed-the-suit-but-created-a-culture/",
      },
    ],
  },
  {
    name: "Real Estate Industry",
    image: "house-with-garden",
    type: "product",
    origin: {
      year: "early 1800s",
      link: "https://www.shermanbridge.com/blog/history-of-real-estate-investing/#:~:text=The%20real%20estate%20industry%20traces,acquisition%20made%20by%20the%20U.S.",
    },
    summary:
      "If we could still get a house for three pennies and a horse we'd love this industry too.",
    sources: [
      {
        name: "Money and Markets",
        year: 2020,
        link: "https://moneyandmarkets.com/millenials-are-slowly-killing-the-real-estate-market/",
      },
      {
        name: "Forbes",
        year: 2018,
        link: "https://www.forbes.com/sites/neilhowe/2018/08/27/are-millennials-killing-the-u-s-housing-market/",
      },
      {
        name: "MarketWatch",
        year: 2017,
        link: "https://www.marketwatch.com/story/student-debt-is-delaying-millennial-homeownership-by-seven-years-2017-09-18",
      },
    ],
  },
  {
    name: "European Union",
    image: "flag-european-union",
    type: "location",
    origin: {
      year: "in 1993",
      link: "https://en.wikipedia.org/wiki/European_Union#:~:text=The%20union%20and%20EU%20citizenship%20were%20established%20when%20the%20Maastricht%20Treaty%20came%20into%20force%20in%201993.",
    },
    summary: "World domination, let's go!",
    sources: [
      {
        name: "European Council on Foreign Relations",
        year: 2018,
        link: "https://ecfr.eu/publication/the_young_and_the_restful_why_young_germans_have_no_vision_for_europe/",
      },
    ],
  },
  {
    name: "Anti-aging Industry",
    image: "woman-white-hair",
    type: "product",
    origin: {
      year: "around 51 BCE",
      link: "https://intothegloss.com/2015/03/history-of-anti-aging/",
    },
    summary: "We're good at spotting scams.",
    sources: [
      {
        name: "The Cut",
        year: 2017,
        link: "https://www.thecut.com/2017/02/why-millennials-dont-need-the-anti-aging-industry.html",
      },
    ],
  },
  {
    name: "Avocado",
    image: "avocado",
    type: "product",
    origin: {
      year: "9,000 years ago",
      link: "https://en.wikipedia.org/wiki/Avocado#:~:text=The%20oldest%20discovery%20of%20an%20avocado%20pit%20comes%20from%20Coxcatlan%20Cave%2C%20dating%20from%20around%209%2C000%20to%2010%2C000%20years%20ago.",
    },
    summary: "Our bad...that toast is lit though.",
    sources: [
      {
        name: "Esquire",
        year: 2017,
        link: "https://www.esquire.com/uk/culture/news/a14937/australian-property-tycoon-avocado-toast-house-prices/",
      },
    ],
  },
  {
    name: "Bars of Soap",
    image: "soap",
    type: "product",
    origin: {
      year: "in the late 18th century",
      link: "https://en.wikipedia.org/wiki/Soap#:~:text=Industrially%20manufactured%20bar%20soaps%20became%20available%20in%20the%20late%2018th%20century%2C%20as%20advertising%20campaigns%20in%20Europe%20and%20America%20promoted%20popular%20awareness%20of%20the%20relationship%20between%20cleanliness%20and%20health",
    },
    summary: "They just kinda look gross sometimes, okay?",
    sources: [
      {
        name: "MarketWatch",
        year: 2017,
        link: "https://www.marketwatch.com/story/millennials-are-killing-bar-soap-2017-06-09",
      },
      {
        name: "CBS News",
        year: 2016,
        link: "https://www.cbsnews.com/news/blame-millennials-for-the-vanishing-bar-of-soap/?linkId=28062836",
      },
    ],
  },
  {
    name: "Cable TV",
    image: "television",
    type: "product",
    origin: {
      year: "in 1950",
      link: "https://en.wikipedia.org/wiki/Cable_television#:~:text=Cable%20television%5B5%5D%20began%20in%20the%20United%20States%20as%20a%20commercial%20business%20in%201950%2C%20although%20there%20were%20small%2Dscale%20systems%20by%20hobbyists%20in%20the%201940s.",
    },
    summary:
      "$100+ a month for a bazillion channels I don't watch AND a predatory contract or Netflix for less than $20?",
    sources: [
      {
        name: "We Forum",
        year: 2018,
        link: "https://www.weforum.org/agenda/2018/05/consumers-will-spend-more-time-using-online-media-than-watching-tv-in-2018/",
      },
      {
        name: "Forbes",
        year: 2015,
        link: "https://www.forbes.com/sites/markhughes/2015/03/21/the-millennial-trends-that-are-killing-cable/",
      },
      {
        name: "The Streamable",
        year: 2021,
        link: "https://thestreamable.com/news/millennials-and-gen-z-abandon-live-tv-in-staggering-numbers",
      },
    ],
  },
  {
    name: "Canned Tuna",
    image: "canned-food",
    type: "product",
    origin: {
      year: "in 1907",
      link: "https://en.wikipedia.org/wiki/Albert_P._Halfhill#:~:text=%233889%20%2D%20The%20first%20canned%20tuna,cans%20and%20lowered%20the%20price.",
    },
    summary:
      "Got it, its because we don't own can openers and not because the tuna industry is kinda shady.",
    sources: [
      {
        name: "Wall Street Journal",
        year: 2018,
        link: "https://www.wsj.com/articles/tuna-makers-look-to-hook-younger-consumers-1543766400",
      },
      {
        name: "Refinery29",
        year: 2018,
        link: "https://www.refinery29.com/en-us/2018/12/218478/millennials-killing-canned-tuna",
      },
      {
        name: "Washington Post",
        year: 2018,
        link: "https://www.washingtonpost.com/news/voraciously/wp/2018/12/03/sure-millennials-might-be-killing-canned-tuna-but-not-because-they-hate-can-openers/",
      },
    ],
  },
  {
    name: "Cars",
    image: "automobile",
    type: "product",
    origin: {
      year: "in 1886",
      link: "https://en.wikipedia.org/wiki/Car#:~:text=The%20year%201886%20is%20regarded%20as%20the%20birth%20year%20of%20the%20car%20when%20German%20inventor%20Karl%20Benz%20patented%20his%20Benz%20Patent%2DMotorwagen.",
    },
    summary: "Idk about ya'll but I teleport everywhere.",
    sources: [
      {
        name: "Washington Post",
        year: 2014,
        link: "https://www.washingtonpost.com/news/wonk/wp/2014/10/14/the-many-reasons-millennials-are-shunning-cars/",
      },
      {
        name: "Transfers Magazine",
        year: 2018,
        link: "https://transfersmagazine.org/2018/05/08/millennials-killing-transportation/",
      },
    ],
  },
  {
    name: "Diamonds",
    image: "gem-stone",
    type: "product",
    origin: {
      year: "in 2nd millennium BC",
      link: "https://en.wikipedia.org/wiki/Diamond_(gemstone)#:~:text=The%20process%20of,600%20BC.%5B2%5D",
    },
    summary: "We're broke.",
    sources: [
      {
        name: "The Daily Beast",
        year: 2017,
        link: "https://www.thedailybeast.com/why-have-millennials-fallen-out-of-love-with-diamonds",
      },
      {
        name: "CNBC",
        year: 2017,
        link: "https://www.cnbc.com/2017/05/20/millennial-couples-arent-buying-diamonds.html",
      },
    ],
  },
  {
    name: "American Football",
    image: "american-football",
    type: "activity",
    origin: {
      year: "in 1869",
      link: "https://en.wikipedia.org/wiki/American_football#:~:text=What%20is%20considered%20to%20be%20the%20first%20American%20football%20game%20was%20played%20on%20November%206%2C%201869%2C%20between%20Rutgers%20and%20Princeton%2C%20two%20college%20teams.%20They%20consisted%20of%2025%20players%20per%20team%20and%20used%20a%20round%20ball%20that%20could%20not%20be%20picked%20up%20or%20carried.",
    },
    summary: "The best part is the halftime show.",
    sources: [
      {
        name: "CS Monitor",
        year: 2012,
        link: "https://www.csmonitor.com/Commentary/Opinion/2012/1019/Millennial-generation-could-kill-the-NFL",
      },
      {
        name: "Business Insider",
        year: 2016,
        link: "https://www.businessinsider.com/nfl-losing-millennial-demographic-2016-2",
      },
    ],
  },
  {
    name: "Vacations",
    image: "desert-island",
    type: "activity",
    origin: {
      year: "in the 19th century",
      link: "https://en.wikipedia.org/wiki/Vacation#:~:text=The%20concept%20of%20taking%20a%20vacation%20is%20a%20recent%20invention%2C%20and%20has%20developed%20through%20the%20last%20two%20centuries.",
    },
    summary: "Can't take vacation that you don't have.",
    sources: [
      {
        name: "Inc",
        year: 2016,
        link: "https://www.inc.com/jessica-stillman/hey-millennials-stop-killing-the-vacation.html",
      },
      {
        name: "Inside Out",
        year: 2016,
        link: "https://insideout.com/blog/2016/08/30/work-martyr-millennials-kill-vacation/",
      },
    ],
  },
  {
    name: "Hotels",
    image: "hotel",
    type: "location",
    origin: {
      year: "in the 17th century",
      link: "https://en.wikipedia.org/wiki/Hotel#:~:text=For%20a%20period%20of%20about%20200%20years%20from%20the%20mid%2D17th%20century%2C%20coaching%20inns%20served%20as%20a%20place%20for%20lodging%20for%20coach%20travelers.",
    },
    summary: "Better internet would fix this immediately, fyi.",
    sources: [
      {
        name: "Mashable",
        year: 2016,
        link: "https://mashable.com/article/how-hotels-are-changing-the-way-young-business-travelers-work",
      },
      {
        name: "Hotel Executive",
        year: 2018,
        link: "https://www.hotelexecutive.com/feature_focus/5764/have-millennials-killed-room-service-and-is-that-a-good-thing",
      },
      {
        name: "Marketscale",
        year: 2018,
        link: "https://marketscale.com/industries/hospitality/how-millennials-are-setting-the-market-in-hospitality/",
      },
    ],
  },
  {
    name: "American Cheese",
    image: "cheese-wedge",
    type: "product",
    origin: {
      year: "in 1916",
      link: "https://en.wikipedia.org/wiki/American_cheese#:~:text=After%20patenting%20a%20new%20method%20for%20manufacturing%20processed%20cheese%20in%201916%2C%5B3%5D%5B4%5D%20James%20L.%20Kraft%20began%20marketing%20it%20in%20the%20late%201910s%2C%20and%20the%20term%20%22American%20cheese%22%20rapidly%20began%20to%20refer%20to%20the%20processed%20variety%20instead%20of%20the%20traditional%20but%20more%20expensive%20cheddars%20also%20made%20and%20sold%20in%20the%20U.S.",
    },
    summary: "Because we have taste.",
    sources: [
      {
        name: "Business Insider",
        year: 2016,
        link: "http://www.businessinsider.com/millennials-hate-napkins-2016-3",
      },
      {
        name: "Washington Post",
        year: 2016,
        link: "https://www.washingtonpost.com/lifestyle/home/do-you-use-paper-towels-as-napkins-at-the-dinner-table-you-are-not-alone/2016/03/25/d0d076b0-eb8c-11e5-b0fd-073d5930a7b7_story.html",
      },
    ],
  },
  {
    name: "Napkins",
    image: "roll-of-paper",
    type: "product",
    origin: {
      year: "in 2nd century BC",
      link: "https://en.wikipedia.org/wiki/Napkin#:~:text=The%20use%20of%20paper%20napkins%20is%20documented%20in%20ancient%20China%2C%20where%20paper%20was%20invented%20in%20the%202nd%20century%20BC.",
    },
    summary: "Paper towels are superior.",
    sources: [
      {
        name: "Business Insider",
        year: 2016,
        link: "http://www.businessinsider.com/millennials-hate-napkins-2016-3",
      },
      {
        name: "Washington Post",
        year: 2016,
        link: "https://www.washingtonpost.com/lifestyle/home/do-you-use-paper-towels-as-napkins-at-the-dinner-table-you-are-not-alone/2016/03/25/d0d076b0-eb8c-11e5-b0fd-073d5930a7b7_story.html",
      },
    ],
  },
  {
    name: "Divorce",
    image: "broken-heart",
    type: "tradition",
    origin: {
      year: "in 1643 (US)",
      link: "https://www.history.com/this-day-in-history/first-divorce-in-the-colonies",
    },
    summary: "Those gosh darn millennials with their happy marriages.",
    sources: [
      {
        name: "Willamette Week",
        year: 2018,
        link: "https://www.wweek.com/news/2018/09/22/oregon-millennials-are-killing-marriage-new-report-says/",
      },
      {
        name: "USA Today",
        year: 2019,
        link: "https://www.usatoday.com/story/money/2019/02/08/millennials-killed-divorce-how-decouple-facebook-online-real-life/2477581002/#:~:text=In%20September%2C%20millennials%20made%20headlines,couples%20were%20driving%20the%20trend.",
      },
      {
        name: "Time",
        year: 2018,
        link: "https://time.com/5405757/millennials-us-divorce-rate-decline/",
      },
    ],
  },
  {
    name: "Beer",
    image: "clinking-beer-mugs",
    type: "product",
    summary: "If your beer isn't sustainable and creative, we don't want it.",
    origin: {
      year: "13,000 years ago",
      link: "https://en.wikipedia.org/wiki/Beer#:~:text=The%20earliest%20archaeological%20evidence%20of%20fermentation%20consists%20of%2013%2C000%2Dyear%2Dold%20residues%20of%20a%20beer%20with%20the%20consistency%20of%20gruel%2C%20used%20by%20the%20semi%2Dnomadic%20Natufians%20for%20ritual%20feasting%2C%20at%20the%20Raqefet%20Cave%20in%20the%20Carmel%20Mountains%20near%20Haifa%20in%20Israel.",
    },
    sources: [
      {
        name: "Business Insider",
        year: 2017,
        link: "http://www.businessinsider.com/millennials-are-killing-beer-2017-7",
      },
    ],
  },
  {
    name: "Breakfast Cereal",
    image: "glass-of-milk",
    type: "product",
    summary: "Apparently were too lazy to wash bowls.",
    origin: {
      year: "in the 19th century",
      link: "https://en.wikipedia.org/wiki/Breakfast_cereal#:~:text=Food%20reformers%20in,breakfast%20cereals.%5B7%5D",
    },
    sources: [
      {
        name: "New York Times",
        year: 2016,
        link: "http://www.nytimes.com/2016/02/24/dining/breakfast-cereal.html?_r=0",
      },
      {
        name: "Yahoo! News",
        year: 2019,
        link: "https://www.yahoo.com/now/millennials-killing-cereal-boomers-gen-190613585.html",
      },
      {
        name: "My Recipes",
        year: 2018,
        link: "https://www.myrecipes.com/extracrispy/cereal-sales-are-in-serious-decline",
        reaction: "🙄",
      },
    ],
  },
  {
    name: "Motorcycles",
    image: "motorcycle",
    type: "product",
    origin: {
      year: "in 1885",
      link: "https://en.wikipedia.org/wiki/Motorcycle#:~:text=The%201885%20Daimler%20Reitwagen%20made%20by%20Gottlieb%20Daimler%20and%20Wilhelm%20Maybach%20in%20Germany%20was%20the%20first%20internal%20combustion%2C%20petroleum%2Dfueled%20motorcycle.",
    },
    summary:
      "So this industry is struggling because millennials prefer to use motorcycles for - wait for it - transportation.",
    sources: [
      {
        name: "Bloomberg",
        year: 2017,
        link: "https://www.bloomberg.com/news/articles/2017-07-05/can-millennials-save-the-motorcycle-industry",
      },
      {
        name: "The Drive",
        year: 2017,
        link: "https://www.thedrive.com/opinion/12489/analysts-are-wrong-about-why-millenials-arent-buying-harleys",
      },
      {
        name: "MarketWatch",
        year: 2018,
        link: "https://www.marketwatch.com/story/millennials-are-killing-motorcycles-but-subscriptions-might-rev-sales-2018-04-13",
      },
      {
        name: "Fortune",
        year: 2019,
        link: "https://fortune.com/2019/01/27/millennials-harley-davidson-motorcycles/",
      },
      {
        name: "CNBC",
        year: 2019,
        link: "https://www.cnbc.com/2019/01/25/actually-young-people-really-could-kill-harley-davidson.html",
      },
    ],
  },
  {
    name: "Department Stores",
    image: "shopping-bags",
    type: "location",
    origin: {
      year: "in 1838",
      link: "https://en.wikipedia.org/wiki/Department_store#:~:text=This%20much%2Dloved%20Newcastle%20institution%20dates%20back%20to%201838%2C%20when%20at%20the%20age%20of%2021%2C%20Emerson%20Muschamp%20Bainbridge%20went%20into%20partnership%20with%20William%20Alder%20Dunn%20and%20opened%20a%20draper%E2%80%99s%20and%20fashion%20in%20Market%20Street%2C%20Newcastle.",
    },
    summary: "Don't play the game if you can't handle the competition, baby.",
    sources: [
      {
        name: "USA Today",
        year: 2017,
        link: "https://www.usatoday.com/videos/money/2017/02/24/millennials-killing-department-stores/98187754/",
      },
      {
        name: "ABC 10",
        year: 2019,
        link: "https://www.abc10.com/article/life/millennials-are-killingdepartment-stores/103-e066d55e-d8d1-437d-90a5-223917c31035",
      },
    ],
  },
  {
    name: "Ironing",
    image: "womans-clothes",
    type: "activity",
    origin: {
      year: "around 2,000 years ago",
      link: "https://www.newhanfu.com/8837.html#:~:text=The%20first%20iron%20was%20made%20of%20stones%2C%20pottery%2C%20or%20copper%2C%20roasting%20on%20the%20fire%2C%20and%20then%20pressed%20on%20the%20clothes%20to%20iron%20them.%20It%20is%20said%20that%20iron%20was%20invented%20before%20the%20end%20of%20the%20Shang%20Dynasty.",
    },
    summary: "Steamers are cute.",
    sources: [
      {
        name: "Southern Living",
        year: 2021,
        link: "https://www.southernliving.com/home/organization/death-of-ironing",
      },
    ],
  },
  {
    name: "Cruises",
    image: "passenger-ship",
    type: "activity",
    origin: {
      year: "in 1831",
      link: "https://en.wikipedia.org/wiki/Cruise_ship#:~:text=Italy%2C%20a%20traditional%20focus%20of%20the%20Grand%20Tour%2C%20offered%20an%20early%20cruise%20experience%20on%20the%20Francesco%20I%2C%20flying%20the%20flag%20of%20the%20Kingdom%20of%20the%20Two%20Sicilies.%20Built%20in%201831%2C%20the%20Francesco%20I%20sailed%20from%20Naples%20in%20early%20June%201833%2C%20preceded%20by%20an%20advertising%20campaign.",
    },
    summary: "Was it millennials or infectious disease?",
    sources: [
      {
        name: "Caribbean News Service",
        year: 2016,
        link: "https://caribbeannewsservice.com/millennials-turning-away-from-cruises-and-casinos/",
      },
    ],
  },
  {
    name: "Weddings",
    image: "wedding",
    type: "tradition",
    origin: {
      year: "in 2350 BC",
      link: "https://theweek.com/articles/528746/origins-marriage#:~:text=The%20first%20recorded%20evidence%20of%20marriage%20ceremonies%20uniting%20one%20woman%20and%20one%20man%20dates%20from%20about%202350%20B.C.%2C%20in%20Mesopotamia.",
    },
    summary: "Weddings aren't dead, we're just not following your traditions.",
    sources: [
      {
        name: "Yahoo! News",
        year: 2020,
        link: "https://www.yahoo.com/now/wedding-traditions-millennials-killing-131010616.html",
      },
      {
        name: "MarketWatch",
        year: 2018,
        link: "https://www.marketwatch.com/story/millennials-are-killing-marriage-heres-why-thats-a-good-thing-2018-02-08",
      },
    ],
  },
  {
    name: "Credit Cards",
    image: "credit-card",
    type: "product",
    origin: {
      year: "in 1958",
      link: "https://en.wikipedia.org/wiki/Credit_card#:~:text=In%201958%2C%20Bank%20of%20America%20launched%20the%20BankAmericard%20in%20Fresno%2C%20California%2C%20which%20would%20become%20the%20first%20successful%20recognizably%20modern%20credit%20card",
    },
    summary:
      "♫  Don't want to be a fool for you, just another player in your game for two. ♫",
    sources: [
      {
        name: "E-Merchant Broker",
        year: 2015,
        link: "https://emerchantbroker.com/blog/are-millennials-killing-credit/",
      },
      {
        name: "NBC News",
        year: 2014,
        link: "https://www.nbcnews.com/better/money/debt-averse-millennials-steer-clear-credit-cards-n198266",
      },
      {
        name: "Savings",
        year: 2021,
        link: "https://www.savings.com.au/credit-cards/fewer-than-7-of-millennials-use-credit-cards",
      },
    ],
  },
  {
    name: "Raisins",
    image: "grapes",
    type: "product",
    origin: {
      year: "in 2000 BCE",
      link: "https://www.britannica.com/topic/raisin#:~:text=Raisin%20grapes%20were%20grown%20as%20early%20as%202000%20BCE%20in%20Persia%20and%20Egypt",
    },
    summary: "I wish this was dead.",
    sources: [
      {
        name: "Fast Company",
        year: 2019,
        link: "https://www.fastcompany.com/90293336/big-raisin-is-not-going-to-let-millennials-kill-it-off-without-a-fight",
      },
      {
        name: "PR Week",
        year: 2019,
        link: "https://www.prweek.com/article/1582292/havas-formula-helps-sun-maid-stop-millennials-killing-raisins",
      },
    ],
  },
  {
    name: "Banks",
    image: "bank",
    type: "location",
    origin: {
      year: "in 1397",
      link: "https://en.wikipedia.org/wiki/Bank#:~:text=Giovanni%20di%20Bicci%20de%27%20Medici%20set%20up%20one%20of%20the%20most%20famous%20Italian%20banks%2C%20the%20Medici%20Bank%2C%20in%201397.%5B",
    },
    summary: "♫ It's too late and I can't wait for you to be gone ♫ ",
    sources: [
      {
        name: "TechCrunch",
        year: 2015,
        link: "https://techcrunch.com/2015/05/30/millennial-banks/",
      },
    ],
  },
  {
    name: "Casual Dining",
    image: "takeout-box",
    type: "location",
    origin: {
      year: "in the 1960s",
      link: "https://www.thebalancesmb.com/history-of-restaurants-part-3-2888657#:~:text=The%201950s%20saw%20the%20rapid%20growth%20of%20fast%20food%2C%20while%20the%201960s%20marked%20the%20beginning%20of%20casual%20family%20dining%20and%20chain%20restaurants.",
    },
    summary: "Looking for more authentic experiences.",
    sources: [
      {
        name: "Restaurant Business Online",
        year: 2019,
        link: "https://www.restaurantbusinessonline.com/financing/why-restaurant-traffic-falling-blame-millennials#:~:text=I%20hate%20to%20say%20this,they%20are%20killing%20casual%20dining.&text=According%20to%20Technomic%20Ignite%20consumer,59%25%20over%20the%20past%20year.",
      },
      {
        name: "Business Insider",
        year: 2017,
        link: "https://www.businessinsider.com/buffalo-wild-wings-ceo-on-why-restaurants-struggle-2017-5",
      },
      {
        name: "Moneywise",
        year: 2019,
        link: "https://moneywise.com/life/food/millennials-are-killing-off-these-restaurant-chains",
      },
    ],
  },
  {
    name: "Handshakes",
    image: "handshake",
    type: "activity",
    origin: {
      year: "in 9th century BC",
      link: "https://en.wikipedia.org/wiki/Handshake#:~:text=One%20of%20the%20earliest%20known%20depictions%20of%20a%20handshake%20is%20an%20ancient%20Assyrian%20relief%20of%20the%209th%20century%20BC%20depicting%20the%20Assyrian%20king%20Shalmaneser%20III%20shaking%20the%20hand%20of%20the%20Babylonian%20king%20Marduk%2Dzakir%2Dshumi%20I%20to%20seal%20an%20alliance.",
    },
    summary: "Why do we need to touch?",
    sources: [
      {
        name: "Metro",
        year: 2016,
        link: "https://metro.co.uk/2016/07/07/well-done-millennials-youve-officially-ruined-handshakes-for-everyone-5991813/",
      },
    ],
  },
  {
    name: "9-5 Workday",
    image: "woman-office-worker-medium-skin-tone",
    type: "tradition",
    origin: {
      year: "in 1926",
      link: "https://www.history.com/this-day-in-history/ford-factory-workers-get-40-hour-week#:~:text=On%20May%201%2C%201926%2C%20Ford%20Motor%20Company%20becomes%20one%20of%20the%20first%20companies%20in%20America%20to%20adopt%20a%20five%2Dday%2C%2040%2Dhour%20week%20for%20workers%20in%20its%20automotive%20factories.",
    },
    summary: "We wish this was true.",
    sources: [
      {
        name: "Entrepreneur",
        year: 2016,
        link: "https://www.entrepreneur.com/slideshow/306560",
      },
      {
        name: "HR Technologist",
        year: 2018,
        link: "https://www.hrtechnologist.com/articles/workforce-scheduling/the-9to5-workday-is-so-last-century/",
      },
      {
        name: "HuffPost",
        year: 2015,
        link: "https://www.huffpost.com/entry/work-from-home_b_6772140",
      },
    ],
  },
  {
    name: "Middle Children",
    image: "family-woman-girl",
    type: "tradition",
    origin: {
      year: "???",
      link: "https://en.wikipedia.org/wiki/Birth_order",
    },
    summary:
      "If you fix politics, the economy, and climate change maybe we'll be back in business.",
    sources: [
      {
        name: "Business Insider",
        year: 2018,
        link: "https://www.businessinsider.com/toys-r-us-closes-millennials-babies-birth-rate-2018-3",
      },
      {
        name: "Philadelphia",
        year: 2020,
        link: "https://www.phillymag.com/news/2020/02/01/millennials-having-kids/",
      },
      {
        name: "Washington Post",
        year: 2015,
        link: "https://www.washingtonpost.com/opinions/among-millennials-theres-a-baby-bust/2015/05/04/c98d5a08-f295-11e4-84a6-6d7c67c50db0_story.html",
      },
    ],
  },
  {
    name: "Canadian Tourism",
    image: "flag-canada",
    type: "location",
    origin: {
      year: "in 1892",
      link: "https://opentextbc.ca/introtourism2e/chapter/canada-overview/#:~:text=As%20early%20as%201892%2C%20enterprising%20Canadians%20like%20the%20Brewsters%20became%20the%20country%E2%80%99s%20first%20tour%20operators%2C%20leading%20guests%20through%20areas%20such%20as%20Banff%20National%20Park%20(Brewster%20Travel%20Canada%2C%202014).",
    },
    summary: "Canada is just Canada, eh?",
    sources: [
      {
        name: "The Globe and Mail",
        year: 2016,
        link: "https://www.theglobeandmail.com/report-on-business/canadian-tourism-industry-losing-out-as-millennials-travel-abroad/article29934647/",
      },
      {
        name: "Notable Life",
        year: 2016,
        link: "https://notablelife.com/millennials-wanderlust-is-killing-the-canadian-tourism-industry/",
      },
    ],
  },
  {
    name: "Golf",
    image: "flag-in-hole",
    type: "activity",
    origin: {
      year: "in the 15th century",
      link: "https://en.wikipedia.org/wiki/Golf#:~:text=The%20modern%20game%20of%20golf%20originated%20in%2015th%20century%20Scotland.",
    },
    summary: "This is Tiger Woods' fault.",
    sources: [
      {
        name: "Business Insider",
        year: 2016,
        link: "https://www.businessinsider.com/millennials-are-hurting-the-golf-industry-2016-7",
      },
    ],
  },
];

export const quotes = [
  {
    quote:
      "Every step of the way, my generation has questioned the conventional paths our parents took, opting instead to try to build a future that’s more in line with what we value, what we believe to be better.",
    source: "Philadelphia Magazine",
    link: "https://www.phillymag.com/news/2020/02/01/millennials-having-kids/",
    industry: "Middle Children",
  },
  {
    quote:
      "Millennials: a pack of non-homeowning social media addicts who rove the lands killing various industries.",
    source: "Yahoo! News",
    link: "https://www.yahoo.com/now/millennials-killing-cereal-boomers-gen-190613585.html",
    industry: "Cereal",
  },
  {
    quote:
      "We are trying to figure out how to develop napkin holders that appeal to a younger generation.",
    source: "Washington Post",
    link: "https://www.washingtonpost.com/lifestyle/home/do-you-use-paper-towels-as-napkins-at-the-dinner-table-you-are-not-alone/2016/03/25/d0d076b0-eb8c-11e5-b0fd-073d5930a7b7_story.html",
    industry: "Napkins",
  },
];
