"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5557],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(o),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5002:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],s={sidebar_position:8},p="iOS Category Options (ios-only)",l={unversionedId:"api/constants/ios-category-options",id:"api/constants/ios-category-options",title:"iOS Category Options (ios-only)",description:"All iOS Category Options types are made available through the named export IOSCategoryOptions:",source:"@site/docs/api/constants/ios-category-options.md",sourceDirName:"api/constants",slug:"/api/constants/ios-category-options",permalink:"/docs/next/api/constants/ios-category-options",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/docs/api/constants/ios-category-options.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"app",previous:{title:"iOS Category Mode (ios-only)",permalink:"/docs/next/api/constants/ios-category-mode"},next:{title:"Track",permalink:"/docs/next/api/objects/track"}},u={},c=[{value:"<code>MixWithOthers</code>",id:"mixwithothers",level:2},{value:"<code>DuckOthers</code>",id:"duckothers",level:2},{value:"<code>InterruptSpokenAudioAndMixWithOthers</code>",id:"interruptspokenaudioandmixwithothers",level:2},{value:"<code>AllowBluetooth</code>",id:"allowbluetooth",level:2},{value:"<code>AllowBluetoothA2DP</code>",id:"allowbluetootha2dp",level:2},{value:"<code>AllowAirPlay</code>",id:"allowairplay",level:2},{value:"<code>DefaultToSpeaker</code>",id:"defaulttospeaker",level:2}],d={toc:c};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ios-category-options-ios-only"},"iOS Category Options (ios-only)"),(0,r.kt)("p",null,"All iOS Category Options types are made available through the named export ",(0,r.kt)("inlineCode",{parentName:"p"},"IOSCategoryOptions"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { IOSCategoryOptions } from 'react-native-track-player';\n")),(0,r.kt)("h2",{id:"mixwithothers"},(0,r.kt)("inlineCode",{parentName:"h2"},"MixWithOthers")),(0,r.kt)("p",null,"An option that indicates whether audio from this session mixes with audio\nfrom active sessions in other audio apps."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616611-mixwithothers"},"See the Apple Docs ")),(0,r.kt)("h2",{id:"duckothers"},(0,r.kt)("inlineCode",{parentName:"h2"},"DuckOthers")),(0,r.kt)("p",null,"An option that reduces the volume of other audio sessions while audio from\nthis session plays."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616618-duckothers"},"See the Apple Docs ")),(0,r.kt)("h2",{id:"interruptspokenaudioandmixwithothers"},(0,r.kt)("inlineCode",{parentName:"h2"},"InterruptSpokenAudioAndMixWithOthers")),(0,r.kt)("p",null,"An option that determines whether to pause spoken audio content from other\nsessions when your app plays its audio."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616534-interruptspokenaudioandmixwithot"},"See the Apple Docs ")),(0,r.kt)("h2",{id:"allowbluetooth"},(0,r.kt)("inlineCode",{parentName:"h2"},"AllowBluetooth")),(0,r.kt)("p",null,"An option that determines whether Bluetooth hands-free devices appear as\navailable input routes."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616518-allowbluetooth"},"See the Apple Docs ")),(0,r.kt)("h2",{id:"allowbluetootha2dp"},(0,r.kt)("inlineCode",{parentName:"h2"},"AllowBluetoothA2DP")),(0,r.kt)("p",null,"An option that determines whether you can stream audio from this session\nto Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1771735-allowbluetootha2dp"},"See the Apple Docs ")),(0,r.kt)("h2",{id:"allowairplay"},(0,r.kt)("inlineCode",{parentName:"h2"},"AllowAirPlay")),(0,r.kt)("p",null,"An option that determines whether you can stream audio from this session\nto AirPlay devices."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1771736-allowairplay"},"See the Apple Docs ")),(0,r.kt)("h2",{id:"defaulttospeaker"},(0,r.kt)("inlineCode",{parentName:"h2"},"DefaultToSpeaker")),(0,r.kt)("p",null,"An option that determines whether audio from the session defaults to the\nbuilt-in speaker instead of the receiver."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616462-defaulttospeaker"},"See the Apple Docs ")))}h.isMDXComponent=!0}}]);