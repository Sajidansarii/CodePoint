import React, { useState, useEffect, useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import WhatisCSS from './WhatisCSS';
import CSSIntroduction from './CSSIntroduction';
import CSSSyntax from './Syntax';
import Selector from './Selector';
import HowToAddCSS from './HowToAddCSS';
import InlineCSS from './InlineCSS';
import InternalCSS from './InternalCSS';
import ExternalCSS from './ExternalCSS';
import CSSComments from './CSSComments';
import CSSBackground from './CSSBackground';
import CSSBorder from './CSSBorder';
import CSSBorderradius from './CSSBorder-radius';
import CSSBordercollapse from './CSSBordercollapse';
import CSSBorderspacing from './CSSBorderspacing';
import CSSDisplay from './CSSDisplay';
import Cursor from './Cursor';              
import CSSButtons from './CSSButtons';
import CSSFloat from './CSSFloat';
import CSSFont from './CSSFont';
import Fontsize from './Fontsize';
import FontFamily from './FontFamily';
import FontWeight from './FontWeight';
import Fontstretch from './Fontstretch';
import Colours from './Colours';
import Hover from './Hover';
import Padding from './padding';
import Margine from './Margine';
import HeightWidth from './HeightWidth';
import BoxModel from './BoxModel';
import CSSOutline from './Outline';
import CSSText from './CSSText';
import CSSFonts from './CSSFonts';
import CSSIcon from './CSSIcon';
import CSSLinks from './CSSLinks';
import CSSLists from './CSSLists';
import CSSTables from './CSSTables';
import Display from './Display';
import Maxwidth from './Maxwidth';
import Position from './CSSPosition';
import CSSZindex from './CSSZindex';
import CSSOverflow from './CSSOverflow';
import CSSInlineblock from './CSSInlineblock';
import CSSAlign from './CSSAlign';
import CSSCombinators from './CSSCombinators';
import CSSOpacity from './CSSOpacity';
import CSSNavigationBar from './CSSNavigationBar';
import CSSDropdowns from './CSSDropdowns';
import CSSImageGallery from './CSSImageGallery';
import CSSImageSprites from './CSSImageSprites';
import CSSAttrSelectors from './CSSAttrSelectors';
import CSSForms from './CSSForms';
import CSSCounters from './CSSCounters';
import CSSWebsiteLayout from './CSSWebsiteLayout';
import CSSSpecificity from './CSSSpecificity';
import CSSImportant from './CSSImportant';
import CSSMathFunctions from './CSSMathFunctions';
import CSSPerformance from './CSSPerformance';
import CSSAccessibility from './CSSAccessibility';
import CSSAnimation from './CSSAnimation';
import CSSKeyframsrule from './CSSKeyframsrule';
import CSSPseudoelements from './CSSPseudoelements';
import CSSPseudoclasses from './CSSPseudoclasses';
import CSSradialgradient from './CSSradialgradient';
import CSStranslate from './CSStranslate';
import CSSgradient from './CSSgradient';
import CSSminify from './CSSminify';
import CSSLoader from './CSSLoader';
import CSSunits from  './CSSunits';
import Combinators from './Combinators';
import CSSmasking from  './CSSmasking';
import CSSTransition from './CSSTransition';
import CSSTooltips from './CSSTooltips';
import CSSTooltipAnimation from './CSSTooltipAnimation';
import CSSMediaQuery from './CSSMediaQuery';
import CSS2DTransform from './CSS2DTransform';
import CSS3DTransform from './CSS3DTransform';
import CSSAuralMedia from './CSSAuralMedia';
import CSSUserinterface from './CSSUserinterface';
import CSSPagination from './CSSPagination';
import CSSBoxSizing from './CSSBoxSizing';
import CSSproperty from './CSSproperty';
import CSSobjectfit from './CSSobjectfit';
import CSSobjectposition from './CSSobjectposition';
import CSSImageshapes from './CSSImageshapes';
import CSSImagefilters from './CSSImagefilters';
import CSSImageCentering from './CSSImageCentering';
import CSSImageStyling from './CSSImageStyling';
import CSSWebfonts from './CSSWebfonts';
import CSSTextEffects from './CSSTextEffects';
import CSSShadows from './CSSShadows';
import CSSborderimages from './CSSborderimages';
import CSSborderradius from './CSSborderradius';
import FlexboxIntro from './FlexboxIntro';
import FlexContainer from './FlexContainer';
import FlexItems from './FlexItems';
import FlexResponsive from './FlexResponsive';
import GridIntro from './GridIntro';
import GridColumnsRows from './GridColumnsRows';
import GridContainer from './GridContainer';
import CSSLayout from './CSSLayout';
import HTMLItems from './HTMLItems';
import CSSTable from './CSSTable';
import CSSBoxModel from './CSSBoxModel';
import RWDIntro from './CSSRWDIntro';
import RWDViewport from './RWDViewport';
import RWDGridView from './RWDGridView';
import RWDMediaQueries from './RWDMediaQueries';
import RWDimages from './RWDimages';
import RWDVideos from './RWDVideos';
import RWDFrameworks from './RWDFrameworks';
import RWDTemplates from './RWDTemplates';
import CSSTemplates from './CSSTemplates';
import CSSExamples from './CSSExamples';
import CSSEditor from './CSSEditor';
import CSSSnippets from './CSSSnippets';
import CSSQuiz from './CSSQuiz';
import CSSExercises from './CSSExercises';
import CSSWebsite from './CSSWebsite';
import CSSSyllabus from './CSSSyllabus';
import CSSStudyplan from './CSSStudyplan';
import CSSBootcamp from './CSSBootcamp';
import CSSAtrules from './CSSAtrules';
import CSSAnimatableProperties from './CSSAnimatableProperties';
import CSSAuralProperties from './CSSAuralProperties';
import CSSColourValues from './CSSColourValues';
import CSSColourName from './CSSColourName';
import CSSWebSafeFonts from './CSSWebSafeFonts';
import CSSReference from './CSSReference';
import CSSSelectors from './CSSSelectors';
import CSSPXEMConverter from './CSSPXEMConverter';
import CSSDefaultvalues from './CSSDefaultvalues';
import CSSBrowserSupport from './CSSBrowserSupport';

const Css = () => {      
const [isOpen, setIsOpen] = useState(false);
const [showpage,setshowpage] = useState(null);

const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

    useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


    const renderpage = () => {
        switch (showpage) {
            case 'WhatisCSS':
              return <WhatisCSS/>
              case 'CSSSyntax':
                return <CSSSyntax/>
                case 'Selector':
                  return <Selector/>
                case 'HowToAddCSS':
                  return <HowToAddCSS/>
                case 'InlineCSS':
                  return <InlineCSS/>
                case 'InternalCSS':
                  return <InternalCSS/>
                case 'ExternalCSS':
                  return <ExternalCSS/>
                case 'CSSComments':
                  return <CSSComments/>
                case 'CSSBackground':
                  return <CSSBackground/>
                case 'CSSBorder':
                  return <CSSBorder/>
                case 'CSSBorderradius':
                  return <CSSBorderradius/>
                case 'CSSBordercollapse':
                  return <CSSBordercollapse/>
                case 'CSSBorderspacing':
                  return <CSSBorderspacing/>
                case 'CSSDisplay':
                  return <CSSDisplay/>
                case 'Cursor':
                  return <Cursor/>
                case 'CSSButtons':
                  return <CSSButtons/>
                case 'CSSFloat':
                  return <CSSFloat/>
                case 'CSSFont':
                  return <CSSFont/>
                case 'Fontsize':
                  return <Fontsize/>
                case 'FontFamily':
                  return <FontFamily/>
                case 'FontWeight':
                  return <FontWeight/>
                case 'Fontstretch':
                  return <Fontstretch/>
                case 'Colours':
                  return <Colours/>
                case 'Hover':
                  return <Hover/>
                case 'Padding':
                  return <Padding/>
                case 'Margine':
                  return <Margine/>
                case 'HeightWidth':
                  return <HeightWidth/>
                case 'BoxModel':
                  return <BoxModel/>
                case 'CSSOutline':
                  return <CSSOutline/>
                case 'CSSText':
                  return <CSSText/>
                case 'CSSFonts':
                  return <CSSFonts/>
                case 'CSSIcon':
                  return <CSSIcon/>
                case 'CSSLinks':
                  return <CSSLinks/>
                case 'CSSLists':
                  return <CSSLists/>
                case 'CSSTables':
                  return <CSSTables/>
                case 'Display':
                  return <Display/>
                case 'Maxwidth':
                  return <Maxwidth/>
                case 'Position':
                  return <Position/>
                case 'CSSZindex':
                  return <CSSZindex/>
                case 'CSSOverflow':
                  return <CSSOverflow/>
                case 'CSSInlineblock':
                  return <CSSInlineblock/>
                case 'CSSAlign':
                  return <CSSAlign/>
                case 'CSSCombinators':
                  return <CSSCombinators/>
                case 'CSSOpacity':
                  return <CSSOpacity/>
                case 'CSSNavigationBar':
                  return <CSSNavigationBar/>
                case 'CSSDropdowns':
                  return <CSSDropdowns/>
                case 'CSSImageGallery':
                  return <CSSImageGallery/>
                case 'CSSImageSprites':
                  return <CSSImageSprites/>
                case 'CSSAttrSelectors':
                  return <CSSAttrSelectors/>
                case 'CSSForms':
                  return <CSSForms/>
                case 'CSSCounters':
                  return <CSSCounters/>
                case 'CSSWebsiteLayout':
                  return <CSSWebsiteLayout/>
                case 'CSSSpecificity':
                  return <CSSSpecificity/>
                case 'CSSImportant':
                  return <CSSImportant/>
                case 'CSSMathFunctions':
                  return <CSSMathFunctions/>
                case 'CSSPerformance':
                  return <CSSPerformance/>
                case 'CSSAccessibility':
                  return <CSSAccessibility/>
                case 'CSSAnimation':
                  return <CSSAnimation/>
                case 'CSSKeyframsrule':
                  return <CSSKeyframsrule/>
                case 'CSSPseudoelements':
                  return <CSSPseudoelements/>
                case 'CSSPseudoclasses':
                  return <CSSPseudoclasses/>
                case 'CSSradialgradient':
                  return <CSSradialgradient/>
                case 'CSStranslate':
                  return <CSStranslate/>
                case 'CSSgradient':
                  return <CSSgradient/>
                case 'CSSminify':
                  return <CSSminify/>
                case 'CSSLoader':
                  return <CSSLoader/>
                case 'CSSunits':
                  return <CSSunits/>
                case 'Combinators':
                  return <Combinators/>
                case 'CSSmasking':
                  return <CSSmasking/>
                case 'CSSTransition':
                  return <CSSTransition/>
                case 'CSSTooltips':
                  return <CSSTooltips/>
                case 'CSSTooltipAnimation':
                  return <CSSTooltipAnimation/>
                case 'CSSMediaQuery':
                  return <CSSMediaQuery/>
                case 'CSS2DTransform':
                  return <CSS2DTransform/>
                case 'CSS3DTransform':
                  return <CSS3DTransform/>
                case 'CSSAuralMedia':
                  return <CSSAuralMedia/>
                case 'CSSUserinterface':
                  return <CSSUserinterface/>
                case 'CSSPagination':
                  return <CSSPagination/> 
                case 'CSSBoxSizing':
                  return <CSSBoxSizing/>
                case 'CSSproperty':
                  return <CSSproperty/>
                case 'CSSobjectfit':
                  return <CSSobjectfit/>
                case 'CSSobjectposition':
                  return <CSSobjectposition/>
                case 'CSSImageshapes':
                  return <CSSImageshapes/>
                case 'CSSImagefilters':
                  return <CSSImagefilters/>
                case 'CSSImageCentering':
                  return <CSSImageCentering/>
                case 'CSSImageStyling':
                  return <CSSImageStyling/>
                case 'CSSWebfonts':
                  return <CSSWebfonts/>
                case 'CSSTextEffects':
                  return <CSSTextEffects/>
                case 'CSSShadows':
                  return <CSSShadows/>
                case 'CSSborderimages':
                  return <CSSborderimages/>
                case 'CSSborderradius':
                  return <CSSborderradius/>
                case 'FlexboxIntro':
                  return <FlexboxIntro/>
                case 'FlexContainer':
                  return <FlexContainer/>
                case 'FlexItems':
                  return <FlexItems/>
                case 'FlexResponsive':
                  return <FlexResponsive/>
                case 'GridIntro':
                  return <GridIntro/>
                case 'GridColumnsRows':
                  return <GridColumnsRows/>
                case 'GridContainer':
                  return <GridContainer/>
                case 'HTMLItems':
                  return <HTMLItems/>
                case 'CSSLayout':
                  return <CSSLayout/>
                case 'CSSTable':
                  return <CSSTable/>
                case 'CSSBoxModel':
                  return <CSSBoxModel/>
                case 'RWDIntro':
                  return <RWDIntro/>
                case 'RWDViewport':
                  return <RWDViewport/>
                case 'RWDGridView':
                  return <RWDGridView/>
                case 'RWDMediaQueries':
                  return <RWDMediaQueries/>
                case 'RWDimages':
                  return <RWDimages/>
                case 'RWDVideos':
                  return <RWDVideos/>
                case 'RWDFrameworks':
                  return <RWDFrameworks/>
                case 'RWDTemplates':
                  return <RWDTemplates/>
                  case'CSSTemplates':
                  return <CSSTemplates/>
                  case'CSSExamples':
                  return <CSSExamples/>
                case 'CSSEditor':
                  return <CSSEditor/>
                case 'CSSSnippets':
                  return <CSSSnippets/>
                case 'CSSQuiz':
                  return <CSSQuiz/>
                case 'CSSExercises':
                  return <CSSExercises/>
                case 'CSSWebsite':
                  return <CSSWebsite/>
                case 'CSSSyllabus':
                  return <CSSSyllabus/>
                case 'CSSStudyplan':
                  return <CSSStudyplan/>
                case 'CSSBootcamp':
                  return <CSSBootcamp/>
                case 'CSSAtrules':
                  return <CSSAtrules/>
                  case 'CSSAnimatableProperties':
                    return <CSSAnimatableProperties/>
                    case 'CSSColourValues':
                      return <CSSColourValues/>
                      case 'CSSColourName':
                        return <CSSColourName/>
                        case 'CSSWebSafeFonts':
                          return <CSSWebSafeFonts/>
                          case 'CSSAuralProperties':
                            return <CSSAuralProperties/>
                            case 'CSSReference':
                              return <CSSReference/>
                              case 'CSSSelectors':
                                return <CSSSelectors/>
                                case 'CSSPXEMConverter':
                                  return <CSSPXEMConverter/>
                                  case 'CSSDefaultvalues':
                                    return <CSSDefaultvalues/>
                                    case 'CSSBrowserSupport':
                                      return <CSSBrowserSupport/>
                                      default:
                                        return ( <CSSIntroduction/>
)
        }
    }


    return (
        <div className="flex mt-16">
                    {/* Hamburg Butt */}
                  <button
                  className="bg-gray-200 text-2xl px-3 fixed top-16 left-4 z-50 sm:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                  ref={buttonRef}>
                  <i className="fas fa-bars"></i>
                </button>
        
                {/* Sidebar */}
                <div className={`lg:sticky lg:left-0 lg:top-16 w-60 fixed h-[calc(100vh-4rem)] overflow-y-auto
                               bg-gray-200 px-5 py-6 z-40 transform transition-transform
                                duration-300 shadow-lg sm:translate-x-0 sm:block   
                                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                                ref={sidebarRef}>
        
                    <h1 className="text-xl font-semibold mt-5 mb-2">CSS Tutorial</h1>
                    <ul className="space-y-1 text-sm">       
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'WhatisCSS' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('WhatisCSS')}}>What is  CSS ?</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSSyntax' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('CSSSyntax')}}>CSS Syntax </li> 
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Selector' ? 'bg-gray-300' : ''}`}    onClick={()=>{setshowpage('Selector')}}>CSS Selector</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'HowToAddCSS' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('HowToAddCSS')}}>How To Add CSS</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'InlineCSS' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('InlineCSS')}}>Inline CSS</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'InternalCSS' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('InternalCSS')}}>Internal CSS</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'ExternalCSS' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('ExternalCSS')}}>External CSS</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSComments' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSComments')}}>CSS Comments</li>
                    </ul>


                   <h1 className="text-xl font-semibold mt-5 mb-2">CSS Properties</h1>
                   <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSBackground' ? 'bg-gray-300' : ''}`}     onClick={()=>{setshowpage('CSSBackground')}}>CSS Background</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSBorder' ? 'bg-gray-300' : ''}`}         onClick={()=>{setshowpage('CSSBorder')}}>CSS Border</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSBorderradius' ? 'bg-gray-300': ''}`}   onClick={()=>{setshowpage('CSSBorderradius')}}>CSS Border-radius</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSBordercollapse' ? 'bg-gray-300': ''}`} onClick={()=>{setshowpage('CSSBordercollapse')}}>CSS Border-collapse</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSBorderspacing' ? 'bg-gray-300': ''}`}  onClick={()=>{setshowpage('CSSBorderspacing')}}>CSS Border-spacing</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSDisplay' ? 'bg-gray-300': ''}`}        onClick={()=>{setshowpage('CSSDisplay')}}>CSS Display</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Cursor' ? 'bg-gray-300': ''}`}            onClick={()=>{setshowpage('Cursor')}}>CSS Cursor properties with example </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSButtons' ? 'bg-gray-300': ''}`}        onClick={()=>{setshowpage('CSSButtons')}}>CSS Buttons </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSFloat' ? 'bg-gray-300': ''}`}          onClick={()=>{setshowpage('CSSFloat')}}>CSS Float </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSFont' ? 'bg-gray-300': ''}`}           onClick={()=>{setshowpage('CSSFont')}}>CSS Font </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Fontsize' ? 'bg-gray-300': ''}`}          onClick={()=>{setshowpage('Fontsize')}}>CSS Font-size</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'FontFamily' ? 'bg-gray-300': ''}`}        onClick={()=>{setshowpage('FontFamily')}}>CSS Font-Family </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'FontWeight' ? 'bg-gray-300': ''}`}        onClick={()=>{setshowpage('FontWeight')}}>CSS Font-Weight </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Fontstretch' ? 'bg-gray-300': ''}`}       onClick={()=>{setshowpage('Fontstretch')}}>CSS Font-stretch </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Colours' ? 'bg-gray-300': ''}`}           onClick={()=>{setshowpage('Colours')}}>CSS Colours </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Hover' ? 'bg-gray-300': ''}`}             onClick={()=>{setshowpage('Hover')}}>CSS Hover </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Padding' ? 'bg-gray-300': ''}`}           onClick={()=>{setshowpage('Padding')}}>CSS padding</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Margine' ? 'bg-gray-300': ''}`}           onClick={()=>{setshowpage('Margine')}}>CSS margine</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'HeightWidth' ? 'bg-gray-300': ''}`}       onClick={()=>{setshowpage('HeightWidth')}}>CSS Height/Width</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'BoxModel' ? 'bg-gray-300': ''}`}          onClick={()=>{setshowpage('BoxModel')}}>CSS Box Model</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSOutline' ? 'bg-gray-300': ''}`}        onClick={()=>{setshowpage('CSSOutline')}}>CSS Outline</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSText' ? 'bg-gray-300': ''}`}           onClick={()=>{setshowpage('CSSText')}}>CSS Text</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSFonts' ? 'bg-gray-300': ''}`}          onClick={()=>{setshowpage('CSSFonts')}}>CSS Fonts</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSIcon' ? 'bg-gray-300': ''}`}           onClick={()=>{setshowpage('CSSIcon')}}>CSS Icon</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSLinks' ? 'bg-gray-300': ''}`}          onClick={()=>{setshowpage('CSSLinks')}}>CSS Links</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSLists' ? 'bg-gray-300': ''}`}          onClick={()=>{setshowpage('CSSLists')}}>CSS Lists</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSTables' ? 'bg-gray-300': ''}`}         onClick={()=>{setshowpage('CSSTables')}}>CSS Tables</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Display' ? 'bg-gray-300' : ''}`}           onClick={()=>{setshowpage('Display')}}>CSS Display</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Maxwidth' ? 'bg-gray-300' : ''}`}          onClick={()=>{setshowpage('Maxwidth')}}>CSS Max-width</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Position' ? 'bg-gray-300' : ''}`}          onClick={()=>{setshowpage('Position')}}>CSS Position</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSZindex' ? 'bg-gray-300' : ''}`}         onClick={()=>{setshowpage('CSSZindex')}}>CSS Z-index</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSOverflow' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('CSSOverflow')}}>CSS Overflow</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSInlineblock' ? 'bg-gray-300' : ''}`}    onClick={()=>{setshowpage('CSSInlineblock')}}>CSS Inline-block</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSAlign' ? 'bg-gray-300' : ''}`}          onClick={()=>{setshowpage('CSSAlign')}}>CSS Align</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSCombinators' ? 'bg-gray-300' : ''}`}    onClick={()=>{setshowpage('CSSCombinators')}}>CSS Combinators</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSOpacity' ? 'bg-gray-300' : ''}`}        onClick={()=>{setshowpage('CSSOpacity')}}>CSS Opacity</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSNavigationBar' ? 'bg-gray-300' : ''}`}  onClick={()=>{setshowpage('CSSNavigationBar')}}>CSS Navigation Bar</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSDropdowns' ? 'bg-gray-300' : ''}`}      onClick={()=>{setshowpage('CSSDropdowns')}}>CSS Dropdowns</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSImageGallery' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('CSSImageGallery')}}>CSS Image Gallery</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSImageSprites' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('CSSImageSprites')}}>CSS Image Sprites</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSAttrSelectors' ? 'bg-gray-300' : ''}`}  onClick={()=>{setshowpage('CSSAttrSelectors')}}>CSS Attr Selectors</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSForms' ? 'bg-gray-300' : ''}`}          onClick={()=>{setshowpage('CSSForms')}}>CSS Forms</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSCounters' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('CSSCounters')}}>CSS Counters</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSWebsiteLayout' ? 'bg-gray-300' : ''}`}  onClick={()=>{setshowpage('CSSWebsiteLayout')}}>CSS Website Layout</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSSpecificity' ? 'bg-gray-300' : ''}`}    onClick={()=>{setshowpage('CSSSpecificity')}}>CSS Specificity</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSImportant' ? 'bg-gray-300' : ''}`}      onClick={()=>{setshowpage('CSSImportant')}}>CSS !Important</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSMathFunctions' ? 'bg-gray-300' : ''}`}  onClick={()=>{setshowpage('CSSMathFunctions')}}>CSS Math Functions</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSPerformance' ? 'bg-gray-300' : ''}`}    onClick={()=>{setshowpage('CSSPerformance')}}>CSS Performance</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSAccessibility' ? 'bg-gray-300' : ''}`}  onClick={()=>{setshowpage('CSSAccessibility')}}>CSS Accessibility</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">CSS Advanced</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSAnimation' ? 'bg-gray-300' : ''}`}      onClick={()=>{setshowpage('CSSAnimation')}}>CSS Animation</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSKeyframsrule' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('CSSKeyframsrule')}}>CSS @Keyframs rule</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSPseudoelements' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSPseudoelements')}}>CSS Pseudo-elements </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSPseudoclasses' ? 'bg-gray-300' : ''}`}  onClick={()=>{setshowpage('CSSPseudoclasses')}}>CSS Pseudo-classes</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSradialgradient' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSradialgradient')}}>CSS radial-gradient</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSStranslate' ? 'bg-gray-300' : ''}`}      onClick={()=>{setshowpage('CSStranslate')}}>CSS translate</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSgradient' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('CSSgradient')}}>CSS gradient</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSminify' ? 'bg-gray-300' : ''}`}         onClick={()=>{setshowpage('CSSminify')}}>CSS minify</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSLoader' ? 'bg-gray-300' : ''}`}         onClick={()=>{setshowpage('CSSLoader')}}>CSS Loader</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSunits' ? 'bg-gray-300' : ''}`}          onClick={()=>{setshowpage('CSSunits')}}>CSS units</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Combinators' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('Combinators')}}>CSS combinators</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSmasking' ? 'bg-gray-300' : ''}`}        onClick={()=>{setshowpage('CSSmasking')}}>CSS masking</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSTransition' ? 'bg-gray-300' : ''}`}     onClick={()=>{setshowpage('CSSTransition')}}>CSS Transition</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSTooltips' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('CSSTooltips')}}>CSS Tooltips</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSTooltipAnimation' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSTooltipAnimation')}}>CSS Tooltip Animation</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSMediaQuery' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('CSSMediaQuery')}}>CSS @Media Query</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSS2DTransform' ? 'bg-gray-300' : ''}`}      onClick={()=>{setshowpage('CSS2DTransform')}}>CSS 2D Transform</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSS3DTransform' ? 'bg-gray-300' : ''}`}      onClick={()=>{setshowpage('CSS3DTransform')}}>CSS 3D Transform</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSAuralMedia' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('CSSAuralMedia')}}>CSS Aural Media</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSUserinterface' ? 'bg-gray-300' : ''}`}    onClick={()=>{setshowpage('CSSUserinterface')}}>CSS User interface</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSPagination' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('CSSPagination')}}>CSS Pagination</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSBoxSizing' ? 'bg-gray-300' : ''}`}        onClick={()=>{setshowpage('CSSBoxSizing')}}>CSS Box Sizing</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSproperty' ? 'bg-gray-300' : ''}`}         onClick={()=>{setshowpage('CSSproperty')}}>CSS @property</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSobjectfit' ? 'bg-gray-300' : ''}`}        onClick={()=>{setshowpage('CSSobjectfit')}}>CSS object-fit</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSobjectposition' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('CSSobjectposition')}}>CSS object-position</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSImageshapes' ? 'bg-gray-300' : ''}`}      onClick={()=>{setshowpage('CSSImageshapes')}}>CSS Image shapes</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSImagefilters' ? 'bg-gray-300' : ''}`}     onClick={()=>{setshowpage('CSSImagefilters')}}>CSS Image filters</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSImageCentering' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('CSSImageCentering')}}>CSS Image Centering</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSImageStyling' ? 'bg-gray-300' : ''}`}     onClick={()=>{setshowpage('CSSImageStyling')}}>CSS Image Styling</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSWebfonts' ? 'bg-gray-300' : ''}`}         onClick={()=>{setshowpage('CSSWebfonts')}}>CSS Web fonts</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSTextEffects' ? 'bg-gray-300' : ''}`}      onClick={()=>{setshowpage('CSSTextEffects')}}>CSS Text Effects</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSShadows' ? 'bg-gray-300' : ''}`}          onClick={()=>{setshowpage('CSSShadows')}}>CSS Shadows</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSborderimages' ? 'bg-gray-300' : ''}`}     onClick={()=>{setshowpage('CSSborderimages')}}>CSS border images</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSborderradius' ? 'bg-gray-300' : ''}`}     onClick={()=>{setshowpage('CSSborderradius')}}>CSS border radius</li>
                    </ul>
        
                    <h1 className="text-xl font-semibold mt-5 mb-2">CSS Flexbox</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'FlexboxIntro' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('FlexboxIntro')}}>Flexbox Intro</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'FlexContainer' ? 'bg-gray-300' : ''}`}  onClick={()=>{setshowpage('FlexContainer')}}>Flex Container</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'FlexItems' ? 'bg-gray-300' : ''}`}      onClick={()=>{setshowpage('FlexItems')}}>Flex Items</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'FlexResponsive' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('FlexResponsive')}}>Flex Responsive</li>
                    </ul>


                    <h1 className="text-xl font-semibold mt-5 mb-2">CSS Grid</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'GridIntro' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('GridIntro')}}>Grid Intro</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'GridColumnsRows' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('GridColumnsRows')}}>Grid Columns/Rows</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'GridContainer' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('GridContainer')}}>Grid Container</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'HTMLItems' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('HTMLItems')}}>HTML Items</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">CSS Design</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gra300 ${showpage === 'CSSLayout' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('CSSLayout')}}>CSS Layout</li>
                      <li className={`cursor-pointer rounded hover:bg-gra300 ${showpage === 'CSSTable' ? 'bg-gray-300' : ''}`}    onClick={()=>{setshowpage('CSSTable')}}>CSS Table</li>
                      <li className={`cursor-pointer rounded hover:bg-gra300 ${showpage === 'CSSBoxModel' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSBoxModel')}}>CSS Box Model</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">CSS Responsive</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gra3 ${showpage === 'RWDIntro' ? 'bg-gray-300' : ''}`}        onClick={()=>{setshowpage('RWDIntro')}}>RWD Intro </li>
                      <li className={`cursor-pointer rounded hover:bg-gra3 ${showpage === 'RWDViewport' ? 'bg-gray-300' : ''}`}     onClick={()=>{setshowpage('RWDViewport')}}>RWD Viewport</li>
                      <li className={`cursor-pointer rounded hover:bg-gra3 ${showpage === 'RWDGridView' ? 'bg-gray-300' : ''}`}     onClick={()=>{setshowpage('RWDGridView')}}>RWD Grid View</li>
                      <li className={`cursor-pointer rounded hover:bg-gra3 ${showpage === 'RWDMediaQueries' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('RWDMediaQueries')}}>RWD Media Queries</li>
                      <li className={`cursor-pointer rounded hover:bg-gra3 ${showpage === 'RWDimages' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('RWDimages')}}>RWD images</li>
                      <li className={`cursor-pointer rounded hover:bg-gra3 ${showpage === 'RWDVideos' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('RWDVideos')}}>RWD Videos</li>
                      <li className={`cursor-pointer rounded hover:bg-gra3 ${showpage === 'RWDFrameworks' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('RWDFrameworks')}}>RWD Frameworks</li>
                      <li className={`cursor-pointer rounded hover:bg-gra3 ${showpage === 'RWDTemplates' ? 'bg-gray-300' : ''}`}    onClick={()=>{setshowpage('RWDTemplates')}}>RWD Templates</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">CSS Examples</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSTemplates' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSTemplates')}}>CSS Templates</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSExamples' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSExamples')}}>CSS Examples</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSEditor' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSEditor')}}>CSS Editor</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSSnippets' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSSnippets')}}>CSS Snippets</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSQuiz' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSQuiz')}}>CSS Quiz</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSExercises' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSExercises')}}>CSS Exercises</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSWebsite' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSWebsite')}}>CSS Website</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSSyllabus' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSSyllabus')}}>CSS Syllabus</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSStudyplan' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSStudyplan')}}>CSS Study plan</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSBootcamp' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSBootcamp')}}>CSS Bootcamp</li>
                    </ul>
                    
                     <h1 className="text-xl font-semibold mt-5 mb-2">CSS References </h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSAtrules' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSAtrules')}}>CSS At-rules</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSAnimatableProperties' ? 'bg-gray-300' : ''}`} onClick={()=>{setshowpage('CSSAnimatableProperties')}}>CSS Animatable Properties</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSAuralProperties' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('CSSAuralProperties')}}>CSS Aural Properties </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSColourValues' ? 'bg-gray-300' : ''}`}     onClick={()=>{setshowpage('CSSColourValues')}}>CSS Colour Values </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSColourName' ? 'bg-gray-300' : ''}`}       onClick={()=>{setshowpage('CSSColourName')}}>CSS Colour Name</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSWebSafeFonts' ? 'bg-gray-300' : ''}`}     onClick={()=>{setshowpage('CSSWebSafeFonts')}}>CSS Web Safe Fonts </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSReference' ? 'bg-gray-300' : ''}`}        onClick={()=>{setshowpage('CSSReference')}}>CSS Reference</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSSelectors' ? 'bg-gray-300' : ''}`}        onClick={()=>{setshowpage('CSSSelectors')}}>CSS Selectors</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSPXEMConverter' ? 'bg-gray-300' : ''}`}    onClick={()=>{setshowpage('CSSPXEMConverter')}}>CSS PX-EM Converter</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSDefaultvalues' ? 'bg-gray-300' : ''}`}    onClick={()=>{setshowpage('CSSDefaultvalues')}}>CSS Default values</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CSSBrowserSupport' ? 'bg-gray-300' : ''}`}   onClick={()=>{setshowpage('CSSBrowserSupport')}}>CSS Browser Support</li>
                    </ul>
                    </div>
                    <div className={`transition-all duration-300 p-4 w-full mt-10
                      ${isOpen ? "sm:ml-64" : "sm:ml-0"}`}>
                      {showpage &&(
                        <button onClick={() => setshowpage(null)}
                         className='flex items-center mb-4 bg-green-300 px-4
                         py-2 text-white rounded text-sm mt-2'>
                          <FiArrowLeft/>
                          Back
                        </button>
                      )}
                      {renderpage()}
     
                    </div>
     </div>
)}
        
 export default Css;



 