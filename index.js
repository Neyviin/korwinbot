const chalk = require("chalk")
const { Client, MessageEmbed, MessageAttachment  } = require('discord.js');

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const Constants = require('./node_modules/discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`

const { token, prefix, prefix2, prefix3 } = require("./source12/config/config.js")


const log = console.log
const moment = require('moment')
const ms = require("ms")
const cache = require("cache")

client.on('ready', () => {
  log(chalk.blue(`Zresetowano ${client.user.tag}!`));


    client.user.setPresence({
      status: 'Discord iOS',
      activity: {
          name: `korwinie pomoc`,
          type: 'PLAYING',
      }
  })
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

if (cmd === 'fakty') {
  const fakty = [
    "Podejrzewam, że w dziełach Lenina jest wszystko, jak dobrze poszukać.",
    "Policja, o ile wiem ma pałki. Oprócz tego ma również naboje. Również ostre. Przypominam, że nie po to płacimy podatki na ostre naboje, żeby ich nie używać.",
    "Różnica między Polską a Stanami polega jednak na tym, że oni swoich Czerwonych przechowują w rezerwatach – a my w parlamentach.",
    "Różnica między PiS a PO jest taka, że PiS nie zrobił lustracji, a PO nie robi liberalizacji.",
    "W Rosji w porównaniu z Polską może Pan mieć przy sobie dowolny narkotyk przy sobie na ulicy i nic nie mogą Panu zrobić. Podatki są prawie dwa razy niższe niż u nas.",
  "To byli wyszkoleni Ukrainscy terroryści, nawet wiem dokładnie, kto z Polski ich szkolił",
    "Chciałbym odebrać prawo wyborcze wielu osobom, nie tylko kobietom",
    "Oczywiście, że lałem dzieci. Dzieci czasami trzeba karać. To jest normalne i wszyscy to robią.",
    "Do 9 roku życia byłem socjalistą. Podobno każdy za młodu powinien nim być, potem mądrzeje.",
    "Celem ruchu drogowego nie jest bezpieczeństwo, tylko szybkość.",
    "Gdyby w '39 co drugi Żyd miał broń, nie byłoby Holokaustu.",
    "Ilość homosiów w każdym kraju jest od pół do jednego, czasami w niektórych krajach, do półtora procenta.",
   "Kiedy kobieta ma pryszcz na twarzy – stara się nie wychodzić z mieszkania. Podobnie z inwalidami.",
   "Kiedyś karty były dla mnie głównym sposobem utrzymywania rodziny.",
   "Likwidacja Senatu oznacza oddanie władzy tym głupkom w Sejmie!",
   "Skok z szóstego piętra jest z całą pewnością bardziej szkodliwy niż zażywanie heroiny, aczkolwiek nie zakazujemy budowy szóstych pięter.",
   "Socjalizm to potwór, który padnie.",
   "Więzienia – to uniwersytety opozycji.",
   "Budynek Komisji Europejskiej byłby idealny na burdel.",
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


if (cmd === "pomoc" ||  cmd === "help" || cmd === "info") {
  let avatar = (client.user.displayAvatarURL({size: 4096}));
  let link1 = "https://discord.com/oauth2/authorize?client_id=750329969477025792&permissions=387136&scope=bot";
  let link2 = "https://discord.gg/R5PXXm3/";
const embed = new MessageEmbed()
.setTitle("Moje komendy")
.setAuthor(client.user.tag, avatar)
.setThumbnail(avatar)
.setColor("BLUE")
.setDescription(`[Link do dodania bota](${link1})`)
.addField("Tyle osób zna moje poglądy", client.users.cache.size.toLocaleString(), true)
.addField("Znajduję się na tylu serwerach", client.guilds.cache.size.toLocaleString(), true)
.addField("Prefix", "`korwinie `", true)
.addField("Lista komend", "`korwinie fakty` - Podam Ci kilka faktów na temat wszystkiego. \n `korwinie poglady` - Powiem, jaka osoba ma poglądy polityczne. \n `korwinie autograf` - Wyślę Ci mój autograf w DM. \n `korwinie losowe` - Losowy obrazek mnie, czyli Korwina.")
.addField("Developer bota", "`Neyvin#0437`", true)
.addField("Serwer developerski", `[Link do serwera](${link2})`, true)
channel.send(embed)
}

if (cmd === "dodaj" || cmd === "add" || cmd === "invite") {
  let link30000 = "https://discord.com/oauth2/authorize?client_id=750329969477025792&permissions=387136&scope=bot"
 let embed = new MessageEmbed()
 .setColor("BLUE")
  .setDescription(`[Dodaj mnie!](${link30000})`)
  channel.send(embed)
}


if (cmd === "serwery") {
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

if (cmd === "dm") {
  if (msg.author.id !== '506486820637376512') return channel.send("To jest tylko i wyłącznie komenda developerska.")
  let user = msg.mentions.users.first() || args[0] && await client.users.fetch(args[0]).catch(() => false) || (msg.author) || (user.id)
user.send(args.join(" "))
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
    let link7 = "https://discord.com/oauth2/authorize?client_id=750329969477025792&permissions=387136&scope=bot"
    let embed = new MessageEmbed()
    .setTitle("Moje socialmedia")
    .setColor("BLUE")
    .addField("Twitter", `<:Twitter:756225183949390064> [Link do Twittera](${link6})`)
    .addField("YouTube", `<:Youtube:756225081474154507> [Link do YouTube'a](${link4})`)
    .addField("Instagram", `<:Instagram:756225096150155356> [Link do Instagrama](${link3})`)
    .addField("Facebook", `<:Facebook:756225194074571258> [Link do Facebook'a](${link5})`)
    .addField("Discord", `<:Discord:756878942178246716> [Link do dodania bota](${link6})`)
    channel.send(embed)
    }
  
    if (cmd === "zdjecia" || cmd === "zdjecie" || cmd === "losowezdjecie" || cmd === "losowe") {
      let number = 29;
      let imageNumber = Math.floor(Math.random()* 29) +1
     channel.send ( {files: ["./zdjecia korwina/" + imageNumber + ".png"]} )
    }

    if (cmd === "ping") {
      const ms = require("ms")
  try {
      const m = await msg.channel.send("Czekaj..."); // Make sure the async is written, top of the client.on("message", ...)
      const embed = new MessageEmbed()
      .setColor("RANDOM") // Tired of choosing the embed colors? Just type "RANDOM" on it!
      .addField("⌛ Ping", `**${msg.createdTimestamp -  msg.createdTimestamp}ms**`)
      .addField("⏲️ API", `**${Math.floor(client.ws.ping)}ms**`) // Use "client.ping" if your Discord.js is < 1.15.1 --- Use "client.ws.ping" if your Discord.js is > 12.0.0
   return m.edit(`🏓 Pong!`, embed);
    } catch (error) {
      return msg.channel.send(`Something's not right: ${error.msg}`);

      // Restart the bot as usual.
    
  } // easy way.
    }
})

client.login(token); 