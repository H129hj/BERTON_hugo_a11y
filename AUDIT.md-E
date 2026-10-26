# AUDIT.md : complété

Pour chaque ligne, voici le problème trouvé dans `src/App.tsx` / `src/App.css` et son analyse.

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui |
|---|------------------------------|-------------------------------|----------------------------------------|
| 1 | `App.tsx` ligne 19 : `<img src="/hero.jpg" />` n'a pas d'attribut `alt` | P (Perceptible) | Un lecteur d'écran ne peut pas dire ce que montre l'image. Une personne aveugle ou malvoyante passe à côté de l'info. |
| 2 | `App.tsx` lignes 17 et 21 : le `<h1>` est suivi directement d'un `<h3>`, il n'y a pas de `<h2>` | R (Robuste) | Les titres servent à naviguer dans la page avec un lecteur d'écran. Un niveau qui saute rend la structure fausse et déroutante. |
| 3 | `App.tsx` ligne 36 : "Voir plus" est un `<div onClick>` et pas un `<button>` | O (Opérable) | Le div n'est pas atteignable avec Tab et ne réagit pas à Entrée ou Espace. Un lecteur d'écran ne l'annonce pas comme un bouton. Bloquant pour qui n'utilise pas la souris (blessure, handicap moteur, lecteur d'écran). |
| 4 | `App.tsx` lignes 32 à 34 : le bandeau `.carousel` (newsletter) est affiché sans aucun moyen de le fermer ou de le mettre en pause | O (Opérable) | Un contenu qui s'impose doit pouvoir être masqué ou arrêté (critère WCAG 2.2.2). Gênant pour les personnes qui ont du mal à se concentrer et pour celles qui lisent lentement. |
| 5 | `App.tsx` lignes 41 à 43 : trois liens ont le même texte "cliquez ici" | U (Compréhensible) | Hors contexte, on ne sait pas où mène chaque lien. Les utilisateurs de lecteur d'écran listent souvent les liens d'une page et ne voient alors que trois "cliquez ici" identiques. |
| 6 | `App.tsx` ligne 26 et `App.css` lignes 4 et 5 : le statut de l'article ("publié" ou "annulé") n'est donné que par la couleur du rond (`dot-green` ou `dot-red`) | P (Perceptible) | L'info n'existe que par la couleur. Une personne daltonienne, un écran en noir et blanc ou un lecteur d'écran ne la reçoivent pas. |

> Rappel : P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.

## Niveau de conformité et cadre légal

- **Niveau visé : AA.** C'est le niveau demandé par presque toutes les réglementations, dont le RGAA. Le A est le minimum, le AAA est rarement tenable sur tout un site.
- **Ces 6 problèmes** relèvent surtout du niveau A (alternative textuelle, clavier, structure, information donnée par la couleur seule). Tant qu'ils sont là, la page ne peut pas se dire conforme WCAG.
- **Cadre en France :** la loi du 11 février 2005 a posé l'obligation pour les services publics, et le RGAA est le référentiel qui la traduit en critères vérifiables. Il concerne l'État, les collectivités, les établissements publics et les entreprises de plus de 250 millions d'euros de chiffre d'affaires.
- **Même hors obligation légale**, corriger ces points reste utile : un site accessible touche plus d'utilisateurs, y compris ceux en situation de gêne temporaire (bras cassé, plein soleil), et il est mieux référencé.
