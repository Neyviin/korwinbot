const chalk = require("chalk")
const { Client, MessageEmbed, UserFlags, Message, Channel } = require('discord.js');

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const Constants = require('./node_modules/discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`

const { token, prefix } = require("./source12/config/config.js")

const log = console.log
const moment = require('moment')
const ms = require("ms")
const cache = require("cache")

client.on('ready', () => {
  log(chalk.blue(`Zalogowano jako ${client.user.tag}!`));
    // client.user.setActivity(status[rstatus], {type: "WATCaadHING"}); 
    // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
    // Example: streaming
    
    client.user.setPresence({
      status: 'Discord iOS',
      activity: {
          name: 'z feministkami',
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

if (cmd === 'fakty' || cmd === `<@750329969477025792> fakty`) {
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
`Gdy w organizmie pojawiają się komórki raka, to trzeba je wyciąć i zniszczyć – a nie litować się nad nimi, że są „takie młode” i „takie twórcze".`
];
  const randomIndex = Math.floor(Math.random() * fakty.length);
channel.send(fakty[randomIndex])
}


if (cmd === "pomoc" || cmd === "<@750329969477025792>" || cmd === "help" || cmd === "info") {
  let avatar = (client.user.displayAvatarURL({size: 4096}))
  let link1 = "https://discord.com/oauth2/authorize?client_id=750329969477025792&permissions=387136&scope=bot"
  let link2 = "https://discord.gg/R5PXXm3/"
const embed = new MessageEmbed()
.setTitle("Moje komendy")
.setAuthor(client.user.tag, avatar)
.setThumbnail(avatar)
.setColor("BLUE")
.setDescription(`[Link do dodania bota](${link1})`)
.addField("Prefix", "`korwinie`", true)
.addField("Lista komend", "`fakty` - Podam Ci kilka faktów na temat wszystkiego.")
.addField("Developer bota", "`Neyvin#0437`", true)
.addField("Serwer developerski", `[Link do serwera](${link2})`, true)
channel.send(embed)
}

if (cmd === "dodaj" || cmd === "add") {
  let link1 = "https://discord.com/oauth2/authorize?client_id=750329969477025792&permissions=387136&scope=bot"
 let embed = new MessageEmbed()
 .setColor("BLUE")
  .setDescription(`[Dodaj mnie!](${link1})`)
  channel.send(embed)
}


if (cmd === "serwery") {
  if (msg.author.id !== '506486820637376512') return channel.send("To jest tylko i wyłącznie komenda developerska.")
  client.guilds.cache.forEach(server => {
    let total = server.memberCount
    const embed = new MessageEmbed()
 .setTitle(server.name)
 .setDescription(server.owner.toString())
 .addField("ID", server.id)
 .setColor("RANDOM")
 .addField("Users", total)
channel.send(embed)

  })
}
})

client.login(token); 




