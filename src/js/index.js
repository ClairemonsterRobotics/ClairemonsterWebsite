/* All Use (Begin) */

    //Smoothly scroll to article
    function scroll(element){
      $('html, body').animate({scrollTop: $(element).offset().top}, 1000);
    }

   //Automatically click on an element el is a common shortening for element
   function clickEl(el){
     $(el).trigger('click')
   }
/* All Use (End) */

/* blog.html Javascript (Begin) */

  /* Build for a grid of cards.  Required to have an id on the card and matching tags on button, support text, and cell.
     Also needs a <div> with a id of placeholder to put opened articles, and a div of read_articles and read_articles_title
     Will expand a card to full screen when opened, and then upon close will put it in read_articles
  */
  function expandCard(id, size){

    //Button that is clicked
    const button = document.getElementById(id+'_button');
    //Node holding button
    const buttonParent = button.parentNode;

    const card = document.getElementById(id);
    //parent is the container holding the card
    const parent = card.parentNode;

    //cell container of the grid
    const cell = document.getElementById(id+'_cell');
    //grid holding the cells
    const grid = cell.parentNode;
    //id of grid
    const gridId = grid.getAttribute('id');

    //Layout with text to be visible later
    const textLayout = document.getElementById(id+'_text');


    //When button is clicked to open the article
    if(textLayout.classList.contains('hidden')){

      //Expand the card
      parent.className = 'mdl-card mdl-shadow--2dp full_card';
      //Include text in card
      textLayout.className=('mdl-card__supporting-text');
      //Change button to let the user know they can close it.
      button.textContent="Close";

      //Center article in new div
      cell.classList.add('center');
      parent.classList.add('center');

      var appendChild = $('#'+gridId).children('#'+id+'_cell');
      $("#placeholder").append(appendChild);

      //Smoothly scroll to article
      scroll(textLayout);
    }
    //When the button is clicked to close the article
    else{
      //Re-Hide the element
      textLayout.classList.add('hidden');

      //Return it to original size
      parent.classList.add(size);
      parent.classList.remove('full_card');
      parent.classList.remove('center');
      cell.classList.remove('center');


      //Change button back
      button.textContent="Read post";

      //Get article being closed and add it to the "Read Articles" Section
      //.prepend puts it first
      $("#read_articles").prepend(parent.parentNode);

      //Smoothly scroll to article
      scroll(textLayout);
    }

    //Make read_articles title visible if there are read articles
    if( $('#'+'read_articles').children().length > 0){
      document.getElementById('read_articles_title').classList.remove('hidden');
    }
    else{
      document.getElementById('read_articles_title').classList.add('hidden');
    }

      //Best way to do it, but not available on all browsers.  Requires a file holding all blogs to be imported to the main page:
      // var content = document.querySelector('link[rel="import"]').import;
      // var el = content.querySelector('#'+id+'_text');
      // parent.insertBefore(el.cloneNode(true), buttonParent);
      // button.textContent="Close";
  }

  //CLick on a button in page based on an html bookmark if button is the id_button
   function urlClick(){
     var url = window.location.href;
     var id = url.substring(url.lastIndexOf('#'));
     clickEl(id+"_button");
   }
/* blog.html Javascript (End) */
