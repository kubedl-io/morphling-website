"use strict";(self.webpackChunkmorphling_website=self.webpackChunkmorphling_website||[]).push([[277],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),p=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return l.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?l.createElement(g,i(i({ref:n},c),{},{components:t})):l.createElement(g,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},149:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var l=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],o={sidebar_position:3},s="Install Using YAMLs",p={unversionedId:"install-using-yaml",id:"install-using-yaml",title:"Install Using YAMLs",description:"Install CRDs",source:"@site/docs/install-using-yaml.md",sourceDirName:".",slug:"/install-using-yaml",permalink:"/docs/install-using-yaml",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install-using-yaml.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install Using Helm",permalink:"/docs/install-using-helm"},next:{title:"Quick Start",permalink:"/docs/quick-start"}},c={},u=[{value:"Install CRDs",id:"install-crds",level:2},{value:"Install Morphling Components",id:"install-morphling-components",level:3},{value:"Check Installing",id:"check-installing",level:3},{value:"Uninstall Morphling controller",id:"uninstall-morphling-controller",level:2},{value:"Delete CRDs",id:"delete-crds",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-using-yamls"},"Install Using YAMLs"),(0,a.kt)("h2",{id:"install-crds"},"Install CRDs"),(0,a.kt)("p",null,"From ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/morphling"},"git root directory"),", run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"kubectl apply -f config/crd/bases\n")),(0,a.kt)("h3",{id:"install-morphling-components"},"Install Morphling Components"),(0,a.kt)("p",null,"The official Morphling component images are hosted under ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kubedl"},"docker hub"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"kubectl create namespace morphling-system\nkubectl apply -k manifests/configmap\nkubectl apply -k manifests/controllers\nkubectl apply -k manifests/pv\nkubectl apply -k manifests/mysql-db\nkubectl apply -k manifests/db-manager\nkubectl apply -k manifests/algorithm\n")),(0,a.kt)("p",null,"To deploy Morphling UI, run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -k manifests/ui\n")),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"ui"},"Morphling UI docs \u2192")),(0,a.kt)("p",null,"By default, Morphling components will be installed under ",(0,a.kt)("inlineCode",{parentName:"p"},"morphling-system")," namespace."),(0,a.kt)("h3",{id:"check-installing"},"Check Installing"),(0,a.kt)("p",null,"Check if all components are running successfully:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"kubectl get deployment -n morphling-system\n")),(0,a.kt)("p",null,"Expected output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"NAME                         READY   UP-TO-DATE   AVAILABLE   AGE\nmorphling-algorithm-server   1/1     1            1           34s\nmorphling-controller         1/1     1            1           9m23s\nmorphling-db-manager         1/1     1            1           9m11s\nmorphling-mysql              1/1     1            1           9m15s\nmorphling-ui                 1/1     1            1           4m53s\n")),(0,a.kt)("p",null,"Please wait until all these deployments are ",(0,a.kt)("inlineCode",{parentName:"p"},"ready"),"."),(0,a.kt)("h2",{id:"uninstall-morphling-controller"},"Uninstall Morphling controller"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bash script/undeploy.sh\n")),(0,a.kt)("h2",{id:"delete-crds"},"Delete CRDs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete crd profilingexperiments.morphling.kubedl.io samplings.morphling.kubedl.io trials.morphling.kubedl.io\n")))}d.isMDXComponent=!0}}]);