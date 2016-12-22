#Bonjour!
Le projet contient que un et un seul fichier **HTML** , j'ai choisi les deux dernier exercices : Front-end et SEO.
###Front-end
####DatePicker
le travail principalement se tourne autour de **DatePicker** , selon l'API de cette Jquery UI interface on affiche le panel de datepicker avec la fonction datepicker() , j'ai personnaliser le code pour qu'il soit facile et utilisable plusieurs fois au formulaire :
```HTML
 function getdate(id){
    $( "#"+id ).datePicker();
  }
```
On appelle cette fonction dans chaque élément sur le **DOM** en passant comme paramètre le id de celle-ci . ce bout de code doit se place obligatoirement après l’appelle de le fichier JS de DatePicker.
####Design Uniforme 
Appliquer un style uniforme pour tout les champs de formulaire et très primordiale en terme de UX/UI . 
alors j'ai ajouter le mémé style que de celle de les champs *input* pour les choix *select* .
```CSS
 .send_mail select {
	border: 1px solid #e0e1e5;
	color: #666666;
	display: inline;
	font-size: 14px;
	line-height: 20px;
	padding: 20px;
	margin-bottom: 30px;
	outline: none;
	width: 100%;
	text-transform: uppercase;
		}
```
également j'ai ajouter le *place holder * pour les champs de date pour informer le visiteur de contenu souhaité entre dans ce champ.
###SEO
Le référencement naturel est très important, ce que vous demandez c'est le **On-page** , généralement ce qu’il faut faire c'est utiliser au moine une seul *h1* tag et *h2* .... *p*, Dans On-Page SEO le plus important c'est le contenu .
> content is the king.

D'autre part il est préférable que le mot clés de la page soit présent dans les tags , *title* , *h1*, *h2* et plusieurs fois dans *p* .

L'utilisation  de  l'attribut **Alt** dans les tags *img* est également important pour une bonne indexation des images ainsi les *meta tags* , *keywords*, *description* .

Finalement le concept de **Mobile First ** est très favoriser par Google .