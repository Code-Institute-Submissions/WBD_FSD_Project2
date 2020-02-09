# IowaPen pen collectors club website

IowaPen is a pen collectors club, a gathering of people interested in fountain pens, mechanical pencils, and writing instruments of all kinds. 
Calligraphy, penmanship, pen collecting, vintage pen restoration, nib tuning, ink testing/sharing, paper, pen turning, history and more.

This website is printed on our business card used to provide information to interested people, and service as a hub for all information about 
our club, our club chapter meeting dates, and links to our various social media sites, local chapterer contacts and links to regional pen stores,
pen shows, and more.  It's been a static page up until now, but the free hosting vendor was so worthless that it was too much of a hassle to keep
running.  I recently found out about GitHub pages. 

The web site will be hosted on GitHub as https://iowapen.github.io, and once in a useful state, it will
also be on the domain name we have purchased (https://iowapen.club and https://iowapen.com)

We'd also like to eventually host a blog (perhaps in a later module of the Full Stack Developer course, as it's mention in the curriculum) 
and a user discussion forum

To access the site go to: https://iowapen.github.io
    
I have not had time to connect it to our www.iowapen.club and .com domain names yet, but that's is a major priority now that the site is in a usable state.


To access the source code:

- git remote add origin https://github.com/IowaPen/iowapen.github.io.git
- git push -u origin master



## UX
 
The visual elements of the page are designed to resemble writing, especially the writing with ink shading of fountain pens (through the use of radial and 
linear gradients).  The menu buttons also resemble ink shading and "sheen", as well as resemble ink sample swatches very commonly used by ink vendors, 
stores and enthusiasts to catalog and show their ink colors and collections.  Eventually I might replace the backgrounds with ACTUAL ink swatches. 

Pen collectors and especially fountain pen collectors and users with the multitude of easily changed ink colors are very drawn to color and this site design honors that. 


### Who this website is for:

Members of IowaPen or other people interested in writing instruments, ink, paper - there are quite a lot more than you think! I will both provide information 
for our members and help new members find us. 

### What they want to achieve when they visit

- Find out how to contact us
- Find our meeting dates, times and locations
- Find our social media sites
- Find other resources related to the hobby; these resources are fragmented all around the web and I'd like to eventually provide a single resources for many of them, sort of the IMDB of writing instruments

### The best way to help them achieve these things

A web site is accessible to anyone.  Not everyone uses Facebook, Twitter, and other social media and never will.   We need a free and open place
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

 
### Features Left to Implement

In looking over the course syllabus/schedule, I can see opportunuties to implment many of these as part of other course major projects (or on my own as I learn the necessary skills in the course, as seems appropriate.)

- Make menu background actual ink sample swatches instead of color gradients
- As I continue through the course there are areas I will either implement myself or through a third party tool, as seems appropriate
    - Pen / Ink / Writing quotes (as part of the course that covers using databases) - I already have a large quotation list
    - Blog (implement own, use third party such as WordPress, Blogger, etc)
    - Discussion Forum (implement own or use third party)
    - Pen Club database (as opposed to simple list, allow update submission)
    - Pen Show database (as opposed to simple list, allow update submission)
    - Pen Store list (online and bricks-and-mortar)
    - Pen Publication list
    - Pen Vendor list
    - Ink Vendor list
    - Paper vendor list
    
    FUTURE - Pen version of IMDB 
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

    - Many of these could show advertisements as well, to fund the site and perhaps be turned into a business or several businesses. 
         
    
## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [Bootstrap JS framework](https://getbootstrap.com/) - this was used to create the site GUI because it's a good framework, makes responsive sites, and because it was used in the course module we just finished and it's the only one I know!

- [Google Fonts](https://fonts.google.com/) - I've used this before; it's an excellent source of fonts for use on web sites and I needed writing/cursive fonts for a writing instrument site.
    
- [FontAwesome icons](https://fontawesome.com) - this is a wonderful source of UI icons to make your site more attractive and intuitive. It was introduced in the course module we finshed and was perfect for finding icons we needed.

- [Hover.css](https://ianlunn.github.io/Hover/) - this was used to create the button hover effects. 


## Testing

I don't have any experience yet with automated web testing tools (though I am aware they exist), hopefully those will be introducted in a future module of the course.

For now I have been testing the site on my iMac (a very large/wide screen), a MacBook Pro, an iPhone 6s Plus, an iPod Air, and at work on my Windows 10 PC 

I've manuall tested in Chrome, Safari, Mobile Safari, Internet Explorer 11, and Edge.  It works well in all, except IE 11. I've fixed most of the problems (except those in IE11 whick are going to take some research) and have started a list of all the browsers that need to be tested against.

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

## Deployment

This site's Git repo is hosted on GitHub, and I've used the GitHub Pages features to make the site available at https://iowapen.github.io


## Credits

The basic structure for the site was inspired by the UCD Resume mini project in the CodeInstitute.Net Full Stack Developer Course.


### Content

The site design was based off of the User Centered Design modules resume example that was created during the course. I've tweaked it quite a bit, but it had good bones and i used them as a starting point. The rest of the site uses no content that wasn't made by me, though I plan to use other content in the future. 

### Media

- The logo for the pen club was created by Danielle Chargo of IowaPen East.
- I have found a good source of fountain pen photos an Pexels.com, which I will work into the site later as I learn and find good places to use them.
- I hope to add pen quotes at the top or bottom of each page in an automated fashion and have found good sources of pen quotes on GoodReads.com, BrainyQuotes.com and other quotation sites.


### Acknowledgements

- The Color style for the menu button structure, layout and color gradients by how pen fans, especially ink fans, like to make swatchbooks of all their inks so they can have some idea of how they look. These are sort of like the paint sample swatches you get at paint stores.
- The color gradients used on the menu buttons and in the heading text at the top comes from how some fountain pen inks have variation in the color (called shading and sheen) as you write.


