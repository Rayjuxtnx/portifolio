
import { blogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found"
    }
  }

  return {
    title: `${post.title} | PO FOLIO`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <Button variant="ghost" size="sm" asChild className="mb-4 w-fit p-0 h-auto">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>
            <div className="relative w-full h-64 md:h-80 mb-6">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                data-ai-hint={post.imageHint}
              />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl">{post.title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                     <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                      </time>
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <div 
                className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
             />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
      slug: post.slug,
    }));
}
