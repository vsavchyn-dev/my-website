![hero](example/hero.png)

# Portfolio using React.js and Chakra UI

This portfolio is built using React.js and Chakra UI. It allows me to quickly create and customize my portfolio website using markdown files.

|    ![experience](example/Experience.gif)    | ![projects](example/Projects.gif) |
| :-----------------------------------------: | :-------------------------------: |
|       Document your work experiences        |    Showcase your best projects    |
| ![otherprojects](example/OtherProjects.gif) |   ![mobile](example/Mobile.gif)   |
|        Include your smaller projects        |     Mobile-responsive design      |

## Getting Started

To get started with development, you can use the following commands:

```
# Install dependencies
yarn install

# Start the development server
yarn start

# Build the static files
yarn build
```

After running `yarn start`, your website should be available at `http://localhost:3000`.

## Site Name

To edit the site name, go to `public/index.html` and change the `<title>`

```
<title>Site Name</title>
```

## Editing Content

To edit the content on your website, refer to the markdown files located in the `public/content` folder.

### Profile.md

```
## Header
- Hi, my name is ______.
- I'm a ______.
- Short Description Here.

## About
Write your "About" section here.

## Contact
Write your "Contact" section here.
- LinkedIn: https://linkedin.com/in/username
- GitHub: https://github.com/username
- Email: username@gmail.com

## Logo
- EB
```

### ExperienceTags.md and ProjectsTags.md

```
Category 1
Category 2
Category 3
```

### Experience.md

To edit your work experience, update the `Experience.md` file with the following format:

```
## Company Name
- *Role* | Period
- ![image_name](../assets/image_name.png)
- Tags: Work
- Badges:
  - BadgeContent [badge_colour]
- List Items:
  - Point 1
  - Point 2
```

### Projects.md

To edit your projects, update the `Projects.md` file with the following format:

```
## Project Name
Description
- ![image_name](../assets/image_name.png)
- Tags: WebDev
- Badges:
  - BadgeContent [badge_colour]
- Buttons:
  - ButtonContent [button_link]
```

### OtherProjects.md

To edit other projects or items, update the `OtherProjects.md` file with the following format:

```
## Project Name
Description
- Tags: WebDev
- Badges:
  - BadgeContent [badge_colour]
- Buttons:
  - ButtonContent [button_link]
```

## Colour Theme

You can choose from 10 different colours provided by Chakra UI. Modify the `color` variable in the `App.js` file located in the `src` folder.

```
// Available Colours:
// blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

const color = "red";
```

