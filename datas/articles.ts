// export interface Article {
//   id: number;
//   title: string;
//   author: string;
//   category: string;
//   excerpt: string;
//   content: string;
//   image: string;
//   date: string;
//   readTime: string;
// }

// export interface Comment {
//   id: number;
//   author: string;
//   content: string;
//   date: string;
// }

// export const categories = [
//   "Anime",
//   "Animation occidentale",
//   "Studios",
//   "Classiques",
//   "Critiques",
//   "Culture",
// ];

// export const articles: Article[] = [
//   {
//     id: 1,
//     title: "Pourquoi Cowboy Bebop reste indétrônable après 25 ans",
//     author: "Karim Benziane",
//     category: "Anime",
//     excerpt:
//       "Retour sur une série qui a redéfini ce que pouvait être un anime : du jazz, de la mélancolie, et des personnages qu'on n'oublie pas.",
//     content: `Il y a des séries qu'on regarde et qu'on oublie la semaine d'après. Et puis il y a Cowboy Bebop.

// Sortie en 1998, la série de Shinichiro Watanabe a fait quelque chose de rare : elle a mélangé le jazz, le film noir, la science-fiction et le western sans que ça sonne faux. Chaque épisode a sa propre couleur, son propre rythme. On passe d'une course-poursuite dans l'espace à un moment de silence dans un bar miteux, et tout coule naturellement.

// Ce qui frappe quand on la revoit aujourd'hui, c'est à quel point les personnages sont écrits avec justesse. Spike Spiegel n'est pas un héros classique. C'est un type qui fuit son passé en faisant semblant de s'en foutre. Faye Valentine cache sa vulnérabilité derrière du cynisme. Jet Black est le seul adulte du groupe et il le sait. Même Ed, le personnage le plus excentrique, a une profondeur qu'on ne soupçonne pas au premier visionnage.

// La bande-son de Yoko Kanno est devenue légendaire pour une bonne raison. Elle ne se contente pas d'accompagner les scènes, elle les définit. "Tank!", le générique d'ouverture, donne le ton immédiatement : c'est cool, c'est rythmé, c'est vivant.

// Le dernier épisode reste l'un des finales les plus marquants de l'histoire de l'animation. Pas de twist spectaculaire, pas de combat épique de 40 minutes. Juste un homme qui va au bout de ce qu'il a toujours su qu'il ferait. Et cette dernière image, ce ciel étoilé... on ne s'en remet pas vraiment.

// Cowboy Bebop n'a pas vieilli. Elle n'a pas eu besoin de suite, de reboot, de film live-action réussi (on ne parlera pas de celui de Netflix). Elle se suffit à elle-même, 26 épisodes et un film, et c'est tout ce qu'il faut.`,
//     image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=450&fit=crop",
//     date: "14 février 2026",
//     readTime: "6 min",
//   },
//   {
//     id: 2,
//     title: "Studio Ghibli : l'art de raconter sans presser",
//     author: "Amina Diallo",
//     category: "Studios",
//     excerpt:
//       "Chez Ghibli, les moments de silence comptent autant que les scènes d'action. C'est ce qui rend leurs films si différents.",
//     content: `On reconnaît un film Ghibli dans les dix premières secondes. Pas grâce au logo, mais grâce à un feeling particulier. Un vent qui souffle dans les herbes, un personnage qui regarde par la fenêtre, un silence qui dure juste assez longtemps pour qu'on se pose dans la scène.

// Hayao Miyazaki a un terme pour ça : "ma" — les pauses intentionnelles. Dans Mon Voisin Totoro, il y a une scène où Satsuki et Mei attendent le bus sous la pluie. Rien ne se passe pendant de longues secondes. Pas de dialogue, pas d'action. Juste deux enfants sous un parapluie, la pluie qui tombe, et les gouttes qui frappent le sol. Cette scène est devenue iconique précisément parce qu'elle ne fait rien de spécial.

// Ce que Ghibli comprend, et que beaucoup de studios oublient, c'est que les personnages ont besoin de respirer. Chihiro dans Le Voyage de Chihiro ne passe pas son temps à courir d'une aventure à l'autre. Elle mange, elle pleure, elle s'assoit et regarde. Ces moments construisent un personnage plus efficacement que n'importe quel monologue héroïque.

// Princesse Mononoké pousse cette philosophie encore plus loin. Le film refuse de donner des réponses simples. Lady Eboshi n'est pas une méchante classique — elle détruit la forêt mais protège les lépreux et les anciennes prostituées. San est sauvage et violente mais pas sans raison. Ashitaka cherche une solution mais le film nous dit clairement qu'il n'y en a peut-être pas de parfaite.

// Les films Ghibli vieillissent bien parce qu'ils ne cherchent pas à impressionner. Ils cherchent à être vrais.`,
//     image: "https://images.unsplash.com/photo-1607604276583-3296cad8ab37?w=800&h=450&fit=crop",
//     date: "8 février 2026",
//     readTime: "5 min",
//   },
//   {
//     id: 3,
//     title: "Les dessins animés du samedi matin nous ont formés plus qu'on ne le croit",
//     author: "Youssef El Amrani",
//     category: "Classiques",
//     excerpt:
//       "De Ulysse 31 à Les Mystérieuses Cités d'Or, retour sur ces séries qui ont marqué toute une génération sans qu'on s'en rende compte.",
//     content: `Si tu as grandi dans les années 80 ou 90, tu as probablement un souvenir très précis : le réveil tôt le samedi matin, le bol de céréales, et la télé allumée sur le Club Dorothée ou une émission du même genre. C'était un rituel.

// Ce qu'on ne réalisait pas à l'époque, c'est à quel point ces séries étaient ambitieuses. Ulysse 31 prenait la mythologie grecque et la transposait dans l'espace. Les Mystérieuses Cités d'Or mélangeait aventure, histoire et science-fiction avec une rigueur narrative qu'on ne trouverait pas dans beaucoup de séries actuelles. Goldorak posait des questions sur la guerre et le sacrifice sous couvert de combats de robots géants.

// Ces séries ne prenaient pas les enfants pour des idiots. Elles n'avaient pas peur des thèmes sombres : la solitude, la perte, la trahison. Dans Rémi sans famille, le personnage principal perd littéralement tout ce qu'il aime. Dans Capitaine Flam, les enjeux sont réels et les victoires ne sont jamais gratuites.

// Il y avait aussi cette esthétique particulière des co-productions franco-japonaises. L'animation japonaise amenait la fluidité et le dynamisme, la narration française amenait une certaine gravité et une attention aux détails historiques. Le résultat était unique — ni tout à fait japonais, ni tout à fait français.

// Aujourd'hui, quand on remontre ces séries à des gens qui ne les connaissent pas, la réaction est souvent la même : "C'était vraiment pour les enfants, ça ?" Et c'est exactement le point. Les meilleures séries pour enfants sont celles qui ne se contentent pas d'être pour enfants.`,
//     image: "https://images.unsplash.com/photo-1611457194403-d3571b64e984?w=800&h=450&fit=crop",
//     date: "1 février 2026",
//     readTime: "5 min",
//   },
//   {
//     id: 4,
//     title: "Avatar: The Last Airbender, la preuve que l'animation occidentale peut rivaliser",
//     author: "Sarah Konaté",
//     category: "Animation occidentale",
//     excerpt:
//       "On oppose souvent anime et cartoon. Avatar a prouvé que cette distinction n'a aucun sens quand l'écriture est au rendez-vous.",
//     content: `Pendant longtemps, il y avait cette idée reçue : les dessins animés occidentaux, c'est pour les gosses, les anime, c'est pour les grands. Avatar: The Last Airbender a cassé cette idée en trois saisons et 61 épisodes.

// La série de Michael Dante DiMartino et Bryan Konietzko a réussi quelque chose de remarquable : créer un univers complet, avec sa propre mythologie, ses propres règles, et le rendre crédible du premier au dernier épisode. Les quatre nations ne sont pas juste un gimmick visuel — elles reflètent des philosophies, des cultures, des façons de voir le monde.

// Zuko a l'un des arcs de rédemption les mieux écrits de toute la fiction. Pas juste de l'animation — de toute la fiction. Son parcours de prince banni à allié du héros ne se fait pas en un seul épisode larmoyant. Ça prend trois saisons entières, avec des rechutes, des doutes, des moments où on n'est pas sûr qu'il fera le bon choix. Et quand il le fait enfin, ça a du poids parce qu'on a vu tout le chemin.

// Iroh est un autre personnage qui montre la maturité de l'écriture. Sur le papier, c'est le vieux sage comique. En réalité, c'est un homme brisé par la guerre qui a choisi la gentillesse comme réponse à la violence. La scène où il chante pour l'anniversaire de son fils mort... il n'y a rien à ajouter.

// Ce que Avatar prouve, c'est que le médium n'est pas une limite. L'animation peut raconter des histoires complexes, nuancées, émouvantes. Le problème n'a jamais été l'animation. Le problème, c'est quand on refuse de lui faire confiance.`,
//     image: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?w=800&h=450&fit=crop",
//     date: "25 janvier 2026",
//     readTime: "6 min",
//   },
//   {
//     id: 5,
//     title: "Akira : le film qui a tout changé et qu'on continue de piller",
//     author: "Karim Benziane",
//     category: "Critiques",
//     excerpt:
//       "Sorti en 1988, Akira a posé les bases visuelles et narratives de tout ce qui a suivi. Retour sur un monument.",
//     content: `Akira est sorti en 1988 et le monde de l'animation ne s'en est jamais remis.

// Le film de Katsuhiro Otomo, adapté de son propre manga, a coûté 1,1 milliard de yens — un budget colossal pour l'époque. Chaque centime se voit à l'écran. L'animation est d'une fluidité qui reste impressionnante aujourd'hui. Les décors de Neo-Tokyo sont d'une richesse de détails obsessionnelle. La scène de la moto de Kaneda au début du film, avec cette traînée lumineuse rouge, est devenue l'une des images les plus imitées de l'histoire du cinéma.

// Mais réduire Akira à sa technique, c'est passer à côté de l'essentiel. Le film parle de pouvoir incontrôlable, de jeunesse en colère, d'un monde d'après-guerre qui n'a rien appris. Tetsuo est un ado rejeté qui obtient un pouvoir divin et ne sait pas quoi en faire. Kaneda est son meilleur ami qui réalise trop tard qu'il ne peut pas le sauver. C'est une tragédie habillée en film de science-fiction.

// L'influence d'Akira est partout. The Matrix, Stranger Things, Kanye West, les frères Duffer — tout le monde a pioché dedans. La traînée de moto rouge est devenue un cliché visuel tellement elle a été reprise. Mais l'original garde une puissance brute que les copies n'atteignent pas.

// Ce qui est fascinant, c'est que le manga est encore plus ambitieux que le film. Six volumes denses, violents, philosophiques. Le film ne couvre qu'une fraction de l'histoire. Si vous n'avez lu que le film, il vous manque la moitié du tableau.

// Akira n'est pas juste un bon film d'animation. C'est un des films les plus importants du 20e siècle, point.`,
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=450&fit=crop",
//     date: "18 janvier 2026",
//     readTime: "7 min",
//   },
//   {
//     id: 6,
//     title: "Pourquoi l'animation pour adultes galère encore à être prise au sérieux",
//     author: "Amina Diallo",
//     category: "Culture",
//     excerpt:
//       "Malgré des séries comme Arcane ou Undone, l'animation reste coincée dans la case 'c'est pour les enfants' en Occident.",
//     content: `En 2024, Arcane a raflé des prix, été saluée par la critique et le public, et prouvé qu'une série animée pouvait avoir la profondeur d'un drama live-action. Et pourtant, la question revient toujours : "Mais c'est un dessin animé, non ?"

// Le problème est culturel, pas artistique. Au Japon, personne ne se pose la question. Les anime couvrent tous les genres, tous les âges, tous les sujets. En France, on a une tradition d'animation auteur avec des films comme Persepolis ou J'ai perdu mon corps. Mais aux États-Unis et dans une grande partie du monde occidental, l'animation reste associée à deux choses : les films pour enfants et la comédie pour adultes style Family Guy.

// Cette perception a des conséquences concrètes. Les projets d'animation ambitieux ont du mal à trouver des financements. Les studios préfèrent le "sûr" — des suites de franchises existantes, des films avec des personnages mignons qui vendent des jouets. Les créateurs qui veulent raconter des histoires adultes en animation doivent se battre deux fois plus.

// Undone (Amazon) est un exemple parfait. La série utilise la rotoscopie pour raconter une histoire sur la maladie mentale, le deuil, et la perception de la réalité. C'est brillant, c'est original, et presque personne ne l'a vue. Parce que "c'est un dessin animé".

// Les choses bougent, lentement. Le succès d'Arcane, la reconnaissance critique de films comme Flee ou Le Garçon et le Héron, tout ça contribue à faire évoluer les mentalités. Mais on est encore loin du jour où un film d'animation sera en compétition à Cannes sans que ça fasse débat.

// L'animation n'est pas un genre. C'est un médium. Et un médium, par définition, peut tout raconter.`,
//     image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&h=450&fit=crop",
//     date: "10 janvier 2026",
//     readTime: "6 min",
//   },
// ];

// export const commentsByArticle: Record<number, Comment[]> = {
//   1: [
//     {
//       id: 1,
//       author: "Lucas M.",
//       content:
//         "La BO de Cowboy Bebop tourne encore en boucle chez moi. Yoko Kanno est une génie, point final.",
//       date: "15 février 2026",
//     },
//     {
//       id: 2,
//       author: "Nina R.",
//       content:
//         "Le dernier épisode m'a laissée KO pendant une semaine entière. Aucune autre série m'a fait cet effet.",
//       date: "16 février 2026",
//     },
//     {
//       id: 3,
//       author: "Omar T.",
//       content:
//         "Pas d'accord sur le live-action Netflix par contre, j'ai trouvé ça honnête pour ce que c'était. Mais bon, l'original reste intouchable.",
//       date: "17 février 2026",
//     },
//   ],
//   2: [
//     {
//       id: 1,
//       author: "Chloé D.",
//       content:
//         "La scène de l'arrêt de bus dans Totoro, c'est exactement ça. Miyazaki comprend que parfois, ne rien montrer c'est montrer tout.",
//       date: "9 février 2026",
//     },
//     {
//       id: 2,
//       author: "Adrien K.",
//       content:
//         "Mononoké reste mon Ghibli préféré justement pour cette absence de manichéisme. Rien n'est noir ou blanc, comme dans la vraie vie.",
//       date: "10 février 2026",
//     },
//   ],
//   3: [
//     {
//       id: 1,
//       author: "Fatima B.",
//       content:
//         "Les Mystérieuses Cités d'Or !! J'ai montré ça à mes enfants récemment, ils ont accroché direct. Les bonnes histoires n'ont pas d'âge.",
//       date: "2 février 2026",
//     },
//     {
//       id: 2,
//       author: "Thomas V.",
//       content:
//         "Rémi sans famille m'a traumatisé gamin, pas de honte à l'admettre. Et cette esthétique franco-japonaise, on n'a jamais retrouvé ça.",
//       date: "3 février 2026",
//     },
//   ],
//   4: [
//     {
//       id: 1,
//       author: "Yasmine L.",
//       content:
//         "L'arc de Zuko est la référence absolue. Trois saisons de développement, zéro raccourci. On devrait enseigner ça en cours de scénario.",
//       date: "26 janvier 2026",
//     },
//     {
//       id: 2,
//       author: "Hugo P.",
//       content:
//         "Leaves from the vine... je peux même pas y penser sans avoir les yeux qui piquent.",
//       date: "27 janvier 2026",
//     },
//   ],
//   5: [
//     {
//       id: 1,
//       author: "Mehdi A.",
//       content:
//         "J'ai lu le manga après avoir vu le film et c'est incroyable à quel point le film ne montre qu'une fraction. Les deux valent le détour.",
//       date: "19 janvier 2026",
//     },
//   ],
//   6: [
//     {
//       id: 1,
//       author: "Léa F.",
//       content:
//         "Undone est un chef-d'oeuvre caché. Le fait que presque personne n'en parle prouve exactement le point de l'article.",
//       date: "11 janvier 2026",
//     },
//     {
//       id: 2,
//       author: "Samir N.",
//       content:
//         "Au Japon, mon boss de 50 ans lit des mangas dans le métro et personne ne le regarde de travers. On en est loin ici.",
//       date: "12 janvier 2026",
//     },
//   ],
// };
export interface Article {
  id: number;
  title: string;
  author: string;
  category: string;
  cover: string;
  content: string;
   excerpt: string;
}
export const articles:Article[] = [
  {
    id: 1,
    title: "Naruto",
    author: "Masashi Kishimoto",
    category: "Shonen",
    cover: "https://tse2.mm.bing.net/th/id/OIP.bmQbuKaGJXJD4hyA9zyejwHaKm?rs=1&pid=ImgDetMain&o=7&rm=3",
    content: "Un jeune ninja rêve de devenir Hokage...",
        excerpt: "Un jeune ninja rêve de devenir Hokage. Naruto Uzumaki est un orphelin rejeté par son village à cause du démon renard à neuf queues scellé en lui. Malgré les moqueries et les difficultés, il s'entraîne dur pour devenir le ninja le plus fort et gagner le respect de tous. Au fil de son parcours, il se fait des amis fidèles, affronte des ennemis redoutables, et découvre la vérité sur son passé. Une histoire d'amitié, de persévérance, et de dépassement de soi dans un monde rempli de ninjas et de mystères."
  },
  {
    id: 2,
    title: "Death Note",
    author: "Tsugumi Ohba",
    category: "Seinen",
    cover: "https://tse3.mm.bing.net/th/id/OIP.uV9neU4bmUG__sAJ9MqLxQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
    content: "Un cahier mystérieux qui tue quiconque y voit son nom écrit...",
    excerpt: "Un cahier mystérieux qui tue quiconque y voit son nom écrit. Light Yagami, un étudiant brillant, trouve ce cahier et décide de l'utiliser pour créer un monde meilleur en éliminant les criminels. Mais il se heurte à L, un détective génial qui est déterminé à l'arrêter. Un jeu du chat et de la souris s'engage entre les deux, avec des enjeux moraux et éthiques profonds."
  },
  {
    id: 3,
    title: "One Piece",
    author: "Eiichiro Oda",
    category: "Shonen",
    cover: "https://tse4.mm.bing.net/th/id/OIP.cywH-RycaEUWFxPiQzrilQHaHH?rs=1&pid=ImgDetMain&o=7&rm=3",
    content: "L'aventure épique d'un groupe de pirates à la recherche du One Piece...",
    excerpt: "L'aventure épique d'un groupe de pirates à la recherche du One Piece. Monkey D. Luffy, un jeune garçon élastique grâce à un fruit du démon, rêve de devenir le roi des pirates en trouvant le légendaire trésor One Piece. Il forme un équipage hétéroclite avec des personnages uniques, chacun ayant ses propres rêves et motivations. Ensemble, ils affrontent des ennemis puissants, découvrent des îles mystérieuses, et défient les autorités maritimes dans une quête pleine d'action, d'humour, et d'émotion."
  },
  {
    id: 4,
    title: "Attack on Titan",
    author: "Hajime Isayama",
    category: "Seinen",
    cover: "https://tse1.mm.bing.net/th/id/OIP.CrqYuT1POEZYtV0zszyf4AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    content: "L'humanité lutte pour sa survie contre des titans géants...",
    excerpt: "L'humanité lutte pour sa survie contre des titans géants. Des humains vivent dans des cités entourées de murs pour se protéger des Titans, des créatures gigantesques qui dévorent les humains. Le jeune Eren Yeager rêve de vengeance après que son amie Mikasa soit tuée par un Titan. Il rejoint les soldats de l'armée et découvre que les Titans sont en réalité des humains transformés par une malédiction. Une histoire intense de survie, de révolte, et de conflits entre les humains et leurs ennemis."
  },
  {
    id: 5,
    title: "My Hero Academia",
    author: "Kohei Horikoshi",
    category: "Shonen",
    cover: "https://tse3.mm.bing.net/th/id/OIP.OdusqtYac3HG7uv1r4o00AHaFE?w=980&h=670&rs=1&pid=ImgDetMain&o=7&rm=3",
    content: "Dans un monde où les super-pouvoirs sont monnaie courante, un jeune garçon rêve de devenir un héros...",
    excerpt: "Dans un monde où les super-pouvoirs sont monnaie courante, un jeune garçon rêve de devenir un héros. Izuku Midoriya est un adolescent sans pouvoirs dans un monde où les super-pouvoirs sont normaux. Il rêve de devenir le héros le plus puissant du monde et se retrouve dans l'école des super-héros pour apprendre à maîtriser ses pouvoirs. Une histoire pleine d'espoir, d'ambition, et de détermination."
  },
  {
    id: 6,
    title: "Tokyo Ghoul",
    author:" Sui Ishida",
    category: "Seinen",
    cover: "https://tse2.mm.bing.net/th/id/OIP._m0GyKK5DYYqxE1k-QnT0AHaK5?w=680&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",
    content: "Un étudiant devient mi-humain mi-goule après une attaque...",
    excerpt: "Un étudiant devient mi-humain mi-goule après une attaque. Le jeune Kaneki Ken est un étudiant de l'université qui est attaqué par un goule et transformé en demi-goule. Il doit apprendre à vivre avec ses nouvelles capacités et à survivre dans un monde où les humains et les ghouls coexistent dans la peur et la tension."
  },
  {
    id: 7,
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",
    category: "Shonen",
    cover: "https://tse2.mm.bing.net/th/id/OIP.m_jgdXHKG4PaUX1tiHpWHwHaEn?w=728&h=454&rs=1&pid=ImgDetMain&o=7&rm=3",
    content: "Un jeune garçon devient chasseur de démons après que sa sœur soit transformée en démon...",
    excerpt: "Un jeune garçon devient chasseur de démons après que sa sœur soit transformée en démon. Le jeune Tanjiro Kamado est un adolescent qui, après que sa sœur Nezuko soit transformée en démon, se retrouve à combattre les démons pour la protéger et la sauver. Une histoire pleine d'action, de courage, et de compassion."
  },
  {
    id: 8,
    title: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
    category: "Shonen",
    cover: "https://tse3.mm.bing.net/th/id/OIP.HiYO6Y5C2veCZOIDSe0HVAHaEo?w=600&h=375&rs=1&pid=ImgDetMain&o=7&rm=3",
    content: "Deux frères alchimistes cherchent la pierre philosophale pour restaurer leurs corps...",
    excerpt: "Deux frères alchimistes cherchent la pierre philosophale pour restaurer leurs corps. Edward et Alphonse Elric sont des frères qui, après une expérience alchimique malheureuse, perdent leur corps et doivent retrouver leurs corps d'origine. Leur quête les mène à travers un monde rempli de mystères, de dangers, et de découvertes sur l'alchimie."
  },
  {
    id: 9,
    title: "Bleach",
    author: "Tite Kubo",
    category: "Shonen",
    cover: "https://p4.wallpaperbetter.com/wallpaper/185/518/338/anime-boys-bleach-hollow-kurosaki-ichigo-wallpaper-preview.jpg",
    content: "Un adolescent devient un shinigami pour protéger les vivants et les morts...",
    excerpt: "Un adolescent devient un shinigami pour protéger les vivants et les morts. Ichigo Kurosaki est un lycéen qui, après avoir acquis les pouvoirs d'un shinigami, doit protéger les humains des esprits maléfiques appelés hollows et guider les âmes des morts vers l'au-delà. Une histoire pleine d'action, de mystère, et de combats épiques."
  },
  {
    id: 10,
    title: "My Dress Up Darling",
    author: "Yuki Kajiura",
    category: "isekai",
    cover: "https://http2.mlstatic.com/D_NQ_NP_658963-MLM83408101551_032025-O.webp",
    content: "Un lycéen passionné de couture rencontre une camarade de classe qui veut devenir cosplayeuse...",
    excerpt: "Un lycéen passionné de couture rencontre une camarade de classe qui veut devenir cosplayeuse. Le jeune Masaki Hayashi est un lycéen qui, après avoir été invité à participer à un concours de cosplay, se retrouve à côtoyer une jeune fille qui rêve de devenir cosplayeuse. Une histoire pleine d'humour et d'émotion."
  }
];