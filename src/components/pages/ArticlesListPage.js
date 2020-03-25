import React from 'react';
import ArticlesList from '../Forms/ArticlesList';
import articleContent from './Data/article-content';

const ArticlesListPage = () => (
    <>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
    </>
);

export default ArticlesListPage;