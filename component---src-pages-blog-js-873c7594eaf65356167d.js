"use strict";(self.webpackChunkgatsby_universal=self.webpackChunkgatsby_universal||[]).push([[7],{9359:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(1721),a=n(7294),s=n(2919),i=n(1597),l=function(e){var t=e.post;return a.createElement("div",{className:"PostLink"},a.createElement("span",{className:"PostLink__LinkWrapper"},a.createElement(i.rU,{className:"PostLink__Link",to:t.fields.slug},a.createElement("div",{className:"PostLink__Title"},t.frontmatter.title),a.createElement("div",{className:"PostLink__Excerpt"},"false"!==t.frontmatter.excerpt?t.frontmatter.excerpt||t.excerpt:""))))},o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={query:""},n.handleChange=n.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}(0,r.Z)(t,e);var n=t.prototype;return n.handleChange=function(e){this.setState({query:e.target.value})},n.filter=function(e){return!this.state.query||(e.node.frontmatter.title.toLowerCase().indexOf(this.state.query.toLowerCase())>=0||e.node.frontmatter.excerpt.toLowerCase().indexOf(this.state.query.toLowerCase())>=0)},n.render=function(){var e=this,t=this.props.data.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).filter((function(t){return e.filter(t)})).map((function(e){return a.createElement(l,{key:e.node.id,post:e.node})}));return a.createElement(s.Z,{colour:"millennial"},a.createElement("div",{className:"Blog"},a.createElement("div",{className:"Blog__SearchWrapper"},a.createElement("input",{className:"Blog__Search",type:"text",placeholder:"Filter ",value:this.state.query,onChange:this.handleChange})),a.createElement("div",{className:"Blog__Posts"},t)))},t}(a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-js-873c7594eaf65356167d.js.map