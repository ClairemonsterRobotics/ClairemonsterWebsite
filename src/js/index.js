/* All Use (Begin) */

    //Smoothly scroll to article
    function scroll(element){
      $('html, body').animate({scrollTop: $(element).offset().top}, 1000);
    }

   //Automatically click on an element el is a common shortening for element
   function clickEl(el){
     $(el).trigger('click');
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
      scroll(button);
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



/* blog_creator.html Javascript (Begin) */

  function submitBlogForm(){

    //title of article
    const title = document.getElementById('blog_creator_title').value;
    //id of article
    //Change all spaces from title into underscores
    const id = replaceAll(title.toLowerCase()," ","_");
    //content of article
    const content = document.getElementById('blog_creator_content').value;
    //get name of image file
    const image = document.getElementById('blog_creator_image').value;
    //area where html will be displayed
    const htmlArea = document.getElementById('blog_creator_html');
    //area where css will be displayed
    const cssArea = document.getElementById('blog_creator_css');

    //Remove spacing from first paragraph to correctly format the next step
    var htmlContent = content.replace("     ", "");
    //Add correct html tags between paragraphs.  Will put a space before and after the <p> tags.  "\n" is the same as an "enter" or "return"
    htmlContent = replaceAll(htmlContent, "     ", "\n" + "</p><p>"+ "\n");


    //Generate and display HTML code
    htmlArea.textContent =    "<!-- Generated from clairemonsterrobotics.com/blog_creator.html -->" + "\n" +
                              "<!-- " + "\"" + title + "\"" + " blog post-->" + "\n" +
                              "<div id=" + "\"" + id + "_cell\" " + "class=\"mdl-cell mdl-cell--4-col mdl-cell--12-col-phone\">" + "\n" +
                              "    <div class=\"demo-card-square mdl-card mdl-shadow--2dp\">" + "\n" +
                              "     <!-- This id will style the background in CSS -->" + "\n" +
                              "     <div id=" + "\"" + id + "\" " + "class=\"mdl-card__title mdl-card--expand\">" + "\n" +
                              "       <!--Title of blog article-->"  + "\n" +
                              "       <h2 class=\"mdl-card__title-text\">" + title + "</h2>" + "\n" +
                              "     </div>" + "\n" +
                              "     <!-- After the button is clicked, the text here will be unhidden through Javascript by removing the \"hidden\" class-->"  + "\n" +
                              "     <div id=" + "\"" + id + "_text\" " + "class=\"hidden mdl-card__supporting-text\">"  + "\n" +
                              "       <p>"  + "\n" +
                              htmlContent + "\n" +
                              "     </p>"  + "\n" +
                              "   </div>" + "\n" +
                              "   <div class=\"mdl-card__actions mdl-card--border\">"  + "\n" +
                              "     <!--This button activates the expandCard(id_of_text_to_be_displayed, size_of_card) Javascript function-->"  + "\n" +
                              "      <a id=" + "\"" + id + "_button\" " + "class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" " + "onclick=\"expandCard(" + "\'" + id + "\'," + "\'demo-card-square\')\">"  + "\n" +
                              "        Read post"  + "\n" +
                              "      </a>"  + "\n" +
                              "   </div>"  + "\n" +
                              " </div>"  + "\n" +
                              "</div>"  + "\n";
    //Generate and display CSS code
    cssArea.textContent =     "/* Generated from clairemonsterrobotics.com/blog_creator.html */" + "\n" +
                              "#"+ id + "{" + "\n" +
                              "    background: url(\'images/blog_photos/" + image + ") no-repeat;" + "\n" +
                              "    /* Change \"background-size: cover;\" to \"background-size: contain;\" if full picture is needed */" + "\n" +
                              "    background-size: cover;" + "\n" +
                              "    background-position: center;" + "\n" +
                              "    height: 100vh;" + "\n" +
                              "}";


  }

//@param text = text to be searched
//@param search = string to be looked for in text
//@param replacement = string to replace search
function replaceAll(text, search, replacement) {
    var target = text;
    return target.replace(new RegExp(search, 'g'), replacement);
};
