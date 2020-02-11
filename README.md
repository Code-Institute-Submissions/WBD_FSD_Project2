# READ ME - FSD COURSE - PROJECT 2

## IowaPen pen collectors club website - phase 2

This is the second project of the Code Institute Full Stack Developer course, and is a continuation of my first project, a web site for the writing instrument collectors club that I run. The club's production site is at:

- https://iowapen.club

We are using GitHub Pages to host the site. You can also use iowapen.com and iowapenclub.com to reach our site, and we've registered domains to eventually host a pen show here in Iowa, at iowapen.show and iowapenshow.com, all of which presently point to iowapen.club, including the original site at iowapen.github.io.

- This project site is hosted at https://iowapen.club/WBD_FSD_Project2/

- The source code repository is at: https://github.com/IowaPen/WBD_FSD_Project2/

I will copy this project to the main iowapen.club site shortly after I submit it for review and grading. 

You can still see the project 1 site at

- https://iowapen.club/WBD_FSD_Project1/ 

and code repo at 

https://github.com/IowaPen/WBD_FSD_Project1/

The repo has been set to "archived" to disallow changes, and I will do the same with the Project 2 repo at some point. 

--- 

## JAVASCRIPT FRAMEWORKS AND APIS USED

Since the modules of the course after the last project focused on the JavaScript language and on interactive development using it and JavaScript frameworks and APIs, I have employed the following JavaScript frameworks and APIs in this project:

### JS FRAMEWORKS:
- jQuery
- Bootstrap
- Vue
- Axios

### APIs:
- AirTable 
    - the database API used to store the data for most tables and lists displayed on many of the site's pages (events, books, shows, blog, etc.)
- Google Maps 
    - used on the chapters.html page to display the Iowa And USA member location maps
- EmailJS
    - used on the join .html page to send the Join the Club request email and auto-reply

### OTHER RESOURCES USED:
- HoverCSS
- Google Fonts
- FontAwesome (navigation and other icons)

---
## HOW THEY ARE USED

---

### AIRTABLE API 

*_IMPORTANT NOTE_*: Almost all tables and lists you see on this site are served from AirTable.com databases via their API. They are NOT hardcoded HTML tables, but are created on the fly using JavaScript frameworks as the page is served. This allows me or others to update the data on the site at any time without changing the source code at all.

 I call this out specifically because at first my mentor did not realize these tables were generated via JavaScript frameworks and a database API and suggested I specifically mention it.

The pages where this is presently done are:

- index.html (the Recent News and Upcoming Events sections)
- penblog.html
- penshows.html
- penbooks.html
- penevents.html

Some of these pages share the same database (the index, penblog and penvents pages) and just show different datasets from the database tables; for example, the index page just shows events in the near future, while the penblog and penevents page presently show all events. The penevents page also leaves out events in the database that have no dates set yet (typically annual pen shows later in 2020 that haven't set their date for 2020 yet.)

Many more such database-driven pages will be added in the near future, after this project is submitted. Data is being gathered for them now, though it will take some months to do that, so the buttons for those pages were placed in the "COMING SOON" section of the site navigation buttons. Those buttons display a "coming soon" page when clicked.  

(The "coming soon" pages, incidentally, are just a copy of the template.html page that is used when starting a new page for the site, to help keep a consistent structure and a good startng point when starting to build the actual page.)

There are a few pages that are not hooked up yet, penshows_email.html and penbooks_email.html because I want to do those next, to allow people to send me new items for those pages.

The IowaPen site uses an AirTable account with read-only access to the databases to make the data available on the web site. Various levels of access to AirTable databases can be granted. You can see the tables I have created so far yourself (read-only) using this sharing/invitation link to AirTable.com.

https://airtable.com/invite/l?inviteId=invKYDXDo5unu9HhF&inviteToken=fc8bc9aef59313141d1738d8dc9d64695c33cf64770ead3d6405485edadbe464

Note: You will need to set up a free AirTable.com account to view the data; I encourage it! It's a handy service that my family uses for other things than just IowaPen. They have a good free tier as well as paid tiers that provided more features. We are doing all this and even our own databases for home use with the free tier.

See api.airtable.com once you have logged in to AirTable and are looking at databases to get the API information for a specific database.

---
#### VUE AND AXIOS FRAMEWORKS

Vue and Axios are used to access and display data from the AirTable databases.

---
#### BOOTSTRAP FRAMEWORK

Boostrap is used for the site UI, table formatting, and other things. Regular CSS is also used as well.  

---
#### JQUERY FRAMEWORK

jQuery is used on this site to implement, on HTML pages, the "include nother file" feature found in many compiled programming languages, so I can move the common code of the header, navigation buttons and footer present on every web page on the site to separate, single files. That way I only have to change one file to change the header, navigation buttons or footer on ALL the site pages. Only the actual page content and often some JavaScript code is different on each page. This has already been incredibly helpful as it makes the HTML pages much smaller and cleaner. I've already rearranged the navigation buttons several times after doing this, and added several new navigation buttons, too.

---
#### EMAILJS FRAMEWORK AND API

EmailJS is used on the join.html page to send an email to our iowapen@gmail.com address with the information from that form, and also to generate an auto-reply email to the person wanting to join, with all the contact information for our club and our social media addresses. Since the email generated by EmailJS uses HTML tags, I have checked the HTML code for both emails into this project's source code repo too.

I also have added JavaScript code to the basic JS code that sends the email so that it now pops up a JS alert that lets the user know their information has been sent and then to clear the form, when they click the "join" button. 

---
#### GOOGLE MAP API

The Google Maps API is used to display two maps on the Chapters page, one for members who live in Iowa, and another for members (more than a few) who live outside of Iowa.  Some used to live in Iowa and have moved elsewhere, some joined us through our Facebook Group which is our most active online presence.  We do even have several members who live outside the USA but I have not gotten their OK to use their city on the map yet. When I do I will add a third world-wide map.  

These maps will be useful to allow members who live outside the locations of our two main chapters (both large cities) to connect with others who live nearby, and hopefully form new small club chapters, since it is often a several hour drive for some of them to reach the two main club chapter locations.  I also plan on using this information to _proactively_ suggest the formation of other chapters to clusters of members as well.  We have over 150 members in the club as of the date I wrote this, growing steadily and I know of at least one other cluster of members near "Pen City": Fort Madison, Iowa - the home of the venerable Sheaffer Pen company for about 100 years, one of the largest pen companies.

I may also make maps of pen stores, pen shows, pen clubs, etc. in the future and add them to those pages on this site.

---

#### OTHER RESOURCES

Google Fonts, Hover.css and FontAwesome were used in my first project and are still used for the same purposes as in that project (fonts, CSS hover effects, and icons used on the site, respectively.)


---
## REASON FOR THE SITE AND PROJECT

IowaPen is a gathering of people interested in fountain pens, mechanical pencils, and writing instruments of all kinds. Calligraphy, penmanship, pen collecting, vintage pen restoration, nib tuning, ink testing /s haring, paper, noteooks, bullet journals, pen turning, history and more. It's really quite fascinating how many branches and areas of interest there are in this hobby; history, art, chemistry, craftsmanship, restoration, and many more.

I needed a project for this class, and my pen club needed a good web site, not just a Facebook page and other social media accounts. Not everyone uses social media, plus a web site is a great way to get found via web search engines. There are also a lot of other things I can do with a web site that can't easily be done with a social media site, such as the many databases of reference material I am working to add.  

We have business cards to promote the club, and the web site is our electronic business card and more.

So, there are several reasons and uses for the site:

- Information about club (and pen-related) activities and events and shows.
- Pen and club news
- A place to store a large amount of useful reference material about this hobby that I am collecting to make available to our club members
- To have something that doesn't rely on a third-party social media service and is available to EVERYONE. 

---
## WHY COLLECT PENS?

There is and long has been a surprising amount of interest in handwriting and in fine writing instruments, inks, paper, and notebooks, and that seems to be growing in this day of overloading on all things digital. This is a worldwide hobby and much larger and longer-lived than most people realize.  

- The Fountain Pen Network Facebook Group, for example, has over 25,000 members from all over the world

- There are sixteen or seventeen pen shows JUST in the United States every year
    - Some have been held annually for several decades (the Los Angeles International Pen Show is in it's 32nd year in 2020 , for example.)
    - There are many more shows worldwide

- There are dozens of large pen companies, hundreds of smaller companies and uncountable custom pen makers working out of their backyard workshops.  The same is true for ink and paper vendors and related products and services such as sales, repair, restorations of 'vintage' (antique pens) and more.  For a digital society, we sure still love to write on paper!

---
## FUTURE PLANS FOR THE SITE

Eventually I want to also take that information I am collecting and turn it into a side project / side business similar to IMDB (the Internet Movie Database). I want to do for writing equipment what IMDB has done for movies and TV. I will call it somethng like the Internet Pen Enthusiasts Network Database (iPenDB) and make money from advertising, and possibly some sort of store selling pens and/or related products. I have been working to restore many "vintage" (antique) fountain pens you can find in antique stores so that they work again (surprisingly easy and you can make good money doing this - many are far more attractive than modern pens) and also am creating nice pen storage boxes from the beautiful wood cigar boxes you can get at tobacco stores; they are very popular. There are also affiliate or advertising programs on several online pen stores, as well as sites like Amazon that I may use. 

---
# UX DESIGN 

## COLORS AND DESIGN ELEMENT REASONING

The visual elements of the site are designed to resemble writing, ink and paper; especially the writing with beautiful ink shading and sheen providing by fountain pen inks and various size writing points (nibs). 

I accomplished the look of "shading" through the use of CSS radial and linear gradients on the text and navigation button backgrounds.

The navigation buttons were intended to resemble ink sample swatches very commonly used by ink vendors, stores and enthusiasts to catalog and show off their ink colors and collections as well as the shading and "sheen" of some of the inks. Eventually I might even replace the backgrounds with ACTUAL ink swatch photos.

To see some real-life examples of those ink color charts:

- https://www.google.com/search?q=fountain+pen+ink+color+chart

See also these chart images in the /assets/images/inkcharts folder of our running site.

- https://iowapen.club/WBD_FSD_Project2/assets/images/inkcharts/Diamine-Bottled-Ink-Colour-Chart-1.png
- https://iowapen.club/WBD_FSD_Project2/assets/images/inkcharts/private_reserve_ink_chart.jpg
- https://iowapen.club/WBD_FSD_Project2/assets/images/inkcharts/platinum_mixable_ink.jpg 

We use deep saturated and shaded colors for the site as these rich colors are very popular in fountain pen inks, and the variety is far greater than in other types of pens. 
 
A large part of the pen collecting tends to involve Fountain pens. They are still in common use, worldwide (more so outside the USA). Fountain pen collectors and users often enjoy them more than other kinds of pens due to the huge multitude of rich, beautiful and easily changed (and even custom mixed) fountain pen ink colors available. They are often very drawn to rich colors -- this site design honors that love of color.  

The content area of the page even has a faint "dot grid" background accomplished via CSS; many pen hobbyists also like fine paper and notebooks, and a very popular notebook / paper design (and my personal favorite) is the "dot grid" style of paper. It is flexible without the lines of more common paper gettng in the way of writing or especially of drawing or diagramming.

---
## WHO IS THIS WEB SITE FOR?

It is for members of the IowaPen club, or other people interested in writing instruments, ink, paper - there are quite a lot more than you think! It will both provide information for our members and help new members to find us. 

### WHAT DO THEY WANT TO ACHIEVE WHEN THEY VISIT?

- Find out how to contact us or join the club
- Find our meeting dates, times and locations (we have several chapters in different cities)
- Find our social media sites and other contact information
- Read news and information about the club and about the hobby in general
- Find other resources related to the hobby; these resources are fragmented all around the web and I want to centralize them.

---
### THE BEST WAY TO HELP THEM ACHIEVE THESE THINGS 

A web site is accessible to anyone. Not everyone uses Facebook, Twitter, and other social media and never will. We need a free and open place on the Internet for anyone to be able to access information about our club, at any time, with most any device. 

---
### USER STORIES FOR THIS SITE

User stories are statements of the form: "As a _user type_, I want to perform an _action_, so that I can achieve _a goal_." used to design a product such as this site.  Here are users stories I created when planning this site:
 
- As a pen collector or admirer, I want to find a pen club, so I can join and meet other pen hobbyists.
    
    This is handled by the site Chapters and Join pages. 

- As a pen club member, I want to find out when the next meeting or future meeting date is, or if we are meeting during the summer, so I can plan my time.

    This is handled by the main page of the site as well as the Events page for meetings further in the future than a month
    
- As a pen club member, I want a list of pen clubs / pen shows / pen stores / pen makers / ink makers etc., so that I can contact or visit them,

    - There are many such lists, often incomplete and poorly maintained, but no definitive list of these exists anywhere on the web; I hope to create and maintain consolidated lists for all of these and for our members.

    - I like to find pen stores, shows or local clubs when I travel on vacation so I'll find such thing personally useful.
    
- As a pen hobbyist, I want to see pen-related news, so that I can keep up-to-date on the hobby or a specific product

    - The blog page will fill that need as I find pen related news items by several means and link to them.
    
- As a pen hobbyist, I want to discuss pen issues (pens, inks, papers, repair, many more) with other interested people, so that I can find the pen/ink/etc I need.    

    - The forum page will eventually fill that need and let us move away from Facebook -- I hope; we tried to use Yahoo Groups for this, but most people seem to prefer Facebook.

---
### PAGE DESIGN

To see some wireframes / design sketches of the basic site layout, look in the design/projectN/wireframes folder in the source code.  There are now folders for both project1 and project2.  Most things that were in the project 1 folder have migrated to project 2, but a few things are still present there including the wireframes/sketches for that project.  The Project 2 folder also has a wireframes folder.

There are also text files with design notes, a bug/change tracking page, a testing plan page, to-do list, etc. in the design folders.

---
## SITE FEATURES AND NAVIGATION

This web site has a navigation bar with links to each of the services we provide.  Most will be added in the future, but for now the important parts available are:

- The main page describing the club and listing recent news, and upcoming events such as meetings or shows. 

- The events page with a list of events, both pen club events, pen shows, and pen-related events like Fountain Pen Day listed.  

- The chapters page listing each of the IowaPen chapters, usual meeting dates (e.g. 2nd Sunday of the month, 4-5pm), location and contact information

- The join page with a form to email IowaPen and ask to join

- The blog page with club & pen news and information.

The other pages are mostly reference material and will be added as time allows. Many are planned, but the site now has reference pages for:
- Pen Shows
- Pen Books
- Pen Events

---
### FEATURES LEFT TO IMPLEMENT

In looking over the course syllabus/schedule, I can already see many opportunuties to implement many of these as part of other major projects in the course:

- [X] Blog (implement own or use third party such as WordPress, Blogger, etc.)
- [X] Pen Show database (as opposed to simple list, allow update submission)
- [X] Pen & Club Events list
- [X] Pen Books list
- [ ] Pen Magazine list
- [ ] Pen Store list (online and bricks-and-mortar)
- [ ] Pen Club list
- [ ] Pen Vendor list
- [ ] Ink Vendor list
- [ ] Paper vendor list
- [ ] Product reviews
- [ ] Pen Terminology
- [ ] Pen / Ink / Writing quotes (as part of the course that covers using databases) - I already have a large quotation list
- [ ] Discussion Forum (implement own or use third party)
- [ ] Pen databases
    - Pen companies
    - Pen models (fountain pen, ballpoint, rollerball, gel, mechanical pencil, etc)
    - Pen photos
    - Pen reviews
- [ ] Ink databases
    - Ink vendors
    - Ink brands/lines
    - Ink reviews
    - Ink sample images 
- [ ] Paper databases
    - Paper vendors
    - Paper brands/lines
        - Especially fountain pen friendly or UN-friendly
    - Paper reviews
        
--- 
## TECHNOLOGIES USED

Here are all of the frameworks, libraries, and any other tools that I have used to construct this project. For each, I have provided the name, a link to its official site and a short description of why it was used.

- [AirTable](https://airtable.com) - used to store the data used for the tables and lists on many page of this site. 

- [JQuery](https://jquery.com) - used primarily to simulate "includes" to modularize the common HTML UI components. 

- [Vue](https://vuejs.org/) - used to display data from AirTable

- [Axios](https://github.com/axios/axios) - used to obtain the data from AirTable databases for display using Vue.

- [Bootstrap JS framework](https://getbootstrap.com/) - USED to create the site GUI because it's a good framework, makes responsive sites, and because it was used in the course modules we have done so far!

- [Google Fonts](https://fonts.google.com/) - I've used this before; it's an excellent source of fonts for use on web sites and I needed writing/cursive fonts for a writing instrument site.

- [Google Maps](https://maps.google.com/) used for displaying the member location maps on the chapters page

- [EmailJS](https://emailjs.com) used for generating the email membership request on the Join page.

- [FontAwesome icons](https://fontawesome.com) - this is a wonderful source of UI icons to make your site more attractive and intuitive. It was introduced in an earlier course module and is great for finding icons we need.

- [Hover.css](https://ianlunn.github.io/Hover/) - this was used to create the button hover effects. 

---
## TESTING

I don't have any experience yet with automated web testing tools (though I am aware they exist), hopefully those will be introducted in a future module of the course.  This particular project did not lend itself at all to doing TDD with Jasmine as covered by the course.

For now I have been testing the site on an iMac (with a very large/wide screen), a MacBook Pro, an iPhone, an iPod Air, and at work on my Windows 10 PC. (For Project 2 I have been unable to do testing on a Windows PC since switching jobs as I now work for a major bank that severely locks down what sites you can visit and does not allow access to my site, GitHub, or AirTable, so I can't do much Windows testing any longer.)

I've manually tested in Chrome, Safari, Mobile Safari, Internet Explorer 11, and Edge. It worked well in all, except IE 11. I've fixed most of the problems (except those in IE11). I'm not worrying about IE11 since Microsoft doesn't really support it, having replaced it with Edge, and now they are replacing Edge's web rendering with the same engine used in Chrome and Safari.

This manual testing has uncovered numerous bugs that I have fixed. I document bugs in the bugs.txt file along with some changes that will make the site look better on the biggest/smallest of screens.

I test as follows: 

1. Click on links in the navigation buttons to make sure they go to the correct pages. 

2. Click anoter button and repeat. Snce the buttons are now all generated by a single source file this is much safer and we are less likely to find broken links, especially across multiple pages.

3. Click any links on the page (email, telephone, social media, etc) and make sure they work.

4. On devices supporting it (iPhone, iPad), change the screen from portrait to landscape and see if it adapts properly and is usable and looks ok both ways. 

5. On desktop devices I resized the browser window horizontally and vertically to see if the page size and layout adapted well.  I do this in the IDE preview window as well.

In the bugs.txt and todo.txt files I am tracking problems and changes to fix problems and to make the site look better.

I have found a few interesting bugs, such as IE11 not really working with the site at all, and the buttons disappearing on the iPhone 4 mobile Safari browser. These may be limits of older browsers with modern frameworks and what I can do may be limited therefore.  

---
## DEPLOYMENT

This site's Git repo is hosted on GitHub at https://github.com/IowaPen/WBD_FSD_Project2/ 

I've used the GitHub Pages features to make the site available at https://iowapen.github.io/WBD_FSD_Project2/

---
## CREDITS

The basic structure for the site was inspired by the UCD Resume mini project in the CodeInstitute Full Stack Developer Course but has been drastically modified and only bears a vague similarity now. 


### CONTENT

- The content has all been collected or written by me, such as the various databases used for data to display on some of the pages. 

- The JavaScript frameworks have been mentioned elsewhere, as wells as the APIs and other resources used.

### MEDIA

- Nothing to cover here yet

### ACKNOWLEDGMENTS

- The logo for the pen club was created by Danielle Chargo of IowaPen East.

---