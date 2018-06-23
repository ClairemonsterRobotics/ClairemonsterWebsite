/* blog.html Javascript (Begin) */
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
    const newLayout = document.getElementById(id+'_text');


    //When button is clicked to open the article
    if(newLayout.classList.contains('hidden')){

      //Expand the card
      parent.className = 'mdl-card mdl-shadow--2dp full_card';
      //Include text in card
      newLayout.className=('mdl-card__supporting-text');
      //Change button to let the user know they can close it.
      button.textContent="Close";

      var appendChild = $('#'+gridId).children('#'+id+'_cell');
      $("#placeholder").append(appendChild);
    }
    //When the button is clicked to close the article
    else{
      //Re-Hide the element
      newLayout.classList.add('hidden');

      //Return it to original size
      parent.classList.add(size);
      parent.classList.remove('full_card');

      //Change button back
      button.textContent="Read post";

      //Get article being closed and add it to the "Read Articles" Section
      //.prepend puts it first
      $("#read_articles").prepend(parent.parentNode);
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
/* blog.html Javascript (End) */
