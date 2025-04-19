import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";

export default function BlogList() {
  const posts = getAllBlogPosts();

  return (
    <div className="grid gap-8">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-4">
                <CardHeader className="p-0 pb-2">
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-xs mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min read
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 py-2 flex-grow">
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-0 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-normal text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
