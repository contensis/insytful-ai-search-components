export default `
  /* Headings */
  .insytful-search-message-content h1 {
    font-size: 2rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    line-height: 2.4rem;
    color: #1a202c;
    margin-bottom: 1rem;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }

  .insytful-search-message-content h2 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;
    color: #2d3748;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .insytful-search-message-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.75rem;
    color: #4a5568;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  /* Paragraphs */
  .insytful-search-message-content p {
    margin-bottom: 1rem;
    line-height: 1.75;
    color: #2d3748;
  }

  /* Links */
  .insytful-search-message-content a {
    color: #3182ce;
    text-decoration: underline;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .insytful-search-message-content a:hover {
    color: #2c5282;
    text-decoration: none;
  }

  /* Lists */
  .insytful-search-message-content ul {
    list-style-type: disc;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  .insytful-search-message-content ol {
    list-style-type: decimal;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  .insytful-search-message-content li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    padding-left: 0.25rem;
  }

  /* Strong and emphasis */
  .insytful-search-message-content strong {
    font-weight: 700;
    color: #1a202c;
  }

  .insytful-search-message-content em {
    font-style: italic;
    color: #4a5568;
  }

  /* Inline code */
  .insytful-search-message-content code {
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    padding: 0.125rem 0.375rem;
    font-family: 'Courier New', monospace;
    font-size: 0.875em;
    color: #e53e3e;
  }

  /* Code blocks */
  .insytful-search-message-content pre {
    background-color: #2d3748;
    color: #e2e8f0;
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;
    margin-bottom: 1rem;
  }

  .insytful-search-message-content pre code {
    background: transparent;
    border: none;
    color: #e2e8f0;
    padding: 0;
  }

  /* Blockquotes */
  .insytful-search-message-content blockquote {
    border-left: 4px solid #4299e1;
    padding-left: 1rem;
    margin: 1rem 0;
    font-style: italic;
    color: #4a5568;
    background-color: #f7fafc;
    padding: 0.75rem 1rem;
    border-radius: 0 4px 4px 0;
  }

  .insytful-search-message-content blockquote p {
    margin: 0;
  }

  /* Responsive adjustments */
  @media only screen and (min-width: 1024px) {
    .insytful-search-message-content h1 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
    
    .insytful-search-message-content h2 {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  }
`