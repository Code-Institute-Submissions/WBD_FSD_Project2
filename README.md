# READ ME - FSD COURSE - PROJECT 2

## IowaPen pen collectors club website - phase 2

This is the second project of the Code Institute Full Stack Developer course, and is a continuation of my first project, a web site for the writing instrument collectors club that I run. The club's production site is at:

- https://iowapen.club

We are using GitHub Pages to host the site. You can also use iowapen.com and iowapenclub.com to reach our site, and we've registered domains to eventually host a pen show here in Iowa, at iowapen.show and iowapenshow.com, all of which presently point to iowapen.club, including the original site at iowapen.github.io.

- This project site is hosted at https://iowapen.club/WBD_FSD_Project2/

- The source code repository is at: https://github.com/IowaPen/WBD_FSD_Project2/

I will copy this project to the main iowapen.club site shortly after I submit it for review and grading. 

You can still see the project 1 site at https://iowapen.club/WBD_FSD_Project1/ and code repo at https://github.com/IowaPen/WBD_FSD_Project1/  - the repo has been set to "archived" to disallow changes, and I will do the same with the Project 2 repo eventually. 

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

### OTHER RESOURCES USED:
- HoverCSS
- Google Fonts
- FontAwesome (navigation and other icons)

---
## HOW THEY WERE USED
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

Some of these pages share the same database, (index, penblog and penvents) and just show different datasets from the database; for example, the index page just show events in the near future while the penblog and penevents page presently show all events. The penevents page also leaves out events in the database that have no dates set yet (typically annual pen shows later in 2020 that haven't set their date for 2020 yet.)

Many more such database-driven pages will be added in the near future, after this project is submitted. Data is being gathered for them now, though it will take some months to do that, so the buttons for those pages were placed the "COMING SOON" section of the site navigation buttons and display a "coming soon" page when clicked.  

(The "coming soon" page, incidentally, is a copy of the template.html page that is used when starting a new page for the site, to help keep a consistent structure.)

The IowaPen site uses an account with read-only access to the databases. Various levels of access to AirTable databases can be granted. You can see the tables we have created so far yourself (read-only) using this sharink link to AirTable.

https://airtable.com/invite/l?inviteId=invKYDXDo5unu9HhF&inviteToken=fc8bc9aef59313141d1738d8dc9d64695c33cf64770ead3d6405485edadbe464

(You will need to set up a free AirTable.com account to view the data; I encourage it! It's a handy service that my family uses for other things than just IowaPen. They have a good free tier as well as paid tiers that provided more features. We are doing all this and even our own database for home use with the free tier.)

See api.airtable.com once you have logged in to AirTable and are looking at databases to get the API information for a specific database.

---
#### VUE AND AXIOS FRAMEWORKS

Vue and Axios are used to access and display data from the AirTable databases.

---
#### BOOTSTRAP FRAMEWORK

Boostrap is used for the site UI, table formatting, and other thing, as well as regular CSS.

---
#### JQUERY FRAMEWORK

One of the biggest uses of jQuery on this site is to implement the "include" feature of programming languages, so I can move the common code of the header, navigation buttons and booter present on ever web site to separate files.  That way you only have to change one file to change the header, nav buttons or footer on ALL The pages.   This has already been incredibly helpful as it make sthe HTML pages smaller, and I've already rearranged the navigation buttons several times. 

---
#### EMAILJS FRAMEWORK AND API

EmailJS is used on the join.html page to send an email to our iowapen@gmail.com address with the information from that form and also to generate an auto-reply to the person wanting to join with more contact information for our club and our social media accounts.  Since the email generated by EmailJS uses HTML tags, I have checked the HTML code for the emails into this project's source code repo too.

I also have the code to send the email let the user know it has been sent and clear the form after they click the "join" button. 

---
## REASON FOR THE SITE AND PROJECT

IowaPen is a pen collectors club, a gathering of people interested in fountain pens, mechanical pencils, and writing instruments of all kinds. Calligraphy, penmanship, pen collecting, vintage pen restoration, nib tuning, ink testing/sharing, paper, pen turning, history and more. It's really quite fascinating how many branches and areas of interest tehre are in this hobby; history, art, chemistry, and many more.

My pen club needed a web site, not just a Facebook page and other social media accounts. Not everyone uses social media, plus a web site is a great way to get found via web search engines. There is also a lot of other things we can do with a web site than can be done with a social media site.  We have business cards but this is our electronic business card. 

here are several reasons and uses for the site:

- Information about club activities and events
- Pen and club news
- A place to store a large amount of useful information about this hobby that I am trying to collect and make available to our club members
- To have something that doesn't rely on a third-party social media service.

---
## FUTURE PLANS

Eventually I want to also take that information and turn it into a side project / side business similar to IMDB, as the Internet Movie  Database has done for movies and TV. I will call it somethng like the Internet Pen Enthusiast Network and make money from advertisting and possibly some sort of store selling pens and related products.

---
## WHY COLLECT PENS?

There is a surprising amount of interesting in analog writing and in fine writing instruments, even more so in this day of overloading on all things digital. This is a worldwide hobby and much larger than most people imagine.

- The Fountain Pen Network Facebook Group, for example, has over 25,000 members, from all over the world

- There are sixteen or seventeen pen show JUST in the United States every year
    - Some have been held annually for several decades (the Los Angeles International Pen Show is in it's 32nd year in 2020 , for example.)
    - There are many more shows worldwide

- There are dozens of large pen companies, hundreds of smaller companies and uncountable custom pen makers working out of their backyard workshops.  The same is true for ink and paper vendors and related products and services such as sales, repair, restorations of 'vintage' (antique pens) and more.

---
# UX DESIGN 

## COLORS AND DESIGN ELEMENT REASONING

We use deep saturated and shaded colors for the pages as these are popular in fountain pen inks
 
 A large part of the pen collecting tends to involve Fountain pens. They are still in common use, worldwide (more so outside the USA). Fountain pen collectors and users often enjoy them more than other kinds of pens due to the huge multitude of rich, beautiful and easily changed (and even custom mixed) fountain pen ink colors available, and are very drawn to color -- this site design honors that love of color.  

The visual elements of the site are designed to resemble writing, ink and paper; especially the writing with beautiful ink shading and sheen providing by fountain pen inks and various size writing points (nibs). 

I accomplished the look of "shading" through the use of CSS radial and linear gradients on the text and navigation button backgrounds.

The navigation buttons were intended to resemble ink sample swatches very commonly used by ink vendors, stores and enthusiasts to catalog and show off their ink colors and collections as well as the shading and "sheen" of some inks. Eventually I might even replace the backgrounds with ACTUAL ink swatch photos.

To see some real-life examples of those ink color charts:

    https://www.google.com/search?q=fountain+pen+ink+color+chart

See also these chart images in the /assets/images/inkcharts folder of our running site.

- https://iowapen.club/WBD_FSD_Project2/assets/images/inkcharts/Diamine-Bottled-Ink-Colour-Chart-1.png
- https://iowapen.club/WBD_FSD_Project2/assets/images/inkcharts/private_reserve_ink_chart.jpg
- https://iowapen.club/WBD_FSD_Project2/assets/images/inkcharts/platinum_mixable_ink.jpg 

Also, the content area of the page has a faint "dot grid" background accomplished via CSS; many pen hobbyists also like fine paper and notebooks, and a very popular notebook / paper design (and my personal favorite) is the "dot grid" style of paper It is flexible without the lines of more common paper gettng in the way of writing or especially of drawing.

---
## WHO IS THIS WEB SITE FOR?

It is for members of the IowaPen club, or other people interested in writing instruments, ink, paper - there are quite a lot more than you think! It will both provide information for our members and help new members to find us. 

### WHAT DO THEY WANT TO ACHIEVE WHEN THEY VISIT?

- Find out how to contact us or join the club
- Find our meeting dates, times and locations (we have several chapters in different cities)
- Find our social media sites and other contact information
- Read news and information about the club and about the hobby in general
- Find other resources related to the hobby; these resources are fragmented all around the web and I plan to eventually provide a single resources for many of them, sort of the IMDB of writing instruments

### THE BEST WAY TO HELP THEM ACHIEVE THESE THINGS 

A web site is accessible to anyone. Not everyone uses Facebook, Twitter, and other social media and never will. We need a free and open place
on the Internet for anyone to be able to access information about our club, at any time, with most any device. 

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

### USER STORIES

User stories are statements of the form: "As a _user type_, I want to perform an _action_, so that I can achieve _a goal_."
 
- As a pen collector or admirer, I want to find a pen club, so I can join and meet other pen hobbyist.
    
    This is handled by the site itself, and the Chapters and Join pages. 

- As a pen club member, I want to find out when the next meeting or future meeting date is, or if we are meeting during the summer, so I can plan my time.

    This is handled by the main page of the site as well as the Events page for meetings further in the future than a month
    
- As a pen club member, I want a list of pen clubs / pen shows / pen stores / pen makers / ink makers etc., so that I can contact or visit them,

    - These pages will be filled out in the future; There's no definitive list of these anywhere on the web; I hope to create one for all of these and for our members.

    - I like to find pen stores, shows or local clubs when I travel on vacation.
    
- As a pen hobbyist, I want to see pen-related news, so that I can keep up-to-date on the hobby or a specifc product

    - The blog page will eventually fill that need as I find pen related news items by several means and link to them
    
- As a pen hobbyist, I want to discuss pen issues (pens, inks, papers, repair, many more) with other similar people, so that I can find the pen/ink/etc I need.    

    - The forum page will eventually fill that need and let us move away from Facebook (I hope); we tried to use Yahoo Groups for this, but most people seem to prefer Facebook.  

    - This is a lower priority item but I would still like to do it.  I might just link this button to Facebook or Yahoo Groups at some point. 

To see some wireframes/sketches of the basic site layout, look in the design/wireframes folder.  There are also text files with design notes, a bug/change tracking page, a testing plan page, to-do list, etc.

## Features / Existing Features

This web site has a navigation bar with links to each of the services we provide.  Most will be added in the future, but for now the important parts available are

- The main page (index.html) describing the club and listing the upcoming meeting and other event dates.  There is a more detailed events page with events months into the future.
- The events page (events.html) with a list of events, both pen club events and pen-related events like Fountain Pen Day listed.  It should go several months into the future where possible.
- The chapters page (chapters.html) listing each of the IowaPen chapters, usual meeting dates (e.g. 2nd Sunday of the month, 4-5pm), location and contact information
- The join page (join.html) with a form to email IowaPen and ask to join - this will actually be hooked up in a later modle of the course

The other pages are mostly reference material and will be added as time allows, ideally eventually fed from databases as part of projects later in the course (I hope)

 
### FEATURES LEFT TO IMPLEMENT

In looking over the course syllabus/schedule, I can see opportunuties to implement many of these as part of other course major projects:

- Make menu backgrounds actual ink sample swatches instead of color gradients

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
         
    
## TECHNOLOGIES USED

Here are all of the languages, frameworks, libraries, and any other tools that I have used to construct this project. For each, I have provided the name, a link to its official site and a short sentence of why it was used.

- [AirTable](https://airtable.com) - used to store the data used for the tables and lists on many page of this site. 

- [JQuery](https://jquery.com) - used primarily to simulate "includes" to modularize the common HTML UI components. 

- [Vue](https://vuejs.org/) - used to display data from AirTable

- [Axios](https://github.com/axios/axios) - used to obtain the data from AirTable for display using Vue.

- [Bootstrap JS framework](https://getbootstrap.com/) - this was used to create the site GUI because it's a good framework, makes responsive sites, and because it was used in the course module we just finished and it's the only one I know!

- [Google Fonts](https://fonts.google.com/) - I've used this before; it's an excellent source of fonts for use on web sites and I needed writing/cursive fonts for a writing instrument site.

- [Google Maps](https://maps.google.com/) for the member location maps on the chapters page

- [EmailJS](https://emailjs.com) for the email membership request on the Join page.

- [FontAwesome icons](https://fontawesome.com) - this is a wonderful source of UI icons to make your site more attractive and intuitive. It was introduced in the course module we finshed and was perfect for finding icons we needed.

- [Hover.css](https://ianlunn.github.io/Hover/) - this was used to create the button hover effects. 


## TESTING

I don't have any experience yet with automated web testing tools (though I am aware they exist), hopefully those will be introducted in a future module of the course.

For now I have been testing the site on an iMac (a very large/wide screen), a MacBook Pro, an iPhone, an iPod Air, and at work on my Windows 10 PC. (For Project 2 I have been unable to do testing on a Windows PC since switching jobs as I now work for a major bank that severly locks down what sites you can visit and does not allow access to my site, GitHub, or AirTable, so I can't do much Windows testing any longer.)

I've manually tested in Chrome, Safari, Mobile Safari, Internet Explorer 11, and Edge. It works well in all, except IE 11. I've fixed most of the problems (except those in IE11) and have started a list of all the browsers that need to be tested against. I'm not worrying about IE11 since Microsoft doesn't really support it, having replaced it with Edge, and now replacing Edge's web rendering with the same engine in Chrome and Safari, I'm told.

This manual testing has uncovered numerous bugs that I have fixed.  The few remaining are documented in the bugs.txt file along with some changes that will make the site look better on the biggest/smallest of screens.

I test as follows: 

1. Click on links in the navigation buttons at the left edge to make sure they go to the right pages. 
2. Click back to return to the page I was at and click another button. Since the buttons are now all generated by a single source file this is much safer.
3. Click any links in the page (email, telephone, social media, etc) and make sure they work.
4. On devices supporting it (iPhone, iPad), change the screen from portrait to landscape and see if it adapts properly and is usable and looks ok both ways. 
5. On desktop devices I resized the browser window horizontally and vertically to see if the page adapted properly.  I do this in the IDE preview window as well.

In the bugs.txt and todo.txt files I have started tracking problems and changes to fix a few problems and to make the site look better.

I have found a few interesting bugs, such as IE11 not really working with the site at all, and the buttons disappearing on the iPhone 4 mobile Safari browser. These may be limits of older browsers with modern frameworks and what I can do may be limited therefore.  

## DEPLOYMENT

This site's Git repo is hosted on GitHub at https://github.com/IowaPen/WBD_FSD_Project2/ 

I've used the GitHub Pages features to make the site available at https://iowapen.github.io/WBD_FSD_Project2/


## CREDITS

The basic structure for the site was inspired by the UCD Resume mini project in the CodeInstitute.Net Full Stack Developer Course but has been drastically modified and only bears a vague similarity now. 


### CONTENT

The site design was based off of the User Centered Design modules Resumé example that was created during the course. I've tweaked it quite a bit, but it had good bones and i used them as a starting point. The rest of the site uses no content that wasn't made by me, though I plan to use other content in the future. 

The JavaScript frameworks have been mentioned elsewhere, as wells as the APIs and other resources used.

### MEDIA

- The logo for the pen club was created by Danielle Chargo of IowaPen East.

### ACKNOWLEDGMENTS

- The Color style for the menu button structure, layout and color gradients by how pen fans, especially ink fans, like to make swatchbooks of all their inks so they can have some idea of how they look. These are sort of like the paint sample swatches you get at paint stores.

- The color gradients used on the menu buttons and in the heading text at the top comes from how some fountain pen inks have variation in the color (called shading and sheen) as you write.


