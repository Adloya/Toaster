
# MutliJS

MultiJS est un bot discord développé avec la librairie [DiscordJS](https://discord.js.org/#/)

## Développeurs
MultiJS est développé par [Adloya](https://dsc.bio/Adloya), faisant partie de la [Adloteam](https://discord.gg/mxqVDtGksb)

## Démarrage

Sur tous les systèmes d'exploitation, vous aurez besoin de [Node.js](https://nodejs.org/en/)

Sur Windows : utilisez le raccourci "Launch MultiJS" (à la racine du projet) ou directement le script "Launch.cmd" (src/launch.cmd)


Via un terminal (windows/mac/linux) : allez dans "src/" avec votre terminal puis démarrez node avec le projet :

Windows :
```batch
cd src
node .
```

Linux :
```bash
cd src/
node main.js
```



## Contributing
Pour contribuer, utilisez les Pull-requests
Pour des changements MAJEURS, mettez les dans un ISSUE
TESTEZ VOS CONTRIBUTIONS !


## Commandes

### Config :

#### Description :
Permet de configurer certaines fonctions / réglages du bot

#### Utilisation : 
``config <setting>``

#### Permission : 
ADMINISTRATOR

#### Arguments ? 
Oui

#### Arguments :

##### \*Prefix [new prefix]: 
``config prefix //``
         
Changer le prefixe de votre serveur

### -----------------------------

### Botinfo:

#### Description :
Donne des informations sur MultiJS

#### Utilisation : 
``botinfo``

#### Permission : 
Aucune

#### Arguments ? 
Non


### -----------------------------

### Help:

#### Description :
Affiche la liste des commandes OU donne des informations sur une commande

#### Utilisation : 
``help`` ou ``help <command>``

#### Permission : 
Aucune

#### Arguments ? 
Facultatif

#### Arguments :

##### Command :

``help help``

La commande sur laquelle vous voulez avoir des informations


### -----------------------------

### Links:

#### Description :
Donne des liens qui pourraient vous servir

#### Utilisation : 
``links``

#### Permission : 
Aucune

#### Arguments ? 
Non


### -----------------------------

### Members:

#### Description :
Donne le nombre de membres sur le serveur

#### Utilisation : 
``members``

#### Permission : 
Aucune

#### Arguments ? 
Non


### -----------------------------

### Serverinfo:

#### Description :
Donne des informations sur le serveur

#### Utilisation : 
``serverinfo``

#### Permission : 
Aucune

#### Arguments ? 
Non


### -----------------------------

### Userinfo:

#### Description :
Donne des informations sur un membre

#### Utilisation : 
``userinfo [member]``

#### Permission : 
Aucune

#### Arguments ? 
Oui

#### Arguments

##### \*Member :

``userinfo @Clyde``
           
Le membre sur lequel vous voulez avoir des informations


### -----------------------------

### Ban:

#### Description :
Bannit un membre

#### Utilisation : 
``ban [member]``

#### Permission : 
BAN_MEMBERS

#### Arguments ? 
Oui

#### Arguments :

##### \*Member :

``ban Clyde``

Le membre que vous souhaitez bannir

##### Reason :

``ban Clyde Bad``
            
La raison pour laquelle vous voulez bannir ce membre


### -----------------------------

### Clear:

#### Description :
Supprime un certain nombre de messages

#### Utilisation : 
``clear [number of messages to delete]``

#### Permission : 
MANAGE_MESSAGES

#### Arguments ? 
Oui

#### Arguments :

##### \*Number of messages to delete :

``clear 69``
        
Le nombre de messages que vous souhaitez supprimer

**/!\ Attention : Une limite de discord empêche de supprimer des messages qui datent de plus de 2 semaines (14j), si des messages ne peuvent pas être supprimés, MultiJS vous donnera une erreur**


### -----------------------------

### Kick:

#### Description :
Expulse un membre de votre serveur

#### Utilisation : 
``kick [member] [reason]``

#### Permission : 
KICK_MEMBERS

#### Arguments ? 
Oui

#### Arguments :

##### \*Member :

``kick @Clyde``

Le membre que vous souhaitez expulser

##### Reason :

``kick @Clyde ;P``

La raison pour laquelle vous voulez expulser ce membre


### -----------------------------

### Nuke:

#### Description :
Vide tous les messages chargés d'un salon

#### Utilisation : 
``Nuke``

#### Permission : 
MANAGE_MESSAGES

#### Arguments ? 
Non

**/!\ Attention : Une limite de discord empêche de supprimer des messages qui datent de plus de 2 semaines (14j), si des messages ne peuvent pas être supprimés, MultiJS vous donnera une erreur**


### -----------------------------

### Poll:

#### Description :
Crée un sondage

#### Utilisation : 
``poll [sondage]``

#### Permission : 
MANAGE_MESSAGES

#### Arguments ? 
Oui

#### Arguments :

##### \*Sondage :

``poll Qui aime le saucisson ?``

Le sondage que vous voulez créer


### -----------------------------

### Say:

#### Description :
Fait envoyer un message par MultiJS

#### Utilisation : 
``say [message]``

#### Permission : 
MANAGE_MESSAGES

#### Arguments ? 
Oui

#### Arguments :

##### \*Message :

``say Hello world !``

Le message que vous voulez envoyer


### -----------------------------

### Warn:

#### Description :
Ajoute un avertissement à un membre, au bout de 3 avertissements, il est banni

#### Utilisation : 
``warn [member]``

#### Permission : 
BAN_MEMBERS

#### Arguments ? 
Oui

#### Arguments :

##### \*Member :

``warn @Clyde``
  
Le membre que vous souhaitez avertir

### -----------------------------

### bug-report:

#### Description :
Signale un bug au créateur (sur github vous pouvez passer par les ISSUES)

#### Utilisation : 
``bug-report [bug]``

#### Permission : 
Aucune

#### Arguments ? 
Oui

#### Arguments :

##### \*Bug :

``bug-report La commande ping affiche 666 :O``
          
Le bug que vous souhaitez signaler

### -----------------------------

### Math:

#### Description :
Effectue des calculs

#### Utilisation : 
``math [calcul]``

#### Permission : 
Aucune

#### Arguments ? 
Oui

#### Arguments :

##### \*Calcul :

``math 10 + 59``
   
Le calcul que vous souhaitez effectuer

### -----------------------------

### Ping:

#### Description :
Affiche la latence de l'API et la latence du bot

#### Utilisation : 
``ping``

#### Permission : 
Aucune

#### Arguments ? 
Non

### -----------------------------

### Suggest:

#### Description :
Vous pouvez suggérer des fonctionnalités (sur Github faites le via les Pull-Requests et les ISSUES)

#### Utilisation : 
``suggest [suggestion]``

#### Permission : 
Aucune

#### Arguments ? 
Oui

#### Arguments :

##### \*Suggestion :

``suggest Il faudrait que le bot soit hébergé correctement !``
      
La fonctionnalité que vous souhaitez suggérer

### -----------------------------

### Translatefr:

#### Description :
Traduit du texte de n'importe quelle langue en Français

#### Utilisation : 
``translatefr [text]``

#### Permission : 
Aucune

#### Arguments ? 
Oui

#### Arguments :

##### \*Text :

``translatefr Welcome to the internet``
       
Mot ou phrase à traduire en Français

### -----------------------------

### Ascii:

#### Description :
Transforme du texte en représentation ASCII

#### Utilisation : 
``ascii [text]``

#### Permission : 
Aucune

#### Arguments ? 
Oui

#### Arguments :

##### \*Text :

``ascii Hello world !``
     
Le texte que vous souhaitez transformer en ascii


### -----------------------------

### Dog:

#### Description :
Vous donne une photo de chien

#### Utilisation : 
``dog``

#### Permission : 
Aucune

#### Arguments ? 
Non

### -----------------------------

### hangman:

#### Description :
Jouons au pendu !

#### Utilisation : 
``hangman [#channel] [text]``

#### Permission : 
MANAGE_MESSAGES

#### Arguments ? 
Oui

#### Arguments :

##### \*#Channel :

``hangman #general [text]``
    
Salon dans lequel vous souhaitez que le jeu se passe

##### \*Text :

``hangman #general Hello world``
                
Texte à deviner

### -----------------------------

### Meme:

#### Description :
Vous donne un meme !

#### Utilisation : 
``meme``

#### Permission : 
Aucune

#### Arguments ? 
Non

### -----------------------------

### Botinfo:

#### Description :
Jouons à Snake !

#### Utilisation : 
``snake``

#### Permission : 
Aucune

#### Arguments ? 
Non

### -----------------------------

### Tictactoe:

#### Description :
Jouons au Morpion !

#### Utilisation : 
``tictactoe [@adversaire]``

#### Permission : 
Aucune

#### Arguments ? 
Oui

#### Arguments :

##### Adversaire :

``tictactoe @Clyde``
        
Votre adversaire

## ------------------------------------------------------------------------------------

## Created by Adloya 2021
