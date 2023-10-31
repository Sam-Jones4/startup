# CS 260 Notes
    As I completed this exercise, I learned how to better resolve merge conflicts and basic formatting of .md files

    I don't have time to format this right now bc I need to take the midterm but here are my notes
    
9/5/23

Protocols
TCP = transmission control protocol
IP = internet protocol
Http = hypertext transfer protocol
NAT = network address translation
router/isp makes a local network and acts as the only address in the house
Bc there’s not enough IP addresses for everyone anymore
https://info.cern.ch/ the first website
Being awesome isn’t enough, you have to be awesome and convincing
HTML, CSS, JS = structure, style, functionality
Browser is just a piece of software that allows you to interact with servers
Educating slaves was illegal because as soon as they were educated they wouldn’t be slaves

9/7/23

Websockets allow you to do peer to peer things

9/12/23

You should do web development on either Mac or Linux
Console is a text based command line
Console Commands:
Echo - output the parameters of the command
Cd - change directory
Mkdir - make directory
Rmdir - remove directory
Rm - remove files
Mv - move files
Cp - copy files
Ls - list files
Curl - command line client url browser
Grep - regular expression list
Find
Top - view running processes
Df - view 
Cat - output file
Less - interactive file output
Wc - count words
Ps - view processes
Kill - kill a process
Sudo - execute as admin
Ssh - remote shell
Scp - securely copy files to a remote computer
History - show history of commands
Ping - test connection
Traceroute - trace network
Dig - dns information
Man - look in the manual

9/14/23

HTTPS always uses port 443
SSH uses port 22
HTTP uses port 80
Machine image - what software you want, how to organize it, etc
Everyone’s computer has a me routed to 127.0.0.1 but the router assigns a different one
3 kinds of permissions you can grant on a linux file
Read 
Write
Execute
The first two are for the writer, the last three are for the world
Ls -al lets you see the permissions
Chmod allows you to change permissions (so change 0644 to 600)

9/19/23

Leasing a domain name
1-10 years renew is required $3-$100k+
IANA

9/21/23

svg = vector graphic

9/26/23
MDN WebDocs and W3Schools for CSS tips
Margin > Border > Padding > Content

10/3/23

Chrome built a compiler called V8 to use in real time as things change
In order to add JS to HTML you have to put a script file in the head.
Or you can put the code itself inside your HTML with <script> tags
Or you can put in inline on an attribute/call functions from the file 
Don’t use var anymore to declare variables, in JS use let (can change it) or const (cannot change it)
‘Use strict’ makes JS care about all the stuff it should not let me do
Associative array in JS
Keys can be objects or symbols 
Value can be whatever you want

10/5/23

DOM (Document Object Model) is the tree structure that represents the hierarchy in your HTML. CSS makes that tree look pretty, and JS is gonna interact with that tree
JS equals signs
= assigns
== kind of equality but not really
=== equality
falsy (0, -0, ‘ ‘, NaN, null, undefined)
truthy = !falsy

for (let i = 1; i < 3; i++) {
    console.log(`for ${i}`);
  }

=> basically means it’s a function

10/10/23

A closure is a function with

10/12/23

Slicing (strings) gets rid of all the characters besides the ones in the interval given
Spreading means taking an array and spreading it out into pieces

10/17/23

Promise - a function that promises to a return a value eventually and in the meantime has a state (eventually I’ll get the answer back or i’ll get something back earlier indicating a problem)
Pending
Done in a good way
Done in a bad way

10/19/23

fetch(‘/quote’) = a JS command that goes to a url and gets something. Returns a promise that resolves to some http thing

