# Quête 4 : Navigation clavier et focus

Rendu de Hugo BERTON.

## Ce que j'ai corrigé

1. **`tabIndex` positif** : j'ai supprimé le faux élément `span tabIndex={1}` qui prenait le focus avant tout le reste.
2. **Focus invisible** : `*:focus { outline: none }` est remplacé par un `:focus-visible` avec un contour bleu de 3px, bien visible au clavier.
3. **Skip link** : le lien "Aller au formulaire" est maintenant le premier élément de la page. Il est caché hors de l'écran et apparaît quand il a le focus. Le formulaire a `tabIndex={-1}` pour pouvoir recevoir le focus quand on clique sur le lien.
4. **Focus trap dans la modale** : Tab et Shift+Tab bouclent entre le premier et le dernier élément focusable. À l'ouverture le focus va dans la modale, et à la fermeture il revient sur le bouton qui l'a ouverte.

## Lancer l'app

```bash
npm install
npm run dev
```
