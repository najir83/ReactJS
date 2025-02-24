const maincontainer = document.querySelector(".root");
function customRender(reactEle, container) {
 /* const domElement = document.createElement(reactEle.type);
  domElement.innerHTML = reactEle.children;
  domElement.setAttribute("href", reactEle.props.href);
  domElement.setAttribute("target", reactEle.props.target);
  container.appendChild(domElement);
  */
//  version 2


    const domElement = document.createElement(reactEle.type);
    domElement.innerHTML = reactEle.children;
    for(let prop in reactEle.props){
        if(prop==='children'){
            continue;
        }
        domElement.setAttribute(prop, reactEle.props[prop]);
    }
    container.appendChild(domElement);
}
const reactEle = {
  type: "a",
  props: {
    href: "https://www.google.com",
    targe: "_blank",
  },
  children: "Click me to visit google",
};
customRender(reactEle, maincontainer);
