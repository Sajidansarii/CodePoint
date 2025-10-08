import { DessertIcon, Proportions } from "lucide-react";
import React from "react";

const CssReference = () => {
  const cssReferences = [
    {
      property: "color",
      values: "red | blue | #333 | rgb(255,0,0)",
      description: "It sets the color of the text.",
      example: "p { color: red; }"
    },
    {
      property: "background-color",
      values: "transparent | red | #000 | rgb(0,0,0)",
      description: "It defines the background color of the element.",
      example: "div { background-color: lightblue; }"
    },
    {
      property: "margin",
      values: "auto | 10px | 5% | 1em",
      description: "It defines the background color of the element..",
      example: "h1 { margin: 20px; }"
    },
    {
      property: "padding",
      values: "10px | 1em | 5% | inherit",
      description: "It sets the space inside the element.",
      example: "p { padding: 15px; }"
    },
    {
      property: "border",
      values: "1px solid black | none",
      description: "It styles the border of the element.",
      example: "div { border: 2px dashed red; }"
    },
    {
      property: "font-size",
      values: "16px | 1em | larger | smaller",
      description: "It sets the size of the text.",
      example: "p { font-size: 18px; }"
    }
  ];

  const dataA = [
    {Property:'accent-color', Description:'Specifies an accent color for user-interface controls'},
    {Property:'align-content', Description:'Specifies the alignment between the lines inside a flexible container when the items do not use all available space'},
    {Property:'align-items', Description:'Specifies the alignment for items inside a flexible container'},
    {Property:'align-self', Description:'Specifies the alignment for selected items inside a flexible container'},
    {Property:'all', Description:'Resets all properties (except unicode-bidi and direction)'},
    {Property:'animation', Description:'A shorthand property for all the animation-* properties'},
    {Property:'animation-delay', Description:'Specifies a delay for the start of an animation'},
    {Property:'animation-direction', Description:'Specifies whether an animation should be played forward, backward or in alternate cycles'},
    {Property:'animation-duration', Description:'Specifies how long an animation should take to complete one cycle'},
    {Property:'animation-fill-mode', Description:'Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both)'},
    {Property:'animation-iteration-count', Description:'Specifies the number of times an animation should be played'},
    {Property:'animation-name', Description:'Specifies a name for the @keyframes animation'},
    {Property:'animation-play-state', Description:'Specifies whether the animation is running or paused'},
    {Property:'animation-timing-function', Description:'Specifies the speed curve of an animation'},
    {Property:'aspect-ratio', Description:'Specifies preferred aspect ratio of an element'},
  ];

  const dataB = [
    {Property:'backdrop-filter', Description:'Defines a graphical effect to the area behind an element'},
    {Property:'backface-visibility', Description:'Defines whether or not the back face of an element should be visible when facing the user'},
    {property:'background', Description:'A shorthand property for all the background-* properties'},
    {Property:'background-attachment', Description:'Sets whether a background image scrolls with the rest of the page, or is fixed'},
    {Property:'background-blend-mode', Description:'Specifies the blending mode of each background layer (color/image)'},
    {Property:'background-clip', Description:'Defines how far the background (color or image) should extend within an element'},
    {Property:'background-color', Description:'Specifies the background color of an element'},
    {Property:'background-image', Description:'Specifies one or more background images for an element'},
    {Property:'background-origin', Description:'Specifies the origin position of a background image'},
    {Property:'background-position', Description:'Specifies the position of a background image'},
    {Property:'background-position-x', Description:'Specifies the position of a background image on x-axis'},
    {Property:'background-position-y', Description:'Specifies the position of a background image on y-axis'},
    {Property:'background-repeat', Description:'Sets if/how a background image will be repeated'},
    {Property:'background-size', Description:'Specifies the size of the background images'},
    {Property:'block-size', Description:'Specifies the size of an element in block direction'},
    {Property:'border', Description:'A shorthand property for border-width, border-style and border-color'},
    {Property:'border-block', Description:'A shorthand property for border-block-width, border-block-style and border-block-color'},
    {Property:'border-block-color', Description:'Sets the color of the borders at start and end in the block direction'},
    {Property:'border-block-end', Description:'A shorthand property for border-block-end-width, border-block-end-style and border-block-end-color'},
    {Property:'border-block-end-color', Description:'Sets the color of the border at the end in the block direction'},
    {Property:'border-block-end-style', Description:'Sets the style of the border at the end in the block direction'},
    {Property:'border-block-end-width', Description:'Sets the width of the border at the end in the block direction'},
    {Property:'border-block-start', Description:'A shorthand property for border-block-start-width, border-block-start-style and border-block-start-color'},
    {Property:'border-block-start-color', Description:'Sets the color of the border at the start in the block direction'},
    {Property:'border-block-start-style', Description:'Sets the style of the border at the start in the block direction'},
    {Property:'border-block-start-width', Description:'Sets the width of the border at the start in the block direction'},
    {Property:'border-block-style', Description:'Sets the style of the borders at start and end in the block direction'},
    {Property:'border-block-width', Description:'Sets the width of the borders at start and end in the block direction'},
    {Property:'border-bottom', Description:'A shorthand property for border-bottom-width, border-bottom-style and border-bottom-color'},
    {Property:'border-bottom-color', Description:'Sets the color of the bottom border'},
    {Property:'border-bottom-left-radius', Description:'Defines the radius of the border of the bottom-left corner'},
    {Property:'border-bottom-right-radius', Description:'Defines the radius of the border of the bottom-right corner'},
    {Property:'border-bottom-style', Description:'Sets the style of the bottom border'},
    {Property:'border-bottom-width', Description:'Sets the width of the bottom border'},
    {Property:'border-collapse', Description:'Sets whether table borders should collapse into a single border or be separated'},
    {Property:'border-color', Description:'Sets the color of the four borders'},
    {Property:'border-end-end-radius', Description:'Sets the radius of the corner between the block-end and the inline-end sides of the element'},
    {Property:'border-end-start-radius', Description:'Sets the radius of the corner between the block-end and the inline-start sides of the element'},
    {Property:'border-image', Description:'A shorthand property for all the border-image-* properties'},
    {Property:'border-image-outset', Description:'Specifies the amount by which the border image area extends beyond the border box'},
    {Property:'border-image-repeat', Description:'Specifies whether the border image should be repeated, rounded or stretched'},
    {Property:'border-image-slice', Description:'Specifies how to slice the border image'},
    {Property:'border-image-source', Description:'Specifies the path to the image to be used as a border'},
    {Property:'border-image-width', Description:'Specifies the width of the border image'},
    {Property:'border-inline', Description:'A shorthand property for border-inline-width, border-inline-style and border-inline-color'},
    {Property:'border-inline-color', Description:'Sets the color of the borders at start and end in the inline direction'},
    {Property:'border-inline-end', Description:'A shorthand property for border-inline-end-width, border-inline-end-style and border-inline-end-color'},
    {Property:'border-inline-end-color', Description:'Sets the color of the border at the end in the inline direction'},
    {Property:'border-inline-end-style', Description:'Sets the style of the border at the end in the inline direction'},
    {Property:'border-inline-end-width', Description:'Sets the width of the border at the end in the inline direction'},
    {Property:'border-inline-start', Description:'A shorthand property for border-inline-start-width, border-inline-start-style and border-inline-start-color'},
    {Property:'border-inline-start-color', Description:'Sets the color of the border at the start in the inline direction'},
    {Property:'border-inline-start-style', Description:'Sets the style of the border at the start in the inline direction'},
    {Property:'border-inline-start-width', Description:'Sets the width of the border at the start in the inline direction'},
    {Property:'border-inline-style', Description:'Sets the style of the borders at start and end in the inline direction'},
    {Property:'border-inline-width', Description:'Sets the width of the borders at start and end in the inline direction'},
    {Property:'border-left', Description:'A shorthand property for all the border-left-* properties'},
    {Property:'border-left-color', Description:'Sets the color of the left border'},
    {Property:'border-left-style', Description:'Sets the style of the left border'},
    {Property:'border-left-width', Description:'Sets the width of the left border'},
    {Property:'border-radius', Description:'A shorthand property for the four border-*-radius properties'},
    {Property:'border-right', Description:'A shorthand property for all the border-right-* properties'},
    {Property:'border-right-color', Description:'Sets the color of the right border'},
    {Property:'border-right-style', Description:'Sets the style of the right border'},
    {Property:'border-right-width', Description:'Sets the width of the right border'},
    {Property:'border-spacing', Description:'Sets the distance between the borders of adjacent cells'},
    {Property:'border-start-end-radius', Description:'Sets the radius of the corner between the block-start and the inline-end sides of the element'},
    {Property:'border-start-start-radius', Description:'Sets the radius of the corner between the block-start and the inline-start sides of the element'},
    {Property:'border-style', Description:'Sets the style of the four borders'},
    {Property:'border-top', Description:'A shorthand property for border-top-width, border-top-style and border-top-color'},
    {Property:'border-top-color', Description:'Sets the color of the top border'},
    {Property:'border-top-left-radius', Description:'Defines the radius of the border of the top-left corner'},
    {Property:'border-top-right-radius', Description:'Defines the radius of the border of the top-right corner'},
    {Property:'border-top-style', Description:'Sets the style of the top border'},
    {Property:'border-top-width', Description:'Sets the width of the top border'},
    {Property:'border-width', Description:'Sets the width of the four borders'},
    {Property:'bottom', Description:'Sets the elements position, from the bottom of its parent element'},
    {Property:'box-decoration-break', Description:'Sets the behavior of the background and border of an element at page-break, or, for in-line elements, at line-break.'},
    {Property:'box-reflect', Description:'The box-reflect property is used to create a reflection of an element.'},
    {Property:'box-shadow', Description:'Attaches one or more shadows to an element'},
    {Property:'box-sizing', Description:'Defines how the width and height of an element are calculated: should they include padding and borders, or not'},
    {Property:'break-after', Description:'Specifies whether or not a page-, column-, or region-break should occur after the specified element'},
    {Property:'break-before', Description:'Specifies whether or not a page-, column-, or region-break should occur before the specified element'},
    {Property:'break-inside', Description:'Specifies whether or not a page-, column-, or region-break should occur inside the specified element'},
  ];
  const dataC= [
    {Property:'caption-side', Description:'Specifies the placement of a table caption'},
    {Property:'caret-color', Description:'Specifies the color of the cursor (caret) in inputs, textareas, or any element that is editable'},
    {Property:'@charset', Description:'Specifies the character encoding used in the style sheet'},
    {Property:'clear', Description:'Specifies what should happen with the element that is next to a floating element'},
    {Property:'clip', Description:'Deprecated in favor of clip-path. Clips an absolutely positioned element'},
    {Property:'clip-path', Description:'Clips an element to a basic shape or to an SVG source'},
    {Property:'color', Description:'Sets the color of text'},
    {Property:'color-scheme', Description:'Indicates which operating system color scheme an element should render with'},
    {Property:'column-count', Description:'Specifies the number of columns an element should be divided into'},
    {Property:'column-fill', Description:'Specifies how to fill columns, balanced or not'},
    {Property:'column-gap', Description:'Specifies the gap between the columns'},
    {Property:'column-rule', Description:'A shorthand property for all the column-rule-* properties'},
    {Property:'column-rule-color', Description:'Specifies the color of the rule between columns'},
    {Property:'column-rule-style', Description:'Specifies the style of the rule between columns'},
    {Property:'column-rule-width', Description:'Specifies the width of the rule between columns'},
    {Property:'column-span', Description:'Specifies how many columns an element should span across'},
    {Property:'column-width', Description:'Specifies the column width'},
    {Property:'columns', Description:'A shorthand property for column-width and column-count'},
    {Property:'@container', Description:'Define styles for elements in container, depending on the container"s size or style'},
    {Property:'content', Description:'Used with the :before and :after pseudo-elements, to insert generated content'},
    {Property:'counter-increment', Description:'Increases or decreases the value of one or more CSS counters'},
    {Property:'counter-reset', Description:'Creates or resets one or more CSS counters'},
    {Property:'counter-set', Description:'Creates or sets one or more CSS counters'},
    {Property:'@counter-style', Description:'Lets you define your own counter styles'},
    {Property:'cursor', Description:'Specifies the mouse cursor to be displayed when pointing over an element'},
  ];

  const dataD = [
    {Property:'direction', Description:'Specifies the text direction/writing direction'},
    {Property:'display', Description:'Specifies how a certain HTML element should be displayed'},
  ];


  const dataE = [
    {Property:'empty-cells', Description:'Specifies whether or not to display borders and background on empty cells in a table'},
  ];

  const dataF=[
    {Property:'filter', Description:'Defines effects (e.g. blurring or color shifting) on an element before the element is displayed'},
    {Property:'flex', Description:'A shorthand property for the flex-grow, flex-shrink, and the flex-basis properties'},
    {Property:'flex-basis', Description:'Specifies the initial length of a flexible item'},
    {Property:'flex-direction', Description:'Specifies the direction of the flexible items'},
    {Property:'flex-flow', Description:'A shorthand property for the flex-direction and the flex-wrap properties'},
    {Property:'flex-grow', Description:"Specifies how much the item will grow relative to the rest"},
    {Property:'flex-shrink', Description:'Specifies how the item will shrink relative to the rest'},
    {Property:'flex-wrap', Description:'Specifies whether the flexible items should wrap or not'},
    {Property:'float', Description:'Specifies whether an element should float to the left, right, or not at all'},
    {Property:'font', Description:'A shorthand property for the font-style, font-variant, font-weight, font-size/line-height, and the font-family properties'},
    {Property:'@font-face', Description:'Specifies a custom font to use to display text'},
    {Property:'font-family', Description:'Specifies the font family for text'},
    {Property:'font-feature-settings', Description:'Allows control over advanced typographic features in OpenType fonts'},
    {Property:'font-kerning', Description:'Controls the usage of the kerning information (how letters are spaced)'},
    {Property:'font-language-override', Description:'Controls the usage of language-specific glyphs in a typeface'},
    {Property:'@font-palette-values', Description:'Allows you to customize the default values of a font-palette'},
    {Property:'font-size', Description:'Specifies the font size of text'},
    {Property:'font-size-adjust', Description:'Preserves the readability and size of text when fallback font occurs'},
    {Property:'font-stretch', Description:'Selects a normal, condensed, or expanded face from a font family'},
    {Property:'font-style', Description:"Specifies the font style for text"},
    {Property:'font-synthesis', Description:'Controls which missing typefaces (bold or italic) may be synthesized by the browser'},
    {Property:'font-variant', Description:'Specifies whether or not a text should be displayed in a small-caps font'},
    {Property:'font-variant-alternates', Description:'Controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values'},
    {Property:'font-variant-caps', Description:'Controls the usage of alternate glyphs for capital letters'},
    {Property:'font-variant-east-asian', Description:'Controls the usage of alternate glyphs for East Asian scripts (e.g Japanese and Chinese)'},
    {Property:'font-variant-ligatures', Description:'Controls which ligatures and contextual forms are used in textual content of the elements it applies to'},
    {Property:'font-variant-numeric', Description:'Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers'},
    {Property:'font-variant-position', Description:'Controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font'},
    {Property:'font-weight', Description:'Specifies the weight of a font'},
  ];

  const dataG = [
    {Property:'gap', Description:"A shorthand property for the row-gap and the column-gap properties"},
    {Property:'grid', Description:'A shorthand property for the grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and the grid-auto-flow properties'},
    {Property:'grid-area', Description:'Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties'},
    {Property:'grid-auto-columns', Description:'Specifies a default column size'},
    {Property:'grid-auto-flow', Description:"Specifies how auto-placed items are inserted in the grid"},
    {Property:'grid-auto-rows', Description:'Specifies a default row size'},
    {Property:'grid-column', Description:'A shorthand property for the grid-column-start and the grid-column-end properties'},
    {Property:'grid-column-end', Description:'Specifies where to end the grid item'},
    {Property:'grid-column-start', Description:'Specifies where to start the grid item'},
    {Property:'grid-row', Description:'A shorthand property for the grid-row-start and the grid-row-end properties'},
    {Property:'grid-row-end', Description:'Specifies where to end the grid item'},
    {Property:'grid-row-start', Description:'Specifies where to start the grid item'},
    {Property:'grid-template', Description:'A shorthand property for the grid-template-rows, grid-template-columns and grid-areas properties'},
    {Property:'grid-template-areas', Description:'Specifies how to display columns and rows, using named grid items'},
    {Property:'grid-template-columns', Description:'Specifies the size of the columns, and how many columns in a grid layout'},
    {Property:'grid-template-rows', Description:'Specifies the size of the rows in a grid layout'},
  ];

  const dataH = [
    {Property:'hanging-punctuation', Description:'Specifies whether a punctuation character may be placed outside the line box'},
    {Property:'height', Description:'Sets the height of an element'},
    {Property:'hyphens', Description:'Sets how to split words to improve the layout of text'},
    {Property:'hypenate-character', Description:'Sets the character used at the end of line, before a hyphenation break'},
  ];

  const dataI = [
    {Property:'image-rendering', Description:'Specifies the type of algorithm to use for image scaling'},
    {Property:'@import', Description:"Allows you to import a style sheet into another style sheet"},
    {Property:'initial-letter', Description:'Specifies the size of the initial-letter and optionally the number of lines the initial letter should sink (down in the text)'},
    {Property:'inline-size', Description:'Specifies the size of an element in the inline direction'},
    {Property:'inset', Description:'Specifies the distance between an element and the parent element'},
    {Property:'inset-block', Description:'Specifies the distance between an element and the parent element in the block direction'},
    {Property:'inset-block-end', Description:'Specifies the distance between the end of an element and the parent element in the block direction'},
    {Property:'inset-block-start', Description:'Specifies the distance between the start of an element and the parent element in the block direction'},
    {Property:'inset-inline', Description:'Specifies the distance between an element and the parent element in the inline direction'},
    {Property:'inset-inline-end', Description:'Specifies the distance between the end of an element and the parent element in the inline direction'},
    {Property:'inset-inline-start', Description:'Specifies the distance between the start of an element and the parent element in the inline direction'},
    {Property:'isolation', Description:'Defines whether an element must create a new stacking content'},
  ];

  const dataJ = [
    {Property:'ustify-content', Description:'Specifies the alignment between the items inside a flexible container when the items do not use all available space'},
    {Property:'justify-items', Description:'Is set on the grid container. Specifies the alignment of grid items in the inline direction'},
    {Property:'justify-self', Description:'Is set on the grid item. Specifies the alignment of the grid item in the inline direction'},
  ];

  const dataK = [ 
    {Property:'@keyframes', Description:'Controls the steps in an animation by defining styles for points along the animation sequence'},
  ];

  const dataL = [
    {Property:'@layer', Description:'Controls how the CSS cascade layers evaluates the order of styles'},
    {Property:'left', Description:'Specifies the left position of a positioned element'},
    {Property:'letter-spacing', Description:'Increases or decreases the space between characters in a text'},
    {Property:'line-break', Description:'Specifies how/if to break lines'},
    {Property:'line-height', Description:'Sets the line height'},
    {Property:'list-style', Description:'Sets all the properties for a list in one declaration'},
    {Property:'list-style-image', Description:'Specifies an image as the list-item marker'},
    {Property:'list-style-position', Description:'Specifies the position of the list-item markers (bullet points)'},
    {Property:'list-style-type', Description:'Specifies the type of list-item marker'},
  ];


  const dataM = [
       {Property:'margin', Description:'Sets all the margin properties in one declaration'},
       {Property:'margin-block', Description:'Specifies the margin in the block direction'},
       {Property:'margin-block-end', Description:'Specifies the margin at the end in the block direction'},
       {Property:'margin-block-start', Description:'Specifies the margin at the start in the block direction'},
       {Property:'margin-bottom', Description:'Sets the bottom margin of an element'},
       {Property:'margin-inline', Description:'Specifies the margin in the inline direction'},
       {Property:'margin-inline-end', Description:'Specifies the margin at the end in the inline direction'},
       {Property:'margin-inline-start', Description:'Specifies the margin at the start in the inline direction'},
       {Property:'margin-left', Description:'Sets the left margin of an element'},
       {Property:'margin-right', Description:'Sets the right margin of an element'},
       {Property:'margin-top', Description:'Sets the top margin of an element'},
       {Property:'marker', Description:'Points to a marker that will be drawn on all vertices of an element"s path (the first, middle, and last)'},
       {Property:'marker-end', Description:'Points to a marker that will be drawn on the last vertex of an element"s path'},
       {Property:'marker-mid', Description:'Points to a marker that will be drawn on all the middle vertices of an element"s path'},
       {Property:'marker-start', Description:'Points to a marker that will be drawn on the first vertex of an element"s path'},
       {Property:'mask', Description:'A shorthand property for mask-image, mask-mode, mask-repeat, mask-position, mask-clip, mask-origin, mask-size and mask-composite'},
       {Property:'mask-clip', Description:'Specifies which area is affected by a mask image'},
       {Property:'mask-composite', Description:'Specifies a compositing operation used on the current mask layer with the mask layers below it'},
       {Property:'mask-image', Description:'Specifies an image to be used as a mask layer for an element'},
       {Property:'mask-mode', Description:'Specifies whether the mask layer image is treated as a luminance mask or as an alpha mask'},
       {Property:'mask-origin', Description:'Specifies the origin position (the mask position area) of a mask layer image'},
       {Property:'mask-position', Description:'Sets the starting position of a mask layer image (relative to the mask position area)'},
       {Property:'mask-repeat', Description:'Specifies how the mask layer image is repeated'},
       {Property:'mask-size', Description:'Specifies the size of a mask layer image'},
       {Property:'mask-type', Description:'Specifies whether an SVG <mask> element is treated as a luminance mask or as an alpha mask'},
       {Property:'max-height', Description:'Sets the maximum height of an element'},
       {Property:'max-width', Description:'Sets the maximum width of an element'},
       {Property:'@media', Description:'Sets the style rules for different media types/devices/sizes'},
       {Property:'max-block-size', Description:'Sets the maximum size of an element in the block direction'},
       {Property:'max-inline-size', Description:'Sets the maximum size of an element in the inline direction'},
       {Property:'min-block-size', Description:'Sets the minimum size of an element in the block direction'},
       {Property:'min-inline-size', Description:'Sets the minimum size of an element in the inline direction'},
       {Property:'min-height', Description:'Sets the minimum height of an element'},
       {Property:'min-width', Description:'Sets the minimum width of an element'},
       {Property:'mix-blend-mode', Description:'Specifies how an element"s content should blend with its direct parent background'},    
  ];

  const dataN = [
    {Property:'@namespace', Description:'Defines an XML namespace to be used in the style sheet'},
  ];

  const dataO = [
    {Property:'object-fit', Description:'Specifies how the contents of a replaced element should be fitted to the box established by its used height and width'},
    {Property:'object-position', Description:'Specifies the alignment of the replaced element inside its box'},
    {Property:'offset', Description:'A shorthand property for the offset-anchor, offset-distance, offset-path, offset-position, and the offset-rotate properties'},
    {Property:'offset-anchor', Description:'Specifies a point on an element that is fixed to the path it is animated along'},
    {Property:'offset-distance', Description:'Specifies the position along a path where an animated element is placed'},
    {Property:'offset-path', Description:'Specifies the path an element is animated along'},
    {Property:'offset-position', Description:'Specifies the initial position of an element along a path'},
    {Property:'offset-rotate', Description:'Specifies rotation of an element as it is animated along a path'},
    {Property:'opacity', Description:'Sets the opacity level for an element'},
    {Property:'order', Description:'Sets the order of the flexible item, relative to the rest'},
    {Property:'orphans', Description:'Sets the minimum number of lines that must be left at the bottom of a page or column'},
    {Property:'outline', Description:'A shorthand property for the outline-width, outline-style, and the outline-color properties'},
    {Property:'outline-color', Description:'Sets the color of an outline'},
    {Property:'outline-offset', Description:'Offsets an outline, and draws it beyond the border edge'},
    {Property:'outline-style', Description:'Sets the style of an outline'},
    {Property:'outline-width', Description:'Sets the width of an outline'},
    {Property:'overflow', Description:'Specifies what happens if content overflows an element"s box'},
    {Property:'overflow-anchor', Description:'Specifies whether or not content in viewable area in a scrollable contianer should be pushed down when new content is loaded above'},
    {Property:'overflow-wrap', Description:'Specifies whether or not the browser can break lines with long words, if they overflow the container'},
    {Property:'overflow-x', Description:'Specifies whether or not to clip the left/right edges of the content, if it overflows the element"s content area'},
    {Property:'overflow-y', Description:'Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element"s content area'},
    {Property:'overscroll-behavior', Description:'Specifies whether to have scroll chaining or overscroll affordance in x- and y-directions'},
    {Property:'overscroll-behavior-block', Description:'Specifies whether to have scroll chaining or overscroll affordance in the block direction'},
    {Property:'overscroll-behavior-inline', Description:'Specifies whether to have scroll chaining or overscroll affordance in the inline direction'},
    {Property:'overscroll-behavior-x', Description:'Specifies whether to have scroll chaining or overscroll affordance in x-direction'},
    {Property:'overscroll-behavior-y', Description:'Specifies whether to have scroll chaining or overscroll affordance in y-directions'},
  ];

  const dataP = [
    {Property:'padding', Description:'A shorthand property for all the padding-* properties'},
    {Property:'padding-block', Description:'Specifies the padding in the block direction'},
    {Property:'padding-block-end', Description:'Specifies the padding at the end in the block direction'},
    {Property:'padding-block-start', Description:'Specifies the padding at the start in the block direction'},
    {Property:'padding-bottom', Description:'Sets the bottom padding of an element'},
    {Property:'padding-inline', Description:'Specifies the padding in the inline direction'},
    {Property:'padding-inline-end', Description:'Specifies the padding at the end in the inline direction'},
    {Property:'padding-inline-start', Description:'Specifies the padding at the start in the inline direction'},
    {Property:'padding-left', Description:'Sets the left padding of an element'},
    {Property:'padding-right', Description:'Sets the right padding of an element'},
    {Property:'padding-top', Description:'Sets the top padding of an element'},
    {Property:'@page', Description:'Customizes the dimension, orientation, and margins of printed pages'},
    {Property:'page-break-after', Description:'Sets the page-break behavior after an element. Replaced by break-after property'},
    {Property:'page-break-before', Description:'Sets the page-break behavior before an element. Replaced by break-before property'},
    {Property:'page-break-inside', Description:'Sets the page-break behavior inside an element. Replaced by break-inside property'},
    {Property:'paint-order', Description:'Sets the order of how an SVG element or text is painted.'},
    {Property:'perspective', Description:'Gives a 3D-positioned element some perspective'},
    {Property:'perspective-origin', Description:'Defines at which position the user is looking at the 3D-positioned element'},
    {Property:'place-content', Description:'Specifies align-content and justify-content property values for flexbox and grid layouts'},
    {Property:'place-items', Description:'Specifies align-items and justify-items property values for grid layouts'},
    {Property:'place-self', Description:'Specifies align-self and justify-self property values for grid layouts'},
    {Property:'pointer-events', Description:'Defines whether or not an element reacts to pointer events'},
    {Property:'position', Description:'Specifies the type of positioning method used for an element (static, relative, absolute or fixed)'},
    {Property:'@property', Description:'Defines custom CSS properties directly in the stylesheet without having to run any JavaScript'},
  ];

  const dataQ = [
    {Property:'quotes', Description:'Sets the type of quotation marks for embedded quotations'},
  ];

  const dataR = [
    {Property:'resize', Description:'Defines if (and how) an element is resizable by the user'},
    {Property:'right', Description:'Specifies the right position of a positioned element'},
    {Property:'rotate', Description:'Specifies the rotation of an element'},
    {Property:'row-gap', Description:'Specifies the gap between the grid rows'},
  ];

  const dataS = [
    {Property:'scale', Description:'Specifies the size of an element by scaling up or down'},
    {Property:'@scope', Description:'Allows you to select elements in specific DOM subtrees and target elements precisely without writing overly-specific selectors'},
    {Property:'scroll-behavior', Description:'Specifies whether to smoothly animate the scroll position in a scrollable box, instead of a straight jump'},
    {Property:'scroll-margin', Description:'Specifies the margin between the snap position and the container'},
    {Property:'scroll-margin-block', Description:'Specifies the margin between the snap position and the container in the block direction'},
    {Property:'scroll-margin-block-end', Description:'Specifies the end margin between the snap position and the container in the block direction'},
    {Property:'scroll-margin-block-start', Description:'Specifies the start margin between the snap position and the container in the block direction'},
    {Property:'scroll-margin-bottom', Description:'Specifies the margin between the snap position on the bottom side and the container'},
    {Property:'scroll-margin-inline', Description:'Specifies the margin between the snap position and the container in the inline direction'},
    {Property:'scroll-margin-inline-end', Description:'Specifies the end margin between the snap position and the container in the inline direction'},
    {Property:'scroll-margin-inline-start', Description:'Specifies the start margin between the snap position and the container in the inline direction'},
    {Property:'scroll-margin-left', Description:'Specifies the margin between the snap position on the left side and the container'},
    {Property:'scroll-margin-right', Description:'Specifies the margin between the snap position on the right side and the container'},
    {Property:'scroll-margin-top', Description:'Specifies the margin between the snap position on the top side and the container'},
    {Property:'scroll-padding', Description:'Specifies the distance from the container to the snap position on the child elements'},
    {Property:'scroll-padding-block', Description:'Specifies the distance in block direction from the container to the snap position on the child elements'},
    {Property:'scroll-padding-block-end', Description:'Specifies the distance in block direction from the end of the container to the snap position on the child elements'},
    {Property:'scroll-padding-block-start', Description:'Specifies the distance in block direction from the start of the container to the snap position on the child elements'},
    {Property:'scroll-padding-bottom', Description:'Specifies the distance from the bottom of the container to the snap position on the child elements'},
    {Property:'scroll-padding-inline', Description:'Specifies the distance in inline direction from the container to the snap position on the child elements'},
    {Property:'scroll-padding-inline-end', Description:'Specifies the distance in inline direction from the end of the container to the snap position on the child elements'},
    {Property:'scroll-padding-inline-start', Description:'Specifies the distance in inline direction from the start of the container to the snap position on the child elements'},
    {Property:'scroll-padding-left', Description:'Specifies the distance from the left side of the container to the snap position on the child elements'},
    {Property:'scroll-padding-right', Description:'Specifies the distance from the right side of the container to the snap position on the child elements'},
    {Property:'scroll-padding-top', Description:'Specifies the distance from the top of the container to the snap position on the child elements'},
    {Property:'scroll-snap-align', Description:'Specifies where to position elements when the user stops scrolling'},
    {Property:'scroll-snap-stop', Description:'Specifies scroll behaviour after fast swipe on trackpad or touch screen'},
    {Property:'scroll-snap-type', Description:'Specifies how snap behaviour should be when scrolling'},
    {Property:'scrollbar-color', Description:'Specifies the color of the scrollbar of an element'},
    {Property:'shape-outside', Description:'Defines a shape for wrapping for the inline content'},
    {Property:'@starting-style', Description:'Defines an element"s starting styles before the element gets its first style update'},
    {Property:'@supports', Description:'Used to test whether a browser supports a CSS feature'},
  ];

  const dataT = [
    {Property:'tab-size', Description:'Specifies the width of a tab character'},
    {Property:'table-layout', Description:'Defines the algorithm used to lay out table cells, rows, and columns'},
    {Property:'text-align', Description:'Specifies the horizontal alignment of text'},
    {Property:'text-align-last', Description:'Describes how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"'},
    {Property:'text-combine-upright', Description:'Specifies the combination of multiple characters into the space of a single character'},
    {Property:'text-decoration', Description:'Specifies the decoration added to text'},
    {Property:'text-decoration-color', Description:'Specifies the color of the text-decoration'},
    {Property:'text-decoration-line', Description:'Specifies the type of line in a text-decoration'},
    {Property:'text-decoration-style', Description:'Specifies the style of the line in a text decoration'},
    {Property:'text-decoration-thickness', Description:'Specifies the thickness of the decoration line'},
    {Property:'text-emphasis', Description:'A shorthand property for the text-emphasis-style and text-emphasis-color properties'},
    {Property:'text-emphasis-color', Description:'Specifies the color of emphasis marks'},
    {Property:'text-emphasis-position', Description:'Specifies the position of emphasis marks'},
    {Property:'text-emphasis-style', Description:'Specifies the style of emphasis marks'},
    {Property:'text-indent', Description:'Specifies the indentation of the first line in a text-block'},
    {Property:'text-justify', Description:'Specifies the justification method used when text-align is "justify"'},
    {Property:'text-orientation', Description:'Defines the orientation of characters in a line'},
    {Property:'text-overflow', Description:'Specifies what should happen when text overflows the containing element'},
    {Property:'text-shadow', Description:'Adds shadow to text'},
    {Property:'text-transform', Description:'Controls the capitalization of text'},
    {Property:'text-underline-offset', Description:'Specifies the offset distance of the underline text decoration'},
    {Property:'text-underline-position', Description:'	Specifies the position of the underline text decoration'},
    {Property:'top', Description:'Specifies the top position of a positioned element'},
    {Property:'transform', Description:'Applies a 2D or 3D transformation to an element'},
    {Property:'transform-origin', Description:'Allows you to change the position on transformed elements'},
    {Property:'transform-style', Description:'Specifies how nested elements are rendered in 3D space'},
    {Property:'transition', Description:'A shorthand property for all the transition-* properties'},
    {Property:'transition-delay', Description:'Specifies when the transition effect will start'},
    {Property:'transition-duration', Description:'Specifies how many seconds or milliseconds a transition effect takes to complete'},
    {Property:'transition-property', Description:'Specifies the name of the CSS property the transition effect is for'},
    {Property:'transition-timing-function', Description:'Specifies the speed curve of the transition effect'},
    {Property:'translate', Description:'Specifies the position of an element'},
  ];

  const dataU = [
    {Property:'unicode-bidi', Description:'Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document'},
    {Property:'user-select', Description:'Specifies whether the text of an element can be selected'},
  ];

  const dataV = [
    {Property:'vertical-align', Description:'Sets the vertical alignment of an element'},
    {Property:'visibility', Description:'Specifies whether or not an element is visible'},
  ];

  const dataW = [
    {Property:'white-space', Description:'Specifies how white-space inside an element is handled'},
    {Property:'widows', Description:'	Sets the minimum number of lines that must be left at the top of a page or column'},
    {Property:'width', Description:'Sets the width of an element'},
    {Property:'word-break', Description:'Specifies how words should break when reaching the end of a line'},
    {Property:'word-spacing', Description:'Increases or decreases the space between words in a text'},
    {Property:'word-wrap', Description:'Allows long, unbreakable words to be broken and wrap to the next line'},
    {Property:'writing-mode', Description:'Specifies whether lines of text are laid out horizontally or vertically'},
  ];

  const dataZ = [
    {Property:'z-index', Description:'Sets the stack order of a positioned element'},
    {Property:'zoom', Description:'Specifies the zoom factor for an element. An element can be zoomed in and out'},
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-medium text-blue-500 mb-4">CSS Reference</h2>
      <p className="mb-6 text-gray-700">
       A CSS Reference is a quick guide that provides a summary of commonly used CSS properties and their values. It gives developers a fast lookup when they need to recall the syntax or values of a property.
      </p>

      <h1 className="text-2xl">CSS Properties</h1>
      <p className="text-2xl font-semibold mt-5 mb-2">A</p>

      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataA.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

      
      <p className="text-2xl font-semibold mt-5 mb-2">B</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataB.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>



      <p className="text-2xl font-semibold mt-5 mb-2">C</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataC.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>



       <p className="text-2xl font-semibold mt-5 mb-2">D</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataD.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

       <p className="text-2xl font-semibold mt-5 mb-2">E</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataE.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>


      <p className="text-2xl font-semibold mt-5 mb-2">F</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataF.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

       <p className="text-2xl font-semibold mt-5 mb-2">G</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataG.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

       <p className="text-2xl font-semibold mt-5 mb-2">H</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataH.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>


       <p className="text-2xl font-semibold mt-5 mb-2">I</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataI.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>


       <p className="text-2xl font-semibold mt-5 mb-2">J</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataJ.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>


       <p className="text-2xl font-semibold mt-5 mb-2">K</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataK.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>


       <p className="text-2xl font-semibold mt-5 mb-2">L</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataL.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>


        <p className="text-2xl font-semibold mt-5 mb-2">M</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataM.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

       <p className="text-2xl font-semibold mt-5 mb-2">N</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataN.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>


      <p className="text-2xl font-semibold mt-5 mb-2">O</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataO.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

        <p className="text-2xl font-semibold mt-5 mb-2">P</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataP.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

        <p className="text-2xl font-semibold mt-5 mb-2">Q</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataQ.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

       <p className="text-2xl font-semibold mt-5 mb-2">R</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataR.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

       <p className="text-2xl font-semibold mt-5 mb-2">S</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataS.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

      <p className="text-2xl font-semibold mt-5 mb-2">T</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataT.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

       <p className="text-2xl font-semibold mt-5 mb-2">U</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataU.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

       <p className="text-2xl font-semibold mt-5 mb-2">V</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataV.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

       <p className="text-2xl font-semibold mt-5 mb-2">W</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataW.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>

       <p className="text-2xl font-semibold mt-5 mb-2">Z</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {dataZ.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
      </table>





































      {/* CSS Reference List */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {cssReferences.map((ref, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600">
              {ref.property}
            </h3>
            <p className="text-sm text-gray-600">
              <b>Values:</b> {ref.values}
            </p>
            <p className="text-gray-700 mt-1">{ref.description}</p>
            <pre className="bg-black text-green-400 p-2 rounded-lg mt-2 text-sm overflow-x-auto">
              {ref.example}
            </pre>
          </div>
        ))}
      </div>

     
      {/* Explanation */}
      <p className="mt-4">
       In this example, a paragraph is given blue text, 18px font size, margin and padding, along with a black border and a light yellow background. These properties are the basic building blocks of CSS.
      </p>
    </div>
  );
};

export default CssReference;