import { Edit, Proportions } from "lucide-react";
import React from "react";

const CssBrowserSupport = () => {
  const data = [
    {Property:'accent-color', chrome:'93', safari:'92', firefox:'93', Edge:'15.4', opera:'79'},
    {Property:'align-content', chrome:'16', safari:'52', firefox:'57', Edge:'10.1', opera:'44'},
    {Property:'align-items', chrome:'16', safari:'52', firefox:'57', Edge:'10.1', opera:'44'},
    {Property:'align-self', chrome:'16', safari:'52', firefox:'57', Edge:'10.1', opera:'44'},
    {Property:'all', chrome:'79', safari:'27', firefox:'37', Edge:'9.1', opera:'24'},
    {Property:'animation', chrome:'10', safari:'16', firefox:'43', Edge:'9', opera:'30'},
    {Property:'animation-delay', chrome:'10', safari:'16', firefox:'43', Edge:'9', opera:'30'},
    {Property:'animation-direction', chrome:'10', safari:'16', firefox:'43', Edge:'9', opera:'30'},
    {Property:'animation-duration', chrome:'10', safari:'16', firefox:'43', Edge:'9', opera:'30'},
    {Property:'animation-fill-mode', chrome:'10', safari:'16', firefox:'43', Edge:'9', opera:'30'},
    {Property:'animation-iteration-count', chrome:'10', safari:'16', firefox:'43', Edge:'9', opera:'30'},
    {Property:'animation-name', chrome:'10', safari:'16', firefox:'43', Edge:'9', opera:'30'},
    {Property:'animation-play-state', chrome:'10', safari:'16', firefox:'43', Edge:'9', opera:'30'},
    {Property:'animation-timing-function', chrome:'10', safari:'16', firefox:'43', Edge:'9', opera:'30'},
    {Property:'aspect-ratio', chrome:'88', safari:'89', firefox:'88', Edge:'15', opera:'74'},
    {Property:'backdrop-filter', chrome:'79', safari:'103', firefox:'76', Edge:'9', opera:'63'},
    {Property:'backface-visibility', chrome:'12', safari:'16', firefox:'36', Edge:'15.4', opera:'23'},
    {Property:'background', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
    {Property:'background-attachment', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
    {Property:'background-blend-mode', chrome:'79', safari:'30', firefox:'35', Edge:'7.1', opera:'22'},
    {Property:'background-clip', chrome:'9', safari:'4', firefox:'4', Edge:'3', opera:'10.5'},
    {Property:'background-color', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
    {Property:'background-image', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
    {Property:'background-origin', chrome:'9', safari:'4', firefox:'4', Edge:'3', opera:'10.5'},
    {Property:'background-position', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
    {Property:'background-position-x', chrome:'12', safari:'49', firefox:'1', Edge:'1', opera:'15'},
    {Property:'background-position-y', chrome:'12', safari:'49', firefox:'1', Edge:'1', opera:'15'},
    {Property:'background-repeat', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
    {Property:'background-size', chrome:'9', safari:'4', firefox:'4', Edge:'4.1', opera:'10'},
    {Property:'block-size', chrome:'79', safari:'41', firefox:'57', Edge:'12.1', opera:'44'},
    {Property:'border', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
    {Property:'border-block', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
    {Property:'border-block-color', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
    {Property:'border-block-end', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
    {Property:'border-block-end-color', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
    {Property:'border-block-end-style', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
    {Property:'border-block-end-width', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
    {Property:'border-block-start', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
    {Property:'border-block-start-color', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
    {Property:'border-block-start-style', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
    {Property:'border-block-start-width', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
    {Property:'border-block-style', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'71'},
    {Property:'border-block-width', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'71'},
    {Property:'border-bottom', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
    {Property:'border-bottom-color', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
    {Property:'border-bottom-left-radius', chrome:'9', safari:'4', firefox:'5', Edge:'5', opera:'10.5'},
    {Property:'border-bottom-right-radius', chrome:'9', safari:'4', firefox:'5', Edge:'5', opera:'10.5'},
    {Property:'border-bottom-style', chrome:'5.5', safari:'1', firefox:'1', Edge:'1', opera:'9.2'},
    {Property:'border-bottom-width', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-collapse', chrome:'5', safari:'1', firefox:'1', Edge:'1.2', opera:'4'},
     {Property:'border-color', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-end-end-radius', chrome:'89', safari:'66', firefox:'89', Edge:'15', opera:'75'},
     {Property:'border-end-start-radius', chrome:'89', safari:'66', firefox:'89', Edge:'15', opera:'75'},
     {Property:'border-image', chrome:'11', safari:'15', firefox:'16', Edge:'6', opera:'15'},
     {Property:'border-image-outset', chrome:'11', safari:'15', firefox:'15', Edge:'6', opera:'15'},
     {Property:'border-image-repeat', chrome:'11', safari:'15', firefox:'15', Edge:'6', opera:'15'},
     {Property:'border-image-slice', chrome:'11', safari:'15', firefox:'15', Edge:'6', opera:'15'},
     {Property:'border-image-source', chrome:'11', safari:'15', firefox:'15', Edge:'6', opera:'15'},
     {Property:'border-image-width', chrome:'11', safari:'15', firefox:'15', Edge:'6', opera:'15'},
     {Property:'border-inline', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'border-inline-color', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'border-inline-end', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
     {Property:'border-inline-end-color', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
     {Property:'border-inline-end-style', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
     {Property:'border-inline-end-width', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
     {Property:'border-inline-start', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
     {Property:'border-inline-start-color', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
     {Property:'border-inline-start-style', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
     {Property:'border-inline-start-width', chrome:'79', safari:'41', firefox:'69', Edge:'12.1', opera:'56'},
     {Property:'border-inline-style', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'border-inline-width', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'border-left', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-left-color', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-left-style', chrome:'5.5', safari:'1', firefox:'1', Edge:'1', opera:'9.2'},
     {Property:'border-left-width', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-radius', chrome:'9', safari:'4', firefox:'5', Edge:'5', opera:'10.5'},
     {Property:'border-right', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-right-color', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-right-style', chrome:'5.5', safari:'1', firefox:'1', Edge:'1', opera:'9.2'},
     {Property:'border-right-width', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-spacing', chrome:'8', safari:'1', firefox:'1', Edge:'1', opera:'4'},
     {Property:'border-start-end-radius', chrome:'89', safari:'66', firefox:'89', Edge:'15', opera:'75'},
     {Property:"border-start-start-radius", chrome:'89', safari:'66', firefox:'89', Edge:'15', opera:'75'},
     {Property:'border-style', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-top', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-top-color', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-top-left-radius', chrome:'9', safari:'4', firefox:'5', Edge:'5', opera:'10.5'},
     {Property:'border-top-right-radius', chrome:'9', safari:'4', firefox:'5', Edge:'5', opera:'10.5'},
     {Property:'border-top-style', chrome:'5.5', safari:'1', firefox:'1', Edge:'1', opera:'9.2'},
     {Property:'border-top-width', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'border-width', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'bottom', chrome:'5', safari:'1', firefox:'1', Edge:'1', opera:'6'},
     {Property:'box-decoration-break', chrome:'79', safari:'32', firefox:'22', Edge:'6.1', opera:'15'},
     {Property:'box-shadow', chrome:'9', safari:'4', firefox:'10', Edge:'5.1', opera:'10.5'},
     {Property:'box-sizing', chrome:'8', safari:'29', firefox:'10', Edge:'5.1', opera:'9.5'},
     {Property:'break-after', chrome:'10', safari:'65', firefox:"50", Edge:'10', opera:'37'},
     {Property:"break-before", chrome:'10', safari:'65', firefox:'50', Edge:'10', opera:'37'},
     {Property:'break-inside', chrome:'10', safari:'65', firefox:'50', Edge:'10', opera:'37'},
     {Property:'caption-side', chrome:'8', safari:'1', firefox:'1', Edge:'1', opera:'4'},
     {Property:'caret-color', chrome:'79', safari:'53', firefox:'57', Edge:'11.1', opera:'44'},
     {Property:'@charset', chrome:'12', safari:'1.5', firefox:'2', Edge:'4', opera:'9'},
     {Property:'clear', chrome:'5', safari:'1', firefox:'1', Edge:'1', opera:'6'},
     {Property:'clip', chrome:'8', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'clip-path', chrome:'79', safari:'3.5', firefox:'55', Edge:'9.1', opera:'42'},
     {Property:'color', chrome:'3', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'column-count', chrome:'10', safari:'52', firefox:'50', Edge:'9', opera:'37'},
     {Property:'column-fill', chrome:'10', safari:'52', firefox:'50', Edge:'10', opera:'37'},
     {Property:'column-gap', chrome:'84', safari:'63', firefox:'84', Edge:'14.1', opera:'70'},
     {Property:'column-rule', chrome:'10', safari:'52', firefox:'50', Edge:'9', opera:'37'},
     {Property:'column-rule-color', chrome:'10', safari:'52', firefox:'50', Edge:'9', opera:'37'},
     {Property:'column-rule-style', chrome:'10', safari:'52', firefox:'50', Edge:'9', opera:'37'},
     {Property:'column-rule-width', chrome:'10', safari:'52', firefox:'50', Edge:'9', opera:'37'},
     {Property:'column-span', chrome:'10', safari:'52', firefox:'50', Edge:'9', opera:'37'},
     {Property:'column-width', chrome:'10', safari:'52', firefox:'50', Edge:'9', opera:'37'},
     {Property:'columns', chrome:'10', safari:'52', firefox:'50', Edge:'90', opera:'37x`'},
     {Property:'@container', chrome:'105', safari:'110', firefox:'105', Edge:'16', opera:'91'},
     {Property:'content', chrome:'8', safari:'1', firefox:'1', Edge:'1', opera:'4'},
     {Property:'counter-increment', chrome:'8', safari:'2', firefox:'4', Edge:'3.1', opera:'9.6'},
     {Property:'counter-reset', chrome:'8', safari:'2', firefox:'4', Edge:'3.1', opera:'9.6'},
     {Property:'counter-set', chrome:'85', safari:'68', firefox:'85', Edge:'17.2', opera:'71'},
     {Property:'@counter-style', chrome:'91', safari:'33', firefox:'91', Edge:'17', opera:'77'},
     {Property:'cursor', chrome:'5.5', safari:'4', firefox:'5', Edge:'5', opera:'9.6'},
     {Property:'direction', chrome:'5.5', safari:'1', firefox:'2', Edge:'1.3', opera:'9.2'},
     {Property:'display', chrome:'8', safari:'3', firefox:'4', Edge:'3.1', opera:'7'},
     {Property:'empty-cells', chrome:'8', safari:'1', firefox:'1', Edge:'1.2', opera:'4'},
     {Property:'filter', chrome:'13', safari:'35', firefox:'53', Edge:'9.1', opera:'40'},
     {Property:'flex', chrome:'11', safari:'28', firefox:'29', Edge:'9', opera:'17'},
     {Property:'flex-basis', chrome:'11', safari:'28', firefox:'29', Edge:'9', opera:'17'},
     {Property:'flex-direction', chrome:'11', safari:'28', firefox:'29', Edge:'9', opera:'17'},
     {Property:'flex-flow', chrome:'11', safari:'28', firefox:'29', Edge:'9', opera:'17'},
     {Property:'flex-grow', chrome:'11', safari:'28', firefox:'29', Edge:'9', opera:'17'},
     {Property:'flex-shrink', chrome:'11', safari:'28', firefox:'29', Edge:'9', opera:'17'},
     {Property:'flex-wrap', chrome:'11', safari:'28', firefox:'19', Edge:'9', opera:'17'},
     {Property:'float', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'font', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'@font-face', chrome:'9', safari:'3.5', firefox:'4', Edge:'3.1', opera:'10'},
     {Property:'font-family', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'font-feature-settings', chrome:'10', safari:'34', firefox:'48', Edge:'9.1', opera:'35'},
     {Property:'font-kerning', chrome:'79', safari:'34', firefox:'33', Edge:'9.1', opera:'20.1'},
     {Property:'@font-palette-values', chrome:'101', safari:'107', firefox:'101', Edge:'15.4', opera:'87'},
     {Property:'font-size', chrome:'5.5', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'font-size-adjust', chrome:'127', safari:'3', firefox:'127', Edge:'17', opera:'113'},
     {Property:'font-stretch', chrome:'9', safari:'9', firefox:'48', Edge:'11', opera:'35'},
     {Property:'font-style', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'font-variant', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'font-variant-caps', chrome:'79', safari:'34', firefox:'52', Edge:'9.1', opera:'39'},
     {Property:'font-weight', chrome:'4', safari:'1', firefox:'2', Edge:'1.3', opera:'3.5'},
     {Property:'gap', chrome:'84', safari:'63', firefox:'84', Edge:'14.1', opera:'70'},
     {Property:'grid', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-area', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-auto-columns', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-auto-flow', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-auto-rows', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-column', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-column-end', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-column-start', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-row', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-row-end', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-row-start', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-template', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-template-areas', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'grid-template-columns', chrome:'10', safari:'52', firefox:'57', Edge:'10', opera:'44'},
     {Property:'height', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'hyphens', chrome:'79', safari:'43', firefox:'55', Edge:'17', opera:'44'},
     {Property:'hyphenate-character', chrome:'106', safari:'98', firefox:'106', Edge:'17', opera:'92'},
     {Property:'image-rendering', chrome:'79', safari:'65', firefox:'41', Edge:'10', opera:'28'},
     {Property:'@import', chrome:'5.5', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'inline-size', chrome:'79', safari:'41', firefox:'57', Edge:'12.1', opera:'44'},
     {Property:'inset', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'inset-block', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'inset-block-end', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'inset-block-start', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'inset-inline', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'inset-inline-end', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'inset-inline-start', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'isolation', chrome:'79', safari:'36', firefox:'41', Edge:'7.1', opera:'30'},
     {Property:'justify-content', chrome:'11', safari:'28', firefox:'29', Edge:'9', opera:'17'},
     {Property:'justify-items', chrome:'16', safari:'45', firefox:'57', Edge:'10.1', opera:'44'},
     {Property:'justify-self', chrome:'16', safari:'45', firefox:'57', Edge:'10.1', opera:'44'},
     {Property:'@keyframes', chrome:'10', safari:'16', firefox:'43', Edge:'9', opera:'30'},
     {Property:'@layer', chrome:'99', safari:'97', firefox:'99', Edge:'15.4', opera:'86'},
     {Property:'left', chrome:'5.5', safari:'1', firefox:'1', Edge:'1', opera:'5'},
     {Property:'letter-spacing', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'line-break', chrome:'14', safari:'69', firefox:'58', Edge:'11', opera:'45'},
     {Property:'line-height', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'list-style', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'list-style-image', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'list-style-position', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'list-style-type', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'margin', chrome:'6', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'margin-block', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'margin-block-end', chrome:'87', safari:'41', firefox:'87', Edge:'12.1', opera:'73'},
     {Property:'margin-block-start', chrome:'87', safari:'41', firefox:'87', Edge:'12.1', opera:'73'},
     {Property:'margin-bottom', chrome:'6', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'margin-inline', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'margin-inline-end', chrome:'87', safari:'41', firefox:'87', Edge:'12.1', opera:'73'},
     {Property:'margin-inline-start', chrome:'87', safari:'41', firefox:'87', Edge:'12.1', opera:'73'},
     {Property:'margin-left', chrome:'6', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'margin-right', chrome:'6', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'margin-top', chrome:'6', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'marker', chrome:'80', safari:'72', firefox:'80', Edge:'13.1', opera:'67'},
     {Property:'mask', chrome:'120', safari:'53', firefox:'120', Edge:'15.4', opera:'106'},
     {Property:'mask-clip', chrome:'120', safari:'53', firefox:'120', Edge:'15.4', opera:'106'},
     {Property:'mask-composite', chrome:'120', safari:'53', firefox:'120', Edge:'15.4', opera:'106'},
     {Property:'mask-image', chrome:'120', safari:'53', firefox:'120', Edge:'15.4', opera:'15'},
     {Property:'mask-mode', chrome:'120', safari:'53', firefox:'120', Edge:'15.4', opera:'106'},
     {Property:'mask-origin', chrome:'120', safari:'53', firefox:'120', Edge:'15.4', opera:'106'},
     {Property:'mask-position', chrome:'120', safari:'53', firefox:'120', Edge:'15.4', opera:'106'},
     {Property:'mask-repeat', chrome:'120', safari:'53', firefox:'120', Edge:'15.4', opera:'106'},
     {Property:'mask-size', chrome:'120', safari:'53', firefox:'120', Edge:'15.4', opera:'106'},
     {Property:'mask-type', chrome:'79', safari:'35', firefox:'24', Edge:'7', opera:'15'},
     {Property:'max-block-size', chrome:'79', safari:'41', firefox:'57', Edge:'12.1', opera:'44'},
     {Property:'max-height', chrome:'7', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'max-inline-size', chrome:'79', safari:'41', firefox:'57', Edge:'12.1', opera:'44'},
     {Property:'max-width', chrome:'7', safari:'1', firefox:'1', Edge:'2', opera:'7'},
     {Property:'@media', chrome:'9', safari:'3.5', firefox:'21', Edge:'4', opera:'9'},
     {Property:'min-block-size', chrome:'79', safari:'41', firefox:'57', Edge:'12.1', opera:'44'},
     {Property:'min-inline-size', chrome:'79', safari:'41', firefox:'57', Edge:'12.1', opera:'44'},
     {Property:'min-height', chrome:'7', safari:'1', firefox:'1', Edge:'2', opera:'4'},
     {Property:'min-width', chrome:'7', safari:'1', firefox:'1', Edge:'2', opera:'4'},
     {Property:'mix-blend-mode', chrome:'79', safari:'32', firefox:'41', Edge:'8', opera:'35'},
     {Property:'@namespace', chrome:'12', safari:'1', firefox:'1', Edge:'1', opera:'8'},
     {Property:'object-fit', chrome:'16', safari:'36', firefox:'31', Edge:'7.1', opera:'19'},
     {Property:'object-position', chrome:'16', safari:'36', firefox:'31', Edge:'7.1', opera:'19'},
     {Property:'offset', chrome:'79', safari:'72', firefox:'55', Edge:'16', opera:'42'},
     {Property:'offset-anchor', chrome:'116', safari:'72', firefox:'116', Edge:'16', opera:'102'},
     {Property:'offset-distance', chrome:'79', safari:'72', firefox:'55', Edge:'16', opera:'42'},
     {Property:'offset-path', chrome:'79', safari:'72', firefox:'55', Edge:'15.4', opera:'45'},
     {Property:'offset-position', chrome:'116', safari:'122', firefox:'116', Edge:'16', opera:'43'},
     {Property:'offset-rotate', chrome:'79', safari:'72', firefox:'56', Edge:'16', opera:'43'},
     {Property:'opacity', chrome:'8', safari:'1.5', firefox:'1', Edge:'1.2', opera:'7'},
     {Property:'order', chrome:'9', safari:'2', firefox:'4', Edge:'3.1', opera:'9'},
     {Property:'orphans', chrome:'11', safari:'28', firefox:'29', Edge:'9', opera:'17'},
     {Property:'outline', chrome:'8', safari:'28', firefox:'25', Edge:'3.1', opera:'10'},
     {Property:'outline-color', chrome:'8', safari:'1.5', firefox:'1', Edge:'1.2', opera:'7'},
     {Property:'outline-offset', chrome:'15', safari:'3.5', firefox:'4', Edge:'3', opera:'10.5'},
     {Property:'outline-style', chrome:'8', safari:'1.5', firefox:'1', Edge:'1.2', opera:'7'},
     {Property:'outline-width', chrome:'8', safari:'1.5', firefox:'1', Edge:'1.2', opera:'7'},
     {Property:'overflow', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'overflow-anchor', chrome:'79', safari:'66', firefox:'56', Edge:'', opera:'43'},
     {Property:'overflow-wrap', chrome:'18', safari:'49', firefox:'23', Edge:'6.1', opera:'12.1'},
     {Property:'overflow-x', chrome:'9', safari:'3.5', firefox:'4', Edge:'3', opera:'9.5'},
     {Property:'overflow-y', chrome:'9', safari:'1.5', firefox:'4', Edge:'3', opera:'9.5'},
     {Property:'overscroll-behavior', chrome:'18', safari:'59', firefox:'63', Edge:'16', opera:'50'},
     {Property:'overscroll-behavior-block', chrome:'79', safari:'73', firefox:'77', Edge:'16', opera:'64'},
     {Property:'overscroll-behavior-inline', chrome:'79', safari:'73', firefox:'77', Edge:'16', opera:'64'},
     {Property:'overscroll-behavior-x', chrome:'18', safari:'59', firefox:'63', Edge:'16', opera:'50'},
     {Property:'overscroll-behavior-y', chrome:'18', safari:'59', firefox:'63', Edge:'16', opera:'50'},
     {Property:'padding', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'padding-block', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'padding-block-end', chrome:'87', safari:'41', firefox:'87', Edge:'12.1', opera:'73'},
     {Property:'padding-block-start', chrome:'87', safari:'41', firefox:'87', Edge:'12.1', opera:'73'},
     {Property:'padding-bottom', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'padding-inline', chrome:'87', safari:'66', firefox:'87', Edge:'14.1', opera:'73'},
     {Property:'padding-inline-end', chrome:'87', safari:'41', firefox:'87', Edge:'12.1', opera:'73'},
     {Property:'padding-inline-start', chrome:'87', safari:'41', firefox:'87', Edge:'12.1', opera:'73'},
     {Property:'padding-left', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'padding-right', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'padding-top', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'@page', chrome:'12', safari:'19', firefox:'12', Edge:'', opera:'6'},
     {Property:'page-break-after', chrome:'4', safari:'1', firefox:'1', Edge:'1.2', opera:'7'},
     {Property:'page-break-before', chrome:'4', safari:'1', firefox:'1', Edge:'1.2', opera:'7'},
     {Property:'page-break-inside', chrome:'8', safari:'19', firefox:'1', Edge:'1.3', opera:'7'},
     {Property:'paint-order', chrome:'17', safari:'60', firefox:'35', Edge:'8', opera:'22'},
     {Property:'perspective', chrome:'10', safari:'16', firefox:'36', Edge:'9', opera:'23'},
     {Property:'perspective-origin', chrome:'10', safari:'16', firefox:'36', Edge:'9', opera:'23'},
     {Property:'place-content', chrome:'79', safari:'53', firefox:'59', Edge:'11', opera:'46'},
     {Property:'place-items', chrome:'79', safari:'45', firefox:'59', Edge:'11', opera:'46'},
     {Property:'place-self', chrome:'79', safari:'45', firefox:'59', Edge:'11', opera:'46'},
     {Property:'pointer-events', chrome:'11', safari:'3.6', firefox:'2', Edge:'4', opera:'9'},
     {Property:'position', chrome:'7', safari:'1', firefox:'1', Edge:'1.2', opera:'4'},
     {Property:'@property', chrome:'85', safari:'128', firefox:'85', Edge:'16.4', opera:'71'},
     {Property:'quotes', chrome:'8', safari:'1.5', firefox:'11', Edge:'5.1', opera:'4'},
     {Property:'resize', chrome:'79', safari:'5', firefox:'4', Edge:'4', opera:'15'},
     {Property:'rotate', chrome:'5.5', safari:'1', firefox:'1', Edge:'1', opera:'5'},
     {Property:'right', chrome:'104', safari:'72', firefox:'104', Edge:'14.1', opera:'90'},
     {Property:'row-gap', chrome:'84', safari:'63', firefox:'84', Edge:'14.1', opera:'70'},
     {Property:'scale', chrome:'104', safari:'72', firefox:'104', Edge:'14.1', opera:'90'},
     {Property:'@scope', chrome:'118', safari:'', firefox:'118', Edge:'17.4', opera:'104'},
     {Property:'scroll-behavior', chrome:'79', safari:'36', firefox:'61', Edge:'14', opera:'48'},
     {Property:'scroll-margin', chrome:'79', safari:'90', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-margin-block', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-margin-block-end', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-margin-block-start', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-margin-bottom', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-margin-inline', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-margin-inline-end', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-margin-inline-start', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-margin-left', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-margin-right', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-margin-top', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding', chrome:'79', safari:'90', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding-block', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding-block-end', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding-block-start', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding-bottom', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding-inline', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding-inline-end', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding-inline-start', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding-left', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding-right', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-padding-top', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-snap-align', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-snap-stop', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scroll-snap-type', chrome:'79', safari:'68', firefox:'69', Edge:'14.1', opera:'56'},
     {Property:'scrollbar-color', chrome:'121', safari:'64', firefox:'121', Edge:'', opera:'107'},
     {Property:'scrollbar-gutter', chrome:'94', safari:'97', firefox:'94', Edge:'', opera:'80'},
     {Property:'scrollbar-width', chrome:'121', safari:'64', firefox:'121', Edge:'', opera:'107'},
     {Property:'shape-image-threshold', chrome:'79', safari:'62', firefox:'37', Edge:'10.1', opera:'24'},
     {Property:'shape-margin', chrome:'79', safari:'62', firefox:'37', Edge:'10.1', opera:'24'},
     {Property:'shape-outside', chrome:'79', safari:'62', firefox:'37', Edge:'10.1', opera:'24'},
     {Property:'shape-rendering', chrome:'80', safari:'72', firefox:'80', Edge:'13.1', opera:'67'},
     {Property:'@starting-style', chrome:'117', safari:'129', firefox:'117', Edge:'17.5', opera:'103'},
     {Property:'@supports', chrome:'12', safari:'22', firefox:'28', Edge:'9', opera:'12.1'},
     {Property:'tab-size', chrome:'79', safari:'91', firefox:'21', Edge:'7', opera:'15'},
     {Property:'table-layout', chrome:'5', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'text-align', chrome:'3', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'text-align-last', chrome:'12', safari:'49', firefox:'47', Edge:'16', opera:'34'},
     {Property:'text-combine-upright', chrome:'79', safari:'48', firefox:'48', Edge:'15.4', opera:'35'},
     {Property:'text-decoration', chrome:'3', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'text-decoration-color', chrome:'79', safari:'36', firefox:'57', Edge:'12.1', opera:'44'},
     {Property:'text-decoration-line', chrome:'79', safari:'36', firefox:'57', Edge:'12.1', opera:'44'},
     {Property:'text-decoration-style', chrome:'79', safari:'36', firefox:'57', Edge:'12.1', opera:'44'},
     {Property:'text-decoration-thickness', chrome:'89', safari:'70', firefox:'89', Edge:'12.1', opera:'75'},
     {Property:'text-emphasis', chrome:'99', safari:'46', firefox:'99', Edge:'7', opera:'85'},
     {Property:'text-emphasis-color', chrome:'99', safari:'46', firefox:'99', Edge:'7', opera:'85'},
     {Property:'text-emphasis-position', chrome:'99', safari:'46', firefox:'99', Edge:'7', opera:'85'},
     {Property:'text-emphasis-style', chrome:'99', safari:'46', firefox:'99', Edge:'7', opera:'85'},
     {Property:'text-indent', chrome:'3', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'text-justify', chrome:'', safari:'55', firefox:'', Edge:'', opera:''},
     {Property:'text-orientation', chrome:'79', safari:'41', firefox:'48', Edge:'14', opera:'35'},
     {Property:'text-overflow', chrome:'6', safari:'7', firefox:'4', Edge:'3.1', opera:'11'},
     {Property:'text-shadow', chrome:'10', safari:'3.5', firefox:'4', Edge:'4', opera:'9.6'},
     {Property:'text-transform', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'7'},
     {Property:'text-underline-offset', chrome:'87', safari:'70', firefox:'87', Edge:'12.1', opera:'73'},
     {Property:'text-underline-position', chrome:'79', safari:'74', firefox:'33', Edge:'12.1', opera:'20'},
     {Property:'top', chrome:'5', safari:'1', firefox:'1', Edge:'1', opera:'6'},
     {Property:'touch-action', chrome:'12', safari:'52', firefox:'36', Edge:'13', opera:'23'},
     {Property:'transform', chrome:'12', safari:'16', firefox:'36', Edge:'9', opera:'23'},
     {Property:'transform-origin', chrome:'12', safari:'16', firefox:'36', Edge:'9', opera:'23'},
     {Property:'transform-style', chrome:'12', safari:'16', firefox:'36', Edge:'9', opera:'23'},
     {Property:'transition', chrome:'10', safari:'16', firefox:'26', Edge:'6.1', opera:'12.1'},
     {Property:'transition-delay', chrome:'10', safari:'16', firefox:'26', Edge:'6.1', opera:'12.1'},
     {Property:'transition-duration', chrome:'10', safari:'16', firefox:'26', Edge:'6.1', opera:'12.1'},
     {Property:'transition-property', chrome:'10', safari:'16', firefox:'26', Edge:'6.1', opera:'12.1'},
     {Property:'transition-timing-function', chrome:'10', safari:'16', firefox:'26', Edge:'6.1', opera:'12.1'},
     {Property:'translate', chrome:'104', safari:'72', firefox:'104', Edge:'14.1', opera:'90'},
     {Property:'unicode-bidi', chrome:'5.5', safari:'1', firefox:'2', Edge:'1.3', opera:'9.2'},
     {Property:'user-select', chrome:'79', safari:'69', firefox:'54', Edge:'3.1', opera:'41'},
     {Property:'vertical-align', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'4'},
     {Property:'visibility', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'4'},
     {Property:'white-space', chrome:'8', safari:'1', firefox:'1', Edge:'1', opera:'9.5'},
     {Property:'widows', chrome:'8', safari:'', firefox:'25', Edge:'7', opera:'10'},
     {Property:'width', chrome:'4', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'will-change', chrome:'79', safari:'36', firefox:'36', Edge:'9.1', opera:'24'},
     {Property:'word-break', chrome:'5.5', safari:'15', firefox:'4', Edge:'3.1', opera:'15'},
     {Property:'word-spacing', chrome:'6', safari:'1', firefox:'1', Edge:'1', opera:'3.5'},
     {Property:'word-wrap', chrome:'5.5', safari:'3.5', firefox:'4', Edge:'3.1', opera:'10.5'},
     {Property:'writing-mode', chrome:'12', safari:'3.5', firefox:'4', Edge:'3.1', opera:'10.5'},
     {Property:'z-index', chrome:'4', safari:'3', firefox:'1', Edge:'1', opera:'4'},
     {Property:'zoom', chrome:'12', safari:'126', firefox:'1', Edge:'3.1', opera:'15'},
  ];
  return (
    <div className="p-6 max-w-3xl">
      {/* Title */}
      <h2 className="text-3xl text-blue-500 font-medium mb-4"> CSS Browser Support</h2>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        Not all CSS properties work the same in every browser. To support new CSS features, some browsers use vendor prefixes.
      </p>
      <h1 className="text-2xl mb-3">CSS Reference With Browser Support</h1>
      <p>Here is a list of all CSS properties along with their support status in major browsers.</p>
      <p className="mt-4 mb-10">Beside each browser icon, the number indicates the version that first included support for the property.</p>

      <table className="min-w-full border border-gray-300 text-gray-700 text-sm txet-left rounded-md mb-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300">Property</th>
            <th className="px-4 py-2 border-b border-gray-300 bg-[url('/public/chrome.png')] bg-no-repeat bg-contain"></th>
            <th className="px-4 py-2 border-b border-gray-300 bg-[url('/public/Edge.png')] bg-no-repeat bg-contain"></th>
            <th className="px-4 py-2 border-b border-gray-300 bg-[url('/public/firefox.png')] bg-no-repeat bg-contain"></th>
            <th className="px-4 py-2 border-b border-gray-300 bg-[url('/public/safari.png')] bg-no-repeat bg-contain"></th>
            <th className="px-4 py-2 border-b border-gray-300 bg-[url('/public/opera.png')] bg-no-repeat bg-contain"></th>
          </tr>
        </thead>
        {data.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.chrome}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.safari}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.firefox}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Edge}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.opera}</td>
          </tr>
        ))}
      </table>














      {/* Example */}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-6">
<pre>{`/* Browser Prefix Example */
.my-box {
  -webkit-border-radius: 10px; /* Safari, iOS */
  -moz-border-radius: 10px;    /* Firefox */
  border-radius: 10px;         /* Standard */
}`}</pre>
      </div>

      {/* Support Table */}
      <h3 className="text-2xl font-semibold mb-3">Common Browser Prefixes</h3>
      <table className="w-full border border-gray-300 text-left text-sm mb-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Prefix</th>
            <th className="border p-2">Browser</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">-webkit-</td>
            <td className="border p-2">Chrome, Safari, iOS</td>
          </tr>
          <tr>
            <td className="border p-2">-moz-</td>
            <td className="border p-2">Mozilla Firefox</td>
          </tr>
          <tr>
            <td className="border p-2">-ms-</td>
            <td className="border p-2">Internet Explorer, Edge (old)</td>
          </tr>
          <tr>
            <td className="border p-2">-o-</td>
            <td className="border p-2">Opera (old)</td>
          </tr>
        </tbody>
      </table>

      {/* Explanation */}
      <p>
       In modern browsers, the need for vendor prefixes is gradually decreasing. However, it's always a good idea to check MDN Docs or the Can I Use website to see which CSS properties are supported in which browsers.
      </p>
    </div>
  );
};

export default CssBrowserSupport;