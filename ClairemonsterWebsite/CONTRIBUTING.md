# How to Contribute

Anybody is welcome to contribute.  If you are a going to create a new page, please copy and paste the header/footer code from the basicPage.html so that all of them are consistent throughout the website.

We are building our website utilizing the Google Material Design Lite from https://getmdl.io, so feel free to implement this library when contributing to a page.

If you would like to work on new pages, we plan on adding the following pages in the future:

1. Resources for other teams -- Tutorials on how to build a website, fundraising tips, building and design tips, etc...
2. A fully functioning blog which will be updated with posts from Instagram and Facebook along with the occasional article.
3. A page where people can donate/support our team

## Getting started with editing
To work on this repository, download GitHub desktop at: https://desktop.github.com/
Also download Atom text editor located at: https://atom.io/

To use GitHub desktop, sign into your account.  
Step 1: Click on "File" > "Clone Repository"

Step 2: Click on "Repository" > "Open in Atom"

Step 3: To submit changes to GitHub, click on the button in the bottom right hand corner that says "file" with the number of files you have edited.  

Step 4: Click "Stage All" or manually select each change you want to submit

Step 5: Type a message explaining what you changed

Step 6: Click "Commit to master"

Step 7: Click "Push" at the bottom right corner in Atom.


Alternatively, you can download Brackets from http://brackets.io/, or any text editor you want.
You can then open the cloned Repository from Step 1 into Brackets (the repository is stored in the "GitHub" folder inside documents on your computer) and every time you make a change switch back to GitHub Desktop and click "Commit to master" after including a message.

## File Structure
All files are stored under "ClairemonsterWebsite"

"src" folder contains everything except README.md, CONTRIBUTING.md, and LICENSE

Folder-less files in "src" are html file pages for the Website

"css" folder holds all of the CSS and the images in the "images" folder.  Place all of your CSS in the main.css

"js" folder holds all of the JavaScript

## Commenting

The goal of this repository is not only to update our website, but also to aid other FRC teams to create websites.  When you make changes, please comment on what it means so that people who are learning can understand.  No amount of commenting and description is too much.

Place all of the CSS from your page together in the main.css and comment around it to express which page it is designed for.  It should be formatted like, "<page_name>.html (Begin)" and then the same thing for the end.  Please look at the main.css document for more examples.

## Creating new blogs

To create new blogs, open up the blog_creator.html file.  Then put in the title of the article, copy and paste the text of the article into "content" (make sure that there is 5 spaces in front of each paragraph), and put the name of the image file.  Additionally, place the image in src/css/images/blog_photos.  After you click submit, the html and CSS code will be generated in the expandable boxes below.  Copy and paste the html into blog.html above where it says, "Put all new blogs here!" Then copy and paste the CSS into main.css above where it says, "Put new blog css elements here!"
