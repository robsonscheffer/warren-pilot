import"react";import e from"prop-types";import t from"styled-components";import{space as o,fontSize as r,fontStyle as i,color as n,size as s,colorStyle as a,textStyle as d,lineHeight as l,letterSpacing as c,fontFamily as p,fontWeight as g,borderRadius as m,display as u,textAlign as y,gridColumn as f,system as $}from"styled-system";let b;const z=t.button(b||(b=(e=>e)`
  background: transparent;
  cursor: pointer;
  min-width: 0;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  height: ${0};
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.03125rem;
  white-space: nowrap;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);

  &.primary {
    background-color: ${0};
    color: ${0};
  }

  &.secondary {
    background-color: ${0};
    color: ${0};
  }

  &:hover {
    transform: scale(1.05);
    opacity: 0.7;
  }

  ${0}

  border-radius: ${0};
`),e=>e.theme.buttonSizes[e.size]||e.size,e=>e.theme.colors.primary,e=>e.theme.colors.text.inverse,e=>e.theme.colors.secondary,e=>e.theme.colors.text.body,e=>e.disabled&&"\n      opacity: 0.7;\n      cursor: click;\n      &:hover {\n        transform: scale(1.05);\n      }\n  ",e=>e.rounded&&"100px"),x=({variant:e,children:t,...o})=>h(z,Object.assign({},o,{className:e}),t);let q;x.defaultProps={variant:"primary",size:"medium",rounded:!0,disabled:!1},x.propTypes={variant:e.oneOf(["primary","secondary"]),size:e.oneOf(["small","medium","large"]),rounded:e.bool,disabled:e.bool};const R=t.div(q||(q=(e=>e)`
  margin: 0;
  padding: 0;
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
`),o,r,i,n,s,a,d,l,c,p,g,m,u,y,f,$({textDecoration:!0})),T=({tag:e,children:t,...o})=>{const r=R.withComponent(e);return h(r,o,t)};T.defaultProps={tag:"div"},T.propTypes={tag:e.string,children:e.node.isRequired};const v=({children:e,...t})=>h(T,Object.assign({fontSize:"large",fontWeight:"700",lineHeight:"large"},t),e);v.propTypes={tag:e.string.isRequired,children:e.node.isRequired};const H=({children:e,...t})=>h(T,Object.assign({fontSize:"medium",fontWeight:"700",lineHeight:"medium"},t),e);H.propTypes={tag:e.string.isRequired,children:e.node.isRequired};const O=({children:e,...t})=>h(T,Object.assign({fontSize:"small",fontWeight:"700",lineHeight:"small"},t),e);O.propTypes={tag:e.string.isRequired,children:e.node.isRequired};const S=({children:e,...t})=>h(T,Object.assign({color:"textBody",fontWeight:"normal",fontSize:"medium",lineHeight:"medium"},t),e);S.defaultProps={tag:"p"},S.propTypes={tag:e.string,children:e.node.isRequired};const j=({children:e,...t})=>h(T,Object.assign({color:"textBody",fontWeight:"normal",fontSize:"small",lineHeight:"small"},t),e);j.defaultProps={tag:"p"},j.propTypes={tag:e.string,children:e.node.isRequired};const w={Button:x,Typography:{__proto__:null,HeadingL:v,HeadingM:H,HeadingS:O,Text:S,Footnote:j}};module.exports=w;export{w as Atoms};
//# sourceMappingURL=index.modern.js.map
