const chalk = require("chalk")
const { Client, MessageEmbed, MessageAttachment, Message  } = require('discord.js');

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const Constants = require('./node_modules/discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`

const { token, prefix } = require("./source12/config/config.js")

const log = console.log
const moment = require('moment')
const ms = require("ms")
const cache = require("cache")

client.on('ready', () => {
  log(chalk.blue(`Zresetowano ${client.user.tag}!`));

function randomStatus() {
  const statusy = [
    "korwinie pomoc",
    "z feministkami",
    `korwinie dodaj`,
    `Obsługuję ${client.guilds.cache.size.toLocaleString()} serwerów i ${client.users.cache.size.toLocaleString()} użytkowników.`,
  ]
  let status2 = statusy // You can change it whatever you want.
  let rstatus = Math.floor(Math.random() * status2.length);
  

    client.user.setPresence({
      status: 'Discord iOS',
      activity: {
          name: `${status2[rstatus]}`,
          type: 'PLAYING',
      } 
    }) 
} setInterval(randomStatus, 40000)
}); 

client.on('message', async msg => {
  const { author, guild, channel, } = msg

  // Sprawdź czy użytkownik jest botem
if (author.bot || !guild) {
  return
}

// Ignoruj wiadomości bez prefixu
if (!msg.content.startsWith(prefix)) return


const args = msg.content
.slice(prefix.length)
.trim()
.split(/ +/g)

const cmd = args.shift().toLowerCase()

if (cmd === "pozdrawiam") {
  channel.send(`Również pozdrawiam ${msg.author.username}`)
}

if (cmd === "herbata") {
  const attachment = new MessageAttachment('tea.gif');
  channel.send(attachment)
}

if (cmd === 'fakty') {
  const fakty = [
    "Podejrzewam, że w dziełach Lenina jest wszystko, jak dobrze poszukać.",
    "Policja, o ile wiem ma pałki. Oprócz tego ma również naboje. Również ostre. Przypominam, że nie po to płacimy podatki na ostre naboje, żeby ich nie używać.",
    "Różnica między Polską a Stanami polega jednak na tym, że oni swoich Czerwonych przechowują w rezerwatach – a my w parlamentach.",
    "Różnica między PiS a PO jest taka, że PiS nie zrobił lustracji, a PO nie robi liberalizacji.",
    "W Rosji w porównaniu z Polską może Pan mieć przy sobie dowolny narkotyk przy sobie na ulicy i nic nie mogą Panu zrobić. Podatki są prawie dwa razy niższe niż u nas.",
    "Chciałbym odebrać prawo wyborcze wielu osobom, nie tylko kobietom",
    "Do 9 roku życia byłem socjalistą. Podobno każdy za młodu powinien nim być, potem mądrzeje.",
    "Celem ruchu drogowego nie jest bezpieczeństwo, tylko szybkość.",
    "Gdyby w '39 co drugi Żyd miał broń, nie byłoby Holokaustu.",
    "Ilość homosiów w każdym kraju jest od pół do jednego, czasami w niektórych krajach, do półtora procenta.",
   "Kiedyś karty były dla mnie głównym sposobem utrzymywania rodziny.",
   "Likwidacja Senatu oznacza oddanie władzy tym głupkom w Sejmie!",
   "Skok z szóstego piętra jest z całą pewnością bardziej szkodliwy niż zażywanie heroiny, aczkolwiek nie zakazujemy budowy szóstych pięter.",
   "Socjalizm to potwór, który padnie.",
   "Więzienia – to uniwersytety opozycji.",
   "Czy ktoś widział kiedyś, żeby koń wręczył kopertę weterynarzowi?",
   "Lekka pedofilia nie jest szkodliwa społecznie.",
   "Macie Państwo rację: jestem za równouprawnieniem płci! Za tym, by czynności kobiece – np. karmienie męża i dzieci – uznać za równocenne z męskimi!",
   'Małpa jest znacznie lepszym wyborcą, niż socjalista. Małpa bowiem mając do wyboru A lub B głosuje losowo – a więc myli się raz na dwa razy. Natomiast socjalista myli się zawsze.',
   'Nominacja kogoś uczciwego na stanowisko ministra, to jest coś, co warto uczcić swoją obecnością.',
   'Socjalista nie jest człowiekiem, lecz bydlęciem – człowiek bowiem różni się od zwierzęcia tym, że kieruje się Zasadami Moralnymi. A Czerwoni ich programowo nie przestrzegają.',
   'To nie ja mam się podlizywać wyborcom, to oni muszą mieć na mnie ochotę.',
   "Telewizja jest dla idiotów, czyli dla tzw. szarego człowieka. Większość widzów i tak nie rozumie, co się do nich mówi, więc trzeba pilnować, by telewizja nie mąciła ich poglądów.",
   "Żyjemy z bakteriami i wirusami od tysięcy lat – i szczepionki to zaburzenie równowagi środowiska naturalnego (przeciwko szczepionkom najgłośniej powinni protestować ekolodzy!).",
   "Walką o zachowanie tych cech cywilizacji, dzięki którym szliśmy nieustannie do przodu!",
   "Ja mam zwyczaj mówić prawdę – jeżeli ktoś jest idiotą, to go nazwę idiotą. Powiem to z całym szacunkiem, np. „wielce szanowny poseł jest idiotą”, ale tej prawdy nie będę ukrywał przed społeczeństwem.",
  "Tylko bankructwo całego tego systemu może spowodować, że ludzie zaczną naprawdę liczyć.", 
"Tym, co chcą głosować, radzę: zamknąć oczy, zatkać uszy – i głosować na Jarosława Kaczyńskiego!",  
"Takie są skutki powszechnej oświaty. Dawniej też były matoły, ale – ponieważ nie umiały czytać i pisać – to nie zawracały nikomu głowy!",
"Słowo „komunizm” kojarzy się ludziom z łagrami na Syberii, CzeKą, NKWD, wąsami Stalina i Armią Czerwoną. Ma to tyle-ż sensu, co kojarzenie chrześcijaństwa z wojnami krzyżowymi, Inkwizycją, paleniem na stosach i wysiedleniem żydów z Iberii. „Komunizm” – to pewna ideologia, po stokroć groźniejsza niż całe Imperium Zła.",
"Obecnie hodujemy hordy tchórzy i donosicieli! Skurwione społeczeństwo skurwieli!",
"Nawet za Hitlera czy Stalina, góral mógł sobie robić oscypki, jakie chciał, a dzisiaj stoi nad nim urzędnik unijny.",
"Można się tylko cieszyć, że inwalidzi też organizują zawody. Ze sportem nie ma to jednak wiele wspólnego – równie dobrze można by organizować zawody w szachy dla debili.",
"Kościół jednak nie tylko sprzedaje nadzieję: stanowi organizację przekonującą ludzi, że należy żyć przyzwoicie. Za to warto zapłacić. Inna sprawa, czy nie płacimy za dużo… Zbyt tłusty ksiądz to zazwyczaj zły ksiądz!",
"Ilość homosiów w każdym kraju jest od pół do jednego, czasami w niektórych krajach, do półtora procenta.",
`Gdy w organizmie pojawiają się komórki raka, to trzeba je wyciąć i zniszczyć – a nie litować się nad nimi, że są „takie młode” i „takie twórcze".`,
"Dla wyjaśnienia moim wyborcom: ja też pijam – ale wyłącznie wino, a na deser miody i (czasem) likier; by nie było, że jestem abstynentem – bo wtedy nie miałbym w wyborach żadnych szans.",
"Ależ ja jestem za wejściem do strefy wolnego handlu! Tylko że Unia Europejska nie jest taką strefą, a strefą szalejącej biurokracji, która steruje każdym hektolitrem wina i każdą toną wołowiny.",
"Zdecydowanie wolę, jak pedofil poklepie mi córkę po pupie, niż jak córka pójdzie na lekcję wychowania seksualnego. Po tych lekcjach dziewczyny przestają umieć kochać.",
"Walczymy z podatkami niesprawiedliwymi. I Stary Testament i Nowy Testament i Koran zawierają zakaz rabunku wdów i sierot. A niczym innym jest podatek spadkowy.",
"Walką o zachowanie tych cech cywilizacji, dzięki którym szliśmy nieustannie do przodu!",
"W demokracji wygrywają tylko ci politycy, którzy wygłaszają ogólniki bez treści. Co najwyżej pozwalają sobie na odkrywcze stwierdzenia, że lepiej być zdrowym i bogatym, niż chorym i biednym, że należy dbać o „dobro Polski” – klap, klap i huragan braw!",
"Ależ ja jestem za wejściem do strefy wolnego handlu! Tylko że Unia Europejska nie jest taką strefą, a strefą szalejącej biurokracji, która steruje każdym hektolitrem wina i każdą toną wołowiny.",
"Ekonomista tłumaczący, że rynek powinien być wolny, podobny jest dealerowi tłumaczącemu, że kokaina zabija.",
"Euro-socjalizm to bratni ustrój „realnego socjalizmu”. Z tą różnicą, że real-socjalizm ewoluował od komunizmu do kapitalizmu – a euro-socjalizm – odwrotnie.",
"Kategorycznie protestuję przeciwko szerzeniu ohydnych kłamstw, jakobym do porannej herbaty sypał 17 łyżeczek cukru! Do szklanki kawy sypię góra 15 łyżeczek cukru",
"Co to jest de­mok­racja: rządy ludzi, którzy nie znają się na niczym i de­cydują o wszystkim",
"Idiota z dyp­lo­mem to ta­ki sam idiota, jak przed­tem - tyl­ko z pretensjami.",
"W Polsce politykę finansują gangi np ci od afery alkoholowej, paliwowej, fozz, węglowej czy ostatnio hazardowej.",
"Ludzie Epoki Telewizyjnej nie widzą świata takim jaki jest, tylko takim jakim im go pokażą na szklanym ekranie.",
"De­mok­racja to us­trój, w którym rządzi dur­no­ta - prze­cież wiado­mo, że głupich jest więcej niż mądrych.",
"Państwa nie mają przyjażni tylko interesy.",
"Istnieją cztery rodzaje białej śmierci: cukier, sól, kokaina i służba zdrowia.",
"Jedyną książką jaką warto przeczytać jest Ojciec chrzestny - ta jedna opowiada jak świat jest naprawdę rządzony.",
"Jak gdzieś jedzie czołg, a ludzie ostrzeżeni się nie usuwają - to ich prawo. Wolny człowiek w wolnym kraju ma prawo dać się rozjechać. Na tym polega liberalizm.",
"Ludzie nie mają świadomości, bo są trzymani w zagrodzie medialnej,w której sa poddawani dezinformacji, indoktrynacji, kt­óra zawęża im pole widzenia, słyszenia i postrzegania rzeczywistości. Do tego nie mają wyobraźni.",

];
  const randomIndex = Math.floor(Math.random() * fakty.length);
channel.send(fakty[randomIndex])
}

if (cmd === "stats") {
  if (msg.author.id !== '506486820637376512') return channel.send("To jest tylko i wyłącznie komenda developerska.")
  const m = await msg.channel.send("A no juz prosze"); 
  const embed = new MessageEmbed()
  .addField("⌛ Ping", `**${m.createdTimestamp -  msg.createdTimestamp}ms**`)
  .addField("⏲️ API", `**${Math.floor(client.ws.ping)}ms**`)
  .addField("Serwery", client.guilds.cache.size.toLocaleString())
  .addField("Użytkownicy", `${client.users.cache.size.toLocaleString()} userów`)
  
channel.send(embed)
}

if (cmd === "serverinfo" || cmd === "server" || cmd === "serwer" || cmd === "serwerinfo") {
  
  var dzisiaj = guild.createdAt;

  var dzien = dzisiaj.getDate(); 
  if (dzien<10) dzien = "0"+dzien
  var miesiac = dzisiaj.getMonth()+1;
  if (miesiac<10) miesiac = "0"+miesiac
  var rok = dzisiaj.getFullYear();
  
  var godzina = dzisiaj.getHours();
  if (godzina<10) godzina = "0"+godzina;
  var minuta = dzisiaj.getMinutes();
  if (minuta<10) minuta = "0"+minuta;
  var sekunda = dzisiaj.getSeconds();
  if (sekunda<10) sekunda = "0"+sekunda;

  let region = {
    "brazil": "🇧🇷 Brazylia",
    "eu-central": "🇪🇺 Europa centralna",
    "singapore": "🇸🇬 Singapur",
    "london": "🇬🇧 Londyn",
    "russia": "🇷🇺 Rosja",
    "japan": "🇯🇵 Japonia",
    "hongkong": "🇨🇳 Hongkong",
    "sydney": "🇦🇺 Sydney",
    "us-central": "🇺🇸 USA Centralna",
    "us-east": "🇺🇸 USA Wschód",
    "us-south": "🇺🇸 USA Północ",
    "us-west": "🇺🇸 USA Zachód",
    "eu-west": "🇪🇺 Zachodnia Europa",
    "europe": "🇪🇺 Europa"
  }
  let member = msg.guild.members;
  let online = member.cache.filter(m => m.user.presence.status === "online").size
let dnd = member.cache.filter(m => m.user.presence.status === "dnd").size
let idle = member.cache.filter(m => m.user.presence.status === "idle").size
let offline = member.cache.filter(m => m.user.presence.status === "offline").size
let t0tal = online+dnd+idle
let t0t4l = online+dnd+idle+offline
  let text = msg.guild.channels.cache.filter(channel => channel.type === 'text').size
  let voice = msg.guild.channels.cache.filter(channel => channel.type === 'voice').size
  let location = region[msg.guild.region];
  let createdate = dzien+"."+miesiac+"."+rok+" "+godzina+":"+minuta
    const embed = new MessageEmbed()
  .setTitle(`${guild.name}`)
  .setThumbnail(`${guild.iconURL({size: 4096, dynamic: true})}`)
  // Set the color of the embed
  .setColor('BLUE')
  // Set the main content of the embed
  .addField("ID", guild.id, true)
  .addField("Region", location, true)
  .addField("Owner", `<:ServerOwner:710596476052570132> ${guild.owner.toString()}`, true)
  .addField("Użytkownicy", `<:offline:709181045315993610> ${t0t4l}`, true)
  .addField("Online", `<:Online:710599618949546155> ${t0tal}`, true)
  .addField("Stworzony w dniu", `${createdate}`)
  .addField("Kanały tekstowe", `<:Channel:759698720135708683> ${text}`, true)
  .addField("Kanały głosowe", `<:Voice:759699965026631701> ${voice}`, true)
  .addField("Ilość boostów", `<:Boost:709373206917546074> ${guild.premiumSubscriptionCount}`)
  .addField(`Poziom boostów` , `<:Level:709373216036225054> ${guild.premiumTier}`)
  .setTimestamp()
  .setFooter(`Komendy użył ${msg.author.username}#${msg.author.discriminator}`)
  channel.send(embed) 
}

if (cmd === "pomoc" ||  cmd === "help" || cmd === "info") {
  let avatar = (client.user.displayAvatarURL({size: 4096}))
  let link1 = "https://discord.com/api/oauth2/authorize?client_id=750329969477025792&permissions=388176&scope=bot"
  let link2 = "https://discord.gg/R5PXXm3/"
const embed = new MessageEmbed()
.setTitle("Moje komendy")
.setAuthor(client.user.tag, avatar)
.setThumbnail(avatar)
.setColor("BLUE")
.setDescription(`[Link do dodania bota](${link1})`)
.addField("Tyle osób zna moje poglądy", client.users.cache.size.toLocaleString(), true)
.addField("Znajduję się na tylu serwerach", client.guilds.cache.size.toLocaleString(), true)
.addField("Prefix", "`korwinie `", true)
.addField("Lista komend", "`korwinie fakty` - Podam Ci kilka faktów na temat wszystkiego. \n `korwinie poglady` - Powiem, jaka osoba ma poglądy polityczne. \n `korwinie autograf` - Wyślę Ci mój autograf w DM. \n `korwinie losowe` - Losowy obrazek mnie, czyli Korwina. \n `korwinie serwer` - Wyświetlę informację na temat tego serwera. \n `korwinie trivia` - Quiz o mnie.")
.addField("Developer bota", "<@!506486820637376512> \n <@545711974076383242>", true)
.addField("Serwer developerski", `[Link do serwera](${link2})`, true)
.setFooter('Proszę pamiętąć o jednym - ja, nie mam na celu nikogo urazić!')
channel.send(embed)
}

if (cmd === "dodaj" || cmd === "add" || cmd === "invite" || cmd === "inv") {
  let link1 = "https://discord.com/api/oauth2/authorize?client_id=750329969477025792&permissions=388176&scope=bot"
 let embed = new MessageEmbed()
 .setColor("BLUE")
  .setDescription(`[Dodaj mnie!](${link1})`)
  channel.send(embed)
}


if (cmd === "serverlist") {
  if (msg.author.id !== '506486820637376512') return channel.send("To jest tylko i wyłącznie komenda developerska.")
  client.guilds.cache.forEach(server => {
    let total = server.memberCount
   let bots =  server.members.cache.filter(m => m.user.bot).size
    const embed = new MessageEmbed()
 .setTitle(server.name)
 .setDescription(server.owner.toString())
 .addField("ID", server.id)
 .setColor("RANDOM")
 .addField("Users", `${total} użytkowników w tym ${bots} botów`)
channel.send(embed)
  })
}

if (cmd === "poglady" || cmd === "poglądy") {
  let user = msg.mentions.users.first() || args[0] && await client.users.fetch(args[0]).catch(() => false) || (msg.author) || (user.id)
let ball = [ 
`centrystą.`,
`prawakiem.`,
`lewicą.`,
`monarchistą.`,
`konserwatystą.`,
`narodowcem.`,
`faszystowcem`,
`feministą.`,
`feministą, hatfu!`,
`liberalistą.`,
`konserwatysto-liberalistą.`,
`komunistą.`,
`islamistą.`,
`socjaldemokratystą.`,
`socjalistą, hatfu!`,
`socjalistą.`,
`demokratystą.`,
`nacjonalistą.`,
`libertalistą.`,
`za Zieloną polityką.`,
`chrześcijano-narodowcem.`,
`chrześcijano-demokratystą.`,
`liberalno-demokratom.`,
];
const randomIndex = Math.floor(Math.random() * ball.length);
  channel.send(`Moim zdaniem ${user.username} jest ${(ball[randomIndex])}`)
}

if (cmd === "napisz") {
  let channel = msg.mentions.channels.first() || args[0] && await msg.guild.channels.resolve(args[0]);
  if (msg.author.id !== '506486820637376512') return channel.send("To jest tylko i wyłącznie komenda developerska.")
.then(msg => msg.delete({timeout: 3000}) )
if (!channel) msg.channel.send(args.join(" "))
.then(msg.delete({timeout: 1}))
    else channel.send(args.slice(1).join(" "))
.then(msg.delete({timeout: 1}))
  }

  if (cmd === "autograf") {
    channel.send("Wysłane, ciesz się swoim autografem! (jeśli wiadomość nie dotarła, włącz możliwość przyjmowania wiadomości prywatnych)")
    const attachment = new MessageAttachment('autograf.png');
    msg.author.send(`O to i twój autograf ${msg.author.username}`, attachment)
  }

  if (cmd === "media" || cmd === "link" || cmd === "strony" || cmd === "links" || cmd === "linki" || cmd === "linki") {
    let link3 = "https://www.instagram.com/januszkorwinmikke/?hl=pl"
    let link4 = "https://www.youtube.com/channel/UCEzucgSFyL5Sh9rF26geBZQ"
    let link5 = "https://www.facebook.com/janusz.korwin.mikke/"
    let link6 = "https://twitter.com/JkmMikke?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    let link7 = "https://discord.com/api/oauth2/authorize?client_id=750329969477025792&permissions=388176&scope=bot"
    let embed = new MessageEmbed()
    .setTitle("Moje socialmedia")
    .setColor("BLUE")
    .addField("Twitter", `<:Twitter:756225183949390064> [Link do Twittera](${link6})`)
    .addField("YouTube", `<:Youtube:756225081474154507> [Link do YouTube'a](${link4})`)
    .addField("Instagram", `<:Instagram:756225096150155356> [Link do Instagrama](${link3})`)
    .addField("Facebook", `<:Facebook:756225194074571258> [Link do Facebook'a](${link5})`)
    .addField("Discord", `<:Discord:756878942178246716> [Link do dodania bota](${link7})`)
    channel.send(embed)
    }
  
    if (cmd === "zdjecia" || cmd === "zdjecie" || cmd === "losowezdjecie" || cmd === "losowe") {
      number = 29;
      let imageNumber = Math.floor(Math.random()* 39) +1
     channel.send ( {files: ["./zdjecia korwina/" + imageNumber + ".png"]} )
    }


    if (cmd === "trivia") {   
    
      let questions = [
        {
          title: "Jak się nazywa moja aktualna partia polityczna?",
          options: ["KORWiN", "Kongres Nowej Prawicy", "Unia Polityki Realnej", "Wolność i Praworządność"],
          correct: 1,
        },
        {
          title: "Gdzie się urodziłem?",
          options: ["Wrocław", "Białystok", "Warszawa", "Gdańsk"],
          correct: 3,
        },
  
      {
        title: "W którym roku się urodziłem?",
          options: ["1942", "1944", "1939", "1941"],
          correct: 1,
      },
      {
        title: "Jak mam na drugie imię?",
          options: ["Andrzej", "Krzysztof", "Ryszard", "Paweł", "Nie mam drugiego imienia"],
          correct: 3,
      },
      {
        title: "W jaką grę jestem ekspertem?",
          options: ["Poker", "Brydż", "Remik", "Tysiąc", "Makao"],
          correct: 2,
      },
      {
        title: "Skąd jest moja rodzina?",
          options: ["Polska", "Belgia", "Niemcy", "Szwecja", "Francja", "Szwajcaria"],
          correct: 4,
      },
      {
        title: "Ile mam dzieci?",
          options: ["3", "5", "2", "7", "6", "4"],
          correct: 4,
      },
      {
        title: "Ile w życiu wydałem książek?",
          options: ["23", "20", "19", "24", "29"],
          correct: 1,
      },
      {
        title: "Kto się mną zajmował jak byłem mały po śmierci mojego ojca?",
          options: ["Babka", "Matka", "Dziadek", "Wujek", "Nikt"],
          correct: 1,
      },
      {
        title: "Ile mam wzrostu?",
          options: ["1,90m", "1,89m", "1,79m", "1,83m", "1,92m"],
          correct: 2,
      },
      {
        title: "Jak się nazywa moja aktualna żona?",
          options: ["Ewa Mieczkowska", "Zuzanna Korwin-Mikke", "Dominika Korwin-Mikke", "Nadzieja Korwin-Mikke", "Karolina Kosikowska"],
          correct: 3,
      },
      {
        title: "Kogo wspierałem podczas wyborów 2020?",
          options: ["Robert Biedroń", "Andrzej Duda", "Rafała Traskowskiego", "Krzysztof Bosak", "Stanisław Żółtek"],
          correct: 4,
      },
      {
        title: "Jakie mam wykształcenie?",
          options: ["Uniwersytet Warszawski", "Wydział Filozofii i Socjologii Uniwersytetu Gdańskiego", "Uniwersyter Wrocławski", "Brak wykształcenia"],
          correct: 1,
      },
      {
        title: "Ile mam zdjęć w komendzie `korwinie losowe`",
          options: ["40", "42", "37", "39", "46", "38", "43"],
          correct: 3,
      },
      {
        title: "Ile łącznie mam komend (licząc easter eggi i komendy developerskie)",
          options: ["21", "10", "8", "15", "29", "12"],
          correct: 4,
      },
      {
        title: "Kogo wspierałem podczas wyborów 2010?",
          options: ["Jarosław Kaczyński", "Sam startowałem na prezydenta", "Bronisław Komorowski", "Grzegorz Napieralski"],
          correct: 2,
      },
      {
        title: "Z jaka partią zdobyłem poparcie po raz drugi?",
          options: ["Unia Polityki Realnej", "KWW Ruch Wyborców Janusza Korwin-Mikke", "KORWiN", "Liga Polskich Rodzin", "KWW Blok Senat 2001", "Nowa Prawica – Janusza Korwin-Mikke", "Platforma Janusza Korwin-Mikkego", "Unia Prawicy Rzeczypospolitej"],
          correct: 6,
      },
      {
        title: "Z jaka partią zdobyłem poparcie po raz drugi?",
          options: ["Unia Polityki Realnej", "KWW Ruch Wyborców Janusza Korwin-Mikke", "KORWiN", "Liga Polskich Rodzin", "KWW Blok Senat 2001", "Nowa Prawica – Janusza Korwin-Mikke", "Platforma Janusza Korwin-Mikkego", "Unia Prawicy Rzeczypospolitej"],
          correct: 6,
      },
      {
        title: "Na które z poniżych pluję w komendzie `korwinie poglady`?",
          options: ["Islamista", "Feminista", "Narodowiec", "Faszystowca"],
          correct: 2,
      },
      {
        title: "Jakiego kierunku nie mogłem kontynuować przez areszt w 1964?",
          options: ["Filozofia", "Prawo", "Żadne z powyższych", "Fizyka"],
          correct: 3,
      },
      {
        title: "Do kogo należałem w latach 1957?",
          options: ["Do nikogo", "Oficyna Liberałów", "Stronnictwo Demokratyczne", "Związek Młodzieży Socjalistycznej"],
          correct: 4,
      },
      ];
          let q = questions[Math.floor(Math.random() * questions.length)];
          let i = 0;
          let avatar = msg.author.displayAvatarURL({size: 4096, dynamic: true});
  
          var LowerEmbed = new MessageEmbed()
          .setAuthor(msg.author.username, avatar)
          .setThumbnail(avatar)
          .setTitle("Odpowiedź")
          .setColor("ORANGE")
          .setDescription(`Nie otrzymałem odpowiedzi w przeciągu 15 sekund.`)
          .setTimestamp()
  
          const Embed = new MessageEmbed()
          .setAuthor(msg.author.username, avatar)
          .setThumbnail(avatar)
            .setTitle(q.title)
            .setDescription(
              q.options.map((opt) => {
                i++;
                return `${i} - ${opt}\n`;
              })
            )
            .setColor(`BLUE`)
            .setFooter(
              "Odpowiedz poprawnie na pytanie w mniej niż 15 sekund! \nOdpowiedz tylko i wyłacznie cyfrą jaka jest przy odpowiedzi."
            )
            .setTimestamp();
   msg.channel.send(Embed);
     
          try {
            let msgs = await msg.channel.awaitMessages(
              (u2) => u2.author.id === msg.author.id,
              { time: 15000, max: 1, errors: ["time"] }
            );
            var LowestEmbed = new MessageEmbed()
            .setAuthor(msg.author.username, avatar)
            .setThumbnail(avatar)
            .setTitle("Odpowiedź")
            .setColor("RED")
            .setDescription(`Twoja odpowiedzią było ${parseInt(msgs.first().content)} i jest ona błędna, zdarza się.`)
            .setTimestamp()
        
            var HighestEmbed = new MessageEmbed()
            .setAuthor(msg.author.username, avatar)
            .setThumbnail(avatar)
            .setTitle("Odpowiedź")
            .setColor("GREEN")
            .setDescription(`Twoja odpowiedzią było ${parseInt(msgs.first().content)} i jest ona poprawna, gratulację!`)
            .setTimestamp()
        
            if (parseInt(msgs.first().content) == q.correct) {
              return msg.channel.send(HighestEmbed);
            } else {
              return msg.channel.send(LowestEmbed);
            }
          } catch (e) {
            return msg.channel.send(LowerEmbed);
          }
        }
})

client.login(token); 




