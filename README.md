# Tiny Docs Project Documentation (Frontend)
The project was developed using the [Next.js](https://nextjs.org/docs) framework.

## Setup
After cloning the project, run the following command to start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to begin browsing the project.

## Project Structure
### Image Assets
All images are stored in the ```assets\images``` directory, which are composed of the following file types:
- .png
- .svg
- .webp

### Components
The directory names in the components directory correspond to their respective page names in the pages directory.  Component scripts inside those directories are generally used for their respective pages.  The only exceptions are the following below:

#### Form
Contains the ```Input(text field)``` and ```Select(dropdown)``` components. Mainly used for form creation.

#### Global
The following are global components located in ```components\global``` directory:


> **Advisors.js** - Unknown

> **BackToTopButton.js** - Lets the user scroll back to the top of the page on button click.

> **Banner.js** - Used on pages that have a similar banner layout, which is composed of a hero image, button, wave background, hero title, and hero text.

> **BannerPricing.js** - Used specifically for the Marketing page (pricing), contains a wave background, swiper and buttons for the Play, Videos, Blog, and Learn buttons.

> **Button.js** - The standard primary button component.  Also used as the foundation for other button variants with different styling.

> **CategoryTabs.js/CategoryTabsSmall.js** - The button group that include Videos, Play, Learn, and Blog button.  The small version is used in the parents landing page while the normal version is used for the kids videos and other kids pages.  The difference is that the normal version is bigger and has their respective icons.

> **Fab.js** - A button component that only displays an icon.

> **index.js** - Used for component management and allows for a more consolidated method of importing global components.

> **Knob.js** - An animated knob that relies on the scroll bar's current position to spin around.  Initially, it renders with a randomized rotation value.

> **Loading.js** - The loading overlay that can also function as a page, if needed.

> **Plans.js** - Displays the pricing plans.  Mainly shown after sign up and in the pricing page.

> **Story.js** - The "Our Story" component displayed in the "About Us" page. 

> **Team.js** - Shows a list of team members of Tiny Docs (name and position), along with their photo and a link to their Twitter account.

> **Testimonials.js** - Shows a swiper section of testimonials.

> **Testimony.js** - The individual component that displays a testimony.

> **Video.js** - A video entry that displays the name, thumbnail, and video length.  Redirects to video player page on click.

> **Wave.js** - A component that displays a waved edge background as an SVG path.  Used for sections where the design includes waved edges (e.g. banners).

#### Layout
Contains the Header, Footer, and Index file that the website uses to display both components.

### Pages
All pages are organized into their own respective directories and their base code is stored in the  ```index.js``` script.  Additionally, the directory also contains the ```api``` folder where the backend is being called from.

### Public
Contains the favicon.ico file.

### Services
Contains the ```firebase.js``` script that handles Firebase APIs.

### Styles
All styles are consolidated into this directory and are split into their respective sub-directories.  [Sass](https://sass-lang.com/) is used to handle the styling.

> **main.scss** - Handles the importing of all Sass scripts.  All Sass scripts in each sub-directory are listed here for them to be used in the project.

> **Base** - Contains the base, fonts, and typography Sass scripts.

> **Components** - Styles of components found mainly in the components root directory.

> **Layout** - Includes the styles of the header, footer, forms, banner, and other components commonly referred to as layouts (section prefixes are refer to components located in the Components root directory).

> **Pages** - Includes styles exclusively for specific pages.  Styles for overriding individual components' default styles may be included in some scripts.

> **Utils** - Core styles, variables, functions, transitions, and mixins are located in this directory.

## APIs
As mentioned earlier above, the ```API``` directory is located in the ```pages``` root directory.  The sub-directories are as follows:

> **Firebase** - This directory contains APIs that handle the website's authentication process (Firebase Authentication).

> **Locations** - Contains APIs to get the updated countries and states.

> **Stripe** - Contains APIs that utilize Stripe.  The "subscription" sub-directory contains the APIs that handle the checkout form and coupon validation.  The "users" sub-directory contains APIs that handles user information (CRUD).

## React Transition Group
The project uses the [react-transition-group](https://reactcommunity.org/react-transition-group/) package.  All CSS transition classes are located in the `directory styles\utils\_transitions.scss`.

## React Cookie
The project uses the [react-cookie](https://www.npmjs.com/package/react-cookie) package to handle user's data as cookies.  Primarily used with the project's respective APIs.

# Other Frontend Dependencies
* [Clsx](https://www.npmjs.com/package/clsx)
* [React Credit Card Input](https://www.npmjs.com/package/react-credit-card-input)
* [React DOM](https://reactjs.org/docs/react-dom.html)
* [React Hook Form](https://react-hook-form.com/api)
* [React Cookie](https://www.npmjs.com/package/react-cookie)
* [React Transition Group](https://reactcommunity.org/react-transition-group/)
* [Sass](https://sass-lang.com/)
* [Styled Components](https://styled-components.com/)
* [Swiper](https://swiperjs.com/swiper-api)