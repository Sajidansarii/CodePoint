import React from "react";
import { DefaultContext } from "react-icons/lib";

const CssDefaultValues = () => {
  const data = [
    {Element:'a:link', DefaultCSSValue:'color: (internal value); text-decoration: underline;cursor: auto;'},
    {Element:'a:visited', DefaultCSSValue:'color: (internal value);text-decoration: underline;cursor: auto;'},
    {Element:'a:link:active', DefaultCSSValue:'color: (internal value);'},
    {Element:'a:visited:active', DefaultCSSValue:'color: (internal value);'},
    {Element:'abbr', DefaultCSSValue:'None.'},
    {Element:'address', DefaultCSSValue:'	display: block;font-style: italic;'},
    {Element:'area', DefaultCSSValue:'display: none;'},
    {Element:'article', DefaultCSSValue:'display: block;'},
    {Element:'aside', DefaultCSSValue:'display: block;'},
    {Element:'audio', DefaultCSSValue:'None.'},
    {Element:'b', DefaultCSSValue:'font-weight: bold;'},
    {Element:'base', DefaultCSSValue:'None.'},
    {Element:'bdi', DefaultCSSValue:'None.'},
    {Element:'bdo', DefaultCSSValue:'unicode-bidi: bidi-override;'},
    {Element:'blockquote', DefaultCSSValue:'display: block;margin-top: 1em;margin-bottom: 1em;margin-left: 40px;marin-right: 40px;'},
    {Element:'body', DefaultCSSValue:'display: block;margin: 8px;'},
    {Element:'body:focus', DefaultCSSValue:'outline: none;'},
    {Element:'br', DefaultCSSValue:'None.'},
    {Element:'button', DefaultCSSValue:'None'},
    {Element:'canvas', DefaultCSSValue:'None.'},
    {Element:'caption', DefaultCSSValue:'display: table-caption;text-align: center;'},
    {Element:'cite', DefaultCSSValue:'font-style: italic;'},
    {Element:'code', DefaultCSSValue:'font-family: monospace;'},
    {Element:'col', DefaultCSSValue:'display: table-column;'},
    {Element:'colgroup', DefaultCSSValue:'display: table-column-group'},
    {Element:'datalist', DefaultCSSValue:'display: none;'},
    {Element:'dd', DefaultCSSValue:'display: block;margin-left: 40px;'},
    {Element:'del', DefaultCSSValue:'text-decoration: line-through;'},
    {Element:'details', DefaultCSSValue:'display: block;'},
    {Element:'dfn', DefaultCSSValue:'font-style: italic;'},
    {Element:'dialog', DefaultCSSValue:'None.'},
    {Element:'div', DefaultCSSValue:'display: block;'},
    {Element:'dl', DefaultCSSValue:'display: block;margin-top: 1em;margin-bottom: 1em;margin-left: 0;margin-right: 0;'},
    {Element:'dt', DefaultCSSValue:'display: block;'},
    {Element:'em', DefaultCSSValue:'font-style: italic;'},
    {Element:'embed:focus', DefaultCSSValue:'outline: none;'},
    {Element:'fieldset', DefaultCSSValue:'display: block;margin-left: 2px;margin-right: 2px;padding-top: 0.35em;padding-bottom: 0.625em;padding-left: 0.75em;padding-right: 0.75emborder: 2px groove (internal value);'},
    {Element:'figcaption', DefaultCSSValue:'display: block;'},
    {Element:'figure', DefaultCSSValue:'display: block;margin-top: 1em;margin-bottom: 1em;margin-left: 40px;margin-right: 40px;'},
    {Element:'footer', DefaultCSSValue:'display: block;'},
    {Element:'form', DefaultCSSValue:'display: block;margin-top: 0em;'},
    {Element:'h1', DefaultCSSValue:'display: block;font-size: 2em;margin-top: 0.67em;margin-bottom: 0.67em;margin-left: 0;margin-right: 0;font-weight: bold;'},
    {Element:'h2', DefaultCSSValue:'display: block;font-size: 1.5em;margin-top: 0.83em;margin-bottom: 0.83em;margin-left: 0;margin-right: 0;font-weight: bold;'},
    {Element:'h3', DefaultCSSValue:'display: block;font-size: 1.17em;margin-top: 1em;margin-bottom: 1em;margin-left: 0;margin-right: 0;font-weight: bold;'},
    {Element:'h4', DefaultCSSValue:'display: block;margin-top: 1.33em;margin-bottom: 1.33em;margin-left: 0;margin-right: 0;font-weight: bold;'},
    {Element:'h5', DefaultCSSValue:'display: block;font-size: .83em;margin-top: 1.67em;margin-bottom: 1.67em;margin-left: 0;margin-right: 0;font-weight: bold;'},
    {Element:'h6', DefaultCSSValue:'display: block;font-size: .67em;margin-top: 2.33em;margin-bottom: 2.33em;margin-left: 0;margin-right: 0;font-weight: bold;'},
    {Element:'head', DefaultCSSValue:'display: none;'},
    {Element:'header', DefaultCSSValue:'display: block;'},
    {Element:'hr', DefaultCSSValue:'display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: autoborder-style: inset;border-width: 1px;'},
    {Element:'html', DefaultCSSValue:'display: block;'},
    {Element:'html:focus', DefaultCSSValue:'outline: none;'},
    {Element:'i', DefaultCSSValue:'font-style: italic;'},
    {Element:'iframe:focus', DefaultCSSValue:'outline: none;'},
    {Element:'iframe[seamless]', DefaultCSSValue:'display: block;'},
    {Element:'img', DefaultCSSValue:'display: inline-block;'},
    {Element:'input', DefaultCSSValue:'None.'},
    {Element:'ins', DefaultCSSValue:'text-decoration: underline;'},
    {Element:'kbd', DefaultCSSValue:'font-family: monospace;'},
    {Element:'label', DefaultCSSValue:'cursor: default;'},
    {Element:'legend', DefaultCSSValue:'display: block;padding-left: 2px;padding-right: 2px;border: none;'},
    {Element:'li', DefaultCSSValue:'display: list-item;'},
    {Element:'link', DefaultCSSValue:'display: none;'},
    {Element:'main', DefaultCSSValue:'None.'},
    {Element:'map', DefaultCSSValue:'display: inline;'},
    {Element:'mark', DefaultCSSValue:'background-color: yellow;color: black;'},
    {Element:'menu', DefaultCSSValue:'display: block;list-style-type: disc;margin-top: 1em;margin-bottom: 1em;margin-left: 0;margin-right: 0;padding-left: 40px;'},
    {Element:'menuitem', DefaultCSSValue:'None.'},
    {Element:'meta', DefaultCSSValue:'None.'},
    {Element:'meter', DefaultCSSValue:'None.'},
    {Element:'nav', DefaultCSSValue:'display: block;'},
    {Element:'noscript', DefaultCSSValue:'None.'},
    {Element:'object:focus', DefaultCSSValue:'outline: none;'},
    {Element:'ol', DefaultCSSValue:'display: block;list-style-type: decimal;margin-top: 1em;margin-bottom: 1em;margin-left: 0;margin-right: 0;padding-left: 40px;'},
    {Element:'optgroup', DefaultCSSValue:'None.'},
    {Element:'option', DefaultCSSValue:'None.'},
    {Element:'output', DefaultCSSValue:'display: inline;'},
    {Element:'p', DefaultCSSValue:'display: block;margin-top: 1em;margin-bottom: 1em;margin-left: 0;margin-right: 0;'},
    {Element:'param', DefaultCSSValue:'display: none;'},
    {Element:'picture', DefaultCSSValue:'None.'},
    {Element:'pre', DefaultCSSValue:'display: block;font-family: monospace;white-space: pre;margin: 1em 0;'},
    {Element:'progress', DefaultCSSValue:'None.'},
    {Element:'q', DefaultCSSValue:'display: inline;'},
    {Element:'q::before', DefaultCSSValue:'content: open-quote;'},
    {Element:'q::after', DefaultCSSValue:'content: close-quote;'},
    {Element:'rp', DefaultCSSValue:'None.'},
    {Element:'rt', DefaultCSSValue:'line-height: normal;'},
    {Element:'ruby', DefaultCSSValue:'None.'},
    {Element:'s', DefaultCSSValue:'text-decoration: line-through;'},
    {Element:'samp', DefaultCSSValue:'font-family: monospace;'},
    {Element:'script', DefaultCSSValue:'display: none;'},
    {Element:'section', DefaultCSSValue:'display: block;'},
    {Element:'select', DefaultCSSValue:'None.'},
    {Element:'small', DefaultCSSValue:'font-size: smaller;'},
    {Element:'source', DefaultCSSValue:'None.'},
    {Element:'span', DefaultCSSValue:'display: inline;'},
    {Element:'strike', DefaultCSSValue:'text-decoration: line-through;'},
    {Element:'strong', DefaultCSSValue:'font-weight: bold;'},
    {Element:'style', DefaultCSSValue:'display: none;'},
    {Element:'sub', DefaultCSSValue:'vertical-align: sub;font-size: smaller;'},
    {Element:'summary', DefaultCSSValue:'display: block;'},
    {Element:'sup', DefaultCSSValue:'vertical-align: super;font-size: smaller;'},
    {Element:'table', DefaultCSSValue:'display: table;border-collapse: separate;border-spacing: 2px;border-color: gray;'},
    {Element:'tbody', DefaultCSSValue:'display: table-row-group;vertical-align: middle;border-color: inherit;'},
    {Element:'td', DefaultCSSValue:'display: table-cell;vertical-align: inherit;'},
    {Element:'template', DefaultCSSValue:'None.'},
    {Element:'textarea', DefaultCSSValue:'None.'},
    {Element:'tfoot', DefaultCSSValue:'display: table-footer-group;vertical-align: middle;border-color: inherit;'},
    {Element:'th', DefaultCSSValue:'display: table-cell;vertical-align: inherit;font-weight: bold;text-align: center;'},
    {Element:'thead', DefaultCSSValue:'display: table-header-group;vertical-align: middle;border-color: inherit;'},
    {Element:'time', DefaultCSSValue:'None.'},
    {Element:'title', DefaultCSSValue:'display: none;'},
    {Element:'tr', DefaultCSSValue:'display: table-row;vertical-align: inherit;border-color: inherit;'},
    {Element:'track', DefaultCSSValue:'None.'},
    {Element:'u', DefaultCSSValue:'text-decoration: underline;'},
    {Element:'ul', DefaultCSSValue:'display: block;list-style-type: disc;margin-top: 1em;margin-bottom: 1 em;margin-left: 0;margin-right: 0;padding-left: 40px;'},
    {Element:'var', DefaultCSSValue:'font-style: italic;'},
    {Element:'video', DefaultCSSValue:'None.'},
    {Element:'wbr', DefaultCSSValue:'None.'}
  ];
  return (
    <div className="p-6 max-w-3xl">
      {/* Title */}
      <h2 className="text-3xl text-blue-500 font-medium mb-4">CSS Default Values</h2>
      <h1 className="text-2xl mb-5">Default CSS Values for HTML Elements</h1>

      {/* Description */}
      <p className="mb-6">
        Every CSS property has a default (initial) value. If you don't set a property, the browser applies its default value. This ensures that the page remains readable even without CSS.
      </p>

      <table className="min-w-full border border-gray-300 text-gray-700 text-sm  txt-left rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Element</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Default CSS Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Element}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.DefaultCSSValue}</td>
            </tr>
          ))}
        </tbody>
        
      </table>

    
   

      {/* Explanation */}
      <p className="mt-6 text-gray-700">
         Understanding CSS default values is important because it tells you how an element will behave without any custom styling.
      </p>
    </div>
  );
};

export default CssDefaultValues;