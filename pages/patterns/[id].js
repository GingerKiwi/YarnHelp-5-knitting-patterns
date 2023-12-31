import { Client } from "@notionhq/client";

const Pattern = () => {
  return <h1>Pattern List</h1>;
};

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });
  const paths = [];

  data.results.forEach((result) => {
    if(result.type === "child_page"){
      paths.push({
        params: {
          id: result.id,
        },
      });
    }
  });
  return {
    paths,
    fallback:false,
  }
};

export const getStaticProps = async () => {
  // fetch details for knitting patterns
}

export default Pattern;



// --------------------------

// import { Client } from "@notionhq/client";

// const Pattern = ({ pattern }) => {
//   return <pre>{JSON.stringify(pattern, null, 2)}</pre>;
// };

// export const getStaticPaths = async () => {
//   const notion = new Client({
//     auth: process.env.NOTION_SECRET,
//   });

//   const data = await notion.blocks.children.list({
//     block_id: process.env.PAGE_ID,
//   });

//   const paths = [];

//       data.results.forEach((result) => {
//         if (result.type === "child_page") {
//           paths.push({
//             params: {
//               id: result.id,
//             },
//           });
//         }
//       });
      
//       return {
//         paths,
//         fallback: false,
//       };
// };

// export const getStaticProps = async ({ params: {id}}) => {
//     //fetch details for knitting patterns
//     const notion = new Client ({
//         auth: process.env.NOTION_SECRET,
//     });

//     const page = notion.pages.retrieve({
//         page_id: await id
//     })

//     const blocks = await notion.blocks.children.list({
//         block_id: await id,
//     });
    
//     const title = page.properties.title.title[0].plain_text;
//     const supplies = [];
//     const instructions = [];

//     blocks.results.forEach((block) => {
//         if (block.type === "bulleted_list_item") {
//             method.push(block.bulleted_list_item.text[0].plain_text);
//         }
//         if (block.type === "numbered_list_item") {
//             method.push(block.numbered_list_item.text[0].plain_text);
//         }
//     });


//     return {
//         props: {
//             patterns: {
//             title,
//             supplies,
//             instructions,
//             },
//         },
//     };
// };

// export default Pattern;