<demo gif>

<h1 align='center'>Slup - Buttons</h1>

This package contains the Buttons, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Material buttons trigger an ink reaction on press. They may display text, imagery, or both.
  <br />
  Flat buttons and raised buttons are the most commonly used types.
  <br />
  A floating action button is used for a promoted action.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/buttons
```

## Usage
```js
import {
  RaisedButton,
  FlatButton,
  Fab
} from '@slup/buttons'

export const Buttons = () =>
  <div>
    <RaisedButton>Button</RaisedButton>
    <FlatButton>Button</FlatButton>
    <Fab>+</Fab>
  </div>
```

## Available properties
| Props       | Type          | Default       | Documentation                                        |
|-------------|:-------------:|:-------------:|------:                                               |
| disabled    |  boolean      |  false        | [Link](#property-disabled)                           |
| ripple      |  boolean      |  true         |[Link](#property-ripple)                              |
| secondary   |  boolean      |  false        |[Link](#property-property-secondary-raisedbutton-fab) |
| primary     |  boolean      |  false        |[Link](#property-primary-flatbutton)                  |
| mini        |  boolean      |  false        |[Link](#property-mini-fab)                            |

#### Property: 'disabled'
This property will disable the button
```html
<RaisedButton disabled>Button</RaisedButton>
<FlatButton disabled>Button</FlatButton>
<Fab disabled>+</Fab>
```

#### Property: 'ripple'
This property if set to false will remove the Ripple effect
```html
<RaisedButton ripple={false}>Button</RaisedButton>
<FlatButton ripple={false}>Button</FlatButton>
<Fab ripple={false}>+</Fab>
```

#### Property: 'secondary' [RaisedButton, Fab]
It will set the background to the 'secondary' color of the theme
```html
<RaisedButton secondary>Button</RaisedButton>
<Fab secondary>+</Fab>
```

#### Property: 'primary' [FlatButton]

It will set the color to the 'primary' color of the theme
```html
<FlatButton primary>Button</FlatButton>
```

#### Property: 'mini' [Fab]
It will reduce its size
```html
<Fab mini>+</Fab>
```