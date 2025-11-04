
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <section id="blog" className="w-full flex-1 py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Insights & Articles
            </h2>
            <p className="text-muted-foreground mt-2">
                Thoughts on technology, marketing, and business growth.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      data-ai-hint={post.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline">{post.title}</CardTitle>
                    <CardDescription>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                      </time>
                      {' '}by {post.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{post.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto text-sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
