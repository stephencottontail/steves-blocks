/* eslint-disable prettier/prettier */
import { Fragment, useMemo, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

const useHeadings = () => {
  const allBlocks = useSelect((select) =>
    select("core/block-editor").getBlocks()
  );
  const headings = allBlocks.filter((block) => {
    return "core/heading" === block.name;
  });
};

export default function Edit({ attributes, setAttributes }) {
  const { list } = attributes;
  const headings = useHeadings();

  useEffect(() => {
    console.log("we made it");
    setAttributes({ list: headings });
  }, [headings, setAttributes]);

  return (
    <Fragment>
      <p>Hi</p>
      {/*headers && headers.map((el, idx) => <p>{idx.toString()}</p>)); */}
    </Fragment>
  );
}
