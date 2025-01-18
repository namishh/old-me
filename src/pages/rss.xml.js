import rss from '@astrojs/rss';

export async function GET(context) {
    const blogPosts = import.meta.glob('../blog/*.{md,mdx}', { eager: true });
    const poems = import.meta.glob('../poems/*.{md,mdx}', { eager: true });

    const createRssItems = (posts, type) => {
        return Object.entries(posts).map(([path, post]) => {
            const dateStr = post.frontmatter.date;
            const pubDate = new Date(dateStr);
            
            return {
                link: post.url,
                title: post.frontmatter.title,
                description: post.frontmatter.description,
                pubDate,
                author: post.frontmatter.author,
                categories: post.frontmatter.category ? [post.frontmatter.category] : undefined,
            };
        });
    };

    const blogItems = createRssItems(blogPosts, 'blog');
    const poemItems = createRssItems(poems, 'poem');

    const allItems = [...blogItems, ...poemItems]
        .filter(item => item.pubDate && !isNaN(item.pubDate))
        .filter(item => !item.frontmatter?.draft)
        .sort((a, b) => b.pubDate - a.pubDate);

    return rss({
        title: 'Nam\'s Blog',
        description: 'A techonology and personal yap place',
        site: context.site,
        items: allItems,
        customData: `<language>en-us</language>`,
    });
}