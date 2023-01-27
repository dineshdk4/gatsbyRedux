// const path = require("path");

// const createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const pagePage = path.resolve("./src/templates/page.js");

//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//           edges {
//             node {
//               id
//               frontmatter {
//                 title
//                 tags
//                 categories
//                 template
//               }
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `
//   );

//   if (result.errors) {
//     throw result.errors;
//   }

//   const all = result.data.allMarkdownRemark.edges;
//   const pages = all.filter((post) => post.node.frontmatter.template === "page");

//   // =====================================================================================
//   // Pages
//   // =====================================================================================

//   pages.forEach((page) => {
//     createPage({
//       path: page.node.fields.slug,
//       component: pagePage,
//       context: {
//         slug: page.node.fields.slug,
//       },
//     });
//   });
// };

// const createNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   // =====================================================================================
//   // Slugs
//   // =====================================================================================

//   let slug;
//   if (node.internal.type === "MarkdownRemark") {
//     const fileNode = getNode(node.parent);
//     const parsedFilePath = path.parse(fileNode.relativePath);

//     if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
//       slug = `/${node.frontmatter.slug}/`;
//     } else {
//       slug = `/${parsedFilePath.dir}/`;
//     }

//     createNodeField({
//       name: "slug",
//       node,
//       value: slug,
//     });
//   }
// };

// exports.createPages = createPages;
// exports.onCreateNode = createNode;
