# WKG Consulting

Site vitrine de **Williams Kouton Godonou**, développeur indépendant. Objectif unique :
**être contacté pour des missions**.

Spécifications détaillées — à lire avant de toucher au contenu ou au tunnel de conversion :

- `docs/wkg-site-contenu.md` — positionnement, structure, réalisations
- `docs/wkg-conversion.md` — chatbot et prise de rendez-vous

---

## La règle qui gouverne tout le reste

Le site vend **la vérifiabilité**. Sa thèse est : *« je construis des systèmes dont on peut
vérifier les décisions. »*

> **Un site qui vend la vérifiabilité ne survit pas à une seule affirmation invérifiable.**
> Une phrase inventée détruit l'argument de vente de toute la page.

D'où la règle absolue :

> **Aucun chiffre sur ce site qui ne puisse être pointé du doigt dans un dépôt, une console
> ou un document.**

Interdits, sans exception : « des dizaines de clients satisfaits » · un logo client sans
autorisation écrite · un taux de disponibilité, un temps de réponse ou un gain de performance
non mesuré · « expert en… » · un produit annoncé comme lancé alors qu'il ne l'est pas.

**Si tu ne peux pas sourcer un chiffre, tu ne l'écris pas. Tu demandes.**

---

## Deux marques, une entreprise

| | WKG Consulting | MOTIS |
|---|---|---|
| Vend | des prestations de développement | des abonnements |
| À | des entreprises et porteurs de projet | des consommateurs |
| Identité visuelle | bleu de plan, registre document d'ingénierie | ambre, olive, rouille — registre manuel de campagne |

Même entreprise individuelle, même SIREN, mêmes mentions légales. **Mais pas la même
identité visuelle.**

- **Ne réutilise jamais la palette MOTIS** ici, ni ses composants, ni sa typographie.
- MOTIS apparaît sur ce site **en étude de cas**, rien de plus.
- Les conditions de vente diffèrent : MOTIS vend en business-to-consumer, WKG en
  business-to-business. Ne les mélange pas.

---

## Pile technique

`[À CONFIRMER si la structure réelle diffère]`

```
Next.js (App Router) · TypeScript · pnpm · déploiement Vercel
```

| | |
|---|---|
| `pnpm dev` | développement local |
| `pnpm build` | vérification avant commit |
| `pnpm lint` | |

**Le contenu est en français. Le code est en anglais** — noms de variables, de fonctions, de
fichiers. Les commentaires suivent le code.

---

## Les quatre réalisations

Règle de sélection, à respecter avant d'en ajouter une cinquième :

> **Quatre cas qui prouvent la même chose n'en prouvent qu'une.**

| Cas | Ce qu'il prouve, et que les autres ne prouvent pas |
|---|---|
| **MOTIS** | la rigueur d'un système dont chaque décision se justifie |
| **Pipeline de qualification de leads** | l'IA en production, orchestrée, à coût maîtrisé |
| **Huetchenou** | mettre une activité en ligne de bout en bout, acquisition comprise |
| **Cryo** | du logiciel système natif (processus, mémoire, API Windows) qui ne ment pas sur ce qu'il fait |

Si une nouvelle réalisation prouve la même chose qu'une existante, **elle ne va pas sur le
site** — ou elle remplace l'autre.

**MOTIS porte la mention « lancement en préparation ».** Ne la retire pas tant que le produit
n'est pas en vente : un produit annoncé comme lancé alors qu'il ne l'est pas contredit la
thèse du site dans la même page.

---

## Le chatbot — quatre interdits absolus

Le chatbot du site est **une instance du pipeline de qualification de leads**, le produit
vendu. Le visiteur qui converse essaie le système en vente.

| Jamais | |
|---|---|
| **Un tarif**, même une fourchette | un tarif sorti par un programme est une offre commerciale émise sans personne derrière |
| **Un délai** de livraison | un engagement que personne n'a pris |
| **Un engagement** au nom de Williams | il décrit, il ne promet pas |
| **La première personne au nom de Williams** | il est l'assistant du site, et parle de Williams à la troisième personne |

Et le principe qui le distingue de tous les autres :

> **Le refus est la démonstration.** Hors corpus, il dit qu'il ne sait pas et propose le
> rendez-vous. Pas de réponse plausible fabriquée pour éviter le vide.

**Les plafonds avant la mise en ligne, jamais après** — jetons par conversation, conversations
par adresse et par jour, dépense quotidienne globale. Un chatbot public sans plafond est un
portefeuille ouvert : une soirée suffit à une facture mensuelle. Modèle et fournisseur
épinglés, aucune bascule automatique.

---

## Clients : ce qui ne se fait pas sans autorisation

- **Autorisation écrite avant de nommer un client**, d'afficher un lien, un logo ou une
  capture
- **Aucune capture ne contient de donnée réelle** — contenu client, nom, adresse, document
- **Aucun identifiant, aucune clé, aucune adresse d'interface de programmation** visible dans
  une capture ou un extrait de code
- Projet sous accord de confidentialité : décrire le problème et l'architecture sans nommer —
  et le dire. *« Client sous accord de confidentialité »* rassure plutôt qu'il n'inquiète.

---

## Ton

- **Pas de superlatif.** « Je construis », pas « j'excelle dans la construction de ».
- **Le problème avant la solution** dans chaque section.
- **Aucun vocabulaire d'agence** : « solutions innovantes », « accompagnement sur mesure »,
  « votre partenaire digital ». Des mots que personne ne peut contredire, donc que personne
  ne croit.
- **Dire non quelque part.** Un site qui ne refuse rien ne décrit personne.

---

## Tu ne fais pas ça sans demander

1. Publier le nom, le logo ou une capture d'un client
2. Ajouter une affirmation chiffrée
3. Modifier un prix, un délai ou un engagement affiché
4. Activer le chatbot publiquement — les plafonds d'abord, toujours
5. Retirer la mention d'état d'une réalisation
6. Toucher aux mentions légales, qui sont communes avec MOTIS

---

## Avant toute mise en ligne

- `pnpm build` passe
- Chaque nombre affiché a une source identifiable
- Chaque réalisation porte son état réel
- Aucune capture ne contient de donnée réelle ni de secret
- Le site est lisible à 400 px de large, sans défilement horizontal
- Les plafonds du chatbot sont actifs, si le chatbot est en ligne

---

## Hors périmètre

Ce dépôt ne contient **ni le code de MOTIS, ni celui du pipeline**. Les réalisations y sont
décrites, pas hébergées.

Les mentions légales sont communes aux deux marques — même entreprise, même SIREN. Toute
modification s'y répercute : signale-la, ne la fais pas seul.
