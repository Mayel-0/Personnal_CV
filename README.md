# aide media query 

## Prompte contexte : 

Je suis sur un projet de site vitrine personnel. Je le fais en Vue.js, donc j’utilise les langages HTML, CSS et JavaScript. J’utilise également le framework GSAP pour des animations un peu plus complexes, comme du scroll trigger.
J’ai besoin de ton aide pour passer mon site web du format ordinateur au format téléphone. J’ai essayé de faire les choses responsive au maximum, mais j’ai quelques difficultés car le design de mon site ne me permet pas de faire les deux formats dans un seul design.
J’ai donc un design PC et un design téléphone. Le site existe déjà en version PC. Je voudrais que tu m’aides sur les media queries en CSS, et aussi sur les modifications possibles en JavaScript. J’ai déjà fait le HTML donc l’affichage est déjà en place
Tu es là comme un collègue pour m’aider dans ma tâche et répondre à mes questions.

## Prompte 1: 

J’utilise beaucoup de valeurs réactives et j’utilise un watch pour modifier du style CSS afin de créer des animations, en plus des pseudo-classes.
Comment faire pour que mon watch modifie et détecte le format de l’utilisateur ?

## Prompte 2: 

Tu me conseilles quoi entre modifier beaucoup de styles dans beaucoup de div différentes pour créer mon autre design au format téléphone, ou alors créer dans mon HTML une div/section en display: none par défaut, qui passe en flex suivant le format de l’utilisateur, pour que le changement soit plus simple ?
Ça rendra mon HTML un peu plus lourd, mais je compte le faire sur peu d’éléments.

## Prompte 3:

Explique-moi comment mieux cibler mes éléments avec mon CSS, par exemple :
(.range .RangButton:first-child > button:nth-child(1) svg).
Je voudrais mieux utiliser mon CSS pour éviter de trop utiliser les classes et les div.

# aide GSAP


## Prompte contexte : 

Je suis sur un projet de site vitrine personnel. Je le fais en Vue.js, donc j’utilise les langages HTML, CSS et JavaScript. J’utilise également le framework GSAP pour des animations un peu plus complexes, comme du scroll trigger.
Et justement, j’ai besoin de ton aide pour m’aider à créer mon scroll trigger, car je commence à peine à apprendre et utiliser GSAP pour les animations complexes. Explique-moi simplement, de façon à ce que j’apprenne à utiliser cet outil.
J’ai déjà fait tout le site web, j’ai juste envie de rajouter encore plus d’animations sur ce dernier.
Tu es là comme un professeur pour m’aider dans ma tâche et répondre à mes questions. 

## Prompte 1: 

j’utilise donc des ref pour contrôler mes éléments pour l’animation du scroller trigger comment je doit faire pour que mon markers bottom et mon markers top soit bien a la bonne place pour bien déclencher et finir l’animation au bon moment du scrolling 
cela doit paraître le plus naturel possible . 


## Prompte 2: 

explique moi cette partie de mon code. 
je voudrais comprendre tout ce qui ce passe dans le code 

    onMounted(() => {
     Animation.value = true
    
    
     console.log(props.projetout)
     gsap.from(Projet1.value, {
       x: -100,              // slide depuis la gauche
       opacity: 0,           // part transparent
       duration: 1,
       ease: 'power3.out',
       scrollTrigger: {
         trigger: Projet1.value,
         start: 'top 70%',
         end: 'bottom 60%',          // important pour avoir une zone d’activation
         scrub: true,
         //markers: true,
       },
     })
     gsap.from(Projet2.value, {
       x: -100,              // slide depuis la gauche
       opacity: 0,           // part transparent
       duration: 1,
       ease: 'power3.out',
       scrollTrigger: {
         trigger: Projet2.value,
         start: 'top 70%',
         end: 'bottom 60%',          // important pour avoir une zone d’activation
         scrub: true,
         // markers: true,
       },
     })
     gsap.from(Projet3.value, {
       x: -100,              // slide depuis la gauche
       opacity: 0,           // part transparent
       duration: 1,
       ease: 'power3.out',
       scrollTrigger: {
         trigger: Projet3.value,
         start: 'top 70%',
         end: 'bottom 60%',          // important pour avoir une zone d’activation
         scrub: true,
         //markers: true,
       },
     })
     gsap.from(Projet4.value, {
       x: -100,              // slide depuis la gauche
       opacity: 0,           // part transparent
       duration: 1,
       ease: 'power3.out',
       scrollTrigger: {
         trigger: Projet4.value,
         start: 'top 70%',
         end: 'bottom 10%',          // important pour avoir une zone d’activation
         scrub: true,
         //markers: true,
       },
     })
    })


## Prompte 3:

Donc là, dans ce code, j’utilise un scrub: true, mais avant j’utilisais un toggleActions.
Explique-moi la différence entre les deux, et aussi toutes les possibilités avec toggleActions, ainsi que comment bien l’utiliser.
J’ai remarqué qu’on pouvait lui donner plusieurs paramètres différents. Explique-moi lesquels, dans quel ordre et pourquoi.


## Prompte 4:

Pourquoi tout le code doit être dans le OnMounted si je le mets en dehors cela ne fonctionne pas tout doit être chargé après le DOM ? 



## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
