import React from 'react';
import Card from '../card/Card';

const TweetCards = () => {
  const tweetEmbeds = [
    `
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">Just got this awesome coding tshirt from chai code.<br>Thank you so much for the thoughtful gift!</p>
      &mdash; Sourav Mohanta (@Sourav44281219) 
      <a href="https://twitter.com/Sourav44281219/status/1909895441266655398">April 9, 2025</a>
    </blockquote>
    `,
    `
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">Loved this video by @Hiteshdotcom from chai aur code.<br>Underrated topic! Always research before committing to a field.</p>
      &mdash; Lav (@ilavanyajain) 
      <a href="https://twitter.com/ilavanyajain/status/1916580760963731486">April 27, 2025</a>
    </blockquote>
    `,
    `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Completed the UI for the AI chat in chai-docs<a href="https://t.co/OQGyf0CEtL">https://t.co/OQGyf0CEtL</a><br>It helps users quickly find relevant content from massive documentation<br>Thank you <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">@Hiteshdotcom</a> and <a href="https://twitter.com/piyushgarg_dev?ref_src=twsrc%5Etfw">@piyushgarg_dev</a> for the support<a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">#buildinpublic</a> <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a> <a href="https://twitter.com/hashtag/DCvsRCB?src=hash&amp;ref_src=twsrc%5Etfw">#DCvsRCB</a> <a href="https://twitter.com/hashtag/Kohli?src=hash&amp;ref_src=twsrc%5Etfw">#Kohli</a> <a href="https://twitter.com/hashtag/Liverpool?src=hash&amp;ref_src=twsrc%5Etfw">#Liverpool</a> <a href="https://twitter.com/hashtag/Hobi?src=hash&amp;ref_src=twsrc%5Etfw">#Hobi</a> <a href="https://twitter.com/hashtag/ChatGPT?src=hash&amp;ref_src=twsrc%5Etfw">#ChatGPT</a> <a href="https://t.co/cRea5MIJHH">pic.twitter.com/cRea5MIJHH</a></p>&mdash; Gautam Mahato (@Gautamk104) <a href="https://twitter.com/Gautamk104/status/1916551318828699811?ref_src=twsrc%5Etfw">April 27, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,

    `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Completed the UI for the AI chat in chai-docs<a href="https://t.co/OQGyf0CEtL">https://t.co/OQGyf0CEtL</a><br>It helps users quickly find relevant content from massive documentation<br>Thank you <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">@Hiteshdotcom</a> and <a href="https://twitter.com/piyushgarg_dev?ref_src=twsrc%5Etfw">@piyushgarg_dev</a> for the support<a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">#buildinpublic</a> <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a> <a href="https://twitter.com/hashtag/DCvsRCB?src=hash&amp;ref_src=twsrc%5Etfw">#DCvsRCB</a> <a href="https://twitter.com/hashtag/Kohli?src=hash&amp;ref_src=twsrc%5Etfw">#Kohli</a> <a href="https://twitter.com/hashtag/Liverpool?src=hash&amp;ref_src=twsrc%5Etfw">#Liverpool</a> <a href="https://twitter.com/hashtag/Hobi?src=hash&amp;ref_src=twsrc%5Etfw">#Hobi</a> <a href="https://twitter.com/hashtag/ChatGPT?src=hash&amp;ref_src=twsrc%5Etfw">#ChatGPT</a> <a href="https://t.co/cRea5MIJHH">pic.twitter.com/cRea5MIJHH</a></p>&mdash; Gautam Mahato (@Gautamk104) <a href="https://twitter.com/Gautamk104/status/1916551318828699811?ref_src=twsrc%5Etfw">April 27, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
    // Add tweets here by using embed tag inside ` EmbededCode ` 
  ];

  return (
    <div className="text-center text-white items-center justify-center bg-[#101828] w-full h-full py-8 overflow-hidden">
      <div className='flex flex-col gap-2 items-center lg'>
        <div className="text-orange-500 text-2xl font-medium mb-2">Tweet Love</div>
        <div className="mb-6 lg:text-4xl text-xl min-w-[300px] lg:w-full text-center  font-medium">Love that we get from our community</div>
      </div>
      <div className="flex px-10 gap-4 flex-row lg:flex-wrap lg:justify-center lg:gap-6">
        {tweetEmbeds.map((embedHtml, index) => (
          <Card key={index} embedHtml={embedHtml} />
        ))}
      </div>
    </div>
  );
};

export default TweetCards;
