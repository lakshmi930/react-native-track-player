"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),k=r,y=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7805:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:2},s="Getting Started",c={unversionedId:"basics/getting-started",id:"basics/getting-started",title:"Getting Started",description:"First of all, you need to set up the player. This usually takes less than a",source:"@site/docs/basics/getting-started.md",sourceDirName:"basics",slug:"/basics/getting-started",permalink:"/docs/basics/getting-started",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/docs/basics/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"app",previous:{title:"Installation",permalink:"/docs/basics/installation"},next:{title:"Playback Service",permalink:"/docs/basics/playback-service"}},p={},u=[{value:"Controlling the Player",id:"controlling-the-player",level:2},{value:"Adding Tracks to the Playback Queue",id:"adding-tracks-to-the-playback-queue",level:3},{value:"Player Information",id:"player-information",level:3},{value:"Changing Playback State",id:"changing-playback-state",level:3},{value:"Controlling the Queue",id:"controlling-the-queue",level:3},{value:"Playback Events",id:"playback-events",level:4},{value:"Example",id:"example",level:4},{value:"Progress Updates",id:"progress-updates",level:2},{value:"Example",id:"example-1",level:4},{value:"Track Player Options",id:"track-player-options",level:2},{value:"Example",id:"example-2",level:4},{value:"Notes",id:"notes",level:3}],d={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"First of all, you need to set up the player. This usually takes less than a\nsecond:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import TrackPlayer from 'react-native-track-player';\n\nawait TrackPlayer.setupPlayer({})\n// The player is ready to be used\n")),(0,o.kt)("p",null,"You also need to register a ",(0,o.kt)("a",{parentName:"p",href:"/docs/basics/playback-service"},"playback service")," right after\nregistering the main component of your app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// AppRegistry.registerComponent(...);\nTrackPlayer.registerPlaybackService(() => require('./service'));\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// service.js\nmodule.exports = async function() {\n    // This service needs to be registered for the module to work\n    // but it will be used later in the "Receiving Events" section\n}\n')),(0,o.kt)("h2",{id:"controlling-the-player"},"Controlling the Player"),(0,o.kt)("h3",{id:"adding-tracks-to-the-playback-queue"},"Adding Tracks to the Playback Queue"),(0,o.kt)("p",null,"You can add a track to the player using a url or by requiring a file in the app\nbundle or on the file system."),(0,o.kt)("p",null,"First of all, you need to create a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/objects/track"},"track object"),", which\nis a plain javascript object with a number of properties describing the track.\nThen add the track to the queue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"var track = {\n    url: 'http://example.com/avaritia.mp3', // Load media from the network\n    title: 'Avaritia',\n    artist: 'deadmau5',\n    album: 'while(1<2)',\n    genre: 'Progressive House, Electro House',\n    date: '2014-05-20T07:00:00+00:00', // RFC 3339\n    artwork: 'http://example.com/cover.png', // Load artwork from the network\n    duration: 402 // Duration in seconds\n};\n\nconst track2 = {\n    url: require('./coelacanth.ogg'), // Load media from the app bundle\n    title: 'Coelacanth I',\n    artist: 'deadmau5',\n    artwork: require('./cover.jpg'), // Load artwork from the app bundle\n    duration: 166\n};\n\nconst track3 = {\n    url: 'file:///storage/sdcard0/Downloads/artwork.png', // Load media from the file system\n    title: 'Ice Age',\n    artist: 'deadmau5',\n     // Load artwork from the file system:\n    artwork: 'file:///storage/sdcard0/Downloads/cover.png',\n    duration: 411\n};\n\n// You can then [add](https://react-native-track-player.js.org/docs/api/functions/queue#addtracks-insertbeforeindex) the items to the queue\nawait TrackPlayer.add([track1, track2, track3]);\n")),(0,o.kt)("h3",{id:"player-information"},"Player Information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"\nimport TrackPlayer, { State } from 'react-native-track-player';\n\nconst state = await TrackPlayer.getState();\nif (state === State.Playing) {\n    console.log('The player is playing');\n};\n\nlet trackIndex = await TrackPlayer.getCurrentTrack();\nlet trackObject = await TrackPlayer.getTrack(trackIndex);\nconsole.log(`Title: ${trackObject.title}`);\n\nconst position = await TrackPlayer.getPosition();\nconst duration = await TrackPlayer.getDuration();\nconsole.log(`${duration - position} seconds left.`);\n")),(0,o.kt)("h3",{id:"changing-playback-state"},"Changing Playback State"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"TrackPlayer.play();\nTrackPlayer.pause();\nTrackPlayer.stop();\nTrackPlayer.reset();\n\n// Seek to 12.5 seconds:\nTrackPlayer.seekTo(12.5);\n\n// Set volume to 50%:\nTrackPlayer.setVolume(0.5);\n")),(0,o.kt)("h3",{id:"controlling-the-queue"},"Controlling the Queue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Skip to a specific track index:\nawait TrackPlayer.skip(trackIndex);\n\n// Skip to the next track in the queue:\nawait TrackPlayer.skipToNext();\n\n// Skip to the previous track in the queue:\nawait TrackPlayer.skipToPrevious();\n\n// Remove two tracks from the queue:\nawait TrackPlayer.remove([trackIndex1, trackIndex2]);\n\n// Retrieve the track objects in the queue:\nconst tracks = await TrackPlayer.getQueue();\nconsole.log(`First title: ${tracks[0].title}`);\n")),(0,o.kt)("h4",{id:"playback-events"},"Playback Events"),(0,o.kt)("p",null,"You can subscribe to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/events#player"},"player events"),", which describe the\nchanging nature of the playback state. For example, subscribe to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Event.PlaybackTrackChanged")," event to be notified when the track has changed or\nsubscribe to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Event.PlaybackState")," event to be notified when the player\nbuffers, plays, pauses and stops."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import TrackPlayer, { Event } from 'react-native-track-player';\n\nconst PlayerInfo = () => {\n    const [trackTitle, setTrackTitle] = useState<string>();\n\n    // do initial setup, set initial trackTitle..\n\n    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {\n        if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {\n            const track = await TrackPlayer.getTrack(event.nextTrack);\n            const {title} = track || {};\n            setTrackTitle(title);\n        }\n    });\n\n    return (\n        <Text>{trackTitle}</Text>\n    );\n}\n")),(0,o.kt)("h2",{id:"progress-updates"},"Progress Updates"),(0,o.kt)("p",null,"Music apps often need an automated way to show the progress of a playing track.\nFor this purpose, we created ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/hooks"},"the hook: ",(0,o.kt)("inlineCode",{parentName:"a"},"useProgress"))," which\nupdates itself automatically."),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import TrackPlayer, { useProgress } from 'react-native-track-player';\n\nconst MyPlayerBar = () => {\n    const progress = useProgress();\n\n    return (\n            // Note: formatTime and ProgressBar are just examples:\n            <View>\n                <Text>{formatTime(progress.position)}</Text>\n                <ProgressBar\n                    progress={progress.position}\n                    buffered={progress.buffered}\n                />\n            </View>\n        );\n\n}\n")),(0,o.kt)("h2",{id:"track-player-options"},"Track Player Options"),(0,o.kt)("p",null,"Track Player can be configured using a number of options. Some of these options\npertain to the media controls available in the lockscreen / notification and how\nthey behave, others describe the availability of capabilities needed for\nplatform specific functionalities like Android Auto."),(0,o.kt)("p",null,"You can change options multiple times. You do not need to specify all the\noptions, just the ones you want to change."),(0,o.kt)("p",null,"For more information about the properties you can set, ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/functions/player#updateoptionsoptions"},"check the\ndocumentation"),"."),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import TrackPlayer, { Capability } from 'react-native-track-player';\n\nTrackPlayer.updateOptions({\n    // Media controls capabilities\n    capabilities: [\n        Capability.Play,\n        Capability.Pause,\n        Capability.SkipToNext,\n        Capability.SkipToPrevious,\n        Capability.Stop,\n    ],\n\n    // Capabilities that will show up when the notification is in the compact form on Android\n    compactCapabilities: [Capability.Play, Capability.Pause],\n\n    // Icons for the notification on Android (if you don't like the default ones)\n    playIcon: require('./play-icon.png'),\n    pauseIcon: require('./pause-icon.png'),\n    stopIcon: require('./stop-icon.png'),\n    previousIcon: require('./previous-icon.png'),\n    nextIcon: require('./next-icon.png'),\n    icon: require('./notification-icon.png')\n});\n")),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("p",null,'In order to keep playing audio in the background, the Android player service\nrequires a notification in order to be in the "foreground" state (allowing it to\nuse more system resources without being killed) which is forced to be "ongoing"\n(not swipable). Because you can not stop the player service by swiping the\nAndroid notification, we highly recommend you to have a stop button in the\nnotification. The button should ',(0,o.kt)("inlineCode",{parentName:"p"},"destroy()")," the player."))}k.isMDXComponent=!0}}]);