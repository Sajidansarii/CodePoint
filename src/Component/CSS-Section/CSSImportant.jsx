import React from "react";

const ImportantExample = () => {
  return (
    <div className="p-6 space-y-4 font-sans">
      <h1 className="text-3xl mb-5 font-medium text-blue-500">CSS !important Rule</h1>
      
      <>
      The !important rule in CSS is used to give a CSS property the highest priority, overriding any other declarations for the same property, regardless of specificity or source order.
      </>
      
      <p>
                  This can be useful in certain situations where you need to make sure a style is always applied, but it should be used sparingly, as it can make your CSS harder to maintain and debug.
         </p>
      
      <div className="bg-gray-200 p-4 rounded-lg mt-5">
        <pre>
          {`selector {
   property: value !important; 
}`}
        </pre>
      </div>
      <h1 className="text-2xl">What is CSS !important Rule?</h1>
      <p>The exclamation mark (!) followed directly by the word important (i.e., !important) is used in CSS to give a style declaration the highest priority, overriding any other declarations for the same property, regardless of specificity or source order.</p>
      <p>The !important rule overrides all other declarations of the same property, regardless of CSS specificity. We'll cover specificity in more detail later in this tutorial.</p>
      <p>If multiple selectors use important keyword for a property, then the selector with high specificity will be considered to be applied.</p>

      <h1 className="text-2xl">Specificity in CSS</h1>
      <p>Specificity in CSS determines which styles take precedence when multiple rules target the same element. In general, inline styles have the highest priority, followed by ID selectors, then class selectors (including attributes and pseudo-classes), and finally element (type) selectors.</p>

      <div className="bg-gray-200 p-4 rounded-lg">
        <pre>
          {`p {
  color: black;
}

/* Override the above style, Class have higher specificity */
p.special {
  color: blue;
}

/* Using !important to force an override */
p {
  color: red !important;
}`}
        </pre>
      </div>
      <p>The above declaration sets the text color of the paragraph to red. The style applied by the element selector is overridden by the class selector, which is then overridden by the !important rule.</p>
      <p>Keep in mind that while !important can be useful in certain situations, it should be used sparingly. Overusing !important can make your CSS harder to maintain and debug. It's best to rely on proper CSS structure and specificity to manage styles effectively, reserving !important for truly exceptional cases.</p>

      <h1 className="text-2xl">CSS !important Rule Example</h1>
      <p>The following example demonstrates the use of '!important' which we saw above.</p>
      <h1 className="text-2xl">Example</h1>
      <div className="bg-gray-200 p-4 rounded-lg">
        <pre>
          {`<!DOCTYPE html> 
<html>

<head>
    <style>
        /* Element Selector Styles */
        p {
            color: black;
            font-weight: bold;
        }

        /* Using !important to force a color override */
        p {
            color: red !important;
        }
    </style>
</head>

<body>
    <p> 
        This paragraph will be red. Because the style of element 
        selector is overridden by important keyword.
    </p>
</body>

</html>`}
        </pre>
      </div>
      <h1>CSS !important and Specificity</h1>
      <p>According to CSS specificity rules, inline styles have the highest priority, followed by ID selectors, then class selectors, and finally element selectors. This means that styles applied using element selectors can be overridden by class selectors, which can be further overridden by ID selectors and, ultimately, by inline styles.</p>
      <p>The following example uses multiple selectors to apply the color property to a paragraph. However, the style defined using the element selector with the !important keyword is ultimately applied to the paragraph.</p>

      <h1 className="text-2xl">Example</h1>
      <div className="bg-gray-200 rounded-lg p-4">
        <pre>
          {`<!DOCTYPE html> 
<html>

<head>
    <style>
        /*Multiple selectors for paragraph */
        p {
            color: black;
            font-weight: bold;
        }

        .special {
            color: blue;
        }

        #unique {
            color: darkgreen;
        }`}
        </pre>
      </div>


      <h1 className="text-2xl">Override Inline Styles</h1>
      <p>Inline styles have the highest specificity in CSS and usually take priority over any selector. However, the !important keyword can even override inline styles. Let’s look at an example to understand this better.</p>
      <h1 className="text-2xl">Example</h1>
      <div className="bg-gray-200 p-4 rounded-lg">
        <pre>
          {`<!DOCTYPE html> 
<html>

<head>
    <style>
            p {
                color: black !important; 
                font-weight: bold;
            }
    </style>
</head>

<body>
    <p style="color:red">
        Paragraph is black. Inline style is overridden by 
        important keyword
    </p>
</body>

</html>`}
        </pre>
      </div>

      <h1 className="text-2xl">Multiple Important Keyword</h1>
      <p>When multiple !important declarations are applied to the same CSS property using different selectors, the declaration within the selector with the highest specificity takes effect. Let’s look at an example to see how this works.</p>
      <h1 className="text-2xl">Example</h1>
      <div className="bg-gray-200 rounded-lg p-4">
        <pre>
          {`<!DOCTYPE html> 
<html>

<head>
    <style>
        /*Multiple selectors for paragraph */
        p {
            color: black !important;
            font-weight: bold;
        }

        .special {
            color: blue !important;
        }

        #unique {
            color: darkgreen !important;
        }

        p {
            color: red !important;
        }
    </style>
</head>

<body>
    <p id="unique" class="special">
        This paragraph will be darkgreen. Since important keyword 
        is present at every selectors, high priority selector 
        will be chosen. In this case it is id "#unique"
    </p>
</body>

</html>`}
        </pre>
      </div>

      <h1 className="text-2xl">CSS !important for Custom Properties</h1>
      <p>When you add !important to a custom property, it indicates that the custom property's value should take priority. However, the !important flag itself is not included when the custom property is accessed using the var() function.</p>
      <h1 className="text-2xl">Example</h1>

      <div className="bg-gray-200 rounded-lg p-4">
        <pre>
          {`<!DOCTYPE html> 
<html>

<head>
    <style>
        :root {
            --primary-color: blue !important;
            --primary-color: red ;
        }

        .box {
            background-color: var(--primary-color) ;
            width: 200px;
            height: 200px;
        }
        p {
            color: var(--primary-color);
        }
    </style>
</head>

<body>
    <div class="box"> </div>
    <p> Primary Color variable is Blue </p>
</body>

</html>`}
        </pre>
      </div>

      <h1 className="text-2xl">CSS !important on Shorthand Properties</h1>
      <p>When you use !important with a shorthand property in CSS, the importance is applied to all of its individual longhand properties. In effect, each sub-property inherits the !important flag. The following examples produce the same result.</p>
      <h1 className="text-2xl">Example</h1>
      <div className="bg-gray-200 rounded-lg p-4">
        <pre>
          {`<!DOCTYPE html> 
<html>

<head>
    <style>
        p {
            /* Applies to all */
            font: 15px Arial, sans-serif !important;
        }
    </style>
</head>

<body>
    <p style="font-size: 100px;">
        The font will set as per in CSS declaration. The font size of 
        100px will not be applied because important keyword is used 
        for shorthand property font. 
    </p>
</body>

</html>`}
        </pre>
      </div>


    </div>
  );
};

export default ImportantExample;