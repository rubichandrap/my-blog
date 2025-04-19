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
import { getFeaturedPosts } from "@/lib/blog";

export default function FeaturedPosts() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
      {featuredPosts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
          <Card className="h-full overflow-hidden transition-all hover:shadow-md">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 text-xs">
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
            <CardContent className="p-4 pt-0">
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
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
          </Card>
        </Link>
      ))}
    </div>
  );
}
