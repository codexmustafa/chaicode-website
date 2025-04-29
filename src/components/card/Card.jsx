import { useEffect } from "react";

const Card = ({ embedHtml }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('charset', 'utf-8');
    document.body.appendChild(script);
  }, []);

  return (
    <div className="border w-fit p-4 max-w-md bg-gray-700 text-white rounded-xl">
      <div className="flex flex-col items-center">
        <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
      </div>
    </div>
  );
};

export default Card