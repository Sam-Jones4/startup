I learned that I should keep my notes here instead of on a Google doc

5/2/2023

The HTML is the code behind it, the CSS is the style of it, and the JS is how it will behave
</a> = anchor tag
https://www.w3schools.com/ teaches you cool things
Use Chrome ;)
URL/HTTPS/stuff
You type in byu.edu and it goes to the page. Here's what happens before that:
Byu.edu is a web server
Internet protocol = IP
IP is a format for a packet of data
Has an address
BYU owns everything 128.187…
The .4 on the end is IPv4. Recently IPv6 was created but it hasn’t caught on.
Your destination address sets to 128.187.3.4, it gets sent into the big internet cloud and goes from one thing to the next til it gets there. 
It’s like mail. You have no idea where it goes on the way, but it gets there.
Transmission Control Protocol = TCP
Basically ensures reliable transmission
Has a port that we use to address a particular application inside a server. 
Port is a 16 bit value (2 bytes), so has about 65000 different applications you can address on any host
BYU.edu may be running on port 80 (default)
Https is port 433 which is a secure port
It’s like a phone call. A reliable connection where stuff is sent all the time until it drops
TCP/IP is essentially the protocol package that the internet runs on
Domain Name Service = DNS
A ton of them are connected
.com, .edu, .gov
So you ask for it through TCP/IP, it goes into the cloud in search of the IP address, finds the .edu DNS and then asks all the things under him for the right IP address. Then it returns it and you’re there.
A problem right now is with DNS, it’s possible to “poison” it and route you somewhere else
Domains examples
Tld = .edu, .com, etc
Route domain = byu.edu
Subdomain = cs.260.byu.edu
So when you purchase a domain, you create a domain that will be hosted on a server somewhere
When you make a real startup, use some cloud computing service.
Generally the good stuff within internet development is free
As a company you would want to have a server set up in each area of the world for fast access
Command line is how you run things on servers. Deep learning will be command line
Vim, nano, emax, etc. are all text editors on the command line

5/4/2023

“The Big Eight”
HTML (structure)
CSS (style)
JavaScript (interaction)
Service (web service endpoints)
Database (persisted data)
Login (authentication)
Websocket (data pushed from server, chat)
React (Web framework)
Technology stack = components you’re using to build your web application
Caddy like moderates where you want to go
When you work for a company, ask to see a map of their tech stack to wrap your head around it
Ctrl Shift P and Command P are useful in VS Code
:q to get out of VI, :q! To quit without changing anything
Git
Version repository for a directory
Repository collaboration
Commit after each stable state

5/9/23

Press go live in VS and it opens your index
<!DOCTYPE html> specifies that you’re using html version 5
Href = hyperlink reference
HTML elements **for structure!!!
Html = page container
Head = header info
Title = title of the page
Body = the entire content body of the page
Header = header content
Main = main content of the page
Footer = footer of the main content
Section = a section of main content
Div = a block division of content
Span = an inline span of content
h<1-9> = text heading. From h1, the highest level, down to h9, the lowest level
P = a paragraph of text
Table = table
Ol, ul = ordered and unordered list
A = anchor the text to a hyperlink
Img = graphic image reference
&amp = &
&lt = <
&gt = >
&quot = “


A browser is only registering one html page at a time

5/11/23

CSS is always overlaid with HTML. Doesn’t do any good on its own
With your CSS ruleset, you’re going to select one or more HTML elements with a selector and then declare things with properties and values.
In-line css takes highest precedence
Margin box > border box > padding box > content box

5/16/23

Chrome took over bc its JS interpretation was so fast

5/18/23

DOM = Document Object Model
 Sets the child text for an element
5/23/23

Promise(resolve, reject)
In regex /A|f/ denotes the rules and then the things that apply come after /A|f/i
To point to another DNS record, you should type CNAME
Css box model goes margin border padding content
Single quotes ‘x’ is not valid JSON, neither is undefined or no quotes
JavaScript you can’t use = either*

5/25/2023

UX involves way more than UI
“Don’t make me think” - Steve Krug (UX Guru)
Design as a story
Use a UI framework (Material.io, tailwind, bootstrap)

