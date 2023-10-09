import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {

  /* Width && Height */
    --width-description: 80%;
    --width-full-window: 100%;
    --width-half-window: 45vw;
    --width-filled-window: 100vw;
    --width-filled-window: 100vw;


    --height-full-window: 80vh;
    --height-filled-window: 100vh;
    --height-percentage-window: 100%;

    --height-row: 10rem;


  /* Backrounds */
  --background-primary: #ebdac4;
  --background-secondary: #f7ead9;
  --background-tile: #fff5e8;



  /* Colors */
  --color-red: #991b1b;
  --color-black: #070606;
  --color-white: #ffff;
  --color-tan: #f7ead9;

  /* Text Size */
  --font-xsmall: 1.25rem;
  --font-small: 2rem;
  --font-medium: 3rem;
  --font-large: 4rem;


      /* Margin */
    --margin-xsmall: 0.5rem;
    --margin-small: 1rem;
    --margin-medium: 2rem;
    --margin-large: 3rem;

    --margin-nav-height: 8rem;


    /* Padding */
    --padding-xxsmall: 0.25rem;
    --padding-xsmall: 0.75rem;
    --padding-small: 1.25rem;
    --padding-medium: 2rem;
    --padding-large: 3rem;
    --padding-xlarge: 7rem;


    --padding-header:0.5rem 1rem;

    /* Gap */
    --gap-small: 1rem;
    --gap-medium: 2rem;

    /* Image Sizes */
    --image-small: 8rem;
    --image-medium: 12.5rem;
    --image-large: 30rem;

    /* Border Radius */
    --border-tag:2rem;
    --border-footer: 1.5rem 1rem 0 0;

    /* Box Shadows */
    --shadow-container: 0 5.4rem 8.2rem rgba(0, 0, 0, 0.12);

    /* Z-Indexes */
    --z-top: 9999;
    --z-second: 9998;
    --z-third: 9997;


    


  


  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;


  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Bebas Neue', sans-serif;


  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}



input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid gray;
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
