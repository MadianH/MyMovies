# MyMovies

  Mymovies est une application web qui permet de se créer une liste de films favoris.
  Une liste de films vous ai proposé sur la page d'accueil, vous pouvez parcourir la liste
  et "liker" les films. Si un film est "liker" vous le retrouverai dans vos favoris.

## Stack
  * Create React App
  * Redux
  * Rest


## Librairies

  En cours...


## Composants

  * **App :** Composant parent de tous les composants

  * **Card :**  Contient les films proposés et liker

  * **Navbar :** Contient les boutons de navigation

  * **Modal :** Contient les formulaires inscription / connection

  * **Input :** Créer des formulaires inscription / connection

  * **Button :** Créer les boutons présents sur le site


## Reduceur

  * **movieList** : contient les films proposés
  * **movieLikeList** : contient les films liker
  * **modal** : contient l'etat isOpen : true/false du modal


## User stories

  * Parcourir une liste de films
  * Inscription du visiteur
  * Connection du visiteur
  * If(visiteur === connecté): liker un film => retrouver les films liker en favori


## Tâches  

### Afficher la liste de films proposés
  1. Se brancher au backEnd  
  2. Fetch la liste de films proposés  
  3. Créer un composant **Card** pour contenir les films  
  4. Créer une fonction pour liker un film (le film liker doit être envoyé au backend)  

### Inscription / Authentification
  1. Créer un composant **Input**  
  2. Créer un composant **Modal** qui contient les inputs inscription/connection  
  3. Inscription: envoyer au backEnd les informations de l'utilisateur / indiqué à l'utilisateur la réponse du backend(insription validé ou non-validé)    
  4. Connection: envoyer les informations de l'utilisateur / indiqué à l'utilisateur la réponse du backend(connection validé ou non-validé)  
  5. Creer un reduceur qui stockera les informations de l'utilisateur connecté

### Navigation du site

**Créer un composant Navbar qui contient :**  
  * Logo du site
  * Bouton qui affiche les films
  * Bouton qui affiche les films favoris
  * Bouton qui affiche le modal inscription/connection
