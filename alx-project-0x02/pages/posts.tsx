import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
posts: PostProps[];
}

const Posts = ({ posts }: PostsPageProps) => {
return ( <div className="min-h-screen bg-background"> <Header />

```
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {/* Page Header */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Blog Posts
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Explore a collection of posts fetched from JSONPlaceholder API,
        demonstrating real-world data integration.
      </p>
    </div>

    {/* Posts Grid */}
    <div className="mb-6 text-center">
      <p className="text-muted-foreground">Showing {posts.length} posts</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  </main>
</div>
```

);
};

export default Posts;

export async function getStaticProps() {
const response = await fetch("[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)");
const posts = await response.json();

return {
props: {
posts,
},
};
}
