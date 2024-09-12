# basics

selectors
box model
positioning

# selectors

simple selectors - element, id #, class .

## combinator selectors

descendant A B - B inside A
child A > B - B one level inside A
adjacent sibling A + B - B next to A
general sibling A ~ B - B on same level of A

## pseudo selectors

:hover, :visited, :active , :nth-child(2)

## pseudo element selectors

input::placeholder
::selection

## attribute selectors

input[type="text"]

# Units

# Positions

atleast one of top left bottom right required
position - relative, absolute, fixed, sticky

relative - relative to parent
absolute - check for relative in parents or the html doc as parent
fixed - fixed to screen area
sticky - relative + fixed , intially relative , but after scroll position fixed

Z index - layering divs

# layouts

## flexbox

display : felx - on the container
flex-direction
justify-content - justify content in the direction of main axis - ie .flex-direction
align-items - align items in the direction of cross axis

flex-wrap - if the content overflows what to do
align-content - this is only applicaple in case of many items in flex box , and is similar to justify-content - but in cross axis

gap
row-gap
column-gap

### flex item styles

items are ordered in source order , but can be changed by using - order style
flex-grow and flex-shrink enables items to size inside the container

## grid

TODO
take a look at
https://gridbyexample.com/examples/

# media queries

@media only screen and (min-width: 500px) {
define the styles for the classes
}

# animation

# learning resources

https://codingfantasy.com/
https://flexboxfroggy.com/
https://learncssgrid.com/

https://www.w3schools.com/howto/howto_js_tabs.asp

# How to run

use vscode + liveserver

# YT videos

https://www.youtube.com/watch?v=Y42L1i7V0-g&t=3919s
