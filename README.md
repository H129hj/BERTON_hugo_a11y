# Quête 2 : HTML sémantique en React

Rendu de Hugo BERTON.

Le blog "DevBlog" était construit uniquement avec des `<div>`. J'ai gardé le même rendu visuel
et remplacé les balises par celles qui portent le bon sens.

## Ce qui a changé dans `src/App.tsx`

- `<header>` et `<nav>` pour l'en-tête et les liens, qui sont de vrais `<a href>`.
- `<main>` autour du contenu, `<footer>` pour le pied de page.
- Un seul `<h1>` (le titre de l'article), puis des `<h2>` pour les sous-titres, sans saut de niveau.
- `<article>` pour l'article et `<section>` pour la newsletter.
- "J'aime" et "S'inscrire" sont de vrais `<button>`.
- Le champ e-mail a un `<label>` relié par `htmlFor` / `id`.

Dans `App.css`, j'ai seulement compensé les styles par défaut du navigateur (taille des titres,
bordure des boutons) pour que la page ne change pas d'aspect.

## Lancer l'app

```bash
npm install
npm run dev
```
