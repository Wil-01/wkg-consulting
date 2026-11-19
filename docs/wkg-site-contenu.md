# WKG Consulting — Contenu et positionnement du site (spécification)

> Ce que le site affirme, ce qu'il prouve, et la règle qui gouverne les deux.
>
> Positionnement retenu : **développeur indépendant**, objectif **être contacté pour des
> missions**. Une personne, pas une structure : le client achète un jugement, pas une capacité
> de production.

---

## 0. La thèse

Le site n'argumente pas « développeur fullstack, voici ma stack ». Il y en a des milliers et ça
ne se compare que sur le prix.

> **Je construis des systèmes dont on peut vérifier les décisions.**

C'est ce qui ressort réellement du travail — moteur déterministe, mode ombre avant écriture,
tests de mutation, journal des décisions — et c'est un argument commercial pour une entreprise
qui achète du développement.

La formule qui le dit en une ligne, et qui distingue dans un marché plein de gens qui branchent
une interface de programmation et appellent ça de l'IA :

> **Le calcul vit dans le code. Le modèle ne fait que formuler.**

---

## 1. La règle sur les affirmations — à poser avant d'écrire une ligne

Un site qui vend la vérifiabilité ne peut pas affirmer ce qu'il ne peut pas montrer. Une seule
affirmation invérifiable détruit la thèse entière.

> **Aucun chiffre sur ce site qui ne puisse être pointé du doigt dans un dépôt, une console ou
> un document.**

| Interdit | Pourquoi |
|---|---|
| « Des dizaines de clients satisfaits » | invérifiable, et faux au démarrage |
| Un logo client sans autorisation écrite | risque juridique et perte de confiance |
| Un taux de disponibilité, un temps de réponse, un gain de performance non mesuré | une promesse tenue par personne |
| « Expert en… » | un mot que personne ne peut contredire ni vérifier |
| Un produit annoncé comme lancé alors qu'il ne l'est pas | le plus grave : c'est la thèse qui tombe |

**Chaque affirmation chiffrée du site porte sa source**, même implicitement. Et chaque cas
indique honnêtement son état : livré, en production, en préparation de lancement.

### 1.1 Les trois à vérifier dans la version actuelle

- **578 tests d'isolement** — confirmer le chiffre et son périmètre exact
- **« 100 % des ajustements accompagnés de leur raison »** — si une seule branche du moteur
  écrit sans journaliser, l'affirmation est fausse
- **« Réponse sous deux jours ouvrés »** — un engagement à ne garder que s'il est tenable

---

## 2. Structure

| Section | Travail |
|---|---|
| Héros | la thèse, en une phrase, plus l'appel à l'action |
| Prestations | quatre familles de problèmes, pas une liste de technologies |
| **Réalisations** | quatre cas, chacun prouvant **autre chose** (§3) |
| Méthode | quatre principes tirés de pannes réelles |
| Outils | court, scannable, sans hiérarchie de maîtrise |
| Conversation et rendez-vous | voir `wkg-conversion.md` |
| Contact et mentions légales | |

---

## 3. Les quatre réalisations

### 3.1 La règle de sélection

> **Un portefeuille de quatre projets qui prouvent la même chose n'en prouve qu'une.**

Chaque cas occupe une case différente. Si deux cas démontrent la même compétence, l'un des deux
sort.

| Cas | Ce qu'il prouve, et que les autres ne prouvent pas |
|---|---|
| **MOTIS** | la rigueur d'un système dont chaque décision se justifie |
| **Pipeline de qualification de leads** | l'IA en production, orchestrée, avec un coût maîtrisé |
| **Huetchenou** | mettre une petite activité en ligne de bout en bout, acquisition comprise |
| **Cryo** | du logiciel système natif (processus, mémoire, API Windows) qui ne ment pas sur ce qu'il fait |

---

### 3.2 MOTIS — la vérifiabilité

**État : lancement en préparation.** À écrire tel quel. Un produit annoncé comme lancé alors
qu'il ne l'est pas contredit la thèse du site dans la même page.

**Ce que le cas doit dire** : le problème (des chiffres affichés sans provenance, donc une
confiance qui s'érode) · quatre décisions d'architecture avec leur raison · la preuve chiffrée ·
le périmètre réellement livré.

**Ce qu'il ne doit pas dire** : aucun chiffre d'usage, aucun nombre d'utilisateurs, aucun
revenu. Il n'y en a pas encore, et l'absence se remarque moins qu'un chiffre gonflé.

---

### 3.3 Pipeline de qualification de leads — l'IA en production

C'est le cas le plus vendeur du site, et le plus sous-exploité aujourd'hui.

**Ce que c'est** : un pipeline agentique business-to-business qui qualifie et relance
automatiquement des prospects commerciaux, exposé par un chatbot web embarquable fondé sur de
la génération augmentée par récupération, et piloté par un tableau de bord d'administration.

**L'architecture, qui est l'argument** : interface Next.js · passerelle d'API NestJS · agents
en FastAPI avec le kit de développement Anthropic · PostgreSQL, Redis et pgvector pour la
récupération · BullMQ pour l'orchestration des traitements · Docker Compose en développement.

**Ce qui doit être dit explicitement** : ce n'est pas un appel à un modèle derrière un
formulaire. C'est une **file de traitements orchestrés**, avec un corpus borné, une reprise sur
erreur et un coût par conversation plafonné. La différence entre les deux est exactement ce que
le client achète.

> **Et le chatbot du site est une instance de ce produit.** Le visiteur qui converse essaie le
> système en vente. Voir `wkg-conversion.md` — c'est la preuve la plus forte du site, et elle
> ne coûte rien de plus que ce qui est déjà construit.

---

### 3.4 Huetchenou — une activité en ligne, de bout en bout

**Ce que c'est** : site vitrine et portail pour un conseiller éditorial — correction et
relecture de manuscrits pour des maisons d'édition. Vitrine livrée ; portail de dépôt et de
consultation de documents en cours, avec bibliothèque triable, recherchable et qualification
des documents par le client.

**Ce qu'il prouve, et que MOTIS ne prouve pas** : la capacité à faire **exister** une activité
en ligne, pas seulement à écrire du logiciel. Nom de domaine, messagerie professionnelle,
hébergement, mise en ligne, puis **référencement et première campagne d'acquisition**.

C'est une compétence que la plupart des développeurs indépendants n'ont pas, et c'est
exactement ce qu'une petite structure cherche.

**Trois précautions :**

- **Autorisation écrite du client avant publication**, y compris pour le nom, le lien et toute
  capture. C'est un client, pas un projet personnel.
- **Ne rien dire du budget ni de la relation.** Le cas présente le travail livré, pas les
  conditions dans lesquelles il l'a été.
- **Aucune donnée de ses clients à lui.** Un portail de manuscrits contient le travail non
  publié de tiers : aucune capture ne doit montrer un contenu réel.

---

### 3.5 Cryo — `[À COMPLÉTER]`

Structure à remplir, identique aux autres :

- **Ce que c'est**, en deux phrases
- **Le problème** que ça résout, du point de vue de celui qui paie
- **Une ou deux décisions techniques** avec leur raison — pas une liste de technologies
- **Ce qu'il prouve que les trois autres ne prouvent pas**
- **L'état réel** : livré, en production, en pause, abandonné
- **L'autorisation**, s'il y a un client

> Si Cryo prouve la même chose que l'un des trois autres, il ne figure pas sur le site. Mieux
> vaut trois cas distincts que quatre dont deux se répètent.

---

## 4. Autorisations et confidentialité

- **Autorisation écrite avant de nommer un client**, de montrer un lien ou une capture
- Aucune capture ne montre de **donnée réelle** — contenus clients, noms, adresses, documents
- Aucun identifiant, aucune clé, aucune adresse d'interface de programmation visible dans une
  capture ou un extrait de code
- Pour un projet sous accord de confidentialité : décrire le problème et l'architecture sans
  nommer le client, et le dire — *« client sous accord de confidentialité »* est une mention
  qui rassure plutôt qu'elle n'inquiète

---

## 5. Ton

- **Pas de superlatif.** « Je construis » plutôt que « j'excelle dans la construction de ».
- **Le problème avant la solution**, dans chaque section. Le client reconnaît son problème
  avant d'évaluer la réponse.
- **Dire non quelque part.** Un site qui ne refuse rien ne décrit personne. La section contact
  le fait déjà : *un avis franc sur la faisabilité, y compris quand c'est non.*
- **Aucun vocabulaire d'agence** — « solutions innovantes », « accompagnement sur mesure »,
  « votre partenaire digital ». Ce sont des mots que personne ne peut contredire, donc que
  personne ne croit.

---

## 6. Critères d'acceptation

- Aucun chiffre affiché sans source identifiable.
- Chaque réalisation indique son état réel, y compris « en préparation de lancement ».
- Aucune des quatre réalisations ne prouve la même chose qu'une autre.
- Aucun nom de client, lien ou capture publié sans autorisation écrite.
- Aucune capture ne contient de donnée réelle, d'identifiant ou de clé.
- Le cas du pipeline dit explicitement que le chatbot du site en est une instance.
- Aucun superlatif ni vocabulaire d'agence dans les titres et chapôs.
- Les trois affirmations du §1.1 sont vérifiées avant mise en ligne.

---

## 7. Mutations à détecter

| Dérive | Détectée par |
|---|---|
| Un chiffre ajouté sans source | relecture de chaque nombre affiché |
| MOTIS présenté comme lancé | mention d'état absente ou modifiée |
| Deux cas prouvant la même chose | tableau du §3.1 non tenu à jour |
| Nom ou logo client sans autorisation | registre des autorisations |
| Capture contenant une donnée réelle | revue des images avant mise en ligne |
| Clé ou identifiant dans un extrait affiché | recherche de motifs de secrets dans le contenu |
