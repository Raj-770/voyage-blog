import axios from "axios";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getAllPosts = await axios({
  method: "POST",
  url: graphqlAPI,
  headers: {
    "content-type": "application/json",
  },
  data: {
    query: `query MyQuery {
      posts(skip: 5, orderBy: createdAt_DESC) {
        author {
          name
        }
        categories {
          name
        }
        featuredImage {
          url
        }
        slug
        title
        excerpt
      }
    }    
    `,
  },
});

export const getTopStories = await axios({
  method: "POST",
  url: graphqlAPI,
  headers: {
    "content-type": "application/json",
  },
  data: {
    query: `query MyQuery {
        posts(orderBy: createdAt_ASC, last: 5) {
          author {
            name
          }
          categories {
            name
          }
          featuredImage {
            url
          }
          slug
          title
        }
      }`,
  },
});

export const getPostBySlug = async () => {};
