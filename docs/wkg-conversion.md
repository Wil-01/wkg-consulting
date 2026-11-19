# WKG Consulting — Chatbot et prise de rendez-vous (spécification)

> Le tunnel de conversion du site : converser, qualifier, réserver.
>
> Dépend de : pipeline de qualification de leads (produit existant — chatbot embarquable fondé
> sur la génération augmentée par récupération, tableau de bord d'administration), contenu du
> site (`wkg-site-contenu.md`).

---

## 0. La décision

> **Le chatbot du site n'est pas un widget de support. C'est une instance du produit vendu.**

Un chatbot générique sur un site de prestataire est un cliché : il ne répond à rien d'utile et
agace. Celui-ci est différent pour une raison structurelle — **le visiteur qui converse essaie
le système qu'on lui vend.**

C'est la preuve la plus forte du site, et elle ne coûte presque rien : le produit est déjà
construit.

Et il démontre la thèse du site autrement que par une affirmation : un chatbot qui dit *« je ne
sais pas »* plutôt que d'inventer un tarif **montre** ce que veut dire « des systèmes dont on
peut vérifier les décisions ».

---

## 1. Ce qu'il est, et ce qu'il n'est jamais

### 1.1 Il n'est pas Williams

> **Le chatbot ne parle jamais à la première personne au nom de Williams.**

Il se présente comme l'assistant du site. Un prospect qui croit avoir parlé à Williams et
découvre ensuite que c'était un programme perd la confiance qu'on cherchait à construire — et
c'est irrattrapable sur une première impression.

La formulation est à la troisième personne : *« Williams travaille surtout sur… »*, *« il
préfère voir le problème avant de donner un délai »*.

### 1.2 Le corpus est fermé

Il répond à partir d'un corpus documenté : les prestations, les quatre réalisations, la
méthode, les modalités de travail. **Pas à partir de connaissances générales**, et pas à partir
de ce qu'un modèle croit savoir de Williams.

Hors corpus, il le dit et propose l'appel.

### 1.3 Les quatre interdits absolus

| Jamais | Réponse à la place |
|---|---|
| **Un tarif**, même une fourchette | « Les tarifs se fixent après avoir compris le problème. Quinze minutes suffisent à savoir si c'est faisable et à quel ordre de grandeur. » |
| **Un délai** de livraison | idem — un délai annoncé par un programme est un engagement que personne n'a pris |
| **Un engagement** au nom de Williams — disponibilité, acceptation d'une mission, garantie | il décrit, il ne promet pas |
| **Un avis technique** présenté comme celui de Williams | il peut citer la méthode publiée, pas produire un diagnostic |

Un tarif inventé par un chatbot, c'est une offre commerciale émise sans personne derrière. Le
jour où un client s'en prévaut, il n'y a aucune bonne issue.

---

## 2. Le refus est la démonstration

C'est le principe qui distingue ce chatbot de tous les autres.

> **Un refus n'est pas une panne.** Quand il ne sait pas, il le dit visiblement, et il propose
> la suite.

Pas de réponse plausible fabriquée pour éviter le vide. Pas de reformulation vague qui donne
l'impression d'avoir répondu. Le visiteur qui voit un système refuser proprement vient de voir
l'argument de vente du site, en fonctionnement.

**Et chaque réponse de fond est ancrée** : elle peut pointer la section du site d'où elle vient.
C'est la discipline du journal des décisions appliquée à une conversation.

---

## 3. Le tunnel

```
conversation  →  qualification  →  réservation
                                        ↓
                               appel de 15 minutes
```

**Un seul objectif de conversion : le rendez-vous.** Pas d'inscription à une lettre
d'information, pas de livre blanc, pas de « laissez votre adresse pour recevoir nos
réalisations ».

### 3.1 Ce que la conversation qualifie

Trois choses, amenées naturellement, jamais en interrogatoire :

1. **Quel est le problème aujourd'hui** — pas la solution envisagée
2. **Quel type de structure** — indépendant, petite entreprise, équipe technique existante
3. **Quelle échéance**, si elle existe

Ces trois éléments transforment un appel de découverte en appel utile. Ils sont transmis à la
page de réservation, pour ne pas être redemandés.

### 3.2 Ce qu'il ne demande jamais

- Une adresse de courriel **pour « envoyer plus d'informations »** — c'est la collecte déguisée
- Un numéro de téléphone avant la réservation
- Un budget. Demander le budget avant d'avoir compris le problème inverse la conversation.

L'adresse n'est collectée qu'au moment de la réservation, parce qu'elle est nécessaire à
l'envoi de l'invitation.

---

## 4. La prise de rendez-vous

### 4.1 Lien sortant par défaut, intégration en option

L'intégration par cadre embarqué est un **confort, pas le mécanisme**. Elle casse sur certains
navigateurs, avec certains bloqueurs, et sur mobile.

> Le lien sortant vers la page de réservation fonctionne partout. L'intégration s'ajoute
> ensuite, et le lien reste visible à côté.

### 4.2 Ce que la page de réservation demande

- **Le problème, en texte libre** — repris de la conversation quand elle a eu lieu
- Nom et adresse de courriel
- Rien d'autre

> **La question « qu'est-ce qui coince aujourd'hui ? » est posée à la réservation, pas pendant
> l'appel.** Quinze minutes passées en découverte sont quinze minutes perdues pour les deux.

### 4.3 Réglages

| Réglage | Valeur |
|---|---|
| Durée | 15 minutes, premier contact |
| Zone horaire | **affichée dans celle du visiteur**, pas dans celle de Williams |
| Tampon entre deux rendez-vous | non nul — deux appels collés ne laissent pas le temps de noter |
| Préavis minimum | évite la réservation pour dans dix minutes |
| Plafond quotidien | la prospection ne mange pas la journée de production |
| Confirmation et rappel | automatiques, avec le lien d'annulation |

---

## 5. Coût et abus — un chatbot public est un portefeuille ouvert

Sans plafond, une seule personne mal intentionnée peut coûter une facture mensuelle en une
soirée.

| Garde-fou | |
|---|---|
| **Plafond de jetons par conversation** | au-delà, il conclut et propose le rendez-vous |
| **Plafond de conversations** par adresse et par jour | en table de constantes nommée |
| **Plafond de dépense quotidien global** | au-delà, le chatbot se désactive et affiche le lien de réservation à la place |
| **Alerte à l'exploitant** | quand un plafond est atteint, pas quand la facture arrive |

> Un chatbot désactivé qui affiche un lien de contact reste utile. Un chatbot qui vide un
> budget ne l'est pas.

### 5.1 Le modèle est épinglé

Modèle et fournisseur fixés explicitement, pas de bascule automatique. C'est ce qui rend le
coût prévisible — et c'est la règle déjà posée pour MOTIS.

---

## 6. Données personnelles

Un chatbot sur un site commercial traite des messages de visiteurs : ce sont des données
personnelles.

- **Les transcriptions sont conservées** — elles sont la matière de la qualification, et elles
  disent ce que les gens demandent réellement. Avec une **durée de conservation définie**, pas
  « indéfiniment ».
- **Mention visible avant le premier message** : conversation enregistrée, finalité, durée.
- **Le fournisseur de modèle et le service de réservation figurent dans la liste des
  sous-traitants** de la politique de confidentialité, avec leur localisation.
- **Aucune donnée sensible sollicitée.** Si un visiteur en dépose spontanément, elle n'est ni
  reprise ni relancée.
- Les plafonds utilisent une **empreinte technique**, pas un profilage du visiteur.

---

## 7. Modèle de données

### `conversations`

| Champ | Rôle |
|---|---|
| `id`, `started_at`, `last_message_at` | |
| `fingerprint` | plafonds du §5, jamais un profil |
| `qualified_problem`, `org_type`, `horizon` | nullable — les trois du §3.1 |
| `outcome` | `abandoned` · `booked` · `capped` · `refused_out_of_scope` |
| `token_cost` | suivi du plafond |

### `messages`

| Champ | Rôle |
|---|---|
| `conversation_id`, `role`, `content`, `created_at` | |
| `grounding` | sections du corpus citées — nullable pour un message hors corpus |

> `outcome: refused_out_of_scope` n'est pas un échec : c'est la mesure de ce que le corpus ne
> couvre pas, donc la liste de ce qu'il faut écrire sur le site.

---

## 8. Ordre d'implémentation

1. **Le lien de réservation seul**, dans la section contact. Il convertit déjà, sans aucun
   chatbot.
2. Les réglages du §4.3 et la question de qualification à la réservation
3. **Le corpus** — prestations, réalisations, méthode, modalités — comme source unique
4. Le chatbot branché sur ce corpus, avec les interdits du §1.3 et le refus du §2
5. Les plafonds du §5, **avant toute mise en ligne publique**
6. La mention et la conservation du §6
7. Transmission des trois éléments de qualification vers la réservation
8. Intégration par cadre embarqué, en option, le lien restant visible

L'étape 1 avant tout : un lien de réservation convertit sans attendre le reste.
L'étape 5 avant la 4 en production : un chatbot public sans plafond ne se met pas en ligne.

---

## 9. Critères d'acceptation

- Le chatbot ne parle jamais à la première personne au nom de Williams.
- Aucune réponse ne contient de tarif, de fourchette, de délai de livraison ou d'engagement.
- Hors corpus, le chatbot dit qu'il ne sait pas et propose le rendez-vous.
- Chaque réponse de fond cite la section du corpus dont elle provient.
- Le chatbot ne demande jamais d'adresse de courriel en dehors de la réservation.
- Les trois plafonds du §5 sont actifs avant la mise en ligne publique, et une alerte part
  quand l'un est atteint.
- Modèle et fournisseur sont épinglés ; aucune bascule automatique.
- La page de réservation demande le problème, le nom et l'adresse — rien d'autre.
- Les créneaux s'affichent dans la zone horaire du visiteur.
- Le lien de réservation fonctionne sans l'intégration par cadre embarqué.
- La conversation est annoncée comme enregistrée avant le premier message, avec sa durée de
  conservation.
- Le fournisseur de modèle et le service de réservation figurent dans la liste des
  sous-traitants.

---

## 10. Mutations à détecter

| Sabotage | Détecté par |
|---|---|
| Un tarif ou un délai dans une réponse | jeu d'essai de questions tarifaires et de délai |
| Le chatbot répond « je » au nom de Williams | jeu d'essai sur l'identité |
| Réponse hors corpus fabriquée au lieu d'un refus | questions volontairement hors périmètre |
| Réponse sans `grounding` sur un sujet du corpus | champ vide alors que la section existe |
| Demande d'adresse hors réservation | parcours des formulations sollicitant un contact |
| Plafond absent ou désactivé | conversation dépassant le seuil de jetons |
| Plafond en dur dans le code | valeur absente de la table de constantes |
| Modèle non épinglé | requête sans fournisseur explicite |
| Réservation impossible sans l'intégration embarquée | test avec le cadre bloqué |
| Créneaux affichés en heure de Paris pour un visiteur ailleurs | rendu avec une autre zone horaire |
| Transcription conservée au-delà de la durée annoncée | âge maximum en base |
