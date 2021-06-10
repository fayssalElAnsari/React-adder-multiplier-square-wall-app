# Introduction à React

Ce dépôt contient le code utilisé en exemple dans le cours [https://www.fil.univ-lille1.fr/~routier/enseignement/licence/js-s4/html/react.html](https://www.fil.univ-lille1.fr/~routier/enseignement/licence/js-s4/html/react.html).

Plusieurs versions progressives du dépôt pour accompagner le cours.

## Mise en place
 * récupérer le dépôt  
 * installer les paquets *Node.js* :
  ```bash
  $  npm install
  ```
  * démarrer le serveur de développement de *Webpack*
  ```bash
  $  npm run dev-server
  ```

## Les versions

Il faut charger une version avec

```bash
$ git checkout **tag**
```
où `tag` peut prendre comme valeur :

* `v0` : premier exemple basique avec *React*  
   voir `/src/scripts/main.js` et le point d'insertion `#insertReactHere` dans `/src/index.html`
* `v0.5` : second exemple avec création d'un emboitement d'éléments  
* `v1` : premier exemple avec JSX   
* `v2` : premiers composants sans état  
  voir `/src/components/first.jsx`, `/src/components/second.jsx` et son utilisation dans `/src/mains.js`
* `v3` : utilisation des propriétés  
  voir `/src/components/person.jsx`, `/src/components/personListing.jsx` et son utilisation dans `/src/mains.js`
* `v3.1` : présentation de `props.children`  
* `v4` : définition des composants à l'aide de classes   
  voir `/src/components/person.jsx`, `/src/components/personListing.jsx` et son utilisation dans `/src/mains.js`
* `v4.5` : utilisation de `PropTypes` et `defaultProps`  
  voir `/src/components/person.jsx` et son utilisation dans `/src/mains.js`
* `v4.6-problem` : génération d'une liste de composants, à l'aide de `map()`  
  voir `/src/components/personListing.jsx`    
    /!\\ mais **cette version pose problème** car il manque la gestion de la propriété `key` : voir dans la console  
* `v4.6-ok` : génération d'une liste de composants : gestion de la propriété `key`   
* `v5` : premier composant à état  
  voir `/src/components/person.jsx`
* `v5.1` : gestion d'événements  
  voir `/src/components/star.jsx`
* `v5.2` : setState()  et état courant
  voir `/src/components/star.jsx`
* `v5.5` : cycle de vie du composant v1, mise en évidence de  `componentDidMount()`  
  voir `/src/components/person.jsx`, `/src/components/personListing.jsx`
* `v5.6` : cycle de vie du composant v2, mise en évidence de  `componentDidUpdate()`  
  voir `/src/components/person.jsx`
* `v5.7` : cycle de vie du composant v3, mise en évidence de  `componentWillUnmount()`  
  voir `/src/components/person.jsx`  
* `v6` : il faut remonter l'état et inversion du flux  
  voir `/src/components/DelayButton.jsx` et `/src/components/personListingController.jsx`
* `v6.1` : restructuration des composants, suite de "placer l'état au plus haut" et de l'inversion du flux  
  voir `/src/components/personListingControls.jsx` et `/src/components/personListingController.jsx`
* `v7` : exemple de composant avec des éléments *non contrôlés* par *React*  
  voir `/src/components/addPerson.jsx`  
* `v7.1` : exemple de composant contrôlé 
  voir `/src/components/personListingData.jsx`  


Faire ```git checkout master``` pour revenir à la version finale.
