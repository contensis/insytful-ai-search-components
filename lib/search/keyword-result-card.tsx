import React from 'react';

type ResultCardProps = {
  title: string;
  url: string;
  /** HTML: only `<mark>`, already escaped by the API. */
  snippet: string;
  /** Shown as given; omitted when empty. */
  date: string;
  image?: string;
  /** Heading level of the title. Defaults to 3. */
  hLevel?: number;
}

export const ResultsCard = ({ title, url, date, snippet, image, hLevel = 3 }: ResultCardProps) => {
  const Heading = `h${hLevel}` as keyof React.JSX.IntrinsicElements;
  return (
    <article className="insytful-search-result-card" data-has-image={Boolean(image) || undefined}>
      {image && <img className="insytful-search-result-card-image" src={image} alt="" />}
      <div className="insytful-search-result-card-body">
        <Heading className="insytful-search-result-card-title">
          <a className="insytful-search-result-card-link" href={url}>
            {title}
          </a>
        </Heading>
        {date && <p className="insytful-search-result-card-date">{date}</p>}
        <p
          className="insytful-search-result-card-snippet"
          dangerouslySetInnerHTML={{ __html: snippet }}
        />
      </div>
    </article>
  )
}
