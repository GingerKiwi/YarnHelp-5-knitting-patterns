import { Client } from "@notionhq/client";
import Link from "next/link";

const PatternsPage = ({ patterns }) => {
  return patterns.map((pattern) => 
  <p key={pattern.id}>
    <Link href={`/patterns/${pattern.id}`}>
        {pattern.title}
    </Link>
  </p>);
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const patterns = [];

  data.results.forEach((result) => {
    if (result.type === "child_page") {
      patterns.push({
            id: result.id,
            title: result.child_page.title,
        });
    }
  });

  return {
    props: {
      patterns,
    },
  };
};

export default PatternsPage;