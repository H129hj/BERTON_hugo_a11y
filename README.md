# Quête 3 : ARIA, composants interactifs

Rendu de Hugo BERTON.

Les deux composants fonctionnaient à la souris mais ne disaient rien à un lecteur d'écran.
Les boutons étaient déjà de vrais `<button>`, je n'ai donc ajouté que les attributs d'état.

## Accordion

- `aria-expanded` sur le bouton, lié à l'état `expanded`.
- `aria-controls` sur le bouton, qui pointe vers l'`id` du panneau.
- Le panneau a un `id` généré avec `useId`, pour qu'il reste unique quand on a plusieurs accordéons.

## Modal

- `role="dialog"` et `aria-modal="true"` sur le conteneur.
- `aria-labelledby` qui pointe vers le `<h2>` (`id="modal-title"`).
- La touche Échap ferme la modale (écouteur sur `document`, retiré au démontage).

Le piégeage du focus est le sujet de la quête suivante, je ne l'ai pas traité ici.

## Lancer l'app

```bash
npm install
npm run dev
```
