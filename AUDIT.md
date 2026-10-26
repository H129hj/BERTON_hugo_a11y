# AUDIT.md : complété

## 1. Audits outillés

Les ratios de la partie 2 sont calculés avec la formule WCAG (luminance relative).

- **Lighthouse** (onglet Accessibility) : à compléter avec le score et les violations affichées.
- **axe DevTools** : à compléter avec les violations de contraste remontées.
- **WAVE** : à compléter avec les "Contrast Errors" remontées.

## 2. Les éléments à corriger

| Élément | Couleur texte | Couleur fond | Ratio mesuré | Ratio AA requis | Conforme ? |
|---------|---------------|--------------|--------------|------------------|------------|
| `.subtitle` | #aaaaaa | #ffffff | 2.32:1 | 4.5:1 | Non |
| `.label` | #999999 | #ffffff | 2.85:1 | 4.5:1 | Non |
| `.hint` | #bbbbbb | #ffffff | 1.92:1 | 4.5:1 | Non |
| `.btn-primary` | #ffffff | #6fa8dc | 2.53:1 | 4.5:1 (texte) | Non |

Après correction :

| Élément | Couleur texte | Couleur fond | Ratio | Conforme ? |
|---------|---------------|--------------|-------|------------|
| `.subtitle` | #6b6b6b | #ffffff | 5.33:1 | Oui |
| `.label` | #6b6b6b | #ffffff | 5.33:1 | Oui |
| `.hint` | #707070 | #ffffff | 4.95:1 | Oui |
| `.btn-primary` | #ffffff | #2a6bb5 | 5.43:1 | Oui |

J'ai gardé des gris et le bleu d'origine, juste plus foncés, pour garder la même hiérarchie visuelle.

## 3. Priorisation

1. **`.hint` (1.92:1)** : c'est le plus bas, le texte est presque illisible et il contient une information utile (vérifier la facturation).
2. **`.btn-primary` (2.53:1)** : c'est l'action principale de la page, un utilisateur malvoyant peut ne pas lire le libellé du bouton.
3. **`.subtitle` (2.32:1)** : c'est la première phrase sous le titre, elle explique à quoi sert la page.
4. **`.label` (2.85:1)** : le moins grave, car la valeur juste en dessous est très contrastée, et on devine le sens du libellé.
