# Quête 5 : contrastes de couleurs et audit

Page « Espace client » en React + Vite + TypeScript. Le but : repérer les
textes qui ne passent pas le contraste WCAG AA, les corriger dans
`src/App.css` et documenter l'audit dans [`AUDIT.md`](./AUDIT.md).

## Lancer le projet

```bash
npm install
npm run dev
```

## Ce que j'ai fait

- Calcul des ratios de contraste des 4 éléments qui posaient problème
  (`.subtitle`, `.label`, `.hint`, `.btn-primary`) avec la formule de
  luminance relative des WCAG.
- Correction des couleurs dans `src/App.css` pour passer le seuil AA
  (4.5:1 pour du texte normal), en gardant des gris et le bleu d'origine,
  juste plus foncés.
- Rédaction de `AUDIT.md` : tableau avant/après et ordre de priorité.

## Résultat

| Élément | Avant | Après |
|---------|-------|-------|
| `.subtitle` | 2.32:1 | 5.33:1 |
| `.label` | 2.85:1 | 5.33:1 |
| `.hint` | 1.92:1 | 4.95:1 |
| `.btn-primary` | 2.53:1 | 5.43:1 |
