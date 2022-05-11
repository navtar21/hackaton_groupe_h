# Notre projet c'est le meilleur

OBV.

## Project rules

### Travailler sur le projet en local

local = sur son ordi
remote = sur GitHub

ÉTAPE 1 /

Aller sur la branche "dev" de GitHub

Créer une nouvelle branche depuis la branche "dev" de GitHub

(Cloner le repo en SSH en local si nécessaire)

Aller sur la branche "dev" en local

Exécuter "git pull" sur "dev" en local

Exécuter "git checkout nom_de_la_nouvelle_branche"
(elle a été récupérée depuis le dev remote. Si ça ne fonctionne pas, effectuer un "git checkout -b nom_de_la_nouvelle_branche depuis le "dev" local)

ÉTAPE 2 /

Dès qu'on touche un fichier, exécuter un "git status" pour vérifier les fichiers impactés.

N'effectuer le "git add chemin_du_fichier" que sur les fichiers qu'on a réellement modifiés.

Quand on a changé les fichiers nécessaires, "git commit -m "commentaire_explicite_pour_les_collègues" "
puis
"git push --set-upstream origin nom_de_la_branche"

ÉTAPE 3 /

Demande de Pull Request
Merge
Suppression de la branche utilisée
Recommencer

### SCSS

Tous les fichiers SCSS doivent être dans le dossier src/css.

Quand on crée une nouvelle page "Page".jsx, on crée également un fichier "\_Page".scss dans le dossier src/css.

Dans ce fichier "\_Page".scss, englober tout le CSS dans une id #Page {}.

Dans "App.scss" ajouter une ligne en haut du fichier au format @use "Page";
