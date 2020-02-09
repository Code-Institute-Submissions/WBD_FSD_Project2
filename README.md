# READ ME - FSD PROJECT 2

## IowaPen pen collectors club website - phase 2

This is the second project of the Code Institute Full Stack Developer course, and is a continuation of my first project, a web site for the writing instrument collectors club that I run.   The club's production site is at:

- https://iowapen.club

We are using GitHub Pages to host the site. You can also use iowapen.com and iowapenclub.com to reach our site, and we've registered domains to eventually host a pen show here in Iowa, at iowapen.show and iowapenshow.com, all of which presently point to iowapen.club, including the original site at iowapen.github.io.

- This project site is hosted at https://iowapen.club/WBD_FSD_Project2/

- The source code repository is at: https://github.com/IowaPen/WBD_FSD_Project2/

I will copy this project to the main iowapen.club site shortly after I submit it for review and grading. You can still see the project 1 site at https://iowapen.club/WBD_FSD_Project1/ and code repo at https://github.com/IowaPen/WBD_FSD_Project1/  - the repo has been set to "archived" to disallow changes, and I will do the same with the Project 2 repo eventually. 

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
    - database used to store most tables and lists display on many of the site's pages
- Google Maps 
    - on the chapters.html page, used to display the Iowa And USA member location maps
- EmailJS
    - on the join page used to send the Join the Club request email and autoreply

### ALSO USED:
- HoverCSS
- Google Fonts
- FontAwesome (navigation and other icons)

Some detail about the various APIs and Frameworks and now they are used follows. 

### AIRTABLE API 

*_IMPORTANT NOTE_*: Almost all tables and lists you see on this site are served from AirTable.com databases via their API. They are NOT hardcoded HTML tables, but are created on the fly using JavaScript frameworks as the page is served. This allows me or others to update the data on the site at any time without changing the source code at all.

 I call this out specifically because at first my mentor did not realize these tables were generated via JavaScript frameworks and a database API and suggested I specifically mention it.

The pages where this is presently done are:
- index.html (the Recent News and Upcoming Events sections)
- penblog.html
- penshows.html
- penbooks.html
- penevents.html

Some of these pages share the same database, (index, penblog and penvents) and just show different portions; for example, the index page just show events in the near future while the penblog and penevents page presently show all events. The penevents page does leave out events in the database that have no dates set yet (typically annual pen shows that haven't set their date for 2020 yet.)

Many more such database-driven pages will be added in the near future, after this project is submitted. Data is being gathered for them now, though it will take some months to do that, so the buttons for those pages are the "COMING SOON" section of the site navigation buttons and display a "coming soon" page.  

(The "coming soon" page, incidentally, is a copy of the template.html page that is used when starting a new page for the site, to help keep a consistent structure.)

The IowaPen site uses an account with read-only access to the databases. Various levels of access to AirTable databases can be granted. You can see the tables we have created so far yourself (read-only) using this link:

https://airtable.com/invite/l?inviteId=invKYDXDo5unu9HhF&inviteToken=fc8bc9aef59313141d1738d8dc9d64695c33cf64770ead3d6405485edadbe464

(You will need to set up a free AirTable.com account, I believe, to view the data; I encourage it! It's a handy service that my family uses for other things than just IowaPen.  They have a free tier as well as paid tiers that provided more features.)

See api.airtable.com once you have logged in to AirTable and are looking at databases to get the API information for a specific database.

#### VUE AND AXIOS FRAMEWORKS

Vue and Axios are used to access and display data from the AirTable databases.

#### BOOTSTRAP FRAMEWORK

Boostrap is used for the site UI, table formatting, and other thing, as well as regular CSS.

#### JQUERY FRAMEWORK

One of the biggest uses of jQuery on this site is to implement the "include" feature of programming languages, so I can move the common code of the header, navigation buttons and booter present on ever web site to separate files.  That way you only have to change one file to change the header, nav buttons or footer on ALL The pages.   This has already been incredibly helpful as it make sthe HTML pages smaller, and I've already rearranged the navigation buttons several times. 

#### EMAILJS FRAMEWORK AND API

EmailJS is used on the join.html page to send an email to our iowapen@gmail.com address with the information from that form and also to generate an auto-reply to the person wanting to join with more contact information for our club and our social media accounts.  Since the email generated by EmailJS uses HTML tags, I have checked the HTML code for the emails into this project's source code repo too.

I also have the code to send the email let the user know it has been sent and clear the form after they click the "join" button. 

---

## REASON FOR THE SITE AND PROJECT

IowaPen is a pen collectors club, a gathering of people interested in fountain pens, mechanical pencils, and writing instruments of all kinds. 
Calligraphy, penmanship, pen collecting, vintage pen restoration, nib tuning, ink testing/sharing, paper, pen turning, history and more.

My pen club needed a web site, not just a Facebook page and other social media accounts.  There is also a lot of other things we can do with a web site 
than can be done with a social media site. 

There are several reasons for the site:

- Information about club activities and events
- Pen and club news
- A place to store a large amount of useful information about this hobby that I am trying to collect and make available to our club members
- To have something that doesn't rely on a third-party social media service.

Eventually I want to also take that information and turn it into a side project / side business similar to IMDB, as the Internet Movie 
Database has done for movies and TV. I will call it the Internet Pen Enthusiast Network and make money from advertisting and possibly 
some sort of store selling pens and related products.

## WHY COLLECT PENS?

There is a surprising amount of interesting in analog writing and in fine writing instruments, even more so in this day of overloading on all things digital.
This is a worldwide hobby. 

- The Fountain Pen Network Facebook Group, for example, has over 25,000 members, from all over the world

- There are sixteen or seventeen pen show JUST in the United States every year
    - Some have been held annually for several decades (the Los Angeles International Pen Show is in it's 32nd year in 2020 , for example.)

- There are dozens of large pen companies, hundreds of smaller companies and uncountable custom pen makers working out of their backyard workshops.

## UX DESIGN 

Fountain pen collectors and users often enjoy the multitude of easily changed fountain ink colors available, and are very drawn to color -- this site design honors that love. 

The visual elements of the site are designed to resemble writing, ink and paper especially the writing with ink shading providing by fountain pens. I accomplished this through the use of radial and linear gradients on the text and navigation button backgrounds.

The navigation buttons also resemble ink sample swatches very commonly used by ink vendors, stores and enthusiasts to catalog and show their ink colors and collections. Eventually I might replace the backgrounds with ACTUAL ink swatch photos.

Some real-life examples of those ink color charts:

    https://www.google.com/search?q=fountain+pen+ink+color+chart

See also in the /assets/images/inkcharts folder of our running site.

- https://iowapen.club/WBD_FSD_Project2/assets/images/inkcharts/Diamine-Bottled-Ink-Colour-Chart-1.png
- https://iowapen.club/WBD_FSD_Project2/assets/images/inkcharts/private_reserve_ink_chart.jpg
- https://iowapen.club/WBD_FSD_Project2/assets/images/inkcharts/platinum_mixable_ink.jpg 

The content area of the page has a faint "dot grid" background; many pen hobbyists also like fine paper and notebooks, and a very popular notebook / paper design (and my personal favorite) is the "dot grid" style. 

- Deep saturated and shaded colors for the pages

    - Fountain pen usage is growing rapidly due to the huge variety of beautiful, even mixable ink colors that are available, and to
    other factors of FP ink such as shading, sheen, shimmer and even scenting, things you just don't see with oil-based ballpoint ink. 

    - Use of CSS gradients in the heading to simulate fountain pen ink shading when writing. The "ink swatch" design of the navigation menu buttons also uses
     gradients to simulate the shading and saturation and color shifts often seen on ink sample charts.
    
    - Use of handwriting-style fonts for headers and titles and in the footer.  We don't use it for the content, however, and that
    is intentional.


---

Please see also the Project 1 Read Me file in the source code repo, named READM_PROJECT1.md for more information on the original site 
design and purpose.  It is stored in the README_PROJECT1.md file in the source code repository.

---
## UX
 

### WHO IS THIS WEB SITE FOR?

Members of the IowaPen club, or other people interested in writing instruments, ink, paper - there are quite a lot more than you think! I will both provide information for our members and help new members find us. 

### WHAT DO THEY WANT TO ACHIEVE WHEN THEY VISIT?

- Find out how to contact us or join the club
- Find our meeting dates, times and locations (we have several chapters in different cities)
- Find our social media sites
- Read news and information about the club and about the hobby in general
- Find other resources related to the hobby; these resources are fragmented all around the web and I plan to eventually provide a single resources for many of them, sort of the IMDB of writing instruments

### THE BEST WAY TO HELP THEM ACHIEVE THESE THINGS 

A web site is accessible to anyone. Not everyone uses Facebook, Twitter, and other social media and never will. We need a free and open place
on the Internet for anyone to be able to access information about our club, at any time, with most any device. 

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

### User Stories

- As a user type, I want to perform an action, so that I can achieve a goal.
 
- As a pen collector or admirer, I want to find a pen club, so I can join and meet other pen fans.
    
    This is handled by the site itself, and the Chapters and Join pages. 

- As a pen club member, I want to find out when the next meeting or future meeting date is, or if we are meeting during the summer, so I can plan my time.

    This is handled by the main page of the site as well as the Events page for meetings further in the future than a month
    
- As a pen club member, I want a list of pen clubs / pen shows / pen stores / pen maker / ink makers etc., so that I can contact or visit them,

    These pages will be filled out in the future; There's no definitive list of these anywhere on the web; I hope to create one for all of these and for our members.
    I like to find pen stores, shows or local clubs when I travel on vacation.
    
- As a pen fan, I want to see pen-related news, so that I can keep up-to-date on the hobby or a specifc product

    The blog page will eventually fill that need as I find pen related news items by several means and link to them
    
- As a pen fan, I want to discuss pen issues (pens, inks, papers, repair, many more) with other similar people, so that I can find the pen/ink/etc I need.    

    The forum page will eventually fill that need and let us move away from Facebook (I hope); we tried to use Yahoo Groups for this, but most people seem to prefer Facebook.  
    This is a lower priority item but I would still like to do it.  I might just link this button to Facebook or Yahoo Groups at some point. 

To see some wireframes/sketches of the basic site layout, look in the design/wireframes folder.  There are also text files with design notes, a bug/change tracking page, a testing plan page, to-do list, etc.

## Features / Existing Features

This web site has a navigation bar with links to each of the services we provide.  Most will be added in the future, but for now the important parts available are

- The main page (index.html) describing the club and listing the upcoming meeting and other event dates.  There is a more detailed events page with events months into the future.
- The events page (events.html) with a list of events, both pen club events and pen-related events like Fountain Pen Day listed.  It should go several months into the future where possible.
- The chapters page (chapters.html) listing each of the IowaPen chapters, usual meeting dates (e.g. 2nd Sunday of the month, 4-5pm), location and contact information
- The join page (join.html) with a form to email IowaPen and ask to join - this will actually be hooked up in a later modle of the course

The other pages are mostly reference material and will be added as time allows, ideally eventually fed from databases as part of projects later in the course (I hope)

 
### FEATURES LEFT TO IMPLEMENT

In looking over the course syllabus/schedule, I can see opportunuties to implment many of these as part of other course major projects (or on my own as I learn the necessary skills in the course, as seems appropriate.)

- Make menu background actual ink sample swatches instead of color gradients

- As I continue through the course there are areas for which I will create pages
    - [X] Blog (implement own, use third party such as WordPress, Blogger, etc)
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
    
    FUTURE - Create a writing instrument version of IMDB from the data collected for the IowaPen site and monetize it through ads, etc.
    - Nicer, more real-life event calendar with club events, pen shows, other related events
    - Pen databases
        - Pen companies
        - Pen models (fountain pen, ballpoint, rollerball, gel, mechanical pencil, etc)
        - Pen photos
        - Pen reviews
    - Ink databases
        - Ink vendors
        - Ink brands/lines
        - Ink reviews
        - Ink sample images 
    - Paper databases
        - Paper vendors
        - Paper branks/lines
            - Esp fountain pen friendly or UN-friendly
        - Paper reviews
    - Pen Show calendar and links
    - Pen Store links
    - Pen Club links
    - Pen book links 
    - Pen publication (magazine) links
         
    
## TECHNOLOGIES USED

Here are all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [AirTable](https://airtable.com) - used to store the data used for the tables and lists on many page of this site. 

- [JQuery](https://jquery.com) - used primarily to simulate "includes" to modularize the common HTML UI components. 

- [Vue](https://vuejs.org/) - used to display data from AirTable

- [Axios](https://github.com/axios/axios) - used to obtain the data from AirTable for display using Vue.

- [Bootstrap JS framework](https://getbootstrap.com/) - this was used to create the site GUI because it's a good framework, makes responsive sites, and because it was used in the course module we just finished and it's the only one I know!

- [Google Fonts](https://fonts.google.com/) - I've used this before; it's an excellent source of fonts for use on web sites and I needed writing/cursive fonts for a writing instrument site.
    
- [FontAwesome icons](https://fontawesome.com) - this is a wonderful source of UI icons to make your site more attractive and intuitive. It was introduced in the course module we finshed and was perfect for finding icons we needed.

- [Hover.css](https://ianlunn.github.io/Hover/) - this was used to create the button hover effects. 


## TESTING

I don't have any experience yet with automated web testing tools (though I am aware they exist), hopefully those will be introducted in a future module of the course.

For now I have been testing the site on my iMac (a very large/wide screen), a MacBook Pro, an iPhone 6s Plus, an iPod Air, and at work on my Windows 10 PC. (For Project 2 I have been unable to do this since switching jobs and now work for a major bank that severly locks down what sites you can visit and does not allow access to my site, GitHub, or AirTable, so I can't do much Windows testing any longer.)

I've manually tested in Chrome, Safari, Mobile Safari, Internet Explorer 11, and Edge.  It works well in all, except IE 11. I've fixed most of the problems (except those in IE11 whick are going to take some research) and have started a list of all the browsers that need to be tested against. I'm not worrying about IE11 since Microsoft doesn't really support it, having replaced it with Edge, and now replacing Edge's web rendering with the same engine in Chrome and Safari, I'm told.

This manual testing has uncovered numerous bugs I have fixed.  The few remaining are documented in the bugs.txt file along with some changes that will make the site look better on the biggest/smallest of screens.

Since this is a very static site right now I have mostly just tested as follows:

1. Click on links in the navigation buttons at the left edge to make sure they go to the right pages. Click back to return to the page I was at and click another button. There are only 4 pages now so this is not difficult.
2. Click any links in the page (email, telephone, social media, etc) and make sure they work.
3. On devices supporting it (iPhone, iPad), change the screen from portrait to landscape and see if it adapts properly.
4. On desktop devices I resized the page horizontally and vertically to see if the page adapted properly.

In the bugs.txt and todo.txt files I have started tracking problems and changes to fix a few problems and to make the site look better such as :
- going from a 1/3rd-2/3rds layout to a 1/4-3/4 layout on the larger size breakpoints (-xl and maybe -lg) and 3 columsn or more of buttons so the buttons don't get HUGE.
- making even the -xs site  go to two columns of buttons so users won't have to scroll so much

I have found a few interesing bugs, such as IE11 not really working with the site at all, and the buttons disappearing on the iPhone 4 mobile Safari browser.

## DEPLOYMENT

This site's Git repo is hosted on GitHub, and I've used the GitHub Pages features to make the site available at https://iowapen.github.io


## CREDITS

The basic structure for the site was inspired by the UCD Resume mini project in the CodeInstitute.Net Full Stack Developer Course but has been drastically modified and only bears a vague similarity now. 


### CONTENT

The site design was based off of the User Centered Design modules Resumé example that was created during the course. I've tweaked it quite a bit, but it had good bones and i used them as a starting point. The rest of the site uses no content that wasn't made by me, though I plan to use other content in the future. 

### MEDIA

- The logo for the pen club was created by Danielle Chargo of IowaPen East.
- I have found a good source of fountain pen photos an Pexels.com, which I will work into the site later as I learn and find good places to use them.
- I hope to add pen quotes at the top or bottom of each page in an automated fashion and have found good sources of pen quotes on GoodReads.com, BrainyQuotes.com and other quotation sites.


### ACKNOWLEDGMENTS

- The Color style for the menu button structure, layout and color gradients by how pen fans, especially ink fans, like to make swatchbooks of all their inks so they can have some idea of how they look. These are sort of like the paint sample swatches you get at paint stores.

- The color gradients used on the menu buttons and in the heading text at the top comes from how some fountain pen inks have variation in the color (called shading and sheen) as you write.


